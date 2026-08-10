import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { InstructionRail } from "@/components/layout/InstructionRail";
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
  /** Set false when a page adds its own CTA after extra sections (e.g. service FAQs) */
  showCta?: boolean;
  /** Set false on pages that already carry their own sidebar (e.g. contact) */
  rail?: boolean;
}) {
  // The parent breadcrumb doubles as the section kicker on the masthead.
  const kicker = breadcrumbs && breadcrumbs.length > 1 ? breadcrumbs.at(-2)?.label : undefined;

  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        breadcrumbs={breadcrumbs}
        kicker={kicker === "Home" ? undefined : kicker}
      />

      <div className="mx-auto min-w-0 max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className={rail ? "lg:grid lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16" : ""}>
          <main
            id="main"
            className="prose-safe min-w-0 overflow-x-hidden py-10 sm:py-12"
          >
            {children}
          </main>
          {rail && <InstructionRail />}
        </div>
      </div>

      {showCta && <CTASection />}
    </>
  );
}
