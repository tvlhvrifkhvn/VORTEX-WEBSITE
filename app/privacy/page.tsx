import { meta, doc } from "@/content/legal/privacy";
import { pageMetadata } from "@/lib/seo";
import { LegalDoc } from "@/components/sections/shared/legal-doc";

export const metadata = pageMetadata(meta);

/* /privacy — DRAFT pending legal review (§11.12). */
export default function PrivacyPage() {
  return <LegalDoc crumb={meta.title} doc={doc} />;
}
