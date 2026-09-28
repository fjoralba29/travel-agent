import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

export default function Hero() {
    return (
        <section
            id='Start'
            className='relative isolate -mt-24 flex min-h-svh items-center overflow-hidden bg-amber-900 pt-16'
        >
            <Image
                src='/images/hero/hero1.jpg'
                alt='Describe what the photo shows, e.g. a beach in Greece at sunset'
                fill
                priority
                sizes='100vw'
                className='-z-10 object-cover'
            />

            <div
                className='absolute inset-0 -z-10 bg-slate-900/60'
                aria-hidden='true'
            />

            <Container className='py-16 lg:py-24'>
                <div className='grid items-center gap-12 lg:grid-cols-2'>
                    {/* Text */}
                    <div className='max-w-xl text-white'>
                        <p className='text-sm font-semibold uppercase tracking-widest text-amber-600'>
                            Ihr Reisebüro
                        </p>
                        <h1 className='mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
                            Persönliche Reiseberatung
                        </h1>
                        <p className='mt-6 text-lg text-slate-100'>
                            Unabhängig. Kompetent. Ohne Mehrkosten.
                        </p>

                        <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
                            <Button
                                href='/meine-reiseberichte'
                                variant='light'
                                className='bg-amber-600 text-white hover:bg-amber-700'
                            >
                                Reiseberichte lesen
                            </Button>
                            <Button
                                href='/kontakt'
                                variant='outlineLight'
                            >
                                Jetzt Reise anfragen
                            </Button>
                        </div>
                    </div>

                    {/* Portrait */}
                    <figure className='mx-auto flex flex-col items-center text-center lg:ml-auto lg:mr-0'>
                        <div className='aspect-square w-64 rounded-full bg-white p-2 shadow-2xl sm:w-72 lg:w-80'>
                            <div className='relative h-full w-full overflow-hidden rounded-full'>
                                <Image
                                    src='/images/hero/agent.jpeg'
                                    alt={`Portrait of ${siteConfig.agentName}`}
                                    fill
                                    sizes='(min-width: 1024px) 320px, 288px'
                                    className='object-cover'
                                />
                            </div>
                        </div>

                        <figcaption className='mt-6 text-white'>
                            <p className='text-2xl font-bold sm:text-3xl'>
                                {siteConfig.agentName}
                            </p>
                            <p className='mt-1 text-base font-semibold text-slate-200'>
                                {siteConfig.agentTitle}
                            </p>
                        </figcaption>
                    </figure>
                </div>
            </Container>
        </section>
    );
}
