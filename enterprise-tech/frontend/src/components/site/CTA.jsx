import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { scrollToId } from "../../lib/scroll";

export const CTA = () => (
  <section data-testid="cta-section" className="relative px-5 py-20 lg:px-10">
    <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0B2A6B] via-[#0A1630] to-[#06080D] px-7 py-20 sm:px-14 lg:py-28">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/25 blur-[120px]" />
      <div className="relative max-w-3xl">
        <h2 data-testid="cta-heading" className="font-display text-4xl font-extrabold leading-[1] tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl">Ready to Transform Your Enterprise?</h2>
        <p className="mt-6 max-w-xl text-base text-slate-200 md:text-lg">Let's turn your business challenges into intelligent technology solutions that create measurable and lasting impact.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button data-testid="cta-start-conversation-button" onClick={() => scrollToId("contact")} className="group flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#06080D] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-cyan-200">
            Start a Conversation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button data-testid="cta-contact-us-button" onClick={() => scrollToId("contact")} className="rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10">Contact Us</button>
        </div>
      </div>
    </motion.div>
  </section>
);
