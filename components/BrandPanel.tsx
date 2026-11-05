import { LogoMark } from "@/components/Logo";

export function BrandPanel() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="panel-cut absolute inset-0 translate-x-[10px] translate-y-[10px] bg-ink" />

      <div className="panel-cut relative overflow-hidden bg-primary-dark px-8 py-14">
        <div className="absolute -left-6 top-10 h-10 w-[150%] -rotate-[20deg] bg-accent/90" />
        <div className="absolute -left-6 bottom-16 h-6 w-[150%] -rotate-[20deg] bg-primary" />

        <div className="relative flex flex-col items-center text-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white p-4 shadow-[6px_6px_0_rgba(0,0,0,0.25)] sm:h-36 sm:w-36">
            <LogoMark className="h-full w-full" />
          </div>
          <p className="font-display mt-6 text-2xl font-extrabold leading-none text-white">
            FARMÁCIA
          </p>
          <p className="font-display text-2xl font-extrabold leading-none text-accent">
            DO POVO
          </p>
        </div>
      </div>

      <div className="btn-cut absolute -bottom-4 -right-3 bg-accent px-4 py-2 shadow-[4px_4px_0_var(--color-ink)]">
        <p className="font-display text-sm font-extrabold leading-none text-ink">
          Desde 2002
        </p>
      </div>
    </div>
  );
}
