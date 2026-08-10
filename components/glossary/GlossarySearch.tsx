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
    return terms.filter(
      (t) =>
        t.term.toLowerCase().includes(query) || t.definition.toLowerCase().includes(query)
    );
  }, [q, terms]);

  return (
    <>
      <label htmlFor="glossary-search" className="sr-only">
        Search glossary
      </label>
      <input
        id="glossary-search"
        type="search"
        placeholder="Search terms"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="mb-4 min-h-[48px] w-full max-w-md rounded-[10px] border border-rule bg-surface px-4 py-3 text-[16px] text-ink placeholder:text-ink-soft/60 focus:border-indigo focus:outline-none focus:ring-1 focus:ring-indigo"
      />

      <p className="mb-8 text-[14px] text-ink-soft" aria-live="polite">
        {filtered.length} of {terms.length} terms
      </p>

      <dl className="border-t border-rule">
        {filtered.map((t) => {
          const related = getGlossaryTermLinks(t.slug);
          return (
            <div key={t.slug} id={t.slug} className="scroll-mt-32 border-b border-rule py-6">
              <dt className="break-words font-display text-[1.2rem] text-ink">{t.term}</dt>
              <dd className="measure-wide mt-2 break-words leading-relaxed text-body">
                {t.definition}
              </dd>
              {related.length > 0 && (
                <dd className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                  {related.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="link-rule inline-flex min-h-[36px] items-center text-[14px] text-indigo"
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
