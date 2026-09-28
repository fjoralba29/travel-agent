import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/layout/PageHeader";

export default function LegalLayout({
    eyebrow,
    title,
    currentLabel,
    children,
}: {
    eyebrow: string;
    title: string;
    currentLabel: string;
    children: ReactNode;
}) {
    return (
        <>
            <PageHeader
                eyebrow={eyebrow}
                title={title}
                currentLabel={currentLabel}
                className='!bg-amber-900'
            />

            <section className='py-16 sm:py-24'>
                <Container>
                    <div
                        className='max-w-3xl text-base leading-relaxed text-slate-700
              [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2:first-child]:mt-0
              [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900
              [&_p]:mt-4
              [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6
              [&_a]:font-semibold [&_a]:text-amber-700 [&_a]:underline hover:[&_a]:text-amber-900
              [&_mark]:rounded [&_mark]:bg-yellow-200 [&_mark]:px-1'
                    >
                        {children}
                    </div>
                </Container>
            </section>
        </>
    );
}
