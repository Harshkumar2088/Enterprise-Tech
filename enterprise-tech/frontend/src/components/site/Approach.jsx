import { motion } from "framer-motion";
import { STEPS } from "../../data/content";
import { SectionHead } from "./Reveal";

export const Approach = () => (
  <section id="approach" data-testid="approach-section" className="relative overflow-hidden border-y border-white/5 bg-[#080B12] py-24 lg:py-36">
    <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
      <SectionHead id="approach" eyebrow="05 — Our Approach" title="From Idea to Impact" />
      <div className="relative mt-16">
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-500 lg:block" />
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
          {STEPS.map((s, i) => (
            <motion.div key={s.title} data-testid={`approach-step-${i + 1}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }} className="group relative flex gap-5 lg:block">
              <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-cyan-300/40 bg-[#06080D] font-mono text-sm text-cyan-300 transition-colors duration-300 group-hover:bg-cyan-300 group-hover:text-[#06080D]">0{i + 1}</span>
              <div>
                <h3 className="font-display text-3xl font-bold tracking-tight text-white lg:mt-8">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
