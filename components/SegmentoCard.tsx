import { SegmentoIcon } from "@/components/SegmentoIcon";
import { Button } from "@/components/Button";
import type { FormulaExemplo, segmentos } from "@/lib/manipulados";
import { site } from "@/lib/site";

function formatPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function SegmentoCard({
  segmento,
  formulas,
}: {
  segmento: (typeof segmentos)[number];
  formulas: FormulaExemplo[];
}) {
  const mensagem = encodeURIComponent(
    `Olá! Gostaria de um orçamento de manipulados na categoria ${segmento.nome}.`,
  );

  return (
    <div className="flex flex-col border border-border bg-paper p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-[4px] bg-primary-light text-primary">
        <SegmentoIcon icone={segmento.icone} />
      </div>
      <h3 className="font-display mt-4 text-lg font-bold text-ink">{segmento.nome}</h3>
      <p className="mt-1.5 text-sm text-ink-soft">{segmento.descricao}</p>

      <ul className="mt-4 flex flex-1 flex-col gap-2 border-t border-border pt-4 text-sm">
        {formulas.map((formula) => (
          <li key={formula.id} className="flex items-baseline justify-between gap-3">
            <span className="text-ink-soft">
              {formula.nome} <span className="text-xs">· {formula.variante}</span>
            </span>
            <span className="shrink-0 whitespace-nowrap text-xs font-semibold text-primary">
              a partir de {formatPreco(formula.precoDesde)}
            </span>
          </li>
        ))}
      </ul>

      <Button href={`${site.whatsapp}?text=${mensagem}`} external className="mt-5 self-start text-xs">
        Pedir orçamento
      </Button>
    </div>
  );
}
