import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/Button";
import { PostIcon } from "@/components/PostIcon";
import { categoriasBlog, posts } from "@/lib/posts";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.titulo} | Blog Farmácia do Povo`,
    description: post.resumo,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const categoria = categoriasBlog.find((c) => c.id === post.categoria);

  return (
    <article>
      <div className="bg-muted">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-ink-soft">
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span>{categoria?.nome}</span>
          </nav>

          <h1 className="font-display mt-4 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            {post.titulo}
          </h1>
          <p className="mt-3 text-ink-soft">{post.resumo}</p>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary-dark">
              {categoria?.nome}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-ink-soft">
              <Calendar className="h-3.5 w-3.5" />
              {post.data}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-ink-soft">
              <Clock className="h-3.5 w-3.5" />
              {post.leitura}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="-mt-8 flex h-48 items-center justify-center border border-border bg-paper sm:h-64">
          <PostIcon icone={post.icone} className="h-16 w-16 text-primary/70" />
        </div>

        <div className="py-10">
          {post.conteudo.map((secao) => (
            <section key={secao.titulo ?? secao.paragrafos[0]} className="mt-8 first:mt-0">
              {secao.titulo && (
                <h2 className="font-display text-xl font-bold text-ink">{secao.titulo}</h2>
              )}
              {secao.paragrafos.map((paragrafo) => (
                <p key={paragrafo} className="mt-3 text-ink-soft">
                  {paragrafo}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mb-14 flex flex-col items-start gap-4 border border-border bg-muted p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-soft">
            Ficou com alguma dúvida? Fale com a nossa equipe farmacêutica.
          </p>
          <Button href={site.whatsapp} external className="shrink-0">
            Fale no WhatsApp
          </Button>
        </div>
      </div>
    </article>
  );
}
