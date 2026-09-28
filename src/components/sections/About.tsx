import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site-config";
import AboutDescription from "../ui/AboutDescription";

export default function About() {
    return (
        <section
            id='uber-mich'
            className='py-20 sm:py-28'
        >
            <Container>
                <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-16'>
                    {/* Photo */}
                    <div className='relative mx-auto aspect-[4/5] w-full max-w-m overflow-hidden rounded-3xl shadow-xl lg:mx-0'>
                        <Image
                            src='/images/hero/agent1.jpeg'
                            alt={`Portrait of ${siteConfig.agentName}`}
                            fill
                            sizes='(min-width: 1024px) 400px, 90vw'
                            className='object-cover'
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <SectionHeading
                            eyebrow='ÜBER MICH'
                            title={`Über mich`}
                        />

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
                    </div>
                </div>
            </Container>
        </section>
    );
}
