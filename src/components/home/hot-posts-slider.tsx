"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Post } from "./data";

const PAGE_SIZE = 3;

type HotPostsSliderProps = {
  posts: Post[];
};

export function HotPostsSlider({ posts }: HotPostsSliderProps) {
  const [page, setPage] = useState(0);

  if (posts.length === 0) return null;

  const totalPages = Math.ceil(posts.length / PAGE_SIZE);
  const visible = posts.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const placeholders = PAGE_SIZE - visible.length;

  function prev() {
    setPage((p) => (p - 1 + totalPages) % totalPages);
  }

  function next() {
    setPage((p) => (p + 1) % totalPages);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {visible.map((post) => (
          <Link
            key={post.id}
            href={`/post/${post.id}`}
            className="group relative block h-52 overflow-hidden rounded-xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 427px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            {post.badge && (
              <span className="absolute left-2.5 top-2.5 rounded-full bg-[var(--primary)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                {post.badge}
              </span>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="mb-1 text-[11px] text-zinc-300">
                {post.readTime} min · {post.tag}
              </p>
              <p className="line-clamp-2 text-sm font-semibold leading-snug text-white">
                {post.title}
              </p>
            </div>
          </Link>
        ))}
        {Array.from({ length: placeholders }).map((_, i) => (
          <div key={`ph-${i}`} className="invisible h-52" />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={prev}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
          aria-label="Trang trước"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Trang ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === page
                  ? "w-4 bg-[var(--primary)]"
                  : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
          aria-label="Trang tiếp"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
