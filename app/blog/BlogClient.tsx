"use client";

import { useMemo, useState } from "react";
import { PostCard } from "@/components/PostCard";
import { categoriasBlog, posts, type PostCategoria } from "@/lib/posts";

type Filtro = PostCategoria | "todos";

export function BlogClient() {
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const lista = useMemo(
    () => (filtro === "todos" ? posts : posts.filter((p) => p.categoria === filtro)),
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
        {categoriasBlog.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFiltro(cat.id)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              filtro === cat.id
                ? "border-primary bg-primary text-white"
                : "border-border bg-paper text-ink-soft hover:border-primary hover:text-primary"
            }`}
          >
            {cat.nome}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {lista.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {lista.length === 0 && (
        <p className="mt-10 text-center text-sm text-ink-soft">
          Nenhum post nessa categoria ainda.
        </p>
      )}
    </div>
  );
}
