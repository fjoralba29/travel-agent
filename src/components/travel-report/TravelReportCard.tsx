import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { TravelReport } from "@/types/travel-report";

export default function TravelReportCard({ report }: { report: TravelReport }) {
    return (
        <Link
            href={`/meine-reiseberichte/${report.slug}`}
            className='group relative block aspect-[5/6] w-full overflow-hidden rounded-3xl shadow-lg transition-shadow hover:shadow-2xl'
        >
            <Image
                src={report.coverImage}
                alt={`${report.city}, ${report.country}`}
                fill
                sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
                className='object-cover transition-transform duration-500 group-hover:scale-105'
            />

            {/* Color gradient rising from the bottom, like the reference */}
            <div className='absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-slate-900/90 via-slate-900/55 to-transparent' />

            <div className='absolute inset-x-0 bottom-0 p-5'>
                <p className='flex items-center gap-1.5 text-sm text-white/85'>
                    <MapPin
                        className='h-4 w-4 shrink-0'
                        aria-hidden='true'
                    />
                    {report.country}
                </p>

                <h3 className='mt-1.5 text-xl font-bold leading-snug text-white'>
                    {report.title}
                </h3>

                <p className='mt-2 line-clamp-2 text-sm leading-relaxed text-white/80'>
                    {report.description}
                </p>

                <span className='mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-amber-900 transition-colors group-hover:bg-amber-600 group-hover:text-white'>
                    Mehr Lesen
                    <ArrowRight
                        className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1'
                        aria-hidden='true'
                    />
                </span>
            </div>
        </Link>
    );
}
