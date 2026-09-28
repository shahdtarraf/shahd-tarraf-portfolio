export type { Locale } from "../types/project";
import type { Locale, LocalizedText } from "../types/project";

export function tx(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

export function matchesQuery(
  haystack: string,
  query: string,
): boolean {
  return haystack.toLowerCase().includes(query.trim().toLowerCase());
}
