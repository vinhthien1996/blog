import Link from "next/link";

const NAV_LINKS = [
  { label: "Trang chủ", href: "/" },
  { label: "Danh mục", href: "/danh-muc" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Liên hệ", href: "/lien-he" },
];

export function SiteFooter() {
  return (
    <footer className="w-full bg-white py-10">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="text-base font-bold">NVT Blog</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500">
            Chia sẻ kiến thức Frontend, Next.js, UI design và kinh nghiệm xây dựng sản phẩm web.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Liên kết</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-zinc-500 transition-colors hover:text-zinc-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Thông tin</h4>
          <p className="mt-3 text-sm text-zinc-500">Email: hello@myblog.vn</p>
          <p className="text-sm text-zinc-500">Hotline: 0123 456 789</p>
          <p className="mt-4 text-xs text-zinc-400">© 2026 NVT Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
