"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { posts, profile } from "./data";
import { PostCard } from "./post-card";

export function HomePage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const postCount = useMemo(() => posts.length, []);
  const visiblePosts = useMemo(() => (view === "grid" ? posts.slice(0, 9) : posts), [view]);
  const [activeTab, setActiveTab] = useState("Trang chủ");

  return (
    <main className="min-h-screen w-full bg-white text-zinc-900">
      <section className="w-full bg-white px-4 py-6 md:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
          <div className="relative">
            <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-zinc-200">
              <Image src={profile.cover} alt="Cover image" fill sizes="100vw" className="object-cover" priority />
            </div>
            <div className="absolute -bottom-14 left-6 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-md">
              <Image src={profile.avatar} alt={profile.name} fill sizes="128px" className="object-cover" />
            </div>
            <span className="absolute bottom-[-2.7rem] left-[8.5rem] inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#00CB09] text-xs font-bold text-white shadow">
              ✓
            </span>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-4 pt-14">
            <div className="pl-1 md:pl-40">
              <h1 className="truncate text-[35px] font-semibold tracking-tight text-zinc-900">{profile.name}</h1>
              <p className="text-base text-zinc-500">{profile.role}</p>
              <p className="mt-1 text-sm font-semibold text-zinc-700">{profile.city}</p>
            </div>
            <button
              type="button"
              className="rounded-md border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:border-[#00CB09] hover:text-[#00CB09]"
            >
              ✎ Edit Profile
            </button>
          </div>

          <div className="relative">
            <input
              type="search"
              placeholder="Tìm kiếm bài viết..."
              className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-4 pr-28 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-[#00CB09]"
            />
            <button type="button" className="absolute right-1.5 top-1.5 rounded-md bg-[#00CB09] px-4 py-1.5 text-sm font-semibold text-white hover:brightness-95">
              Tìm kiếm
            </button>
          </div>

          <nav className="flex flex-wrap items-center gap-2 border-b border-zinc-200 pb-2">
            {profile.tags.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                  activeTab === tab
                    ? "border-b-2 border-[#00CB09] bg-[#00CB09]/10 text-[#00CB09]"
                    : "text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <section className="w-full px-4 py-6 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-bold text-zinc-900">
            Bài viết mới <span className="text-zinc-500">({postCount})</span>
            </h2>
            <div className="flex rounded-lg border border-zinc-200 bg-white p-1 text-sm">
              <button
                className={`rounded-md px-4 py-1.5 ${view === "grid" ? "bg-[#00CB09]/10 text-[#00CB09]" : "text-zinc-600"}`}
                onClick={() => setView("grid")}
                type="button"
              >
                Grid 3x3
              </button>
              <button
                className={`rounded-md px-4 py-1.5 ${view === "list" ? "bg-[#00CB09]/10 text-[#00CB09]" : "text-zinc-600"}`}
                onClick={() => setView("list")}
                type="button"
              >
                List
              </button>
            </div>
          </div>

          <div className={view === "grid" ? "grid gap-4 md:grid-cols-2 xl:grid-cols-3" : "space-y-4"}>
            {visiblePosts.map((post) => (
              <PostCard key={post.id} post={post} view={view} />
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-8 w-full border-t border-zinc-200 bg-white px-4 py-8 text-zinc-700 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-zinc-900">My Blog</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Chia se kien thuc frontend, Next.js, UI design va kinh nghiem xay dung san pham web.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">Lien ket</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Trang chủ</li>
              <li>Danh mục</li>
              <li>Giới thiệu</li>
              <li>Liên hệ</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">Thong tin</h4>
            <p className="mt-2 text-sm">Email: hello@myblog.vn</p>
            <p className="text-sm">Hotline: 0123 456 789</p>
            <p className="mt-3 text-xs text-zinc-500">© 2026 My Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
