"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import MobileMenu from "@/components/layout/MobileMenu";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Header() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Transparent only on the home page, at the very top, with the menu closed
    const transparent = isHome && !scrolled && !menuOpen;

    return (
        <header
            className={cn(
                "sticky top-0 z-50 transition-colors duration-300",
                transparent ? "bg-transparent" : "bg-white shadow-sm",
            )}
        >
            <Container className='flex h-20 items-center justify-between lg:h-24'>
                <Link
                    href='/'
                    aria-label={siteConfig.name}
                    className='flex h-20 w-32 items-center justify-center self-start lg:h-40 lg:w-48 lg:rounded-b-[2.5rem]'
                >
                    <Image
                        src='/logo_site.svg'
                        alt={siteConfig.name}
                        width={400}
                        height={280}
                        priority
                        className='h-auto max-h-full w-auto max-w-full object-contain'
                    />
                </Link>

                <nav
                    aria-label='Main navigation'
                    className='hidden items-center gap-8 lg:flex'
                >
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors",
                                transparent
                                    ? "text-white/90 hover:text-white"
                                    : "text-slate-700 hover:text-slate-900",
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className='flex items-center gap-3'>
                    <WhatsAppButton className='hidden lg:inline-flex' />
                    <MobileMenu
                        open={menuOpen}
                        onOpenChange={setMenuOpen}
                        transparent={transparent}
                    />
                </div>
            </Container>
        </header>
    );
}
