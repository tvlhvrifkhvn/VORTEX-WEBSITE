import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

/* All public routes; /styleguide is internal and excluded. */
const routes = [
  "/", "/real-estate-va/", "/insurance-supplementing/", "/pricing/", "/savings-calculator/", "/work/",
  "/how-we-work/", "/about/", "/resources/", "/book-a-call/", "/faq/", "/privacy/", "/terms/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: new URL(path, site.url).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.includes("real-estate") || path.includes("supplementing") ? 0.9 : 0.6,
  }));
}
