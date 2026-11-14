import type { Metadata } from "next";
import { site } from "@/content/site";
import { bootScript } from "@/lib/boot-script";
import { MotionProvider } from "@/components/motion/motion-provider";
import { ReviewMode } from "@/components/layout/review-mode";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { UtmCapture } from "@/components/layout/utm-capture";
import { header } from "@/content/nav";
import { orgJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.description,
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-dvh bg-background text-foreground">
        <a href="#content" className="label-mono fixed top-2 left-2 z-90 -translate-y-24 bg-signal px-4 py-3 text-ink focus-visible:translate-y-0">
          {header.skip}
        </a>
        <MotionProvider>
          <Header />
          <main id="content" tabIndex={-1} className="focus-visible:outline-none">
            {children}
          </main>
          <Footer />
          <ReviewMode />
          <UtmCapture />
        </MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd()) }} />
      </body>
    </html>
  );
}
