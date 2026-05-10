import type { MetadataRoute } from "next";
import { posts, CATEGORIES } from "@/components/home/data";

const BASE_URL = "https://nguyenvinhthien.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/post/${post.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categoryUrls: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/danh-muc?cat=${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/danh-muc`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    ...categoryUrls,
    ...postUrls,
  ];
}
