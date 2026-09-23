"use client";

import { FaFacebook, FaTelegram, FaXTwitter } from "react-icons/fa6";

export default function ShareButtons({
    url,
    title,
}: {
    url: string;
    title: string;
}) {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const links = [
        {
            label: "Facebook",
            icon: FaFacebook,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        },
        {
            label: "Telegram",
            icon: FaTelegram,
            href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
        },
        {
            label: "X",
            icon: FaXTwitter,
            href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        },
    ];

    return (
        <div className='flex items-center gap-3'>
            <span className='text-sm font-semibold text-slate-900'>Share:</span>
            {links.map(({ label, icon: Icon, href }) => (
                <a
                    key={label}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Share on ${label}`}
                    className='flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-slate-900 hover:text-white'
                >
                    <Icon
                        className='h-4 w-4'
                        aria-hidden='true'
                    />
                </a>
            ))}
        </div>
    );
}
