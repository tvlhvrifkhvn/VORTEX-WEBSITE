import type { Metadata } from "next";
import { site } from "@/content/site";
import type { PageMeta } from "@/content/types";

/** Build page metadata from a content `meta` object. Completed in S8 (§14). */
export function pageMetadata(meta: PageMeta): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.path },
    openGraph: { title: meta.title, description: meta.description, url: meta.path, siteName: site.name, locale: "en_US", type: "website" },
  };
}

/** Organization JSON-LD for the root layout. Only confirmed facts (no US address, no founding date). */
export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.contact.email,
    sameAs: [site.contact.linkedin],
    founder: { "@type": "Person", name: site.founder.name },
    address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
    areaServed: "US",
  };
}
