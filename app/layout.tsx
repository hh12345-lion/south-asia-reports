import type { Metadata } from "next";
import { Archivo, Newsreader } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider } from "@/components/cookies";
import { ConsentDefaultsScript } from "@/components/cookies/ConsentDefaultsScript";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
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
    <html lang="en-GB" className={`${archivo.variable} ${newsreader.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-body antialiased">
        <ConsentDefaultsScript />
        <CookieConsentProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[10px] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
          >
            Skip to content
          </a>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
