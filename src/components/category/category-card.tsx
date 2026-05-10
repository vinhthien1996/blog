import Image from "next/image";
import Link from "next/link";
import type { Category, CategoryMeta } from "@/components/home/data";

type CategoryCardProps = {
  name: Category;
  meta: CategoryMeta;
  count: number;
};

export function CategoryCard({ name, meta, count }: CategoryCardProps) {
  return (
    <Link href={`/danh-muc?cat=${name}`} className="group block">
      <div className="relative h-44 w-full overflow-hidden rounded-2xl">
        <Image
          src={meta.cover}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="mb-1 inline-block rounded-full bg-[var(--primary)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            {count} bài viết
          </span>
          <h3 className="text-base font-bold leading-snug text-white">{name}</h3>
          <p className="mt-0.5 line-clamp-1 text-xs text-zinc-300">{meta.description}</p>
        </div>
      </div>
    </Link>
  );
}
