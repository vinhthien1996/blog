import { posts } from "./data";
import { SectionLabel } from "@/components/ui/section-label";
import { PostCard } from "./post-card";
import { ProfileSection } from "./profile-section";
import { HotPostsSlider } from "./hot-posts-slider";

const hotPosts = posts.filter((p) => p.badge).slice(0, 9);

export function HomePage() {
  return (
    <main className="w-full text-zinc-900">
      {/* Profile — full viewport width */}
      <ProfileSection postCount={posts.length} />

      {/* Rest of content — constrained */}
      <div className="mx-auto p-4 flex w-full max-w-7xl flex-col gap-6">
        <section>
          <SectionLabel>Bài viết nổi bật</SectionLabel>
          <HotPostsSlider posts={hotPosts} />
        </section>

        <section>
          <SectionLabel>Bài viết mới</SectionLabel>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {posts.slice(0, 12).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
