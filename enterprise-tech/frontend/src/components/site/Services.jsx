import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../../data/content";
import { SectionHead } from "./Reveal";

const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4", "lg:col-span-12"];

const onMove = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export const Services = () => (
  <section id="services" data-testid="services-section" className="relative py-24 lg:py-36">
    <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
      <SectionHead id="services" eyebrow="02 — Services" title="What We Do" sub="Technology solutions designed to help modern enterprises transform, innovate, and grow." />
      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
        {SERVICES.map((s, i) => (
          <motion.article
            key={s.title}
            data-testid={`service-card-${i + 1}`}
            onMouseMove={onMove}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className={`spotlight group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[26px] border border-white/10 bg-[#0B1018] p-7 sm:p-9 ${SPANS[i]} ${i === 5 ? "md:col-span-2" : ""}`}
          >
            <div className="flex items-start justify-between">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/30 to-cyan-400/10 transition-colors duration-500 group-hover:from-blue-600 group-hover:to-cyan-400">
                <s.icon className="h-6 w-6 text-cyan-200 transition-colors group-hover:text-white" />
              </span>
              <span className="font-mono text-xs text-slate-400">0{i + 1}</span>
            </div>
            <div className={i === 5 ? "lg:flex lg:items-end lg:justify-between lg:gap-10" : ""}>
              <div>
                <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight text-white">{s.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">{s.text}</p>
              </div>
              <ArrowUpRight className="mt-6 h-6 w-6 shrink-0 text-slate-400 transition-[transform,color] duration-300 group-hover:rotate-45 group-hover:text-cyan-300" />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
