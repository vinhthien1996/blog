export const CATEGORIES = ["Lifestyle", "Travel", "Health", "Tech", "Productivity", "Design"] as const;
export type Category = typeof CATEGORIES[number];

export type Post = {
  id: number;
  title: string;
  image: string;
  badge?: string;
  readTime: number;
  rating: number;
  ratingCount: number;
  tag: string;
  date: string;
  excerpt: string;
  category: Category;
};

export type CategoryMeta = {
  cover: string;
  description: string;
};

export const CATEGORY_META: Record<Category, CategoryMeta> = {
  Lifestyle: {
    cover: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=400&fit=crop",
    description: "Phong cách sống, thói quen và không gian sống",
  },
  Travel: {
    cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
    description: "Khám phá địa điểm và kinh nghiệm du lịch",
  },
  Health: {
    cover: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    description: "Sức khỏe thể chất, tập luyện và dinh dưỡng",
  },
  Tech: {
    cover: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    description: "Lập trình, công nghệ và phát triển web",
  },
  Productivity: {
    cover: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    description: "Năng suất, tổ chức công việc và tư duy hiệu quả",
  },
  Design: {
    cover: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    description: "Thiết kế giao diện, UI/UX và thẩm mỹ số",
  },
};

export const profile = {
  name: "Nguyễn Vĩnh Thiện",
  role: "Frontend Developer",
  description: "Frontend Developer & UI enthusiast based in Hồ Chí Minh. Đam mê xây dựng giao diện đẹp và trải nghiệm người dùng tốt.",
  experience: "8 năm",
  city: "Thành Phố HCM",
  skills: ["UI/UX", "Frontend", "Next.js", "SEO", "Performance"],
  website: "nguyenvinhthien.com",
  github: "github.com/nvthien",
  cover: "/background.jpg",
  avatar: "https://grsbeef.org/wp-content/uploads/2022/02/natural_resources.jpg",
};

export function isCategory(value: string): value is Category {
  return (CATEGORIES as readonly string[]).includes(value);
}

