import type { Metadata } from "next";
import { SITE_URL } from "./constants";
import { normalizeSeoDescription, normalizeSeoTitle } from "./seo/meta";

const OG_IMAGE_ALT = "South Asia Reports";

export const OPEN_GRAPH_IMAGE = {
  url: `${SITE_URL}/og-default.jpg`,
  width: 1200,
  height: 630,
  alt: OG_IMAGE_ALT,
} as const;

export function createMetadata({
  title,
  description,
  path = "",
  noindex = false,
  follow = true,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
  follow?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const seoTitle = normalizeSeoTitle(title);
  const seoDescription = normalizeSeoDescription(description);
  return {
    title: { absolute: seoTitle },
    description: seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url,
      siteName: "South Asia Reports",
      locale: "en",
      type: "website",
      images: [OPEN_GRAPH_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [OPEN_GRAPH_IMAGE.url],
    },
    robots: noindex
      ? { index: false, follow, googleBot: { index: false, follow } }
      : { index: true, follow: true },
  };
}
