import { motion } from "framer-motion";
import { WHY } from "../../data/content";
import { SectionHead } from "./Reveal";

export const WhyUs = () => (
  <section id="why" data-testid="why-section" className="relative py-24 lg:py-36">
    <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHead id="why" eyebrow="06 — Why Us" title="Why Partner With Us" sub="A partner that measures success by business outcomes — not just deliverables." />
          <div className="clip-frame mt-10 hidden aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 lg:block">
            <img src="/images/meeting.jpg" alt="Strategy session" className="h-full w-full object-cover grayscale transition-[filter] duration-700 hover:grayscale-0" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {WHY.map((w, i) => (
            <motion.div key={w.title} data-testid={`why-card-${i + 1}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: (i % 2) * 0.1 }} whileHover={{ y: -5 }} className={`group rounded-3xl border border-white/10 bg-[#0B1018] p-8 transition-colors duration-500 hover:border-cyan-300/30 ${i === 4 ? "sm:col-span-2" : ""}`}>
              <w.icon className="h-7 w-7 text-cyan-300 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
              <h3 className="mt-8 font-display text-2xl font-semibold text-white">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{w.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
