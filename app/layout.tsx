import type { Metadata } from "next";
import { site } from "@/content/site";
import { bootScript } from "@/lib/boot-script";
import { MotionProvider } from "@/components/motion/motion-provider";
import { ReviewMode } from "@/components/layout/review-mode";
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
        <MotionProvider>
          {children}
          <ReviewMode />
        </MotionProvider>
      </body>
    </html>
  );
}
