import {
  UK_SERVICE_SCOPE_DETAIL,
  UK_SERVICE_SCOPE_INTRO,
  UK_SERVICE_SCOPE_POINTS,
  UK_SERVICE_SCOPE_TITLE,
} from "@/lib/constants";

type Props = {
  /** Show the longer jurisdictional disclaimer paragraph */
  showDetail?: boolean;
  className?: string;
};

/** Informational UK scope block — integrated page content, not a site-wide banner */
export function UkServiceScope({ showDetail = true, className = "" }: Props) {
  return (
    <aside
      className={`rounded-[14px] border border-rule bg-oat/70 p-5 sm:p-6 ${className}`}
      aria-labelledby="uk-service-scope-heading"
    >
      <h2 id="uk-service-scope-heading" className="font-display text-xl text-ink">
        {UK_SERVICE_SCOPE_TITLE}
      </h2>
      <p className="mt-3 leading-relaxed text-body">{UK_SERVICE_SCOPE_INTRO}</p>
      <ul className="mt-5 space-y-2.5">
        {UK_SERVICE_SCOPE_POINTS.map((point) => (
          <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-body">
            <span aria-hidden="true" className="mt-2.5 h-px w-3.5 flex-none bg-ochre" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {showDetail && (
        <p className="mt-5 border-t border-rule pt-4 text-[14.5px] leading-relaxed text-ink-soft">
          {UK_SERVICE_SCOPE_DETAIL}
        </p>
      )}
    </aside>
  );
}
