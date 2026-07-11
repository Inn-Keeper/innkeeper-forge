const languageColors: Record<string, string> = {
  Rust: "#DE7356",
  TypeScript: "#5B9BD5",
  JavaScript: "#E8C547",
  Java: "#C49A6C",
  Python: "#6BA368",
  Go: "#56B6C2",
};

export function getLanguageColor(language: string | null): string {
  if (!language) return "#9C9288";
  return languageColors[language] ?? "#9C9288";
}
