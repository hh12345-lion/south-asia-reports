"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import { postSubmitLead } from "@/lib/submit-lead";
import {
  CASE_PROFILES,
  COUNTRIES,
  FUNDING_OPTIONS,
  REPORT_TYPES,
} from "@/data/contact-options";

const inputClass =
  "w-full min-w-0 rounded-[8px] border border-[#D1DCE6] px-4 py-3 text-base text-[#374151] focus:border-[#1B2A4A] focus:outline-none focus:ring-1 focus:ring-[#1B2A4A] min-h-[44px]";
const labelClass = "mb-1 block text-sm font-medium text-[#1B2A4A]";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots only; reject silently
    if (String(data.get("website") ?? "").trim()) {
      router.push("/thank-you");
      return;
    }

    const reportType = String(data.get("report_type") ?? "").trim();
    const country = String(data.get("country") ?? "").trim();
    const profile = String(data.get("profile") ?? "").trim();
    const funding = String(data.get("funding") ?? "").trim();
    const summary = String(data.get("message") ?? "").trim();

    const summaryParts = [
      summary,
      reportType && `Report type: ${reportType}`,
      country && `Country: ${country}`,
      profile && `Profile: ${profile}`,
      funding && `Funding: ${funding}`,
    ].filter(Boolean);

    const payload = {
      fullName: String(data.get("name") ?? "").trim(),
      organisation: String(data.get("company") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      caseProfile: profile,
      region: country,
      funding,
      summary: summaryParts.join("\n"),
    };

    const ok = await postSubmitLead(payload);
    if (ok) router.push("/thank-you");
    else setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 space-y-5">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="name">
            Full Name *
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="company">
            Law Firm *
          </label>
          <input id="company" name="company" required autoComplete="organization" className={inputClass} />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="email">
            Email *
          </label>
          <input id="email" type="email" name="email" required autoComplete="email" className={inputClass} />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="phone">
            Telephone
          </label>
          <input id="phone" type="tel" name="phone" autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="country">
            Country
          </label>
          <select id="country" name="country" className={inputClass}>
            <option value="">Select country</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="profile">
            Profile
          </label>
          <select id="profile" name="profile" className={inputClass}>
            <option value="">Select profile</option>
            {CASE_PROFILES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="funding">
            Funding
          </label>
          <select id="funding" name="funding" className={inputClass}>
            <option value="">Select funding</option>
            {FUNDING_OPTIONS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="report_type">
            Report Type
          </label>
          <select id="report_type" name="report_type" className={inputClass}>
            <option value="">Select report type</option>
            {REPORT_TYPES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="message">
          Brief case description *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} min-h-[120px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again or email us at{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] bg-[#00796B] px-6 py-3 text-base font-semibold text-white hover:bg-[#00695C] disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Submitting..." : "Instruct a Report"}
      </button>
    </form>
  );
}
