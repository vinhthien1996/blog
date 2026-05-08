export type Post = {
  id: number;
  title: string;
  image: string;
  badge?: string;
  price: string;
  unit: string;
  rating: string;
  location: string;
  date: string;
  excerpt: string;
};

export const profile = {
  name: "Nguyễn Vĩnh Thiện",
  role: "Developer",
  experience: "8 years writing",
  city: "Thành Phố HCM",
  tags: ["Trang chủ", "Danh mục", "Giới thiệu", "Liên hệ"],
  skills: ["UI/UX", "Frontend", "Next.js", "SEO", "Performance"],
  sectors: ["Lifestyle", "Travel", "Health", "Tech", "Productivity", "Design"],
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  cover:
    "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=1400&h=400&fit=crop",
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Cach toi uu giao dien blog voi Next.js va Tailwind",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    badge: "Noi bat",
    price: "12",
    unit: "min read",
    rating: "4.8 (320)",
    location: "Frontend",
    date: "May 08",
    excerpt:
      "A luxurious downtown hideaway with panoramic city views and curated interiors.",
  },
  {
    id: 2,
    title: "Huong dan xay dung thiet ke responsive chuyen nghiep",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
    badge: "Moi",
    price: "9",
    unit: "min read",
    rating: "4.7 (211)",
    location: "CSS",
    date: "May 07",
    excerpt: "A sleek loft bathed in warm light with minimalist and modern design.",
  },
  {
    id: 3,
    title: "Thiet ke component tai su dung trong he thong blog",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&h=400&fit=crop",
    price: "11",
    unit: "min read",
    rating: "4.9 (441)",
    location: "React",
    date: "May 05",
    excerpt: "A calm and elegant villa perfect for short luxury getaways.",
  },
  {
    id: 4,
    title: "Kinh nghiem toi uu hieu nang web cho nguoi moi",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop",
    price: "10",
    unit: "min read",
    rating: "4.6 (185)",
    location: "Perf",
    date: "May 04",
    excerpt: "Compact but premium studio ideal for focused work and travel.",
  },
  {
    id: 5,
    title: "To chuc noi dung blog de doc gia de theo doi",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
    price: "8",
    unit: "min read",
    rating: "4.5 (132)",
    location: "Content",
    date: "May 02",
    excerpt: "Traditional architecture blended with modern comfort and privacy.",
  },
  {
    id: 6,
    title: "Cach viet bai chuan SEO trong nam 2026",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
    badge: "Pho bien",
    price: "14",
    unit: "min read",
    rating: "4.9 (520)",
    location: "SEO",
    date: "May 01",
    excerpt: "Nature-facing cabin with serene vibes and cozy interiors.",
  },
  {
    id: 7,
    title: "Mau layout blog dep va toi gian voi tone do trang",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=400&fit=crop",
    price: "7",
    unit: "min read",
    rating: "4.4 (90)",
    location: "Design",
    date: "Apr 28",
    excerpt: "Mau bo cuc danh cho blog ca nhan va trang tin tuc.",
  },
  {
    id: 8,
    title: "Xay dung trang danh muc bai viet co bo loc nhanh",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=600&h=400&fit=crop",
    price: "13",
    unit: "min read",
    rating: "4.6 (201)",
    location: "Category",
    date: "Apr 24",
    excerpt: "Bo loc theo tag va chu de giup nguoi dung tim bai viet nhanh hon.",
  },
  {
    id: 9,
    title: "Checklist hoan thien mot trang home blog chuyen nghiep",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    badge: "Noi bat",
    price: "6",
    unit: "min read",
    rating: "4.7 (158)",
    location: "Checklist",
    date: "Apr 20",
    excerpt: "Tong hop cac muc can co de hoan thien trang blog.",
  },
];
