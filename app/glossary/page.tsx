import { Suspense } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { GlossarySearch } from "@/components/glossary/GlossarySearch";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { glossaryTerms } from "@/data/glossary";

export const metadata = createMetadata({
  title: "Country Report Glossary: South Asian Asylum Terms",
  description:
    "Plain-English definitions of terms that appear in South Asian country reports and instructions: KK [2021], CPIN, Hindutva, Awami League, Dalit, prior authority and more.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Glossary" }];
  const faqItems = glossaryTerms.map((t) => ({
    question: `What is ${t.term}?`,
    answer: t.definition,
  }));

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={faqItems} />
      <PageShell
        title="Country Report Glossary"
        subtitle={`${glossaryTerms.length} terms you will meet in South Asian country reports and instructions.`}
        breadcrumbs={crumbs}
      >
        <Suspense fallback={null}>
          <GlossarySearch terms={glossaryTerms} />
        </Suspense>
      </PageShell>
    </>
  );
}
