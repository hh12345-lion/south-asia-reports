#!/usr/bin/env python3
"""Generate site pages and components."""
from pathlib import Path

ROOT = Path(__file__).parent.parent

def w(path: str, content: str):
    p = ROOT / path
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content.strip() + "\n", encoding="utf-8")
    print("wrote", path)

# Footer
w("components/layout/Footer.tsx", '''
import Link from "next/link";

const services = [
  ["Country Reports", "/expertise-areas/country-conditions-human-rights"],
  ["LGBTQI+ Asylum", "/expertise-areas/lgbtqi-asylum-africa"],
  ["FGM & GBV", "/expertise-areas/fgm-gender-based-violence"],
  ["Trafficking", "/expertise-areas/trafficking-modern-slavery-africa"],
  ["Investment Arbitration", "/expertise-areas/investment-treaty-arbitration-africa"],
  ["African Law", "/expertise-areas/african-law-legal-systems"],
  ["Nationality", "/expertise-areas/nationality-statelessness"],
  ["Rebuttal Reports", "/guides/home-office-cpin-africa-rebuttal"],
];

export function Footer() {
  return (
    <footer className="border-t border-[#D1E3D8] bg-[#0D3B2E] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-semibold text-[#C8922A]">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {services.map(([label, href]) => (
                <li key={href}><Link href={href} className="hover:text-white min-h-[44px] inline-flex items-center">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#C8922A]">Regions & Countries</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/regions/east-africa" className="hover:text-white">East Africa</Link></li>
              <li><Link href="/regions/west-africa" className="hover:text-white">West Africa</Link></li>
              <li><Link href="/regions/horn-of-africa" className="hover:text-white">Horn of Africa</Link></li>
              <li><Link href="/regions/southern-africa" className="hover:text-white">Southern Africa</Link></li>
              <li><Link href="/regions/north-africa" className="hover:text-white">North Africa</Link></li>
              <li className="pt-2"><Link href="/countries/nigeria" className="hover:text-white">Nigeria</Link> · <Link href="/countries/somalia" className="hover:text-white">Somalia</Link></li>
              <li><Link href="/countries/eritrea" className="hover:text-white">Eritrea</Link> · <Link href="/countries/ethiopia" className="hover:text-white">Ethiopia</Link></li>
              <li><Link href="/countries" className="text-[#C8922A] hover:underline">View all 12 countries →</Link></li>
            </ul>
          </motion>
          <div>
            <h3 className="mb-4 font-semibold text-[#C8922A]">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/guides" className="hover:text-white">Solicitor Guides</Link></li>
              <li><Link href="/glossary" className="hover:text-white">Glossary</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/fees" className="hover:text-white">Fees Guide</Link></li>
              <li><Link href="/how-to-instruct" className="hover:text-white">How to Instruct</Link></li>
              <li><Link href="/what-is-an-africa-expert-witness" className="hover:text-white">What is an Africa Expert Witness?</Link></li>
            </ul>
          </motion>
          <div>
            <h3 className="mb-4 font-semibold text-[#C8922A]">About</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/experts" className="hover:text-white">Our Experts</Link></li>
              <li><Link href="/qualifications" className="hover:text-white">Qualifications</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/contact" className="text-[#C8922A] font-semibold hover:underline">Instruct an Expert</Link></li>
            </ul>
          </motion>
        </motion>
        <p className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/60">
          AfricaExpertWitness.com connects UK solicitors with Africa expert witnesses. We are not a law firm and do not provide legal advice.
        </p>
        <p className="mt-2 text-center text-xs text-white/50">
          <Link href="/privacy" className="hover:text-white">Privacy</Link> · <Link href="/terms" className="hover:text-white">Terms</Link>
        </p>
      </motion>
    </footer>
  );
}
'''.replace("motion", "div"))

