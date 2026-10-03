import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Linkedin, Loader2, Send } from "lucide-react";
import { SERVICES, CONTACT } from "../../data/content";
import { SectionHead, Reveal } from "./Reveal";

const API = `${import.meta.env.VITE_BACKEND_URL || "http://localhost:8001"}/api`;
const EMPTY = { name: "", company: "", email: "", phone: "", service: "", message: "" };
const input = "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-[border-color,background-color] focus:border-cyan-300/60 focus:bg-white/[0.06]";

const INFO = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: CONTACT.location },
  { icon: Linkedin, label: "LinkedIn", value: "Enterprise Tech", href: CONTACT.linkedin },
];

export const Contact = () => {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent — we'll be in touch within one business day.");
      setForm(EMPTY);
    } catch (err) {
      toast.error("Could not send message. Please check your details and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-[1fr_1.3fr] lg:px-10">
        <div>
          <SectionHead id="contact" eyebrow="10 — Contact" title="Let's Build the Future Together" sub="Tell us about your challenge. Our team will respond within one business day." />
          <Reveal delay={0.1} className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {INFO.map((c) => {
              const Tag = c.href ? "a" : "div";
              return (
                <Tag key={c.label} href={c.href} target={c.label === "LinkedIn" ? "_blank" : undefined} rel="noreferrer" data-testid={`contact-info-${c.label.toLowerCase()}`} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0B1018] p-5 transition-colors hover:border-cyan-300/30">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-300/10"><c.icon className="h-5 w-5 text-cyan-300" /></span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">{c.label}</span>
                    <span className="block text-sm text-white">{c.value}</span>
                  </span>
                </Tag>
              );
            })}
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <form onSubmit={submit} data-testid="contact-form" className="rounded-[28px] border border-white/10 bg-[#0B1018] p-6 sm:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required className={input} placeholder="Name *" value={form.name} onChange={set("name")} data-testid="contact-name-input" />
              <input className={input} placeholder="Company" value={form.company} onChange={set("company")} data-testid="contact-company-input" />
              <input required type="email" className={input} placeholder="Email *" value={form.email} onChange={set("email")} data-testid="contact-email-input" />
              <input className={input} placeholder="Phone" value={form.phone} onChange={set("phone")} data-testid="contact-phone-input" />
              <select required className={`${input} sm:col-span-2 ${form.service ? "" : "text-slate-500"}`} value={form.service} onChange={set("service")} data-testid="contact-service-select">
                <option value="" disabled>Service Required *</option>
                {SERVICES.map((s) => <option key={s.title} value={s.title} className="bg-[#0B1018] text-white">{s.title}</option>)}
                <option value="Other" className="bg-[#0B1018] text-white">Other</option>
              </select>
              <textarea required rows={5} className={`${input} resize-none sm:col-span-2`} placeholder="Message *" value={form.message} onChange={set("message")} data-testid="contact-message-input" />
            </div>
            <button type="submit" disabled={loading} data-testid="contact-submit-button" className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-sm font-semibold text-white transition-[transform,opacity] duration-300 hover:-translate-y-0.5 disabled:opacity-60">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
