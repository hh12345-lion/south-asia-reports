import type { ReactNode } from "react";

/** Horizontal scroll wrapper for wide tables on mobile - prevents page-level overflow */
export function ResponsiveTableWrap({
  children,
  label = "Swipe horizontally to view full table",
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <div className="table-scroll">
      <p className="mb-2 text-xs text-ink-soft sm:sr-only">{label}</p>
      <div className="overflow-x-auto rounded-[14px] border border-rule bg-surface">{children}</div>
    </div>
  );
}
