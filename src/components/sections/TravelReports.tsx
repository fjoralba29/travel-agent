import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TravelReportCard from "@/components/travel-report/TravelReportCard";
import { travelReports } from "@/data/travel-reports";

export default function TravelReports() {
    return (
        <section
            id='reports'
            className='bg-slate-50 py-20 sm:py-28'
        >
            <Container>
                <SectionHeading
                    eyebrow='My travel reports'
                    title="Trips I've planned and taken myself"
                    className='mx-auto text-center'
                />

                <div className='mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4'>
                    {travelReports.map((report) => (
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
