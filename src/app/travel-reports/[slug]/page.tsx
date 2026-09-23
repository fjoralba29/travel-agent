import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import ShareButtons from "@/components/travel-report/ShareButtons";
import ReportGallery from "@/components/travel-report/ReportGallery";
import RelatedReports from "@/components/sections/RelatedReports";
import Contact from "@/components/sections/Contact";
import { travelReports, getReportBySlug } from "@/data/travel-reports";
import { siteConfig } from "@/data/site-config";
import { getReadingTime } from "@/lib/reading-time";

export function generateStaticParams() {
    return travelReports.map((report) => ({ slug: report.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const report = getReportBySlug(slug);
    if (!report) return {};

    return {
        title: report.title,
        description: report.description,
        alternates: { canonical: `/travel-reports/${report.slug}/` },
        openGraph: {
            title: report.title,
            description: report.description,
            images: [report.coverImage],
            type: "article",
            publishedTime: report.date,
        },
    };
}

export default async function TravelReportPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const report = getReportBySlug(slug);
    if (!report) notFound();

    // Picked once at build time from this report's gallery, falls back to the cover image.
    const heroImage =
        report.gallery.length > 0
            ? report.gallery[Math.floor(Math.random() * report.gallery.length)]
            : report.coverImage;
    console.log("Hero image:", heroImage);
    const readingTime = getReadingTime(report.content);
    const formattedDate = new Date(report.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const pageUrl = `${siteConfig.url}/travel-reports/${report.slug}/`;

    return (
        <>
            <article>
                {/* Hero image */}
                <div className='relative -mt-20 aspect-[21/9] max-h-[520px] w-full overflow-hidden lg:-mt-24'>
                    <Image
                        src={heroImage}
                        alt={`${report.city}, ${report.country}`}
                        fill
                        priority
                        sizes='100vw'
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent' />

                    <div className='absolute inset-x-0 bottom-0 pb-10 pt-20'>
                        <Container>
                            <p className='flex items-center gap-1.5 text-sm font-medium text-white/90'>
                                <MapPin
                                    className='h-4 w-4'
                                    aria-hidden='true'
                                />
                                {report.city}, {report.country}
                            </p>
                            <h1 className='mt-2 max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl'>
                                {report.title}
                            </h1>
                        </Container>
                    </div>
                </div>

                <Container>
                    {/* Meta row: agent + date + reading time */}
                    <div className='flex flex-col gap-6 border-b border-slate-200 py-8 sm:flex-row sm:items-center sm:justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='relative h-12 w-12 shrink-0 overflow-hidden rounded-full'>
                                <Image
                                    src='/images/hero/agent.jpeg'
                                    alt={siteConfig.agentName}
                                    fill
                                    sizes='48px'
                                    className='object-cover'
                                />
                            </div>
                            <div>
                                <p className='text-sm font-semibold text-slate-900'>
                                    {siteConfig.agentName}
                                </p>
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className='text-sm text-slate-500 hover:text-slate-900'
                                >
                                    {siteConfig.email}
                                </a>
                            </div>
                        </div>

                        <div className='flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500'>
                            <span className='flex items-center gap-1.5'>
                                <CalendarDays
                                    className='h-4 w-4'
                                    aria-hidden='true'
                                />
                                {formattedDate}
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <Clock
                                    className='h-4 w-4'
                                    aria-hidden='true'
                                />
                                {readingTime} min read
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className='max-w-3xl py-12'>
                        {report.content.length > 0 ? (
                            <div className='space-y-5 text-base leading-relaxed text-slate-700'>
                                {report.content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        ) : (
                            <p className='text-base leading-relaxed text-slate-700'>
                                {report.description}
                            </p>
                        )}

                        <div className='mt-10'>
                            <ShareButtons
                                url={pageUrl}
                                title={report.title}
                            />
                        </div>
                    </div>

                    {/* Gallery */}
                    {report.gallery.length > 0 && (
                        <div className='pb-16'>
                            <h2 className='mb-6 text-2xl font-bold text-slate-900'>
                                Gallery
                            </h2>
                            <ReportGallery
                                images={report.gallery}
                                alt={`${report.city}, ${report.country}`}
                            />
                        </div>
                    )}
                </Container>
            </article>

            <RelatedReports currentSlug={report.slug} />
            <Contact />
        </>
    );
}
