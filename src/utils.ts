export function truncateText(text: string, length: number = 40): string { // Truncate text
  if (text.length > length) { // If text length is greater than length
    return text.slice(0, length) + "..."; // Return text slice
  }
  return text; // Return text
}
