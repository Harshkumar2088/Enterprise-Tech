import {
  BarChart3, BrainCircuit, Code2, Cloud, Workflow, Network, Factory, ShoppingBag,
  HeartPulse, Landmark, Truck, Cpu, Briefcase, Target, Sparkles, TrendingUp,
  LineChart, Handshake,
} from "lucide-react";

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "solutions", label: "Solutions" },
  { id: "industries", label: "Industries" },
  { id: "projects", label: "Projects" },
  { id: "careers", label: "Careers" },
  { id: "contact", label: "Contact" },
];

export const SERVICES = [
  { icon: BarChart3, title: "Data & Analytics", text: "Turn enterprise data into meaningful insights through analytics, dashboards, reporting, and business intelligence." },
  { icon: BrainCircuit, title: "AI & Automation", text: "Leverage artificial intelligence and automation to improve efficiency, accelerate decision-making, and build intelligent business solutions." },
  { icon: Code2, title: "Software Development", text: "Build reliable, scalable, secure, and customized software applications designed around enterprise requirements." },
  { icon: Cloud, title: "Cloud Solutions", text: "Modernize applications, infrastructure, and business operations using scalable and secure cloud technologies." },
  { icon: Workflow, title: "Digital Transformation", text: "Modernize business processes, systems, and workflows through technology-driven transformation." },
  { icon: Network, title: "System Integration", text: "Connect applications, platforms, APIs, and enterprise systems to create seamless digital ecosystems." },
];

export const SOLUTIONS = [
  { title: "Data-Driven Decision Making", text: "Unified data platforms and executive dashboards that put trusted numbers in front of every decision-maker.", points: ["Enterprise data warehouse & lakehouse design", "KPI frameworks and executive dashboards", "Self-service BI for business teams"] },
  { title: "Intelligent Automation", text: "Automate repetitive workflows end-to-end so your people can focus on high-value work.", points: ["Process discovery & automation roadmap", "Workflow and document automation", "Bots, triggers and exception handling"] },
  { title: "Enterprise Software", text: "Custom applications engineered for scale, security and the way your business actually works.", points: ["Web & mobile enterprise applications", "Secure, role-based architectures", "Modern UX for internal and customer tools"] },
  { title: "Cloud Modernization", text: "Move legacy workloads to resilient, cost-efficient cloud infrastructure without disrupting operations.", points: ["Cloud readiness assessment", "Migration & re-platforming", "Cost optimisation and governance"] },
  { title: "Digital Transformation", text: "Rethink processes, systems and customer journeys with a clear, phased transformation roadmap.", points: ["Current-state assessment", "Target operating model & roadmap", "Change management and adoption"] },
  { title: "AI-Powered Solutions", text: "Practical AI — forecasting, assistants and intelligent search — embedded directly into business workflows.", points: ["Predictive analytics & forecasting", "AI assistants and knowledge search", "Responsible AI and model governance"] },
];

export const INDUSTRIES = [
  { icon: Factory, title: "Manufacturing", text: "Smart operations, quality analytics and connected plants." },
  { icon: ShoppingBag, title: "Retail & Consumer Goods", text: "Demand insight, omnichannel and customer analytics." },
  { icon: HeartPulse, title: "Healthcare", text: "Secure data, patient workflows and operational efficiency." },
  { icon: Landmark, title: "Financial Services", text: "Risk analytics, reporting automation and compliance." },
  { icon: Truck, title: "Logistics & Supply Chain", text: "Visibility, route optimisation and inventory intelligence." },
  { icon: Cpu, title: "Technology", text: "Scalable platforms, integrations and product engineering." },
  { icon: Briefcase, title: "Professional Services", text: "Knowledge automation, delivery insight and client portals." },
];

export const STEPS = [
  { title: "Discover", text: "Understand the business challenge and identify opportunities." },
  { title: "Design", text: "Create a technology strategy aligned with business objectives." },
  { title: "Develop", text: "Build scalable, reliable, and secure solutions." },
  { title: "Deploy", text: "Implement and integrate the solution into the enterprise environment." },
  { title: "Scale", text: "Continuously improve and expand the solution as the business grows." },
];

export const WHY = [
  { icon: Target, title: "Business-Focused Technology", text: "Solutions aligned with real business objectives." },
  { icon: Sparkles, title: "Innovation", text: "Modern technologies designed to solve evolving enterprise challenges." },
  { icon: TrendingUp, title: "Scalability", text: "Solutions built to grow with your business." },
  { icon: LineChart, title: "Data-Driven Decisions", text: "Turn enterprise data into actionable insights." },
  { icon: Handshake, title: "Long-Term Partnership", text: "Support continuous improvement beyond implementation." },
];

export const PROJECTS = [
  { category: "Business Intelligence", name: "[Project Name] — Executive Insights Hub", image: "/images/datacenter.jpg", challenge: "Leadership relied on dozens of disconnected spreadsheets, delaying monthly reporting.", solution: "A centralised BI layer with automated pipelines and role-based Power BI dashboards.", impact: "[Placeholder] Reporting cycle reduced from weeks to hours." },
  { category: "Data Analytics", name: "[Project Name] — Demand Analytics Platform", image: "/images/circuit.jpg", challenge: "Inaccurate demand signals caused overstock in some regions and shortages in others.", solution: "Unified sales and inventory data with analytical models and region-level insights.", impact: "[Placeholder] Measurable improvement in inventory accuracy." },
  { category: "AI & Automation", name: "[Project Name] — Intelligent Document Flow", image: "/images/workspace.jpg", challenge: "Manual processing of invoices and forms consumed significant team capacity.", solution: "AI-assisted document extraction with automated validation and approval workflows.", impact: "[Placeholder] Majority of documents processed without manual touch." },
  { category: "Enterprise Applications", name: "[Project Name] — Operations Command Suite", image: "/images/meeting.jpg", challenge: "Field and office teams worked across legacy tools with no single source of truth.", solution: "A secure, role-based enterprise web application integrated with existing ERP.", impact: "[Placeholder] One platform replacing multiple legacy tools." },
  { category: "Digital Transformation", name: "[Project Name] — Cloud-First Modernization", image: "/images/team.jpg", challenge: "Ageing on-premise systems limited agility and increased maintenance costs.", solution: "Phased migration to cloud with modernised workflows and system integrations.", impact: "[Placeholder] Lower run costs and faster release cycles." },
];

export const TECH = ["Python", "SQL", "Power BI", "Cloud", "AI", "Machine Learning", "Data Analytics", "APIs", "Automation", "Enterprise Applications"];

export const ROLES = [
  { title: "Data Analytics Consultant", type: "Full-time", location: "[City] / Hybrid" },
  { title: "AI & Automation Engineer", type: "Full-time", location: "[City] / Remote" },
  { title: "Full-Stack Software Developer", type: "Full-time", location: "[City] / Hybrid" },
];

export const CONTACT = {
  email: "hello@enterprisetech.example",
  phone: "+00 000 000 0000",
  location: "[Your City, Country]",
  linkedin: "https://www.linkedin.com/company/enterprise-tech",
};
