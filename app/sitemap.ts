import { MetadataRoute } from "next";

const BASE = "https://kitronferrier.com";
const LAST_MODIFIED = new Date("2026-02-14");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/about`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/projects`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/faith-media`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
  ];
}
