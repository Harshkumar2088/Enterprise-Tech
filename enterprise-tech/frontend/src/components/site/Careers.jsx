import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { ROLES } from "../../data/content";
import { SectionHead } from "./Reveal";
import { scrollToId } from "../../lib/scroll";

export const Careers = () => (
  <section id="careers" data-testid="careers-section" className="relative border-t border-white/5 bg-[#080B12] py-24 lg:py-36">
    <div className="mx-auto grid max-w-[1400px] gap-12 px-5 lg:grid-cols-[1fr_1.4fr] lg:px-10">
      <SectionHead id="careers" eyebrow="09 — Careers" title="Build what's next with us" sub="We're always looking for curious engineers, analysts and consultants. Open roles below are placeholders." />
      <div className="border-t border-white/10">
        {ROLES.map((r, i) => (
          <motion.button key={r.title} data-testid={`career-role-${i + 1}`} onClick={() => scrollToId("contact")} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: i * 0.08 }} className="group flex w-full items-center justify-between gap-6 border-b border-white/10 py-7 text-left">
            <div>
              <h3 className="font-display text-xl font-semibold text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-2xl">{r.title}</h3>
              <p className="mt-2 flex items-center gap-3 text-sm text-slate-400"><span>{r.type}</span><span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{r.location}</span></p>
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 transition-[background-color,border-color] duration-300 group-hover:border-transparent group-hover:bg-cyan-300">
              <ArrowUpRight className="h-5 w-5 text-white transition-[transform,color] group-hover:rotate-45 group-hover:text-[#06080D]" />
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  </section>
);
