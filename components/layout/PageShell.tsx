import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import type { Crumb } from "@/components/ui/Breadcrumbs";

export function PageShell({
  title,
  subtitle,
  breadcrumbs,
  children,
  showCta = true,
  rail = true,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  children: React.ReactNode;
  showCta?: boolean;
  /** Kept for callers; the site rail now lives in the root layout. */
  rail?: boolean;
}) {
  void rail;
  const kicker = breadcrumbs && breadcrumbs.length > 1 ? breadcrumbs.at(-2)?.label : undefined;

  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        breadcrumbs={breadcrumbs}
        kicker={kicker === "Home" ? undefined : kicker}
      />

      <main id="main" className="prose-safe mx-auto min-w-0 max-w-[52rem] overflow-x-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        {children}
      </main>

      {showCta && <CTASection />}
    </>
  );
}
