import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["OAI-SearchBot", "GPTBot"],
        allow: "/",
      },
    ],
    sitemap: "https://thestemgrid.com/sitemap.xml",
  };
}
