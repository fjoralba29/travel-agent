"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AboutDescription({
    paragraphs,
    visibleCount = 2,
}: {
    paragraphs: string[];
    visibleCount?: number;
}) {
    const [expanded, setExpanded] = useState(false);
    const hasMore = paragraphs.length > visibleCount;
    const shown = expanded ? paragraphs : paragraphs.slice(0, visibleCount);

    return (
        <div>
            <div className='space-y-4 text-base leading-relaxed text-slate-600'>
                {shown.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            {hasMore && (
                <button
                    type='button'
                    onClick={() => setExpanded((value) => !value)}
                    aria-expanded={expanded}
                    className='mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-amber-700'
                >
                    {expanded ? "Weniger lesen" : "Mehr lesen"}
                    <ChevronDown
                        className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                        aria-hidden='true'
                    />
                </button>
            )}
        </div>
    );
}
