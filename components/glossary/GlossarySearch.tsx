"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import type { GlossaryTerm } from "@/data/glossary";
import { getGlossaryTermLinks } from "@/lib/glossary-links";

export function GlossarySearch({ terms }: { terms: GlossaryTerm[] }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.toLowerCase().trim();
    if (!query) return terms;
    return terms.filter((t) => t.term.toLowerCase().includes(query) || t.definition.toLowerCase().includes(query));
  }, [q, terms]);

  return (
    <>
      <label htmlFor="glossary-search" className="sr-only">
        Search glossary
      </label>
      <input
        id="glossary-search"
        type="search"
        placeholder="Search terms…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="mb-8 w-full max-w-md rounded-[8px] border border-[#D1DCE6] px-4 py-3 min-h-[44px] focus:border-[#1B2A4A] focus:outline-none focus:ring-1 focus:ring-[#1B2A4A]"
      />
      <dl className="space-y-6">
        {filtered.map((t) => {
          const related = getGlossaryTermLinks(t.slug);
          return (
            <div
              key={t.slug}
              id={t.slug}
              className="scroll-mt-24 rounded-[8px] border border-[#D1DCE6] bg-white p-4 sm:p-5"
            >
              <dt className="break-words font-semibold text-[#1B2A4A]">{t.term}</dt>
              <dd className="mt-2 break-words text-[#374151] leading-relaxed">{t.definition}</dd>
              {related.length > 0 && (
                <dd className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-[#D1DCE6] pt-4">
                  {related.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex min-h-[44px] items-center text-sm font-medium text-[#C4793A] hover:underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </dd>
              )}
            </div>
          );
        })}
      </dl>
    </>
  );
}
