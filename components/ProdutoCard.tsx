import { Plus } from "lucide-react";
import { CategoriaIcon } from "@/components/CategoriaIcon";
import type { Produto } from "@/lib/produtos";

const seloLabel: Record<NonNullable<Produto["selo"]>, string> = {
  oferta: "Oferta",
  "mais-vendido": "Mais vendido",
  novidade: "Novidade",
};

const seloClass: Record<NonNullable<Produto["selo"]>, string> = {
  oferta: "bg-primary text-white",
  "mais-vendido": "bg-ink text-white",
  novidade: "bg-accent text-ink",
};

function formatPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function ProdutoCard({ produto }: { produto: Produto }) {
  const desconto = produto.precoDe
    ? Math.round(100 - (produto.preco / produto.precoDe) * 100)
    : null;

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-paper p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative flex h-28 items-center justify-center rounded-xl bg-muted">
        {produto.selo && (
          <span
            className={`absolute left-2 top-2 rounded-full px-2.5 py-1 text-[11px] font-semibold ${seloClass[produto.selo]}`}
          >
            {seloLabel[produto.selo]}
          </span>
        )}
        {desconto && (
          <span className="absolute right-2 top-2 rounded-full bg-success px-2 py-1 text-[11px] font-semibold text-white">
            -{desconto}%
          </span>
        )}
        <CategoriaIcon categoria={produto.categoria} className="h-11 w-11 text-primary/70" />
      </div>

      <div className="mt-3 flex flex-1 flex-col">
        <h3 className="text-sm font-semibold leading-snug text-ink">{produto.nome}</h3>
        <p className="mt-1 text-xs text-ink-soft">{produto.variante}</p>

        <div className="mt-auto flex items-end justify-between pt-3">
          <div>
            {produto.precoDe && (
              <p className="text-xs text-ink-soft line-through">
                {formatPreco(produto.precoDe)}
              </p>
            )}
            <p className="font-display text-lg font-bold text-primary">
              {formatPreco(produto.preco)}
            </p>
          </div>
          <button
            type="button"
            aria-label={`Adicionar ${produto.nome}`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
