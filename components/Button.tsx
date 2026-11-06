import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  external?: boolean;
  className?: string;
};

const variantClass: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  outline: "bg-paper text-ink border border-ink/15 hover:border-primary hover:text-primary",
  light: "bg-white text-primary hover:bg-white/90",
};

export function Button({ href, children, variant = "primary", external, className = "" }: Props) {
  const classes = `inline-flex items-center gap-2 rounded-[4px] px-6 py-3 text-sm font-bold transition-colors ${variantClass[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
