import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site-config";

export default function About() {
    return (
        <section
            id='about'
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
                            eyebrow='About me'
                            title={`Hi, I'm ${siteConfig.agentName}`}
                        />

                        <div className='mt-6 space-y-4 text-base leading-relaxed text-slate-600'>
                            <p>
                                Write a couple of paragraphs here: how you got
                                into travel, what kind of trips you plan, and
                                why clients should trust you with theirs.
                            </p>
                            <p>
                                A second paragraph on your experience or a
                                personal story works well, e.g. years in the
                                industry, destinations you know best, or what
                                makes your approach different.
                            </p>
                        </div>

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
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
