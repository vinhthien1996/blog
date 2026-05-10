import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/components/home/data";
import { PostCard } from "@/components/home/post-card";
import { PostDetailBar } from "./post-detail-bar";
import { SectionLabel } from "@/components/ui/section-label";

export function generateStaticParams() {
  return posts.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.image, width: 600, height: 400, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));
  if (!post) notFound();

  const likes = ((post.id * 37 + 12) % 200) + 10;
  const comments = ((post.id * 13 + 5) % 50) + 3;
  const shares = ((post.id * 71 + 20) % 300) + 50;

  const sameCat = posts.filter((p) => p.id !== post.id && p.category === post.category);
  const others = posts.filter((p) => p.id !== post.id && p.category !== post.category);
  const related = [...sameCat, ...others].slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Nguyễn Vĩnh Thiện",
      url: "https://nguyenvinhthien.com",
    },
    publisher: {
      "@type": "Organization",
      name: "NVT Blog",
      url: "https://nguyenvinhthien.com",
    },
    keywords: post.tag,
  };

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-4">
          <h1 className="text-xl font-bold leading-tight text-white sm:text-2xl">
            {post.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/80">
            <span className="flex items-center gap-1 font-medium text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 shrink-0">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
              {post.tag}
            </span>
            <span className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 shrink-0">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {post.date}, 2025
            </span>
          </div>
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-6 right-16 h-20 w-20 rounded-full bg-white/5" />
        </div>

        <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-80">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1152px"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-5 text-zinc-700">
          <p className="text-base leading-relaxed">
            {post.excerpt} Đây là phần mở đầu của bài viết, giới thiệu tổng quan về chủ đề và những điểm nổi bật mà độc giả sẽ khám phá trong suốt bài viết này.
          </p>

          <h2 className="text-xl font-bold text-zinc-900">Tại sao điều này quan trọng?</h2>
          <p className="text-base leading-relaxed">
            Trong thời đại công nghệ phát triển nhanh chóng, việc nắm vững các kỹ năng liên quan đến <strong>{post.tag}</strong> trở nên thiết yếu hơn bao giờ hết. Các chuyên gia trong ngành nhận định rằng đây là một trong những xu hướng định hình tương lai của phát triển phần mềm hiện đại.
          </p>
          <p className="text-base leading-relaxed">
            Bài viết này sẽ đi sâu vào các khía cạnh kỹ thuật, chia sẻ kinh nghiệm thực tiễn từ các dự án thực tế, đồng thời đưa ra những lời khuyên có giá trị cho cả người mới bắt đầu lẫn các lập trình viên có kinh nghiệm.
          </p>

          <h2 className="text-xl font-bold text-zinc-900">Các điểm chính cần lưu ý</h2>
          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed">
            <li>Hiểu rõ nguyên lý cơ bản trước khi áp dụng vào thực tế</li>
            <li>Luôn đặt trải nghiệm người dùng lên hàng đầu trong mọi quyết định thiết kế</li>
            <li>Tối ưu hóa hiệu suất ngay từ giai đoạn đầu của dự án</li>
            <li>Thường xuyên cập nhật kiến thức để theo kịp xu hướng công nghệ mới</li>
          </ul>

          <p className="text-base leading-relaxed">
            Kết lại, việc đầu tư thời gian và công sức để thành thạo <strong>{post.tag}</strong> sẽ mang lại lợi ích lâu dài cho sự nghiệp của bạn. Hãy bắt đầu từ những bước nhỏ, kiên trì thực hành và không ngừng học hỏi từ cộng đồng lập trình viên xung quanh.
          </p>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6">
          <SectionLabel>Bài viết liên quan</SectionLabel>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      )}

      <PostDetailBar likes={likes} comments={comments} shares={shares} />
    </main>
  );
}
