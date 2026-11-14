import type { Metadata } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import type { FileId, PageMeta } from "@/content/types";

/* SEO helpers (SPEC §14). Canonicals resolve against NEXT_PUBLIC_SITE_URL via metadataBase in app/layout.tsx. */
export const ogImage = { url: "/og.png", width: 1200, height: 630, alt: `${site.name} — back office desk for US agents and contractors` };

/** Page metadata from a content `meta` object: title (templated "— VortexOne"), description, canonical, OG + Twitter. */
export function pageMetadata(meta: PageMeta): Metadata {
  // The root segment doesn't receive the layout's title template, so the home title is set in full.
  const title = meta.path === "/" ? { absolute: `${site.name} — ${meta.title}` } : meta.title;
  return {
    title,
    description: meta.description,
    alternates: { canonical: meta.path },
    openGraph: { title: meta.title, description: meta.description, url: meta.path, siteName: site.name, locale: "en_US", type: "website", images: [ogImage] },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [ogImage.url] },
  };
}

const abs = (path: string) => new URL(path, site.url).toString();
const address = { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" };

/** Organization + ProfessionalService JSON-LD for the root layout. Confirmed facts only (no US address, no ratings). */
export function siteJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": abs("/#org"),
      name: site.name,
      url: abs("/"),
      logo: abs("/favicon.svg"),
      email: site.contact.email,
      sameAs: [site.contact.linkedin],
      founder: { "@type": "Person", name: site.founder.name },
      address,
      contactPoint: { "@type": "ContactPoint", contactType: "sales", email: site.contact.email, areaServed: "US", availableLanguage: "en" },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": abs("/#service"),
      name: site.name,
      url: abs("/"),
      description: site.description,
      areaServed: "US",
      address,
      parentOrganization: { "@id": abs("/#org") },
      serviceType: services.map((s) => s.title),
    },
  ];
}

/** Service JSON-LD for a file page. */
export function serviceJsonLd(file: FileId, name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: abs(path),
    areaServed: "US",
    provider: { "@id": abs("/#org") },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name,
      itemListElement: services.filter((s) => s.file === file).map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.summary } })),
    },
  };
}

/** Render JSON-LD (one object or several). */
export const jsonLdHtml = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });
