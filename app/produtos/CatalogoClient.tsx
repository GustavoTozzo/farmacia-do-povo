"use client";

import { useMemo, useState } from "react";
import { CategoriaIcon } from "@/components/CategoriaIcon";
import { ProdutoCard } from "@/components/ProdutoCard";
import { categorias, produtos, type Categoria } from "@/lib/produtos";

type Filtro = Categoria | "todos";

export function CatalogoClient() {
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const lista = useMemo(
    () => (filtro === "todos" ? produtos : produtos.filter((p) => p.categoria === filtro)),
    [filtro],
  );

  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFiltro("todos")}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            filtro === "todos"
              ? "border-primary bg-primary text-white"
              : "border-border bg-paper text-ink-soft hover:border-primary hover:text-primary"
          }`}
        >
          Todos
        </button>
        {categorias.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFiltro(cat.id)}
            className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              filtro === cat.id
                ? "border-primary bg-primary text-white"
                : "border-border bg-paper text-ink-soft hover:border-primary hover:text-primary"
            }`}
          >
            <CategoriaIcon categoria={cat.id} className="h-4 w-4" />
            {cat.nome}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {lista.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>

      {lista.length === 0 && (
        <p className="mt-10 text-center text-sm text-ink-soft">
          Nenhum produto nessa categoria ainda.
        </p>
      )}
    </div>
  );
}
