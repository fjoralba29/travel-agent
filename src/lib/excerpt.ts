export function getExcerpt(paragraphs: string[], maxLength = 180) {
    const clean = paragraphs
        .map((p) => p.replace(/<[^>]*>/g, "").trim())
        .filter((p) => p.length > 80); // skips short title-only lines

    const source = clean[0] ?? "";
    if (source.length <= maxLength) return source;

    // Cut at the last full word so it doesn't end mid-word
    return source.slice(0, maxLength).replace(/\s+\S*$/, "") + "…";
}
