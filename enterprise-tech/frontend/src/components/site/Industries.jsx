import { motion } from "framer-motion";
import { INDUSTRIES } from "../../data/content";
import { SectionHead } from "./Reveal";

export const Industries = () => (
  <section id="industries" data-testid="industries-section" className="relative py-24 lg:py-36">
    <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
      <SectionHead id="industries" eyebrow="04 — Industries" title="Technology Across Industries" />
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {INDUSTRIES.map((ind, i) => (
          <motion.div
            key={ind.title}
            data-testid={`industry-card-${i + 1}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1018] p-7"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/0 blur-2xl transition-colors duration-500 group-hover:bg-cyan-400/25" />
            <ind.icon className="h-8 w-8 text-cyan-300" strokeWidth={1.5} />
            <h3 className="mt-8 font-display text-xl font-semibold text-white">{ind.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{ind.text}</p>
          </motion.div>
        ))}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-7">
          <p className="font-display text-xl font-semibold text-white">Don't see your industry?</p>
          <p className="mt-6 text-sm text-white/90">Our approach adapts to any enterprise environment. Let's talk about yours.</p>
        </motion.div>
      </div>
    </div>
  </section>
);
