import Image from "next/image";
import Container from "@/components/ui/Container";
import { expertiseItems } from "@/data/expertise";

// Slight up/down offsets per position, repeating every 3 items, for a loose,
// unaligned feel instead of a strict grid.
const offsets = ["lg:mt-0", "lg:mt-10", "lg:-mt-6"];

export default function Expertise() {
    return (
        <section
            id='meine-expertise'
            className='py-20 sm:py-28'
        >
            <Container>
                <div className='grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16'>
                    {/* Title beside the grid, sticky on scroll for large screens */}
                    <div className='lg:sticky lg:top-28 lg:self-start pt-32'>
                        <p className='text-sm font-semibold uppercase tracking-widest text-amber-700'>
                            MEINE SPEZIALGEBIETE
                        </p>
                        <h2 className='mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
                            Deine Reise, perfekt geplant – mit Herz & Know-how
                        </h2>
                        {/* <p className='mt-4 text-sm leading-relaxed text-slate-600'>
                            From weekend city breaks to month-long adventures,
                            here's what I plan most often.
                        </p> */}
                    </div>

                    {/* Cards, staggered instead of aligned in a strict row */}
                    <div className='grid grid-cols-2 gap-5 sm:grid-cols-2'>
                        {expertiseItems.map((item, index) => (
                            <div
                                key={item.title}
                                className={`group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md ${offsets[index % offsets.length]}`}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes='(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw'
                                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                                />

                                <span className='absolute left-4 top-4 max-w-[80%] rounded-lg bg-white/90 px-3 py-1.5 text-sm font-semibold text-slate-900 shadow-sm'>
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
