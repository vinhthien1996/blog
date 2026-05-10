import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const BASE_URL = "https://nguyenvinhthien.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "NVT Blog — Nguyễn Vĩnh Thiện",
    template: "%s — NVT Blog",
  },
  description: "Chia sẻ kiến thức Frontend, Next.js, UI design và kinh nghiệm xây dựng sản phẩm web.",
  openGraph: {
    siteName: "NVT Blog",
    locale: "vi_VN",
    type: "website",
    url: BASE_URL,
    title: "NVT Blog — Nguyễn Vĩnh Thiện",
    description: "Chia sẻ kiến thức Frontend, Next.js, UI design và kinh nghiệm xây dựng sản phẩm web.",
    images: [{ url: "/background.jpg", width: 1200, height: 630, alt: "NVT Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NVT Blog — Nguyễn Vĩnh Thiện",
    description: "Chia sẻ kiến thức Frontend, Next.js, UI design và kinh nghiệm xây dựng sản phẩm web.",
    images: ["/background.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${quicksand.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
