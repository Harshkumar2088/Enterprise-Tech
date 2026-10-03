const WORDS = ["Data & Analytics", "AI & Automation", "Software Development", "Cloud Solutions", "Digital Transformation", "System Integration"];

export const Marquee = () => (
  <section data-testid="editorial-marquee" className="relative overflow-hidden border-y border-white/10 bg-[#080B12] py-7">
    <div className="marquee-track flex w-max">
      {[0, 1].map((k) => (
        <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
          {WORDS.map((w) => (
            <span key={w} className="flex items-center font-display text-3xl font-semibold tracking-tight text-white/90 sm:text-5xl">
              <span className="px-8">{w}</span>
              <span className="text-cyan-300">✦</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
);
