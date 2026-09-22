import type { Metadata } from "next";
import { Lexend, Petrona } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteRail } from "@/components/layout/SiteRail";
import { CookieConsentProvider } from "@/components/cookies";
import { ConsentDefaultsScript } from "@/components/cookies/ConsentDefaultsScript";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

export const dynamic = "force-dynamic";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const petrona = Petrona({
  subsets: ["latin"],
  variable: "--font-petrona",
  display: "swap",
  style: ["normal", "italic"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#261E18",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "South Asia Reports | Country Condition Expert Evidence",
    template: "%s",
  },
  description:
    "South Asia expert reports for asylum and immigration proceedings: Bangladesh, India, Sri Lanka, Nepal, and Bhutan. Matched country specialists for instructing counsel.",
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  alternates: {
    languages: {
      en: SITE_URL,
      "x-default": SITE_URL,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lexend.variable} ${petrona.variable} h-full`}>
      <body className="min-h-full bg-paper font-sans text-body antialiased">
        <ConsentDefaultsScript />
        <CookieConsentProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
          >
            Skip to content
          </a>
          <div className="lg:grid lg:min-h-full lg:grid-cols-[19.5rem_minmax(0,1fr)]">
            <SiteRail />
            <div className="flex min-h-full min-w-0 flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </div>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
