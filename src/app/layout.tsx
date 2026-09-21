import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site-config";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
    description: siteConfig.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang='en'
            className='scroll-smooth scroll-pt-20'
            data-scroll-behavior='smooth'
        >
            <body
                className={`${inter.className} flex min-h-screen flex-col antialiased`}
            >
                <Header />
                <main className='flex-1'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
