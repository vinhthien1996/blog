import Image from "next/image";
import { profile } from "./data";

type ProfileSectionProps = {
  postCount: number;
};

export function ProfileSection({ postCount }: ProfileSectionProps) {
  return (
    <div className="w-full bg-white">
      {/* Cover — full width */}
      <div className="relative h-44 w-full sm:h-60">
        <Image
          src={profile.cover}
          alt={`Ảnh bìa trang cá nhân của ${profile.name}`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Avatar — overlaps cover */}
      <div className="-mt-12 sm:-mt-16 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md sm:h-32 sm:w-32">
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            sizes="128px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Info */}
      <div className="mx-auto w-full max-w-7xl px-4 pb-6 pt-3 sm:px-6">
        {/* Name row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="flex items-center gap-2 text-xl font-bold text-primary sm:text-2xl">
              {profile.name}
              <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0 fill-[var(--primary)] sm:h-6 sm:w-6">
                <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" />
              </svg>
            </h1>
            <p className="mt-0.5 text-sm text-zinc-500">{profile.role}</p>
          </div>

          {/* Share + more */}
          <div className="flex shrink-0 items-center gap-2">
            <button className="flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 sm:px-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0">
                <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
              </svg>
              <span className="hidden sm:inline">Chia sẻ</span>
            </button>
            <button className="rounded-full border border-zinc-200 p-2 text-zinc-500 transition-colors hover:bg-zinc-50">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <circle cx="12" cy="5" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="12" cy="19" r="1.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 flex items-center gap-5 text-sm">
          <span>
            <strong className="font-bold text-zinc-900">{postCount}</strong>{" "}
            <span className="text-zinc-500">Bài viết</span>
          </span>
          <span>
            <strong className="font-bold text-zinc-900">{profile.experience}</strong>{" "}
            <span className="text-zinc-500">Kinh nghiệm</span>
          </span>
        </div>

        {/* Bio */}
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600">
          {profile.description}
        </p>

        {/* Social links */}
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href={`https://${profile.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 transition-colors hover:bg-zinc-50"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 shrink-0">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
            </svg>
            {profile.website}
          </a>
          <a
            href={`https://${profile.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 transition-colors hover:bg-zinc-50"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 shrink-0">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            {profile.github}
          </a>
        </div>
      </div>
    </div>
  );
}
