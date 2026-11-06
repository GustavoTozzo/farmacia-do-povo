import Image from "next/image";

export function BrandPanel() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-[4px] border border-border bg-muted">
        <Image
          src="/images/fachada-farmacia.jpg"
          alt="Fachada da Farmácia do Povo em Nova Esperança, PR"
          width={1088}
          height={748}
          sizes="(min-width: 1024px) 420px, 90vw"
          className="h-auto w-full"
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
