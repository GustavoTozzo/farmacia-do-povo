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
  primary: "bg-primary text-white",
  outline: "bg-paper text-ink border-2 border-ink",
  light: "bg-white text-primary",
};

export function SkewButton({ href, children, variant = "primary", external, className = "" }: Props) {
  const content = (
    <span className="group relative inline-block">
      <span className="btn-cut absolute inset-0 translate-x-[5px] translate-y-[5px] bg-ink transition-transform group-hover:translate-x-[3px] group-hover:translate-y-[3px]" />
      <span
        className={`btn-cut relative inline-flex items-center gap-2 px-6 py-3 text-sm font-bold transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 ${variantClass[variant]}`}
      >
        {children}
      </span>
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
