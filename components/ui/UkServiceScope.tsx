import { UK_SERVICE_SCOPE_DETAIL, UK_SERVICE_SCOPE_INTRO, UK_SERVICE_SCOPE_POINTS, UK_SERVICE_SCOPE_TITLE } from "@/lib/constants";

type Props = {
  /** Show the longer jurisdictional disclaimer paragraph */
  showDetail?: boolean;
  className?: string;
};

/** Informational UK scope block — integrated page content, not a site-wide banner */
export function UkServiceScope({ showDetail = true, className = "" }: Props) {
  return (
    <aside
      className={`rounded-[8px] border border-[#D1DCE6] bg-[#F0F4F8] p-5 sm:p-6 ${className}`}
      aria-labelledby="uk-service-scope-heading"
    >
      <h2 id="uk-service-scope-heading" className="text-lg font-bold text-[#1B2A4A] sm:text-xl">
        {UK_SERVICE_SCOPE_TITLE}
      </h2>
      <p className="mt-3 text-sm text-[#374151] leading-relaxed sm:text-base">{UK_SERVICE_SCOPE_INTRO}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#374151] sm:text-base">
        {UK_SERVICE_SCOPE_POINTS.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {showDetail && (
        <p className="mt-4 text-sm text-[#374151] leading-relaxed">{UK_SERVICE_SCOPE_DETAIL}</p>
      )}
    </aside>
  );
}
