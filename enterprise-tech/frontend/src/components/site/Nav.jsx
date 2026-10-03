import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV } from "../../data/content";
import { scrollToId } from "../../lib/scroll";
import { Logo } from "./Logo";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header data-testid="site-nav" className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${scrolled || open ? "border-b border-white/10 bg-[#06080D]/80 backdrop-blur-xl" : "border-b border-transparent"}`}>
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 lg:px-10">
        <button onClick={() => go("home")} data-testid="nav-logo-button" aria-label="Home"><Logo /></button>
        <nav className="hidden items-center gap-1 xl:flex">
          {NAV.map((n) => (
            <button key={n.id} data-testid={`nav-link-${n.id}`} onClick={() => go(n.id)} className="group relative px-3 py-2 text-sm text-slate-300 transition-colors hover:text-white">
              {n.label}
              <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-cyan-300 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button data-testid="nav-get-started-button" onClick={() => go("contact")} className="group hidden items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#06080D] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 sm:flex">
            Get Started <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </button>
          <button data-testid="nav-mobile-toggle" onClick={() => setOpen((o) => !o)} className="rounded-full border border-white/15 p-2.5 text-white xl:hidden" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav data-testid="nav-mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 xl:hidden">
            <div className="flex flex-col px-5 py-4">
              {NAV.map((n, i) => (
                <motion.button key={n.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }} data-testid={`mobile-nav-link-${n.id}`} onClick={() => go(n.id)} className="border-b border-white/5 py-3 text-left font-display text-2xl text-white">
                  {n.label}
                </motion.button>
              ))}
              <button data-testid="mobile-get-started-button" onClick={() => go("contact")} className="mt-5 rounded-full bg-white py-3 font-semibold text-[#06080D]">Get Started</button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
