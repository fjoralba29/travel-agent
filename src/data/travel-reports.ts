import type { TravelReport } from "@/types/travel-report";

export const travelReports: TravelReport[] = [
    {
        slug: "malta-malta",
        country: "Malta",
        city: "Malta",
        title: "Malta",
        subtitle: "An island nation in the Mediterranean",
        description:
            "Whitewashed villages, caldera views and where to watch the best sunset on the island.",
        coverImage: "/images/reports/malta/malta.jpeg",
        date: "2026-06-01",
        content: [],
    },
    {
        slug: "santorini-greece",
        country: "Greece",
        city: "Santorini",
        title: "Santorini",
        subtitle: "A guide to the Cyclades",
        description:
            "A slower side of Japan: quiet shrines, seasonal gardens and where to eat like a local.",
        coverImage: "/images/reports/santorini/santorini.jpeg",
        date: "2026-04-12",
        content: [],
    },
    {
        slug: "saranda-albania",
        country: "Albania",
        city: "Saranda",
        title: "Saranda",
        subtitle: "A coastal gem in southern Albania",
        description:
            "From Table Mountain sunrises to day trips through the Winelands.",
        coverImage: "/images/reports/saranda/saranda.jpeg",
        date: "2026-02-20",
        content: [],
    },
];

export function getReportBySlug(slug: string) {
    return travelReports.find((report) => report.slug === slug);
}
