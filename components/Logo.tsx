export function Logo({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Farmácia do Povo">
      <circle cx="32" cy="32" r="31" fill="var(--color-primary)" />
      <circle cx="32" cy="32" r="26" fill="var(--color-accent)" />
      <circle cx="32" cy="32" r="19.5" fill="#fff" />
      <path
        d="M24 20h9.5c5 0 8.5 3.1 8.5 7.8 0 4.8-3.6 7.9-8.7 7.9H28v8.3h-4V20Zm4 3.6v8.5h5.2c3 0 4.7-1.6 4.7-4.3 0-2.6-1.7-4.2-4.7-4.2H28Z"
        fill="var(--color-primary)"
      />
    </svg>
  );
}
