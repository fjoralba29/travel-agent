import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/layout/PageHeader";
import { travelReports } from "@/data/travel-reports";
import { getExcerpt } from "@/lib/excerpt";
import { getReadingTime } from "@/lib/reading-time";

export default function TravelReports() {
    return (
        <>
            <PageHeader
                eyebrow='Meine Reiseberichte'
                title='Orte, die ich selbst erlebt habe'
                subtitle='Persönliche Eindrücke, Tipps und Lieblingsplätze — direkt aus erster Hand.'
                currentLabel='Meine Reiseberichte'
                image='/images/reports/santorini/santorini11.jpeg'
            />

            <section className='py-20 sm:py-28'>
                <Container>
                    <div className='space-y-20 sm:space-y-28'>
                        {travelReports.map((report, index) => {
                            const excerpt =
                                getExcerpt(report.content) ||
                                report.description;
                            const readingTime = getReadingTime(report.content);

                            const href = `/meine-reiseberichte/${report.slug}`;
                            const reversed = index % 2 === 1;

                            return (
                                <article
                                    key={report.slug}
                                    className='grid items-center gap-8 lg:grid-cols-2 lg:gap-16'
                                >
                                    {/* Image */}
                                    <Link
                                        href={href}
                                        className={`group relative isolate block aspect-[4/3] transform-gpu overflow-hidden rounded-[2rem] shadow-lg ${
                                            reversed ? "lg:order-2" : ""
                                        }`}
                                    >
                                        <Image
                                            src={report.coverImage}
                                            alt={`${report.city}, ${report.country}`}
                                            fill
                                            priority={index === 0}
                                            sizes='(min-width: 1024px) 50vw, 100vw'
                                            className='object-cover transition-transform duration-700 group-hover:scale-105'
                                        />
                                    </Link>

                                    {/* Text */}
                                    <div>
                                        <p className='flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-amber-700'>
                                            <MapPin
                                                className='h-4 w-4'
                                                aria-hidden='true'
                                            />
                                            {report.country}
                                        </p>

                                        <h2 className='mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
                                            {report.title}
                                        </h2>

                                        <p className='mt-2 text-lg font-medium text-slate-500'>
                                            {report.subtitle}
                                        </p>

                                        <p className='mt-5 text-base leading-relaxed text-slate-600'>
                                            {excerpt}
                                        </p>

                                        <div className='mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500'>
                                            <span className='flex items-center gap-1.5'>
                                                <CalendarDays
                                                    className='h-4 w-4'
                                                    aria-hidden='true'
                                                />
                                                {report.date}
                                            </span>
                                            <span className='flex items-center gap-1.5'>
                                                <Clock
                                                    className='h-4 w-4'
                                                    aria-hidden='true'
                                                />
                                                {readingTime} Min. Lesezeit
                                            </span>
                                        </div>

                                        <Link
                                            href={href}
                                            className='mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700'
                                        >
                                            Entdecken
                                            <ArrowRight
                                                className='h-4 w-4'
                                                aria-hidden='true'
                                            />
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </Container>
            </section>
            {/* CTA */}
            <section className='bg-slate-50 py-20 sm:py-28'>
                <Container className='flex flex-col items-center gap-6 text-center'>
                    <h2 className='text-2xl font-bold text-slate-900 sm:text-3xl'>
                        Ihr Traumziel ist noch nicht dabei?
                    </h2>
                    <p className='max-w-md text-slate-600'>
                        Schreiben Sie mir, und wir planen gemeinsam Ihre nächste
                        Reise.
                    </p>
                    <Link
                        href='/kontakt'
                        className='inline-flex items-center gap-1.5 rounded-full bg-amber-900 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-700'
                    >
                        Kontakt aufnehmen
                        <ArrowRight
                            className='h-4 w-4'
                            aria-hidden='true'
                        />
                    </Link>
                </Container>
            </section>
        </>
    );
}
