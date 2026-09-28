import Link from "next/link";
import Container from "@/components/ui/Container";
import { footerLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className='border-t border-slate-200 bg-slate-50'>
            <Container className='flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-600 sm:flex-row'>
                <p>
                    © {year} {siteConfig.name}. Alle Rechte vorbehalten.
                </p>
                <nav
                    aria-label='Legal'
                    className='flex gap-6'
                >
                    {footerLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className='hover:text-slate-900'
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </Container>
        </footer>
    );
}
