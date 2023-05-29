export function truncateText(text: string, length: number = 40): string {
  if (text.length > length) {
    return text.slice(0, length) + "...";
  }
  return text;
}
