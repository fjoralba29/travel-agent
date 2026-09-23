import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TravelReportCard from "@/components/travel-report/TravelReportCard";
import { travelReports } from "@/data/travel-reports";

export default function RelatedReports({
    currentSlug,
}: {
    currentSlug: string;
}) {
    const others = travelReports.filter(
        (report) => report.slug !== currentSlug,
    );
    if (others.length === 0) return null;

    return (
        <section className='bg-slate-50 py-20 sm:py-28'>
            <Container>
                <SectionHeading
                    eyebrow='Keep exploring'
                    title='More travel reports'
                    className='mx-auto text-center'
                />
                <div className='mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-14'>
                    {others.map((report) => (
                        <TravelReportCard
                            key={report.slug}
                            report={report}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
