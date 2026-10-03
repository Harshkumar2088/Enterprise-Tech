import { motion } from "framer-motion";
import { TECH } from "../../data/content";
import { SectionHead } from "./Reveal";

export const Tech = () => (
  <section id="technology" data-testid="tech-section" className="relative py-24 lg:py-36">
    <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
      <SectionHead id="tech" eyebrow="08 — Stack" title="Technology That Powers Innovation" align="center" />
      <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3 sm:gap-4">
        {TECH.map((t, i) => (
          <motion.span
            key={t}
            data-testid={`tech-badge-${i + 1}`}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="cursor-default rounded-full border border-white/10 bg-[#0B1018] px-6 py-3.5 font-display text-base font-medium text-white transition-[border-color,background-color] duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/10 sm:text-lg"
          >
            {t}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);