export function getPostsByCategory(cat: Category): Post[] {
  return posts.filter((p) => p.category === cat);
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Cách tối ưu giao diện blog với Next.js va Tailwind",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    badge: "Hot",
    readTime: 12,
    rating: 4.8,
    ratingCount: 320,
    tag: "Frontend",
    date: "May 08",
    excerpt: "Tối ưu hiệu suất và giao diện blog với các kỹ thuật Next.js và Tailwind CSS hiện đại.",
    category: "Tech",
  },
  {
    id: 2,
    title: "Hướng dẫn xây dựng thiết kế responsive chuyên nghiệp",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
    badge: "Hot",
    readTime: 9,
    rating: 4.7,
    ratingCount: 211,
    tag: "CSS",
    date: "May 07",
    excerpt: "Các kỹ thuật CSS grid, flexbox và media query giúp xây dựng layout responsive chuẩn.",
    category: "Design",
  },
  {
    id: 3,
    title: "Thiết kế component tái sử dụng trong hệ thống blog",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&h=400&fit=crop",
    readTime: 11,
    rating: 4.9,
    ratingCount: 441,
    tag: "React",
    date: "May 05",
    excerpt: "Xây dựng thư viện component có thể tái sử dụng giúp code gọn và dễ maintain hơn.",
    category: "Tech",
  },
  {
    id: 4,
    title: "Kinh nghiệm tối ưu hiệu năng web cho người mới",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop",
    readTime: 10,
    rating: 4.6,
    ratingCount: 185,
    tag: "Performance",
    date: "May 04",
    excerpt: "Các bước đơn giản để cải thiện tốc độ tải trang và điểm Core Web Vitals.",
    category: "Tech",
  },
  {
    id: 5,
    title: "Tổ chức nội dung blog để độc giả dễ theo dõi",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
    readTime: 8,
    rating: 4.5,
    ratingCount: 132,
    tag: "Content",
    date: "May 02",
    excerpt: "Cách phân cấp nội dung, dùng heading và visual hierarchy để giữ chân người đọc.",
    category: "Productivity",
  },
  {
    id: 6,
    title: "Cách viết bài chuẩn SEO trong năm 2026",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
    badge: "Hot",
    readTime: 14,
    rating: 4.9,
    ratingCount: 520,
    tag: "SEO",
    date: "May 01",
    excerpt: "Các yếu tố SEO on-page quan trọng nhất giúp bài viết lên top tìm kiếm Google.",
    category: "Productivity",
  },
  {
    id: 7,
    title: "Mẫu layout blog đẹp và tối giản với tone đỏ trắng",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=400&fit=crop",
    readTime: 7,
    rating: 4.4,
    ratingCount: 90,
    tag: "Design",
    date: "Apr 28",
    excerpt: "Mẫu bố cục dành cho blog cá nhân và trang tin tức với phong cách tối giản.",
    category: "Design",
  },
  {
    id: 8,
    title: "Xây dựng trang danh mục bài viết có bộ lọc nhanh",
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=600&h=400&fit=crop",
    badge: "Hot",
    readTime: 13,
    rating: 4.6,
    ratingCount: 201,
    tag: "Category",
    date: "Apr 24",
    excerpt: "Bộ lọc theo tag và chủ đề giúp người dùng tìm bài viết nhanh hơn.",
    category: "Design",
  },
  {
    id: 9,
    title: "Checklist hoàn thiện một trang home blog chuyên nghiệp",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    badge: "Hot",
    readTime: 6,
    rating: 4.7,
    ratingCount: 158,
    tag: "Checklist",
    date: "Apr 20",
    excerpt: "Tổng hợp các mục cần có để hoàn thiện trang blog của bạn trước khi ra mắt.",
    category: "Productivity",
  },
  {
    id: 10,
    title: "Thói quen buổi sáng giúp tăng năng suất cả ngày",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
    badge: "Hot",
    readTime: 7,
    rating: 4.6,
    ratingCount: 143,
    tag: "Lifestyle",
    date: "May 06",
    excerpt: "Xây dựng thói quen tốt ngay từ sáng sớm là nền tảng cho một ngày làm việc hiệu quả.",
    category: "Lifestyle",
  },
  {
    id: 11,
    title: "Cách tạo không gian sống tối giản và thư thái",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    readTime: 5,
    rating: 4.4,
    ratingCount: 87,
    tag: "Lifestyle",
    date: "Apr 30",
    excerpt: "Không gian sống gọn gàng giúp tâm trí thư thái và tập trung hơn trong công việc.",
    category: "Lifestyle",
  },
  {
    id: 12,
    title: "Top 5 điểm đến không thể bỏ qua ở miền Tây Nam Bộ",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
    badge: "Hot",
    readTime: 10,
    rating: 4.8,
    ratingCount: 230,
    tag: "Travel",
    date: "May 03",
    excerpt: "Miền Tây với sông nước hữu tình và ẩm thực đặc sắc luôn là điểm đến hấp dẫn.",
    category: "Travel",
  },
  {
    id: 13,
    title: "Kinh nghiệm du lịch bụi Đà Lạt tiết kiệm chi phí",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&h=400&fit=crop",
    readTime: 8,
    rating: 4.7,
    ratingCount: 175,
    tag: "Travel",
    date: "Apr 26",
    excerpt: "Bí kíp khám phá Đà Lạt với chi phí tối thiểu nhưng vẫn trọn vẹn trải nghiệm.",
    category: "Travel",
  },
  {
    id: 14,
    title: "Bài tập 15 phút mỗi ngày cho người bận rộn",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    badge: "Hot",
    readTime: 6,
    rating: 4.5,
    ratingCount: 198,
    tag: "Health",
    date: "Apr 29",
    excerpt: "Chỉ 15 phút mỗi ngày cũng đủ để duy trì sức khỏe tốt dù lịch trình bận rộn.",
    category: "Health",
  },
  {
    id: 15,
    title: "Chế độ ăn lành mạnh phù hợp với lập trình viên",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    readTime: 9,
    rating: 4.3,
    ratingCount: 112,
    tag: "Health",
    date: "Apr 22",
    excerpt: "Những gợi ý dinh dưỡng giúp lập trình viên duy trì năng lượng và tập trung.",
    category: "Health",
  },
];