# Contact form - client component
w("components/forms/ContactForm.tsx", '''
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AFRICAN_COUNTRIES, CASE_TYPES, KEY_ISSUES, URGENCY_OPTIONS, FUNDING_OPTIONS } from "@/data/african-countries";

const inputClass = "w-full rounded-[4px] border border-[#D1E3D8] px-4 py-3 text-[#374151] focus:border-[#0D3B2E] focus:outline-none focus:ring-1 focus:ring-[#0D3B2E] min-h-[44px]";
const labelClass = "mb-1 block text-sm font-medium text-[#0D3B2E]";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  const toggleIssue = (issue: string) => {
    setSelectedIssues((prev) => prev.includes(issue) ? prev.filter((i) => i !== issue) : [...prev, issue]);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formId) { setStatus("error"); return; }
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    selectedIssues.forEach((i) => data.append("key_issues", i));
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (res.ok) router.push("/thank-you");
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label className={labelClass}>Full Name *</label><input name="name" required className={inputClass} /></div>
        <div><label className={labelClass}>Law Firm / Organisation *</label><input name="organisation" required className={inputClass} /></div>
        <motion><label className={labelClass}>Email *</label><input type="email" name="email" required className={inputClass} /></motion>
        <motion><label className={labelClass}>Phone</label><input type="tel" name="phone" className={inputClass} /></motion>
      </motion>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>African Country/Region of Case *</label>
          <select name="country" required className={inputClass}>
            <option value="">Select country</option>
            {AFRICAN_COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </motion>
        <div>
          <label className={labelClass}>Case Type</label>
          <select name="case_type" className={inputClass}>
            <option value="">Select case type</option>
            {CASE_TYPES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </motion>
      </motion>
      <div>
        <p className={labelClass}>Key Issues</p>
        <div className="flex flex-wrap gap-2">
          {KEY_ISSUES.map((issue) => (
            <button key={issue} type="button" onClick={() => toggleIssue(issue)}
              className={`min-h-[44px] rounded-[4px] border px-3 py-2 text-sm ${selectedIssues.includes(issue) ? "border-[#0D3B2E] bg-[#0D3B2E] text-white" : "border-[#D1E3D8] bg-white text-[#374151]"}`}>
              {issue}
            </button>
          ))}
        </motion>
      </motion>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label className={labelClass}>Hearing/Deadline Date</label><input type="date" name="deadline" className={inputClass} /></div>
        <div>
          <label className={labelClass}>Funding</label>
          <select name="funding" className={inputClass}>
            {FUNDING_OPTIONS.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </motion>
        <div>
          <label className={labelClass}>Urgency</label>
          <select name="urgency" className={inputClass}>
            {URGENCY_OPTIONS.map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </motion>
      </motion>
      <div><label className={labelClass}>Brief Case Summary</label><textarea name="summary" rows={5} className={`${inputClass} min-h-[120px]`} /></div>
      {status === "error" && <p className="text-red-600 text-sm">Unable to submit. Please email info@africaexpertwitness.com directly.</p>}
      <button type="submit" disabled={status === "loading"} className="w-full min-h-[44px] rounded-[4px] bg-[#C8922A] px-6 py-3 font-semibold text-white hover:bg-[#b07f22] disabled:opacity-60 sm:w-auto">
        {status === "loading" ? "Submitting…" : "Instruct an Expert Witness"}
      </button>
    </form>
  );
}
'''.replace("motion", "motion").replace("motion", "div"))

# Card grid helper
w("components/ui/CardGrid.tsx", '''
import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link key={item.href} href={item.href}
          className="group rounded-[8px] border border-[#D1E3D8] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)] transition hover:border-[#0D3B2E] min-h-[44px]">
          <h3 className="font-semibold text-[#0D3B2E] group-hover:text-[#C8922A]">{item.title}</h3>
          <p className="mt-2 text-sm text-[#374151] leading-relaxed">{item.description}</p>
          <span className="mt-4 inline-block text-sm font-medium text-[#C8922A]">Learn more →</span>
        </Link>
      ))}
    </div>
  );
}
''')

# Page shell
w("components/layout/PageShell.tsx", '''
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import type { Crumb } from "@/components/ui/Breadcrumbs";

export function PageShell({
  title,
  subtitle,
  breadcrumbs,
  children,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">{children}</main>
      <CTASection />
    </>
  );
}
''')

print("Done partial gen")
