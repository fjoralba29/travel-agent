export type TravelReport = {
    slug: string;
    country: string;
    city: string;
    title: string;
    subtitle: string;
    description: string;
    coverImage: string;
    gallery: string[];
    date: string; // ISO format, e.g. "2026-06-01"
    content: string[]; // paragraphs
};
