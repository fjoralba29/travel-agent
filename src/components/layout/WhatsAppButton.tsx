import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export default function WhatsAppButton({ className }: { className?: string }) {
    const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
        siteConfig.whatsappMessage,
    )}`;

    return (
        <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className={cn(
                "inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-800",
                className,
            )}
        >
            <FaWhatsapp
                className='h-5 w-5'
                aria-hidden='true'
            />
            WhatsApp
        </a>
    );
}
