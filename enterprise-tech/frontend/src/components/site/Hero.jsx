import { useRef } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { scrollToId } from "../../lib/scroll";
import { HeroVisual } from "./HeroVisual";

const LINES = [
  { text: "Empowering", cls: "text-white" },
  { text: "Enterprises", cls: "text-gradient" },
  { text: "with Technology", cls: "text-white" },
];
const ease = [0.22, 1, 0.36, 1];

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 80, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 80, damping: 18 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section id="home" ref={ref} onMouseMove={onMove} data-testid="hero-section" className="relative overflow-hidden pt-28 lg:min-h-[100svh] lg:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-5 pb-20 lg:grid-cols-[1.15fr_1fr] lg:px-10">
        <motion.div style={{ y: yText }}>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" /> Digital Transformation Partner
          </motion.p>
          <h1 data-testid="hero-headline" className="mt-7 font-display text-[2.9rem] font-extrabold leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
            {LINES.map((l, i) => (
              <span key={l.text} className="block overflow-hidden pb-[0.08em]">
                <motion.span className={`block ${l.cls}`} initial={{ y: "105%" }} animate={{ y: "0%" }} transition={{ duration: 1.1, delay: 0.15 + i * 0.13, ease }}>
                  {l.text}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7, ease }} data-testid="hero-subheadline" className="mt-8 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            We transform business challenges into intelligent, scalable, and impactful technology solutions that help enterprises innovate, optimize, and grow.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.85, ease }} className="mt-10 flex flex-wrap gap-4">
            <button data-testid="hero-explore-services-button" onClick={() => scrollToId("services")} className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(34,211,238,0.6)] transition-transform duration-300 hover:-translate-y-0.5">
              Explore Our Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button data-testid="hero-talk-to-us-button" onClick={() => scrollToId("contact")} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition-[background-color,border-color] duration-300 hover:border-cyan-300/50 hover:bg-white/[0.07]">
              <MessageCircle className="h-4 w-4" /> Talk to Us
            </button>
          </motion.div>
        </motion.div>
        <HeroVisual rx={rx} ry={ry} />
      </div>
    </section>
  );
};
