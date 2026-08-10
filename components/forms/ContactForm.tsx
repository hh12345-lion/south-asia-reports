"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import { postSubmitLead } from "@/lib/submit-lead";
import { COUNTRIES } from "@/data/contact-options";

const fieldClass =
  "w-full min-w-0 min-h-[48px] rounded-[10px] border border-rule bg-surface px-4 py-3 text-[16px] text-ink placeholder:text-ink-soft/60 focus:border-indigo focus:outline-none focus:ring-1 focus:ring-indigo";
const labelClass = "mb-1.5 block font-display text-[15px] text-ink";

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

    const payload = {
      fullName: String(data.get("name") ?? "").trim(),
      organisation: String(data.get("company") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: "",
      caseProfile: "",
      region: String(data.get("country") ?? "").trim(),
      funding: "",
      summary: String(data.get("message") ?? "").trim(),
    };

    const ok = await postSubmitLead(payload);
    if (ok) router.push("/thank-you");
    else setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="name">
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" className={fieldClass} />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="company">
            Firm
          </label>
          <input
            id="company"
            name="company"
            required
            autoComplete="organization"
            className={fieldClass}
          />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="country">
            Country
          </label>
          <select id="country" name="country" required className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 min-w-0">
        <label className={labelClass} htmlFor="message">
          The case
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Profile, hearing date, and whether funding is Legal Aid or private."
          className={`${fieldClass} min-h-[120px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-[10px] border border-rule bg-oat px-4 py-3 text-[15px] text-ink">
          That did not send. Please email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="link-rule font-medium">
            {SITE_EMAIL}
          </a>{" "}
          instead.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-[50px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-indigo px-8 font-medium text-paper transition-colors hover:bg-indigo-deep disabled:opacity-60 sm:w-auto"
        >
          {status === "loading" ? "Sending" : "Send case details"}
        </button>
        <p className="text-[13.5px] text-ink-soft">
          Confidential. Never shared with the Home Office.
        </p>
      </div>
    </form>
  );
}
