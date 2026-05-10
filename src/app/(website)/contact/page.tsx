"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowUpRight, BriefcaseBusiness, Code2, ExternalLink, Mail, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";

const socialLinks = [
    {
        icon: Code2,
        label: 'GitHub',
        href: 'https://github.com/hirantha-pabasara',
    },
    {
        icon: BriefcaseBusiness,
        label: 'LinkedIn',
        href: '#',
    },
    {
        icon: ArrowUpRight,
        label: 'Twitter',
        href: '#',
    },
]

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // We'll wire this to an email service later
        console.log(formData)
    }

    return (
        <main className="flex-1">
            <div className="site-container py-16">

            {/* Header */}
            <div className="mb-12">
                <h1 className="typography-h1 text-brand-text mb-4">Let&apos;s Connect</h1>
                <p className="typography-body-lg text-brand-muted max-w-2xl">
                    Whether you have a project in mind, a question about my work, or just
                    want to say hello, I&apos;m always open to a conversation. Fill out
                    the form below or reach out via social media.
                </p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                {/* Form — left, takes 3 cols */}
                <div className="lg:col-span-3 bg-brand-surface rounded-2xl border border-brand-border p-8">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        {/* Name + Email row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="typography-label-md text-brand-text">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Jane Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="px-4 py-3 rounded-lg border border-brand-border bg-brand-bg text-brand-text placeholder:text-brand-outline focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-colors typography-body-md"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="typography-label-md text-brand-text">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="jane@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="px-4 py-3 rounded-lg border border-brand-border bg-brand-bg text-brand-text placeholder:text-brand-outline focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-colors typography-body-md"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="flex flex-col gap-2">
                            <label className="typography-label-md text-brand-text">Subject (Optional)</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="What's this about?"
                                value={formData.subject}
                                onChange={handleChange}
                                className="px-4 py-3 rounded-lg border border-brand-border bg-brand-bg text-brand-text placeholder:text-brand-outline focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-colors typography-body-md"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label className="typography-label-md text-brand-text">Message</label>
                            <textarea
                                name="message"
                                placeholder="Hello there..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="px-4 py-3 rounded-lg border border-brand-border bg-brand-bg text-brand-text placeholder:text-brand-outline focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-colors typography-body-md resize-none"
                            />
                        </div>

                        {/* Submit */}

                        <Button
                            variant="primary"
                            icon={<Mail size={18} />}
                            className="w-40 h-10 "
                        >
                            Send Message
                        </Button>

                    </form>
                </div>

                {/* Right sidebar — takes 2 cols */}
                <div className="lg:col-span-2 flex flex-col gap-6">

                    {/* Direct Contact */}
                    <div className="bg-brand-surface rounded-2xl border border-brand-border p-8">
                        <h2 className="typography-h3 text-brand-text mb-6">Direct Contact</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-surface-muted flex items-center justify-center shrink-0">
                                    <Mail size={18} className="text-brand-accent" />
                                </div>
                                <div>
                                    <p className="typography-label-md text-brand-text">Email</p>
                                    <p className="typography-body-md text-brand-muted">
                                        hiranthapabasara102@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-surface-muted flex items-center justify-center shrink-0">
                                    <MapPin size={18} className="text-brand-accent" />
                                </div>
                                <div>
                                    <p className="typography-label-md text-brand-text">Location</p>
                                    <p className="typography-body-md text-brand-muted">Negombo, Sri Lanka</p>
                                    <p className="typography-caption text-brand-outline">Open to remote worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Find me online */}
                    <div className="bg-brand-surface rounded-2xl border border-brand-border p-8">
                        <h2 className="typography-h3 text-brand-text mb-6">Find me online</h2>
                        <div className="flex flex-col gap-3">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between rounded-lg border border-brand-border p-4 transition-colors hover:bg-brand-surface-muted group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon size={18} className="text-brand-muted" />
                                            <span className="typography-body-md text-brand-text">{link.label}</span>
                                        </div>
                                        <ExternalLink size={14} className="text-brand-outline transition-colors group-hover:text-brand-accent" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </main>
    )
}