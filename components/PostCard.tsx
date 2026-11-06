import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { PostIcon } from "@/components/PostIcon";
import { categoriasBlog, type Post } from "@/lib/posts";

export function PostCard({ post }: { post: Post }) {
  const categoria = categoriasBlog.find((c) => c.id === post.categoria);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-5 border-b border-border py-7 first:pt-0 sm:flex-row"
    >
      <div className="flex h-40 w-full shrink-0 items-center justify-center bg-muted sm:h-32 sm:w-44">
        <PostIcon icone={post.icone} className="h-10 w-10 text-primary/70" />
      </div>

      <div className="flex flex-1 flex-col">
        <span className="inline-block w-fit rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary-dark">
          {categoria?.nome}
        </span>
        <h3 className="font-display mt-2 text-xl font-bold text-ink group-hover:text-primary">
          {post.titulo}
        </h3>
        <p className="mt-2 text-sm text-ink-soft">{post.resumo}</p>

        <div className="mt-3 flex items-center gap-4 text-xs text-ink-soft">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {post.data}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.leitura}
          </span>
        </div>
      </div>
    </Link>
  );
}
