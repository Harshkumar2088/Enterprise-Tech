import { motion } from "framer-motion";
import { BrainCircuit, Cloud, Database, ShieldCheck } from "lucide-react";

const NODES = [[60, 70], [200, 40], [330, 110], [110, 200], [260, 220], [380, 260], [70, 330], [210, 350], [340, 380]];
const EDGES = [[0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5], [3, 6], [4, 7], [5, 8], [6, 7], [7, 8], [1, 3], [4, 8]];
const CHIPS = [
  { icon: BrainCircuit, label: "AI Models", cls: "left-[-6%] top-[14%]", z: 70 },
  { icon: Cloud, label: "Cloud Native", cls: "right-[-5%] top-[30%]", z: 90 },
  { icon: Database, label: "Data Platform", cls: "left-[-4%] bottom-[30%]", z: 60 },
  { icon: ShieldCheck, label: "Secure by Design", cls: "right-[2%] bottom-[-3%]", z: 80 },
];

export const HeroVisual = ({ rx, ry }) => (
  <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-[540px] [perspective:1200px]" data-testid="hero-visual">
    <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="relative aspect-[1/1.05]">
      <div className="absolute inset-0 overflow-hidden rounded-[32px] border border-white/10 bg-[#0A1020] shadow-[0_40px_120px_-30px_rgba(37,99,235,0.55)]">
        <img src="/images/circuit.jpg" alt="Enterprise technology circuitry" className="h-full w-full object-cover opacity-40 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/40 via-transparent to-cyan-400/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_20%,#06080D_85%)]" />
        <svg viewBox="0 0 440 440" className="absolute inset-0 h-full w-full">
          {EDGES.map(([a, b], i) => (
            <motion.line key={i} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} stroke="url(#edge)" strokeWidth="1.2" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.6, delay: 0.6 + i * 0.07 }} />
          ))}
          {NODES.map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="10" fill="#22D3EE" opacity="0.12" className="node-pulse" style={{ animationDelay: `${i * 0.35}s` }} />
              <circle cx={x} cy={y} r="3.5" fill="#E0F2FE" />
            </g>
          ))}
          <defs>
            <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#3B82F6" stopOpacity="0.9" />
              <stop offset="1" stopColor="#22D3EE" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300">Live Ecosystem</p>
            <p className="mt-1 font-display text-2xl font-bold text-white">Connected. Intelligent.</p>
          </div>
          <div className="flex h-12 items-end gap-1">
            {[40, 65, 50, 80, 70, 95].map((h, i) => (
              <span key={i} className="bar-grow w-1.5 rounded-full bg-gradient-to-t from-blue-500 to-cyan-300" style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      </div>
      {CHIPS.map((c, i) => (
        <motion.div key={c.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 + i * 0.12, duration: 0.7 }} style={{ transform: `translateZ(${c.z}px)` }} className={`absolute ${c.cls} hidden sm:block`}>
          <div className="float-y flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#0B1220]/80 px-4 py-3 backdrop-blur-xl" style={{ animationDelay: `${i * 0.8}s` }}>
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400"><c.icon className="h-4 w-4 text-white" /></span>
            <span className="text-sm font-medium text-white">{c.label}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);
