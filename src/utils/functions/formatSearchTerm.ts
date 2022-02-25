export function formatSearchTerm(searchTerm: string): string {
  const formatted = searchTerm
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\s/g, "+");
  return formatted;
}
