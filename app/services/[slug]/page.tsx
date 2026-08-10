import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CTASection } from "@/components/ui/CTASection";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { createMetadata } from "@/lib/metadata";
import { getServicePageFaqs } from "@/lib/service-faqs";
import { getService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const pageFaqs = getServicePageFaqs(service);

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.navLabel },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={pageFaqs} />
      <PageShell title={service.title} subtitle={service.description} breadcrumbs={crumbs} showCta={false}>
        {service.content.map((p, i) => (
          <p key={i} className="mb-4 text-body leading-relaxed">
            {p}
          </p>
        ))}

        <div className="mt-6">
          <ResponsiveTableWrap>
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr className="border-b border-rule bg-oat">
                  <th className="p-3 text-ink">Phase</th>
                  <th className="p-3 text-ink">What We Do</th>
                  <th className="p-3 text-ink">Deliverable</th>
                </tr>
              </thead>
              <tbody>
                {service.methodology.map((row) => (
                  <tr key={row.phase} className="border-b border-rule">
                    <td className="p-3 font-medium">{row.phase}</td>
                    <td className="p-3 text-body">{row.whatWeDo}</td>
                    <td className="p-3 text-body">{row.deliverable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTableWrap>
        </div>

        <Link
          href={service.relatedHref}
          className="mt-6 inline-block text-sm font-medium text-ochre hover:underline"
        >
          Related guidance and country pages
        </Link>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[12px] bg-indigo px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-deep sm:w-auto"
          >
            Contact Us
          </Link>
          <a
            href={`#${service.id}-faqs`}
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[12px] border border-ink px-6 py-3 text-sm text-ink hover:bg-oat sm:w-auto"
          >
            View all FAQs ({pageFaqs.length})
          </a>
        </div>
      </PageShell>

      <section className="border-t border-rule bg-oat" aria-labelledby={`${service.id}-faqs-heading`}>
        <div className="mx-auto min-w-0 max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <FAQSection
            faqs={pageFaqs}
            title={`${service.navLabel}: Frequently Asked Questions`}
            id={`${service.id}-faqs`}
            headingId={`${service.id}-faqs-heading`}
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
