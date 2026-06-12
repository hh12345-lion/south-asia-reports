import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { asylumProfiles, getAsylumProfile } from "@/data/asylum-profiles";
import { getProfileRelatedLinks } from "@/data/related-links";
import { getCaseType } from "@/data/case-types";
import { ProfileGeoContent } from "@/components/profiles/ProfileGeoContent";
import { getProfileGeoContent } from "@/data/profile-geo";

export function generateStaticParams() {
  return asylumProfiles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profile = getAsylumProfile(slug);
  if (!profile) return {};
  return createMetadata({
    title: profile.metaTitle,
    description: profile.metaDescription,
    path: `/asylum-profiles/${slug}`,
  });
}

export default async function AsylumProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profile = getAsylumProfile(slug);
  if (!profile) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Asylum Profiles", href: "/asylum-profiles" },
    { label: profile.title },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={profile.faqs} />
      <PageShell title={profile.h1} breadcrumbs={crumbs}>
        {profile.content.map((p, i) => (
          <p key={i} className="prose-safe mb-4 text-sm text-[#374151] leading-relaxed sm:text-base">
            {p}
          </p>
        ))}

        <ProfileGeoContent blocks={getProfileGeoContent(slug)} />

        <h2 className="mt-8 break-words text-lg font-bold text-[#1B2A4A] sm:text-xl">Related Case Types</h2>
        <ul className="mt-4 space-y-1">
          {profile.relatedCaseTypes.map((s) => {
            const ct = getCaseType(s);
            return (
              <li key={s}>
                <Link href={`/case-types/${s}`} className="inline-flex min-h-[44px] items-center text-[#C4793A] hover:underline">
                  {ct?.title ?? s}
                </Link>
              </li>
            );
          })}
        </ul>

        <FAQSection faqs={profile.faqs} />
        <RelatedLinks links={getProfileRelatedLinks(slug)} />
      </PageShell>
    </>
  );
}
