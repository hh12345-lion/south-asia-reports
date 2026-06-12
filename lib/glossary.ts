/** Canonical glossary anchor IDs per SEO-ARCHITECTURE.md Appendix C */
export function glossaryAnchorId(term: string): string {
  return term
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
