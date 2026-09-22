import { cn } from "@/lib/utils";

export default function ExpertiseSectionHeading({
    eyebrow,
    title,
    className,
    eyebrowClassName,
    titleClassName,
}: {
    eyebrow?: string;
    title: string;
    className?: string;
    eyebrowClassName?: string;
    titleClassName?: string;
}) {
    return (
        <div className={cn("max-w-2xl", className)}>
            {eyebrow && (
                <p
                    className={cn(
                        "text-sm font-semibold uppercase tracking-widest text-emerald-700",
                        eyebrowClassName,
                    )}
                >
                    {eyebrow}
                </p>
            )}
            <h2
                className={cn(
                    "mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl",
                    titleClassName,
                )}
            >
                {title}
            </h2>
        </div>
    );
}
