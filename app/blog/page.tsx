import type { Metadata } from "next";
import { BlogClient } from "@/app/blog/BlogClient";

export const metadata: Metadata = {
  title: "Blog | Farmácia do Povo",
  description:
    "Dicas de saúde, prevenção e cuidados com medicamentos pela equipe da Farmácia do Povo — Nova Esperança, PR.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">Blog</p>
      <h1 className="font-display mt-2 text-3xl font-bold text-ink sm:text-4xl">
        Saúde, prevenção e cuidados do dia a dia
      </h1>
      <p className="mt-3 text-ink-soft">
        Conteúdo escrito pela nossa equipe para ajudar você a cuidar melhor da
        sua saúde e da sua família.
      </p>

      <BlogClient />
    </div>
  );
}
