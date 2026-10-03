import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, SectionHead } from "./Reveal";

const STATS = [
  { k: "06", v: "Core service lines" },
  { k: "07", v: "Industries served" },
  { k: "05", v: "Step delivery model" },
];

export const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <section id="about" ref={ref} data-testid="about-section" className="relative py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <SectionHead id="about" eyebrow="01 — About Us" title="Technology With Purpose" />
          <Reveal delay={0.1} className="mt-8 space-y-5 text-base leading-relaxed text-slate-300 md:text-lg">
            <p>We are a technology-driven company focused on helping enterprises leverage modern technologies to solve complex business challenges.</p>
            <p>We combine business understanding, technology expertise, data, and innovation to create solutions that deliver measurable business value.</p>
            <p className="text-white">Our goal is to help enterprises become more connected, intelligent, efficient, and future-ready.</p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {STATS.map((s) => (
              <div key={s.v}>
                <p className="font-display text-4xl font-bold text-gradient sm:text-5xl">{s.k}</p>
                <p className="mt-2 text-xs text-slate-400 sm:text-sm">{s.v}</p>
              </div>
            ))}
          </Reveal>
        </div>
        <Reveal delay={0.1} className="relative">
          <div className="clip-frame relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10">
            <motion.img style={{ y, scale: 1.18 }} src="/images/team.jpg" alt="Enterprise technology team collaborating" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06080D] via-[#06080D]/20 to-transparent" />
          </div>
          <div id="mission" data-testid="mission-card" className="relative -mt-24 ml-auto w-[92%] rounded-3xl border border-cyan-300/20 bg-[#0B1220]/90 p-7 backdrop-blur-xl sm:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">Our Mission</p>
            <p className="mt-4 font-display text-xl font-medium leading-snug text-white sm:text-2xl">
              To empower enterprises with innovative technology solutions that simplify business processes, unlock the power of data, accelerate digital transformation, and create sustainable business value.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
