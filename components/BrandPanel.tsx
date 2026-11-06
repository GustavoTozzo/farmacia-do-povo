import Image from "next/image";

export function BrandPanel() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] border border-border bg-muted">
        <Image
          src="/images/farmaceutica-hero.jpg"
          alt="Atendimento farmacêutico na Farmácia do Povo"
          fill
          sizes="(min-width: 1024px) 420px, 90vw"
          className="object-cover object-[50%_15%]"
          priority
        />
      </div>

      <div className="absolute -bottom-4 -right-3 rounded-[4px] bg-accent px-4 py-2 shadow-sm">
        <p className="font-display text-sm font-extrabold leading-none text-ink">
          Desde 2002
        </p>
      </div>
    </div>
  );
}
