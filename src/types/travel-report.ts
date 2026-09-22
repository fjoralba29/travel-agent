export type TravelReport = {
    slug: string;
    country: string;
    city: string;
    title: string;
    subtitle: string;
    description: string;
    coverImage: string;
    date: string; // ISO format, e.g. "2026-06-01"
    content: string[]; // paragraphs for the report page, filled in later
};
