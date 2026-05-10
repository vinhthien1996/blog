import type { Metadata } from "next";
import { CATEGORIES, CATEGORY_META, isCategory, getPostsByCategory } from "@/components/home/data";
import { CategoryCard } from "@/components/category/category-card";
import { CategoryPostsView } from "@/components/category/category-posts-view";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}): Promise<Metadata> {
  const { cat } = await searchParams;
  if (cat && isCategory(cat)) {
    return {
      title: cat,
      description: CATEGORY_META[cat].description,
      openGraph: {
        title: `${cat} — NVT Blog`,
        description: CATEGORY_META[cat].description,
        images: [{ url: CATEGORY_META[cat].cover, alt: cat }],
      },
    };
  }
  return {
    title: "Danh mục",
    description: "Khám phá các chủ đề Frontend, Design, Lifestyle, Travel và nhiều hơn nữa.",
  };
}

export default async function DanhMucPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat } = await searchParams;
  const selectedCategory = cat && isCategory(cat) ? cat : null;

  if (selectedCategory) {
    return <CategoryPostsView category={selectedCategory} />;
  }

  return (
    <main className="w-full text-zinc-900 flex flex-col gap-8 mt-4">
      <section className="w-full py-6">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <h1 className="py-2 font-semibold uppercase tracking-widest text-primary">
            Danh mục
          </h1>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat}
                name={cat}
                meta={CATEGORY_META[cat]}
                count={getPostsByCategory(cat).length}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
