"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import { Download } from "lucide-react";

const navLinks = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
];

const socialLinks = [
    { src: "/icons/github-sign.png", label: "GitHub", href: "#" },
    { src: "/icons/linkedin.png", label: "LinkedIn", href: "#" },
    { src: "/icons/twitter.png", label: "Twitter", href: "#" },
    { src: "/icons/email.png", label: "Email", href: "mailto:hello@example.com" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav
            className="sticky top-0 z-50 w-full pt-[env(safe-area-inset-top)] bg-brand-surface/90 backdrop-blur-md border-b border-brand-border/50 px-6"
            style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
        >
            <div className="site-container h-20 flex items-center justify-between gap-4">
                {/* logo left */}
                <Link href="/" className="flex-shrink-0 flex items-center gap-1 group">
                    <span className="text-brand-text font-extrabold text-2xl tracking-tighter transition-transform group-hover:scale-105">HIR</span>
                    <span className="text-brand-accent font-extrabold text-2xl tracking-tighter transition-transform group-hover:scale-105">A</span>
                </Link>

                {/* nav links center - hidden on mobile */}
                <nav className="hidden md:flex items-center gap-8 lg:gap-12 h-full">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`typography-label-md transition-all relative h-full flex items-center px-1 ${isActive ? "text-brand-accent" : "text-brand-muted hover:text-brand-text"
                                    }`}
                            >
                                {link.name}
                                {isActive && (
                                    <span
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-t-full"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* actions right */}
                <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                    <Button
                        variant="primary"
                        icon={<Download size={18} />}
                        href="/pdf/HIRANTHA_PABASARA%20SE%20INTERN.pdf"
                        download
                        className="inline-flex h-11 px-4 sm:px-6 w-auto min-w-[92px] sm:min-w-[150px]"
                    >
                        <span className="sm:hidden inline-block">CV</span>
                        <span className="hidden sm:inline-block">Download CV</span>
                    </Button>

                    <button
                        aria-label="Toggle menu"
                        onClick={() => setOpen(!open)}
                        className="md:hidden relative z-[100] flex flex-col justify-center items-center gap-1.5 w-8 h-8 rounded-xl bg-brand-surface-container border border-brand-border text-brand-text hover:bg-brand-surface-container-high transition-all active:scale-90"
                        style={{ marginRight: "1.25rem" }}
                    >
                        <div className={`h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[4px]" : ""}`} />
                        <div className={`h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                        <div className={`h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[4px]" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile dropdown - Animated Overlay */}
            <div
                className={`fixed inset-0 w-full h-screen bg-brand-surface/98 backdrop-blur-2xl z-[90] md:hidden transition-all duration-500 ease-in-out ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                    }`}
            >
                <div className="flex flex-col h-full pt-32 pb-12 px-10 overflow-y-auto">
                    <div className="flex flex-col gap-4">
                        <span className="typography-caption uppercase tracking-[0.2em] text-brand-muted/30 mb-6">Navigation</span>
                        {navLinks.map((link, i) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    onClick={() => setOpen(false)}
                                    href={link.href}
                                    className={`text-2xl font-semibold tracking-tight py-2 transition-all duration-300 flex items-center gap-4 ${isActive ? "text-brand-accent translate-x-2" : "text-brand-text hover:translate-x-2"
                                        }`}
                                    style={{
                                        transitionDelay: `${i * 50}ms`,
                                        opacity: open ? 1 : 0,
                                        transform: open ? "translateY(0)" : "translateY(15px)"
                                    }}
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full bg-brand-accent transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} />
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}
