export function HeroArt() {
  return (
    <svg viewBox="0 0 420 380" className="h-auto w-full max-w-md" role="presentation">
      <defs>
        <linearGradient id="blob" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-accent-light)" />
          <stop offset="100%" stopColor="var(--color-accent)" />
        </linearGradient>
      </defs>

      <path
        d="M210 18c84 0 170 54 178 142 7 82-64 150-160 198-88 44-186 6-206-80C3 194 36 112 104 64 140 38 168 18 210 18Z"
        fill="url(#blob)"
        opacity="0.55"
      />

      <g transform="translate(70 70)">
        <rect x="0" y="120" width="230" height="140" rx="20" fill="#fff" stroke="var(--color-border)" />
        <circle cx="210" cy="40" r="56" fill="var(--color-primary)" />
        <path
          d="M186 40h48M210 16v48"
          stroke="#fff"
          strokeWidth="10"
          strokeLinecap="round"
        />

        <g transform="translate(26 150)">
          <rect width="92" height="40" rx="20" fill="var(--color-primary-light)" />
          <rect width="46" height="40" rx="20" fill="var(--color-primary)" />
          <circle cx="23" cy="20" r="6" fill="#fff" />
        </g>

        <g transform="translate(26 206)">
          <rect width="150" height="14" rx="7" fill="var(--color-border)" />
          <rect width="100" height="14" rx="7" fill="var(--color-border)" y="24" />
        </g>

        <g transform="translate(140 150)">
          <circle r="34" fill="var(--color-muted)" stroke="var(--color-border)" />
          <path
            d="M-14 0a14 14 0 1 1 28 0 14 14 0 0 1 -28 0Z"
            fill="none"
            stroke="var(--color-success)"
            strokeWidth="4"
          />
          <path d="M-6 0l5 5 9-10" fill="none" stroke="var(--color-success)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      <g transform="translate(18 24)">
        <circle r="22" fill="#fff" stroke="var(--color-border)" />
        <text x="0" y="6" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--color-primary)">+</text>
      </g>
    </svg>
  );
}
