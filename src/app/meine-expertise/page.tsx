import Image from "next/image";
import { ArrowRight, Compass } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/layout/PageHeader";
import { expertiseItems } from "@/data/expertise";

export default function Expertise() {
    const featured = expertiseItems[0];
    const rest = expertiseItems.slice(1);

    return (
        <>
            <PageHeader
                eyebrow='Meine Expertise'
                title='Für jede Art von Reise die richtige Idee'
                subtitle='Ob Strandurlaub, Städtetrip oder Familienreise – hier sehen Sie, worauf ich mich spezialisiert habe.'
                currentLabel='Meine Expertise'
                image='/images/expertise/travel.jpeg'
            />

            {/* INTRO */}
            <section className='bg-white py-16 sm:py-24'>
                <Container>
                    <div className='grid gap-8 lg:grid-cols-2 lg:items-end'>
                        <div>
                            <div className='mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500'>
                                <span className='h-px w-8 bg-slate-400' />
                                Reiseexpertise
                            </div>

                            <h2 className='max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
                                Reisen, die zu Ihnen passen.
                            </h2>
                        </div>

                        <p className='max-w-xl leading-7 text-slate-600 lg:ml-auto'>
                            Jede Reise ist anders. Deshalb plane ich Reisen
                            individuell und mit viel Liebe zum Detail –
                            abgestimmt auf Ihre Wünsche, Vorstellungen und
                            Bedürfnisse.
                        </p>
                    </div>
                </Container>
            </section>

            {/* EXPERTISE GRID */}
            <section className='pb-20 sm:pb-28'>
                <Container>
                    <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-12'>
                        {/* FEATURED */}
                        {featured && (
                            <div className='group relative overflow-hidden rounded-[2rem] sm:col-span-2 lg:col-span-7'>
                                <div className='relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-[1.35/1]'>
                                    <Image
                                        src={featured.image}
                                        alt={featured.title}
                                        fill
                                        priority
                                        sizes='(min-width: 1024px) 58vw, 100vw'
                                        className='object-cover transition-transform duration-700 group-hover:scale-105'
                                    />

                                    <div className='absolute inset-0 rounded-[2rem] bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent' />

                                    <h3 className='absolute bottom-0 left-0 p-7 text-2xl font-bold text-white sm:p-9 sm:text-3xl'>
                                        {featured.title}
                                    </h3>
                                </div>
                            </div>
                        )}

                        {/* OTHER ITEMS */}
                        <div className='grid gap-5 sm:col-span-2 sm:grid-cols-2 lg:col-span-5 lg:grid-rows-2'>
                            {rest.map((item) => (
                                <div
                                    key={item.title}
                                    className='group relative isolate aspect-[4/3] transform-gpu overflow-hidden rounded-[1.5rem] sm:aspect-[1.1/1] sm:last:odd:col-span-2 sm:last:odd:aspect-[2.2/1] lg:aspect-auto lg:last:odd:aspect-auto'
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes='(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw'
                                        className='object-cover transition-transform duration-700 group-hover:scale-105'
                                    />

                                    <div className='absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent' />

                                    <h3 className='absolute bottom-0 left-0 p-5 text-xl font-bold text-white sm:p-7 sm:text-2xl'>
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* PERSONAL APPROACH */}
            <section className='bg-slate-100 py-20 sm:py-28'>
                <Container>
                    <div className='grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center'>
                        <div>
                            <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm'>
                                <Compass
                                    className='h-5 w-5 text-slate-700'
                                    aria-hidden='true'
                                />
                            </div>

                            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-500'>
                                Persönliche Beratung
                            </p>

                            <h2 className='mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
                                Nicht jede Reise muss in eine Kategorie passen.
                            </h2>
                        </div>

                        <p className='max-w-2xl text-lg leading-8 text-slate-600'>
                            Vielleicht haben Sie bereits eine ganz bestimmte
                            Vorstellung oder möchten sich einfach inspirieren
                            lassen. Gemeinsam finden wir heraus, welche Art von
                            Reise am besten zu Ihnen passt.
                        </p>
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
