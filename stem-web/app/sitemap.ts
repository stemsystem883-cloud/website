import type { MetadataRoute } from "next";

const BASE = "https://stem.africa";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/platform", priority: 0.9, changeFrequency: "monthly" },
    { url: "/solutions", priority: 0.9, changeFrequency: "monthly" },
    { url: "/use-cases", priority: 0.85, changeFrequency: "monthly" },
    { url: "/insights", priority: 0.8, changeFrequency: "weekly" },
    { url: "/about", priority: 0.75, changeFrequency: "monthly" },
    { url: "/request-call", priority: 0.9, changeFrequency: "monthly" },
  ] as const;

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
