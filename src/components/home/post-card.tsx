import Image from "next/image";
import type { Post } from "./data";

type PostCardProps = {
  post: Post;
  view: "grid" | "list";
};

export function PostCard({ post, view }: PostCardProps) {
  const isList = view === "list";

  return (
    <article
      className={
        isList
          ? "grid grid-cols-1 gap-4 rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-[#00CB09]/40 md:grid-cols-[280px_1fr]"
          : "group rounded-xl border border-zinc-200 bg-white p-2 transition hover:border-[#00CB09]/40"
      }
    >
      <div className={`relative overflow-hidden rounded-lg ${isList ? "h-52" : "h-40"}`}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes={isList ? "(max-width: 768px) 100vw, 280px" : "(max-width: 1024px) 50vw, 33vw"}
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        {post.badge ? (
          <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2 py-1 text-[10px] font-semibold text-zinc-700 shadow">
            🔥 {post.badge}
          </span>
        ) : null}
        <button
          aria-label="favorite"
          className="absolute bottom-2 left-2 rounded-full bg-white/95 p-1.5 text-zinc-700 shadow"
          type="button"
        >
          ♡
        </button>
        <span className="absolute bottom-2 right-2 text-sm font-bold text-white drop-shadow-md">
          {post.price}
          <span className="text-[10px] font-normal">/{post.unit}</span>
        </span>
      </div>

      <div className={isList ? "space-y-3 self-center" : "space-y-1.5 px-0.5 pt-2"}>
        <h3 className={`${isList ? "text-xl" : "text-[15px] leading-5"} font-semibold text-zinc-900`}>{post.title}</h3>
        {!isList ? <p className="text-[11px] text-zinc-500">👤 {profileName}</p> : null}
        {isList ? <p className="text-sm leading-relaxed text-zinc-600">{post.excerpt}</p> : null}
        <div className="flex flex-wrap items-center gap-2 text-[12px] text-zinc-600">
          <span>☆ {post.rating}</span>
          <span>✓ {post.location}</span>
          <span>📅 {post.date}</span>
        </div>
      </div>
    </article>
  );
}

const profileName = "Nguyễn Vĩnh Thiện";
