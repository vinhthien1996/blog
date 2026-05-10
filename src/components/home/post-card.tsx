import Image from "next/image";
import Link from "next/link";
import type { Post } from "./data";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/post/${post.id}`} className="flex h-full">
      <article className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md">
        <div className="relative h-44 shrink-0 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col gap-1 p-4">
          <span className="text-xs font-semibold text-[var(--primary)]">{post.tag}</span>
          <h3 className="mt-0.5 text-[15px] font-bold leading-snug">{post.title}</h3>
          <p className="flex-1 line-clamp-2 text-[13px] leading-relaxed text-zinc-500">{post.excerpt}</p>

          <div className="mt-2 flex items-center gap-3 text-xs text-zinc-400">
            <span className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 shrink-0">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {post.readTime} min read
            </span>
            <span className="ml-auto">{post.date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
