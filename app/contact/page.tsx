import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { UkServiceScope } from "@/components/ui/UkServiceScope";
import { SITE_EMAIL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Instruct a South Asia Country Expert Report",
  description:
    "Submit your case details to instruct a qualified South Asia country expert report for UK immigration tribunals. Legal Aid compatible. Response within 1 business day.",
  path: "/contact",
  noindex: true,
});

export default function ContactPage() {
  return (
    <PageShell
      title="Instruct a South Asia Country Expert Report"
      subtitle="Confidential case submission for UK solicitors and Legal Aid practitioners. Response within one business day."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    >
      <div className="grid min-w-0 gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="min-w-0 lg:col-span-2">
          <ContactForm />
        </div>
        <aside className="space-y-6">
          <div className="h-fit rounded-[8px] border border-[#D1DCE6] bg-[#F0F4F8] p-5 sm:p-6">
            <h2 className="font-bold text-[#1B2A4A]">Why instruct through South Asia Reports</h2>
            <ul className="mt-4 space-y-4 text-sm text-[#374151]">
              <li>Five South Asian countries covered: Bangladesh, India, Sri Lanka, Nepal, Bhutan</li>
              <li>Post-August 2024 Bangladesh and KK [2021] Sri Lanka specialists</li>
              <li>Legal Aid rates available for UK tribunal proceedings</li>
              <li>Immigration Tribunal Practice Direction compliant</li>
              <li>Response within 1 business day</li>
            </ul>
            <p className="mt-4 text-sm text-[#374151]">
              Enquiries:{" "}
              <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-[#C4793A] hover:underline">
                {SITE_EMAIL}
              </a>
            </p>
          </div>
          <UkServiceScope showDetail={false} />
        </aside>
      </div>
    </PageShell>
  );
}
