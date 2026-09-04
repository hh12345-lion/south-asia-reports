/** Ahrefs / Google SERP limits — applied centrally in createMetadata */
export const SEO_TITLE_MAX = 60;
export const SEO_DESCRIPTION_MAX = 155;
export const SEO_DESCRIPTION_MIN = 120;

function truncateAtWord(value: string, max: number): string {
  if (value.length <= max) return value;
  const slice = value.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > max * 0.6 ? slice.slice(0, lastSpace) : slice;
  return `${cut.trim()}…`;
}

export function normalizeSeoTitle(title: string): string {
  const cleaned = title.replace(/\s*\|\s*South Asia Reports\s*$/i, "").trim();
  return truncateAtWord(cleaned, SEO_TITLE_MAX);
}

export function normalizeSeoDescription(description: string): string {
  const trimmed = description.trim();
  if (trimmed.length > SEO_DESCRIPTION_MAX) {
    return truncateAtWord(trimmed, SEO_DESCRIPTION_MAX);
  }
  return trimmed;
}
