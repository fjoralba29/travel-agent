export function getReadingTime(paragraphs: string[]) {
    const words = paragraphs
        .join(" ")
        .trim()
        .split(/\s+/)
        .filter(Boolean).length;
    return Math.max(1, Math.round(words / 200)); // ~200 words per minute
}
