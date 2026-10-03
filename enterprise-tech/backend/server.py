from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, EmailStr, BeforeValidator, ConfigDict
from typing import Annotated, List, Optional
from datetime import datetime, timezone
from bson import ObjectId
from pathlib import Path
import os
import logging

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

client = AsyncIOMotorClient(os.environ['MONGO_URL'])
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

PyObjectId = Annotated[str, BeforeValidator(lambda v: str(v) if isinstance(v, ObjectId) else v)]


class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True)
    id: Optional[PyObjectId] = Field(default=None, alias="_id")

    def to_mongo(self) -> dict:
        data = self.model_dump(by_alias=True, exclude_none=True)
        data.pop("_id", None)
        return data

    @classmethod
    def from_mongo(cls, doc: dict):
        return cls.model_validate(doc)


class ContactIn(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    company: str = Field(default="", max_length=160)
    email: EmailStr
    phone: str = Field(default="", max_length=40)
    service: str = Field(min_length=1, max_length=80)
    message: str = Field(min_length=1, max_length=4000)


class ContactMessage(BaseDocument, ContactIn):
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@api_router.get("/")
async def root():
    return {"message": "Enterprise Tech API"}


@api_router.post("/contact", response_model=ContactMessage, response_model_by_alias=False)
async def create_contact(payload: ContactIn):
    msg = ContactMessage(**payload.model_dump())
    res = await db.contact_messages.insert_one(msg.to_mongo())
    msg.id = str(res.inserted_id)
    return msg


@api_router.get("/contact", response_model=List[ContactMessage], response_model_by_alias=False)
async def list_contacts():
    docs = await db.contact_messages.find().sort("created_at", -1).to_list(500)
    return [ContactMessage.from_mongo(d) for d in docs]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
