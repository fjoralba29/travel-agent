"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function MobileMenu({
    open,
    onOpenChange,
    transparent,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    transparent: boolean;
}) {
    return (
        <div className='lg:hidden'>
            <button
                type='button'
                onClick={() => onOpenChange(!open)}
                aria-expanded={open}
                aria-controls='mobile-menu'
                aria-label={open ? "Close menu" : "Open menu"}
                className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors",
                    transparent
                        ? "text-white hover:bg-white/10"
                        : "text-slate-700 hover:bg-slate-100",
                )}
            >
                {open ? (
                    <X className='h-6 w-6' />
                ) : (
                    <Menu className='h-6 w-6' />
                )}
            </button>

            {open && (
                <div
                    id='mobile-menu'
                    className='absolute inset-x-0 top-20 border-t border-slate-200 bg-white shadow-lg'
                >
                    <nav
                        aria-label='Mobile navigation'
                        className='flex flex-col px-4 py-4 sm:px-6'
                    >
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => onOpenChange(false)}
                                className='py-3 text-base font-medium text-slate-700 hover:text-slate-900'
                            >
                                {item.label}
                            </Link>
                        ))}
                        <WhatsAppButton className='mt-4 justify-center' />
                    </nav>
                </div>
            )}
        </div>
    );
}
