import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Nehmen Sie Kontakt auf, um Ihre nächste Reise gemeinsam zu planen.",
};

export default function ContactPage() {
    return <Contact />;
}
