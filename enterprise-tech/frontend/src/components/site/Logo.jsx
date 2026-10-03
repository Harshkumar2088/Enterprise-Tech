export const LogoMark = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="et-g" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stopColor="#2563EB" />
        <stop offset="1" stopColor="#22D3EE" />
      </linearGradient>
    </defs>
    <rect x="1" y="1" width="38" height="38" rx="10" fill="#0B1220" stroke="url(#et-g)" strokeWidth="1.5" />
    <rect x="10" y="26" width="20" height="4" rx="2" fill="url(#et-g)" />
    <rect x="10" y="18" width="14" height="4" rx="2" fill="url(#et-g)" opacity="0.85" />
    <rect x="10" y="10" width="20" height="4" rx="2" fill="url(#et-g)" />
    <circle cx="30" cy="20" r="2.4" fill="#22D3EE" />
  </svg>
);

export const Logo = ({ testId = "logo" }) => (
  <span data-testid={testId} className="flex items-center gap-2.5">
    <LogoMark />
    <span className="font-display text-[15px] font-extrabold tracking-[0.18em] text-white">
      ENTERPRISE<span className="text-cyan-300"> TECH</span>
    </span>
  </span>
);
