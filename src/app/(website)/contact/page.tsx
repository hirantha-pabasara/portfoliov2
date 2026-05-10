"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowUpRight, BriefcaseBusiness, Code2, Mail, MapPin } from "lucide-react";

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
        <main className="flex-1" style={{ marginBottom: "80px" }}>
            <div className="site-container py-16">

            {/* Header */}
            <div style={{ marginTop: "48px", marginBottom: "48px" }}>
                <h1 className="typography-h1 text-brand-text mb-4">Let&apos;s Connect</h1>
                <p className="typography-body-lg text-brand-muted max-w-2xl">
                    Whether you have a project in mind, a question about my work, or just
                    want to say hello, I&apos;m always open to a conversation. Fill out
                    the form below or reach out via social media.
                </p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 ">

                {/* Form — left, takes 3 cols */}
                <div className="lg:col-span-3 bg-brand-surface rounded-2xl shadow-sm" style={{ padding: "40px" }}>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                        {/* Name + Email row */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <label style={{ fontSize: "12px", color: "var(--color-brand-text)" }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Jane Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        padding: "10px 12px",
                                        borderRadius: "6px",
                                        border: "none",
                                        backgroundColor: "var(--color-brand-surface-container-low)",
                                        color: "var(--color-brand-text)",
                                        fontSize: "14px",
                                        outline: "none",
                                    }}
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <label style={{ fontSize: "12px", color: "var(--color-brand-text)" }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="jane@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        padding: "10px 12px",
                                        borderRadius: "6px",
                                        border: "none",
                                        backgroundColor: "var(--color-brand-surface-container-low)",
                                        color: "var(--color-brand-text)",
                                        fontSize: "14px",
                                        outline: "none",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                            <label style={{ fontSize: "12px", color: "var(--color-brand-text)" }}>Subject (Optional)</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="What's this about?"
                                value={formData.subject}
                                onChange={handleChange}
                                style={{
                                    padding: "10px 12px",
                                    borderRadius: "6px",
                                    border: "none",
                                    backgroundColor: "var(--color-brand-surface-container-low)",
                                    color: "var(--color-brand-text)",
                                    fontSize: "14px",
                                    outline: "none",
                                }}
                            />
                        </div>

                        {/* Message */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                            <label style={{ fontSize: "12px", color: "var(--color-brand-text)" }}>Message</label>
                            <textarea
                                name="message"
                                placeholder="Hello there..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                style={{
                                    padding: "10px 12px",
                                    borderRadius: "6px",
                                    border: "none",
                                    backgroundColor: "var(--color-brand-surface-container-low)",
                                    color: "var(--color-brand-text)",
                                    fontSize: "14px",
                                    outline: "none",
                                    resize: "none",
                                    fontFamily: "inherit",
                                }}
                            />
                        </div>

                        {/* Submit */}
                        <div style={{ marginTop: "8px" }}>
                            <button
                                type="submit"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    backgroundColor: "var(--color-brand-accent)",
                                    color: "#fff",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    padding: "10px 20px",
                                    borderRadius: "6px",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                Send Message
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22,2 15,22 11,13 2,9 22,2" />
                                </svg>
                            </button>
                        </div>

                    </form>
                </div>

                {/* Right sidebar — takes 2 cols */}
                <div className="lg:col-span-2 flex flex-col gap-6">

                    {/* Direct Contact */}
                    <div className="bg-brand-surface rounded-2xl border border-brand-border" style={{ padding: "48px" }}>
                        <h2 className="typography-h3 text-brand-text mb-8">Direct Contact</h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-surface-muted flex items-center justify-center shrink-0">
                                    <Mail size={18} className="text-brand-accent" />
                                </div>
                                <div>
                                    <p className="text-sm text-brand-text mb-0.5">Email</p>
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
                                    <p className="text-sm text-brand-text mb-0.5">Location</p>
                                    <p className="typography-body-md text-brand-muted">Negombo, Sri Lanka</p>
                                    <p className="text-sm text-brand-muted mt-1">Remote worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Find me online */}
                    <div className="bg-brand-surface rounded-2xl border border-brand-border" style={{ padding: "32px" }}>
                        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "var(--color-brand-text)", marginBottom: "24px" }}>Find me online</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 0" }}
                                        className="group"
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                            <Icon size={18} style={{ color: "var(--color-brand-muted)" }} />
                                            <span style={{ fontSize: "15px", color: "var(--color-brand-text)" }}>{link.label}</span>
                                        </div>
                                        <ArrowUpRight size={14} style={{ color: "var(--color-brand-outline)", transition: "color 0.15s" }} className="group-hover:text-brand-accent" />
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