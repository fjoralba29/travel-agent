import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Expertise from "@/components/sections/Expertise";
import Hero from "@/components/sections/Hero";
import TravelReports from "@/components/sections/TravelReports";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <TravelReports />
            <Expertise />
            <Contact />
        </>
    );
}
