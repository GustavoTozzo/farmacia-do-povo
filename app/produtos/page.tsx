import type { Metadata } from "next";
import { CatalogoClient } from "@/app/produtos/CatalogoClient";

export const metadata: Metadata = {
  title: "Produtos | Farmácia do Povo",
  description: "Catálogo de produtos da Farmácia do Povo — Nova Esperança, PR.",
};

export default function ProdutosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="rounded-[4px] bg-primary-light px-5 py-4 text-sm text-primary-dark">
        Catálogo ilustrativo para apresentação interna — produtos, preços e
        fotos são exemplos e serão substituídos pelo estoque real da farmácia.
      </div>

      <div className="mt-6 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Catálogo
        </p>
        <h1 className="font-display mt-2 text-3xl font-bold text-ink sm:text-4xl">
          Produtos genéricos e de linha
        </h1>
        <p className="mt-3 text-ink-soft">
          Medicamentos genéricos, higiene, beleza, mãe e bebê, suplementos e
          muito mais — com o mesmo atendimento de sempre.
        </p>
      </div>

      <CatalogoClient />
    </div>
  );
}
