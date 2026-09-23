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
        content: [
            "Opening paragraph about the trip...",
            "A paragraph about a specific place or experience...",
            "A closing paragraph with a tip or recommendation...",
        ],
        gallery: [
            "/images/reports/malta/malta1.jpeg",
            "/images/reports/malta/malta2.jpeg",
            "/images/reports/malta/malta3.jpeg",
            "/images/reports/malta/malta4.jpeg",
            "/images/reports/malta/malta5.jpeg",
            "/images/reports/malta/malta6.jpeg",
            "/images/reports/malta/malta7.jpeg",
            "/images/reports/malta/malta8.jpeg",
            "/images/reports/malta/malta9.jpeg",
            "/images/reports/malta/malta10.jpeg",
            "/images/reports/malta/malta11.jpeg",
            "/images/reports/malta/malta12.jpeg",
            "/images/reports/malta/malta13.jpeg",
        ],
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
        content: [
            "Opening paragraph about the trip...",
            "A paragraph about a specific place or experience...",
            "A closing paragraph with a tip or recommendation...",
        ],
        gallery: [
            "/images/reports/santorini/santorini1.jpeg",
            "/images/reports/santorini/santorini2.jpeg",
            "/images/reports/santorini/santorini3.jpeg",
            "/images/reports/santorini/santorini4.jpeg",
            "/images/reports/santorini/santorini5.jpeg",
            "/images/reports/santorini/santorini6.jpeg",
            "/images/reports/santorini/santorini7.jpeg",
            "/images/reports/santorini/santorini8.jpeg",
            "/images/reports/santorini/santorini9.jpeg",
            "/images/reports/santorini/santorini10.jpeg",
            "/images/reports/santorini/santorini11.jpeg",
            "/images/reports/santorini/santorini12.jpeg",
            "/images/reports/santorini/santorini13.jpeg",
            "/images/reports/santorini/santorini14.jpeg",
        ],
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
        content: [
            "Opening paragraph about the trip...",
            "A paragraph about a specific place or experience...",
            "A closing paragraph with a tip or recommendation...",
        ],
        gallery: [
            "/images/reports/saranda/saranda1.jpeg",
            "/images/reports/saranda/saranda2.jpeg",
            "/images/reports/saranda/saranda3.jpeg",
            "/images/reports/saranda/saranda4.jpeg",
            "/images/reports/saranda/saranda5.jpeg",
            "/images/reports/saranda/saranda6.jpeg",
            "/images/reports/saranda/saranda7.jpeg",
            "/images/reports/saranda/saranda8.jpeg",
            "/images/reports/saranda/saranda9.jpeg",
            "/images/reports/saranda/saranda10.jpeg",
            "/images/reports/saranda/saranda11.jpeg",
            "/images/reports/saranda/saranda12.jpeg",
            "/images/reports/saranda/saranda13.jpeg",
            "/images/reports/saranda/saranda14.jpeg",
            "/images/reports/saranda/saranda15.jpeg",
        ],
    },
];

export function getReportBySlug(slug: string) {
    return travelReports.find((report) => report.slug === slug);
}
