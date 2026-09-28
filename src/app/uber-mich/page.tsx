import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/layout/PageHeader";
import AboutDescription from "@/components/ui/AboutDescription";
import { siteConfig } from "@/data/site-config";

const quickFacts = [
    { label: "Herkunft", value: "Saranda, Albanien" },
    { label: "Zuhause", value: "Deutschland" },
    { label: "Beruf", value: "IT Supplier Manager" },
    { label: "Herz schlägt für", value: "Reisen & Kulturen" },
];

export default function About() {
    return (
        <>
            <PageHeader
                eyebrow='Über mich'
                title='Hinter jeder Reise steckt eine Geschichte'
                subtitle='Albanerin, Wahl-Deutsche, Mutter, Reisebegeisterte — lernen Sie mich etwas näher kennen.'
                currentLabel='Über mich'
                image='/images/reports/saranda/saranda1.jpeg'
            />

            {/* Photo + bio */}
            <section className='py-20 sm:py-28'>
                <Container>
                    <div className='grid items-start gap-12 lg:grid-cols-2 lg:gap-16'>
                        <div className='relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-xl lg:sticky lg:top-28 lg:mx-0'>
                            <Image
                                src='/images/hero/agent1.jpeg'
                                alt={`Portrait von ${siteConfig.agentName}`}
                                fill
                                sizes='(min-width: 1024px) 448px, 90vw'
                                className='object-cover'
                            />
                        </div>

                        <div>
                            <AboutDescription
                                paragraphs={[
                                    "Ich bin Olesja – Albanerin, Wahl-Deutsche, Mutter von zwei wunderbaren Kindern und stolze Katzen- und Hundemama von Sussi, Saltzi und meinem Golden Retriever Onyx. Mein Leben ist eine bunte Mischung aus Familie, Reisen, internationalen Begegnungen und spannenden beruflichen Herausforderungen.",
                                    "Beruflich arbeite ich als IT Supplier Manager und bewege mich täglich zwischen Technologie, Verhandlungen und internationalen Partnerschaften. Privat schlägt mein Herz für das Reisen, gutes Essen, neue Kulturen und besondere Orte mit Geschichte.",
                                    "Meine Heimat Saranda an der albanischen Riviera hat einen ganz besonderen Platz in meinem Herzen. Gleichzeitig liebe ich es, die Welt zu entdecken, durch historische Altstädte zu schlendern, lokale Spezialitäten zu probieren und versteckte Orte abseits der bekannten Touristenpfade zu finden. Wer mich kennt, weiß: Über Orte, die ich liebe, könnte ich stundenlang sprechen.",
                                    "Auf diesem Blog teile ich persönliche Reiseerlebnisse, praktische Tipps und meine Lieblingsorte aus aller Welt. Dabei geht es mir nicht nur um Sehenswürdigkeiten, sondern vor allem um die Menschen, Geschichten und besonderen Momente, die eine Reise unvergesslich machen.",
                                    "Wenn ich nicht unterwegs bin, verbringe ich meine Zeit am liebsten mit meiner Familie, Sussi, Saltzi und Onyx. Sie erinnern mich jeden Tag daran, wie wichtig Neugier, Zusammenhalt und die Freude an den kleinen Dingen des Lebens sind.",
                                    "Kurz gesagt: Ich liebe es, neue Erfahrungen zu sammeln, die Welt mit offenen Augen zu entdecken und meine Begeisterung für besondere Orte mit anderen zu teilen. Jede Reise erzählt ihre eigene Geschichte – und genau diese Geschichten möchte ich weitergeben.",
                                ]}
                            />

                            <a
                                href={siteConfig.linkedinUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-900'
                            >
                                <FaLinkedin
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                />
                                Vernetzen Sie sich auf LinkedIn
                            </a>

                            {/* Quick facts */}
                            <dl className='mt-12 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-4'>
                                {quickFacts.map((fact) => (
                                    <div key={fact.label}>
                                        <dt className='text-xs font-semibold uppercase tracking-wide text-slate-500'>
                                            {fact.label}
                                        </dt>
                                        <dd className='mt-1 text-sm font-medium text-slate-900'>
                                            {fact.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Pull quote */}
            <section className='bg-slate-100 py-16 sm:py-20'>
                <Container>
                    <blockquote className='mx-auto max-w-3xl text-center'>
                        <p className='text-2xl font-semibold leading-snug text-slate-700 sm:text-3xl'>
                            „Ich liebe es, neue Erfahrungen zu sammeln, die Welt
                            mit offenen Augen zu entdecken und meine
                            Begeisterung für besondere Orte mit anderen zu
                            teilen.“
                        </p>
                        <footer className='mt-4 text-sm font-medium text-slate-900'>
                            — {siteConfig.agentName}
                        </footer>
                    </blockquote>
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
