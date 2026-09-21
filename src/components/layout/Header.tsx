import Link from "next/link";
import Container from "@/components/ui/Container";
import MobileMenu from "@/components/layout/MobileMenu";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

export default function Header() {
    return (
        <header className='sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur'>
            <Container className='flex h-16 items-center justify-between'>
                {/* Text logo for now. Later swap for:
            <Image src="/logo.svg" alt={siteConfig.name} width={140} height={40} priority /> */}
                <Link
                    href='/'
                    className='text-xl font-semibold tracking-tight'
                >
                    {siteConfig.name}
                </Link>

                <nav
                    aria-label='Main navigation'
                    className='hidden items-center gap-8 lg:flex'
                >
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className='text-sm font-medium text-slate-700 transition-colors hover:text-slate-900'
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className='flex items-center gap-3'>
                    <WhatsAppButton className='hidden lg:inline-flex' />
                    <MobileMenu />
                </div>
            </Container>
        </header>
    );
}
