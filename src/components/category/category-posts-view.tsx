import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/section-label";
import { getPostsByCategory, type Category } from "@/components/home/data";
import { PostCard } from "@/components/home/post-card";

type CategoryPostsViewProps = {
  category: Category;
};

export function CategoryPostsView({ category }: CategoryPostsViewProps) {
  const categoryPosts = getPostsByCategory(category);
  const hotPosts = categoryPosts.filter((p) => p.badge);

  return (
    <main className="w-full text-zinc-900 flex flex-col gap-8 mt-4">
      {/* Back + title */}
      <div className="w-full pt-2">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 flex items-center gap-3">
          <Link
            href="/danh-muc"
            className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-[var(--primary)] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Danh mục
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="text-sm font-semibold text-[var(--primary)]">{category}</span>
        </div>
      </div>

      {hotPosts.length > 0 && (
        <section className="w-full">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <SectionLabel>Đang nổi bật</SectionLabel>
            <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-5 sm:overflow-visible sm:pb-0">
              {hotPosts.map((post) => (
                <Link key={post.id} href={`/post/${post.id}`} className="group relative h-[200px] w-[160px] flex-shrink-0 block overflow-hidden rounded-2xl sm:w-auto">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 160px, 20vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-[var(--primary)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                    {post.badge}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="mb-1 text-[11px] text-zinc-300">{post.readTime} min · {post.tag}</p>
                    <p className="line-clamp-2 text-sm font-semibold leading-snug text-white">{post.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="w-full py-6">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionLabel>Bài viết — {category}</SectionLabel>
          {categoryPosts.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {categoryPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-zinc-200 p-12 text-center text-zinc-400">
              Chưa có bài viết trong chủ đề này.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
