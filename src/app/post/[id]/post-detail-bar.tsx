"use client";

import { useState } from "react";

type Props = { likes: number; comments: number; shares: number };

export function PostDetailBar({ likes, comments, shares }: Props) {
  const [comment, setComment] = useState("");

  function handleSubmit() {
    if (!comment.trim()) return;
    setComment("");
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-zinc-200 bg-white px-4 py-3 shadow-[0_-1px_8px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex max-w-7xl items-center gap-1">
        <button suppressHydrationWarning type="button" className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-zinc-500 transition hover:bg-zinc-50">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" />
            <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
          </svg>
          {likes} Likes
        </button>

        <button suppressHydrationWarning type="button" className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-zinc-500 transition hover:bg-zinc-50">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
          {comments} Comments
        </button>

        <button suppressHydrationWarning type="button" className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-zinc-500 transition hover:bg-zinc-50">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          {shares} Shares
        </button>

        <div className="ml-3 flex flex-1 items-center gap-2">
          <input
            suppressHydrationWarning
            type="text"
            placeholder="Viết bình luận..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            className="h-9 flex-1 rounded-full border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none focus:border-[var(--primary)]"
          />
          <button
            suppressHydrationWarning
            type="button"
            onClick={handleSubmit}
            disabled={!comment.trim()}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-white transition hover:brightness-95 disabled:opacity-40"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
