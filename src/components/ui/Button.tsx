import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "light" | "outlineLight";

const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600";

const variants: Record<Variant, string> = {
    primary: "bg-slate-900 text-white hover:bg-slate-700",
    outline: "border border-slate-900 text-slate-900 hover:bg-slate-100",
    light: "bg-white text-slate-900 hover:bg-slate-100",
    outlineLight: "border border-white text-white hover:bg-white/10",
};

export default function Button({
    href,
    variant = "primary",
    className,
    children,
}: {
    href: string;
    variant?: Variant;
    className?: string;
    children: ReactNode;
}) {
    return (
        <Link
            href={href}
            className={cn(base, variants[variant], className)}
        >
            {children}
        </Link>
    );
}
