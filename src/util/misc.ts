import type { CollectionEntry } from "astro:content";

export function isRecentCareerEntry(date = 1990) {
  return (entry: CollectionEntry<"career">) => (entry.data.year >= date || (entry.data.yearTo ?? date) > date);
}

export function sortCareerEntries(entry1: CollectionEntry<"career"|"education">, entry2: CollectionEntry<"career"|"education">) {
  if (entry1.data.current !== entry2.data.current) {
    return entry1.data.current ? 1 : -1;
  }
	if (entry1.data.year !== entry2.data.year) {
    return entry1.data.year - entry2.data.year;
	}

  return (entry1.data.seq || 0) - (entry2.data.seq || 0);
}

export function sortProjectEntries(entry1: CollectionEntry<"projects">, entry2: CollectionEntry<"projects">) {
  return (entry1.data.seq || 0) - (entry2.data.seq || 0);
}


export function sortTechEntries(entry1: CollectionEntry<"tech">, entry2: CollectionEntry<"tech">) {
	if ((entry1.data.seq || 0) === (entry2.data.seq || 0)) {
		return entry1.data.category < entry2.data.category ? -1 : 1;
	} else {
		return (entry1.data.seq || 0) - (entry2.data.seq || 0);
	}}


export function formatYear(data: CollectionEntry<"career"|"education">["data"]) {
	return data.year + (data.current ? `-${formatTwoDigitYear(new Date().getFullYear())}` : data.yearTo ? `-${formatTwoDigitYear(data.yearTo)}` : "");
}

export function formatYear2(data: CollectionEntry<"quals">["data"]) {
	return data.year + (data.yearTo ? `-${formatTwoDigitYear(data.yearTo)}` : "");
}

export function formatTwoDigitYear(year: number) {
  const result = `${year % 100}`;
  return result.length === 1 ? `0${result}` : result;
}