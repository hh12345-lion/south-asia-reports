import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { guides, getGuide } from "@/data/guides";
import { getGuideRelatedLinks } from "@/data/related-links";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return createMetadata({ title: g.metaTitle, description: g.metaDescription, path: `/guides/${slug}` });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const path = `/guides/${slug}`;
  const crumbs = [{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: guide.h1 }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={guide.faqs} />
      <JsonLd
        data={articleSchema({
          title: guide.h1,
          description: guide.metaDescription,
          path,
        })}
      />
      <PageShell title={guide.h1} breadcrumbs={crumbs}>
        {guide.content.map((p, i) => (
          <p key={i} className="mb-4 text-body leading-relaxed">
            {p}
          </p>
        ))}
        {guide.faqs && guide.faqs.length > 0 && <FAQSection faqs={guide.faqs} />}
        <RelatedLinks links={getGuideRelatedLinks(slug)} />
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[50px] items-center rounded-[10px] bg-indigo px-7 font-medium text-paper transition-colors hover:bg-indigo-deep"
        >
          Lodge a case
        </Link>
      </PageShell>
    </>
  );
}
