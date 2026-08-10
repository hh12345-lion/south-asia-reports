import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

/**
 * Page masthead set on paper rather than a dark band: breadcrumb, section
 * kicker, display-serif title and a standfirst carried on an ochre rule.
 */
export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  kicker,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  kicker?: string;
}) {
  return (
    <section className="border-b border-rule bg-oat/60">
      <div className="mx-auto min-w-0 max-w-[1180px] px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}

        {kicker && <p className="kicker mt-6">{kicker}</p>}

        <h1 className="mt-4 max-w-4xl text-balance break-words font-display text-[1.85rem] leading-[1.12] text-ink min-[375px]:text-[2.1rem] sm:text-[2.6rem] lg:text-[3.1rem]">
          {title}
        </h1>

        {subtitle && (
          <p className="measure-wide mt-6 border-l-2 border-ochre pl-5 text-[17px] leading-relaxed text-ink-soft sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
