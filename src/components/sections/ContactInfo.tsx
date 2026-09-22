import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/site-config";

const items = [
    {
        icon: Phone,
        label: "Phone",
        href: `tel:${siteConfig.phone}`,
        value: siteConfig.phone,
    },
    {
        icon: Mail,
        label: "Email",
        href: `mailto:${siteConfig.email}`,
        value: siteConfig.email,
    },
];

export default function ContactInfo() {
    return (
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {items.map(({ icon: Icon, label, href, value }) => (
                <Link
                    key={label}
                    href={href}
                    className='group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-slate-900'
                >
                    <span className='flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-700 transition-colors group-hover:bg-slate-900 group-hover:text-white'>
                        <Icon
                            className='h-5 w-5'
                            aria-hidden='true'
                        />
                    </span>
                    <div>
                        <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>
                            {label}
                        </p>
                        <p className='mt-0.5 text-sm font-medium text-slate-900'>
                            {value}
                        </p>
                    </div>
                </Link>
            ))}

            <div className='flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5'>
                <span className='flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-700'>
                    <MapPin
                        className='h-5 w-5'
                        aria-hidden='true'
                    />
                </span>
                <div>
                    <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>
                        Office
                    </p>
                    <p className='mt-0.5 text-sm font-medium leading-snug text-slate-900'>
                        {siteConfig.address.street},{" "}
                        {siteConfig.address.postalCode}{" "}
                        {siteConfig.address.city}
                    </p>
                </div>
            </div>

            <div className='flex flex-col justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 sm:col-span-2 lg:col-span-1'>
                <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>
                    Follow along
                </p>
                <div className='flex gap-3'>
                    <a
                        href={siteConfig.instagramUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Instagram'
                        className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-amber-700 hover:text-white'
                    >
                        <FaInstagram
                            className='h-5 w-5'
                            aria-hidden='true'
                        />
                    </a>
                    <a
                        href={`https://wa.me/${siteConfig.whatsappNumber}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='WhatsApp'
                        className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-amber-700 hover:text-white'
                    >
                        <FaWhatsapp
                            className='h-5 w-5'
                            aria-hidden='true'
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
