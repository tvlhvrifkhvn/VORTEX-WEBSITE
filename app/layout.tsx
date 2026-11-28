import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import { bootScript } from "@/lib/boot-script";
import { MotionProvider } from "@/components/motion/motion-provider";
import { ReviewMode } from "@/components/layout/review-mode";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { UtmCapture } from "@/components/layout/utm-capture";
import { header } from "@/content/nav";
import { VisitorProvider } from "@/components/layout/visitor-mode";
import { DeskSearch } from "@/components/layout/desk-search";
import { NextPager } from "@/components/layout/next-pager";
import { buildSearchIndex } from "@/lib/search-index";
import { cn } from "@/lib/utils";
import { jsonLdHtml, ogImage, siteJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: { siteName: site.name, locale: "en_US", type: "website", images: [ogImage] },
  twitter: { card: "summary_large_image", images: [ogImage.url] },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: site.themeColor, colorScheme: "light" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className={cn("min-h-dvh bg-background text-foreground", site.features.mobileActionBar && "max-md:pb-16")}>
        <a href="#content" className="label-mono fixed top-2 left-2 z-90 -translate-y-24 bg-signal px-4 py-3 text-ink focus-visible:translate-y-0">
          {header.skip}
        </a>
        <MotionProvider>
          <VisitorProvider>
            <Header />
            <main id="content" tabIndex={-1} className="focus-visible:outline-none">
              {children}
            </main>
            <NextPager />
            <Footer />
            {site.features.deskSearch && <DeskSearch index={buildSearchIndex()} />}
            <ReviewMode />
            <UtmCapture />
          </VisitorProvider>
        </MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(siteJsonLd())} />
      </body>
    </html>
  );
}
