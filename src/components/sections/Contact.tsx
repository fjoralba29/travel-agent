import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";

export default function Contact() {
    return (
        <section
            id='contact'
            className='bg-slate-50 py-20 sm:py-28'
        >
            <Container>
                <SectionHeading
                    eyebrow='Contact'
                    title="Let's plan your next trip"
                    className='mx-auto text-center'
                />
                <p className='mx-auto mt-4 max-w-xl text-center text-slate-600'>
                    Tell me a bit about where you'd like to go and I'll get back
                    to you personally, usually within a day.
                </p>

                <div className='mt-12'>
                    <ContactInfo />
                </div>

                <div className='mt-8 rounded-3xl bg-white p-8 shadow-sm sm:p-10'>
                    <ContactForm />
                </div>
            </Container>
        </section>
    );
}
