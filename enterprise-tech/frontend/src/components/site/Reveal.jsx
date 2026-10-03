import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHead = ({ eyebrow, title, sub, align = "left", id }) => (
  <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
    <h2 data-testid={id ? `${id}-heading` : undefined} className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {sub && <p className="mt-5 text-base text-slate-300 md:text-lg">{sub}</p>}
  </Reveal>
);
