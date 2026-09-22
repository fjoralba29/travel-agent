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
                    label='First name'
                    name='firstName'
                    placeholder='First name'
                    required
                />
                <FormField
                    label='Last name'
                    name='lastName'
                    placeholder='Last name'
                    required
                />
                <FormField
                    label='e-mail'
                    name='email'
                    type='email'
                    placeholder='e-mail'
                    required
                />
                <FormField
                    label='Telephone number'
                    name='phone'
                    type='tel'
                    placeholder='Telephone number'
                />
            </div>

            <FormField
                label='Regarding'
                name='regarding'
                placeholder='Regarding'
            />

            <FormField
                as='textarea'
                label='Your request'
                name='message'
                placeholder='Write your request here.'
                required
            />

            <label className='flex items-start gap-3 text-sm text-slate-900'>
                <input
                    type='checkbox'
                    checked={accepted}
                    onChange={(event) => setAccepted(event.target.checked)}
                    required
                    className='mt-0.5 h-5 w-5 shrink-0 rounded border-slate-300 text-red-500 focus:ring-red-500'
                />
                <span>
                    I have read and accept the{" "}
                    <Link
                        href='/data-protection'
                        className='font-semibold text-red-500 underline'
                    >
                        privacy policy
                    </Link>
                    .
                </span>
            </label>

            <button
                type='submit'
                disabled={!accepted}
                className='inline-flex items-center justify-center rounded-full bg-red-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50'
            >
                Send inquiry
            </button>
        </form>
    );
}
