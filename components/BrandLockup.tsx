import { LogoMark } from "@/components/Logo";

export function BrandLockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-[5px] border-2 border-accent bg-primary py-1 pl-1 pr-3 ${className}`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white p-1 sm:h-9 sm:w-9">
        <LogoMark className="h-full w-full" />
      </span>
      <span className="font-display text-sm font-extrabold uppercase leading-tight text-white sm:text-base">
        Farmácia
        <br />
        do Povo
      </span>
    </div>
  );
}
