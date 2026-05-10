import Link from "next/link";
import { CATEGORIES, posts } from "@/components/home/data";
import { HotPostsSlider } from "@/components/home/hot-posts-slider";
import { SectionLabel } from "@/components/ui/section-label";

const hotPosts = posts.filter((p) => p.badge).slice(0, 5);

export function RightSidebar() {
  return (
    <aside className="flex flex-col gap-6">
      <div>
        <SectionLabel>Bài viết nổi bật</SectionLabel>
        <div className="mt-3">
          <HotPostsSlider posts={hotPosts} />
        </div>
      </div>

      <div>
        <SectionLabel>Danh mục</SectionLabel>
        <div className="mt-3 flex flex-col divide-y divide-zinc-100">
          {CATEGORIES.map((cat) => {
            const count = posts.filter((p) => p.category === cat).length;
            return (
              <Link
                key={cat}
                href={`/danh-muc?cat=${cat}`}
                className="flex items-center justify-between py-2.5 text-sm text-zinc-700 transition-colors hover:text-[var(--primary)]"
              >
                <span>{cat}</span>
                <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-400">
                  {count}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
