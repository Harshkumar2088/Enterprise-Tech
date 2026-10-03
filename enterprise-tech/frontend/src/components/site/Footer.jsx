import { Linkedin, Instagram } from "lucide-react";
import { NAV } from "../../data/content";
import { scrollToId } from "../../lib/scroll";
import { Logo } from "./Logo";

const XIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.9 2H22l-7.6 8.7L23 22h-6.8l-5.3-6.9L4.8 22H1.7l8.1-9.3L1 2h7l4.8 6.3L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z" /></svg>
);

const SOCIAL = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/enterprise-tech" },
  { label: "X", icon: XIcon, href: "https://x.com/" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/" },
];

export const Footer = () => (
  <footer data-testid="site-footer" className="relative overflow-hidden border-t border-white/10 bg-[#05070B] pt-20">
    <div className="mx-auto grid max-w-[1400px] gap-12 px-5 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-10">
      <div>
        <Logo testId="footer-logo" />
        <p className="mt-5 max-w-sm text-slate-300">Empowering Enterprises with Technology</p>
        <div className="mt-8 flex gap-3">
          {SOCIAL.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} data-testid={`footer-social-${s.label.toLowerCase()}`} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition-[background-color,color,transform] duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#05070B]">
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">Company</p>
        <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
          {NAV.slice(1).map((n) => (
            <li key={n.id}><button data-testid={`footer-link-${n.id}`} onClick={() => scrollToId(n.id)} className="text-sm text-slate-300 transition-colors hover:text-white">{n.label}</button></li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">Get in touch</p>
        <p className="mt-5 text-sm text-slate-300">hello@enterprisetech.example</p>
        <p className="mt-2 text-sm text-slate-300">+00 000 000 0000</p>
        <button data-testid="footer-contact-button" onClick={() => scrollToId("contact")} className="mt-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#05070B] transition-colors hover:bg-cyan-200">Start a project</button>
      </div>
    </div>
    <p aria-hidden="true" className="mt-16 select-none whitespace-nowrap text-center font-display text-[15vw] font-extrabold leading-[0.8] tracking-[-0.05em] text-white/[0.04]">ENTERPRISE TECH</p>
    <div className="border-t border-white/10">
      <p data-testid="footer-copyright" className="mx-auto max-w-[1400px] px-5 py-6 text-xs text-slate-400 lg:px-10">© 2026 Enterprise Tech. All Rights Reserved.</p>
    </div>
  </footer>
);
