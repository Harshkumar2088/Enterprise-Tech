import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../../data/content";
import { SectionHead } from "./Reveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";

const Row = ({ label, text }) => (
  <div>
    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300">{label}</p>
    <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{text}</p>
  </div>
);

export const Projects = () => {
  const [active, setActive] = useState(null);
  return (
    <section id="projects" data-testid="projects-section" className="relative border-t border-white/5 bg-[#080B12] py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHead id="projects" eyebrow="07 — Projects" title="Our Work" sub="Selected case studies (placeholders — replace with your real engagements)." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {PROJECTS.map((p, i) => (
            <motion.article key={p.name} data-testid={`project-card-${i + 1}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: (i % 2) * 0.1 }} className={`group flex flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[#0B1018] ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"} ${i === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={p.image} alt={p.category} className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1018] to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/50 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-white backdrop-blur">{p.category}</span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-7">
                <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
                <Row label="Business Challenge" text={p.challenge} />
                <Row label="Technology Solution" text={p.solution} />
                <Row label="Business Impact" text={p.impact} />
                <button data-testid={`project-view-case-study-${i + 1}`} onClick={() => setActive(p)} className="mt-auto flex w-fit items-center gap-2 pt-2 text-sm font-semibold text-white">
                  <span className="border-b border-cyan-300/60 pb-0.5 transition-colors group-hover:text-cyan-200">View Case Study</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent data-testid="case-study-dialog" data-lenis-prevent className="max-h-[90vh] max-w-2xl overflow-y-auto border-white/10 bg-[#0B1220] p-0 text-white">
          {active && <img src={active.image} alt={active.category} className="aspect-[16/7] w-full object-cover" />}
          <div className="space-y-5 p-7">
            <DialogHeader>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">{active?.category}</p>
              <DialogTitle className="font-display text-2xl">{active?.name}</DialogTitle>
              <DialogDescription className="text-slate-400">Full case study placeholder — replace with project details, metrics and client quote.</DialogDescription>
            </DialogHeader>
            <Row label="Business Challenge" text={active?.challenge} />
            <Row label="Technology Solution" text={active?.solution} />
            <Row label="Business Impact" text={active?.impact} />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
