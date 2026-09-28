"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import FormField from "@/components/ui/FormField";
import { siteConfig } from "@/data/site-config";

export default function ContactForm() {
    const [accepted, setAccepted] = useState(false);

    // Temporary: opens the visitor's email client with the form data pre-filled.
    // Replace with a real submit handler once a backend/form service is set up
    // (Next.js static export can't run server code, see note below).
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const subject = `Inquiry: ${data.get("regarding") || "Travel request"}`;
        const body = [
            `Name: ${data.get("firstName")} ${data.get("lastName")}`,
            `Email: ${data.get("email")}`,
            `Phone: ${data.get("phone")}`,
            "",
            `${data.get("message")}`,
        ].join("\n");

        window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
            subject,
        )}&body=${encodeURIComponent(body)}`;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='space-y-6'
        >
            <div className='grid gap-6 sm:grid-cols-2'>
                <FormField
                    label='Vorname'
                    name='firstName'
                    placeholder='Vorname'
                    required
                />
                <FormField
                    label='Nachname'
                    name='lastName'
                    placeholder='Nachname'
                    required
                />
                <FormField
                    label='E-Mail'
                    name='email'
                    type='email'
                    placeholder='E-Mail'
                    required
                />
                <FormField
                    label='Telefonnummer'
                    name='phone'
                    type='tel'
                    placeholder='Telefonnummer'
                />
            </div>

            <FormField
                label='Betreff'
                name='regarding'
                placeholder='Betreff'
            />

            <FormField
                as='textarea'
                label='Deine Anfrage'
                name='message'
                placeholder='Schreibe hier deine Anfrage rein.'
                required
            />

            <label className='flex items-start gap-3 text-sm text-slate-900'>
                <input
                    type='checkbox'
                    checked={accepted}
                    onChange={(event) => setAccepted(event.target.checked)}
                    required
                    className='mt-0.5 h-5 w-5 shrink-0 rounded-lg border-amber-300 accent-amber-600 focus:ring-amber-500'
                />
                <span>
                    Ich habe die{" "}
                    <Link
                        href='/data-protection'
                        className='font-semibold text-red-500 underline'
                    >
                        Datenschutzerklärung
                    </Link>{" "}
                    gelesen & akzeptiere diese.
                </span>
            </label>

            <button
                type='submit'
                disabled={!accepted}
                className='inline-flex items-center justify-center rounded-full bg-amber-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-50'
            >
                Anfrage senden
            </button>
        </form>
    );
}
