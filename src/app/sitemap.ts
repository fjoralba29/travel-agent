import type { MetadataRoute } from "next";
import { travelReports } from "@/data/travel-reports";
import { siteConfig } from "@/data/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = [
        "",
        "about",
        "travel-reports",
        "expertise",
        "contact",
        "imprint",
        "data-protection",
    ].map((path) => ({
        url: `${siteConfig.url}/${path}`.replace(/\/$/, "") + "/",
        lastModified: new Date(),
    }));

    const reportPages = travelReports.map((report) => ({
        url: `${siteConfig.url}/travel-reports/${report.slug}/`,
        lastModified: report.date,
    }));

    return [...staticPages, ...reportPages];
}
