import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const ogImage =
  "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&h=630&q=80";

export const metadata: Metadata = {
  title: {
    default: "El Paso Holocaust Museum and Study Center",
    template: "%s | El Paso Holocaust Museum and Study Center",
  },
  description:
    "Texas's only Holocaust museum. Bilingual exhibitions, education, archives, and remembrance programs in downtown El Paso, serving the Paso del Norte region.",
  openGraph: {
    type: "website",
    siteName: "El Paso Holocaust Museum and Study Center",
    title: "El Paso Holocaust Museum and Study Center",
    description:
      "Texas's only Holocaust museum. Bilingual exhibitions, education, archives, and remembrance programs in downtown El Paso.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Desert mountains rising above the Chihuahuan Desert near El Paso at dusk.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Paso Holocaust Museum and Study Center",
    description:
      "Texas's only Holocaust museum — bilingual programs in downtown El Paso.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
