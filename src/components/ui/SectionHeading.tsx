import { cn } from "@/lib/utils";

export default function SectionHeading({
    eyebrow,
    title,
    className,
}: {
    eyebrow?: string;
    title: string;
    className?: string;
}) {
    return (
        <div className={cn("max-w-2xl", className)}>
            {eyebrow && (
                <p className='text-sm font-semibold uppercase tracking-widest text-amber-700'>
                    {eyebrow}
                </p>
            )}
            <h2 className='mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
                {title}
            </h2>
        </div>
    );
}
