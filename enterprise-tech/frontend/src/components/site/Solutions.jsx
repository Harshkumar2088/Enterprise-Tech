import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { SOLUTIONS } from "../../data/content";
import { SectionHead } from "./Reveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { scrollToId } from "../../lib/scroll";

export const Solutions = () => {
  const [active, setActive] = useState(null);
  return (
    <section id="solutions" data-testid="solutions-section" className="relative border-t border-white/5 bg-[#080B12] py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHead id="solutions" eyebrow="03 — Solutions" title="Solutions Built for Enterprise Growth" />
        <div className="mt-14 border-t border-white/10">
          {SOLUTIONS.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.05 * i }} className="group grid items-center gap-4 border-b border-white/10 py-8 md:grid-cols-[80px_1.1fr_1.4fr_auto] md:gap-8">
              <span className="font-mono text-sm text-cyan-300">0{i + 1}</span>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{s.text}</p>
              <button data-testid={`solution-learn-more-${i + 1}`} onClick={() => setActive(s)} className="flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-[background-color,color,border-color] duration-300 hover:border-transparent hover:bg-white hover:text-[#06080D]">
                Learn More <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent data-testid="solution-dialog" data-lenis-prevent className="max-w-lg border-white/10 bg-[#0B1220] text-white">
          <DialogHeader>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">Solution</p>
            <DialogTitle className="font-display text-2xl">{active?.title}</DialogTitle>
            <DialogDescription className="text-slate-300">{active?.text}</DialogDescription>
          </DialogHeader>
          <ul className="space-y-3">
            {(active?.points ?? []).map((p) => (
              <li key={p} className="flex gap-3 text-sm text-slate-200"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />{p}</li>
            ))}
          </ul>
          <button data-testid="solution-dialog-contact-button" onClick={() => { setActive(null); setTimeout(() => scrollToId("contact"), 200); }} className="mt-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-sm font-semibold">Discuss this solution</button>
        </DialogContent>
      </Dialog>
    </section>
  );
};
