import type { Metadata } from "next";
import { Lexend, Petrona } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteRail } from "@/components/layout/SiteRail";
import { CookieConsentProvider } from "@/components/cookies";
import { ConsentDefaultsScript } from "@/components/cookies/ConsentDefaultsScript";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

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
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "South Asia Expert Reports UK | Bangladesh, India, Sri Lanka & Nepal Country Condition Reports",
    template: "%s | South Asia Reports",
  },
  description:
    "United Kingdom expert reports for South Asian asylum appeals: Bangladesh, India, Sri Lanka, Nepal, and Bhutan. For UK immigration solicitors, FTT/UT proceedings, and Legal Aid practitioners only.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  alternates: {
    languages: {
      "en-GB": SITE_URL,
      "en-US": SITE_URL,
      "x-default": SITE_URL,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${lexend.variable} ${petrona.variable} h-full`}>
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
