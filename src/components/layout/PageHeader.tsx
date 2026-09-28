import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function PageHeader({
    eyebrow,
    title,
    subtitle,
    currentLabel,
    image,
    className,
}: {
    eyebrow: string;
    title: string;
    subtitle?: string;
    currentLabel: string;
    /** Optional background photo path, e.g. "/images/hero/agent1.jpeg" */
    image?: string;
    className?: string;
}) {
    return (
        <div
            className={`relative -mt-20 overflow-hidden bg-slate-900 pb-20 pt-32 lg:-mt-18 lg:pb-28 lg:pt-40 ${className || ""}`}
        >
            {image && (
                <>
                    <Image
                        src={image}
                        alt=''
                        fill
                        priority
                        sizes='100vw'
                        className='object-cover opacity-30'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-amber-600/20 via-amber-600/15 to-amber-700/10' />
                </>
            )}
            {/* Decorative accent */}
            <Container className='relative'>
                <nav
                    aria-label='Breadcrumb'
                    className='flex items-center gap-1.5 text-sm text-slate-100'
                >
                    <Link
                        href='/'
                        className='hover:text-white'
                    >
                        Home
                    </Link>
                    <ChevronRight
                        className='h-3.5 w-3.5'
                        aria-hidden='true'
                    />
                    <span className='text-white'>{currentLabel}</span>
                </nav>

                <p className='mt-6 text-sm font-semibold uppercase tracking-widest text-amber-600'>
                    {eyebrow}
                </p>
                <h1 className='mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl'>
                    {title}
                </h1>
                {subtitle && (
                    <p className='mt-5 max-w-xl text-lg leading-relaxed text-slate-100'>
                        {subtitle}
                    </p>
                )}
            </Container>
        </div>
    );
}
