"use client";

import Link from "next/link";
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

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 pt-[env(safe-area-inset-top)] bg-brand-surface/95 backdrop-blur">
            <div className="site-container h-20 flex items-center justify-between">
                {/* logo left */}
                <Link href="/" className="flex items-center gap-1">
                    <span className="text-brand-text font-extrabold text-2xl tracking-tight leading-none">HIR</span>
                    <span className="text-brand-accent font-extrabold text-2xl tracking-tight leading-none">A</span>
                </Link>

                {/* nav links center - hidden on small screens */}
                <div className="hidden md:flex items-center gap-8 lg:gap-12 h-full">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`typography-label-md transition-colors relative h-full flex items-center ${
                                    isActive ? "text-brand-accent" : "text-brand-muted hover:text-brand-text"
                                }`}
                            >
                                {link.name}
                                {/* Active Indicator Line */}
                                {isActive && (
                                    <span
                                        style={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: "2px",
                                            backgroundColor: "var(--color-brand-accent)",
                                            borderTopLeftRadius: "2px",
                                            borderTopRightRadius: "2px",
                                        }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-4">
                    {/* CV Button - hide on very small screens */}
                    <Button
                        variant="primary"
                        icon={<Download size={18} />}
                        className="w-40 h-10"
                    >
                        Download CV
                    </Button>

                    {/* Mobile menu button */}
                    <button
                        aria-label="Toggle menu"
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2.5 rounded-xl bg-brand-surface hover:bg-brand-surface-muted transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-brand-text">
                            {open ? (
                                <path fillRule="evenodd" d="M6.72 5.47a.75.75 0 011.06-1.06L12 8.59l4.22-4.18a.75.75 0 111.06 1.06L13.06 9.66l4.22 4.18a.75.75 0 11-1.06 1.06L12 10.73l-4.22 4.17a.75.75 0 11-1.06-1.06l4.22-4.18-4.22-4.19z" clipRule="evenodd" />
                            ) : (
                                <path fillRule="evenodd" d="M4.5 6.75a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75zm0 5a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75zm.75 5.25a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H5.25z" clipRule="evenodd" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {open && (
                <div className="md:hidden bg-brand-surface shadow-inner border-t border-brand-border">
                    <div className="site-container py-4">
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        onClick={() => setOpen(false)}
                                        href={link.href}
                                        className={`typography-label-md px-2 py-1 rounded-md ${
                                            isActive ? "text-brand-accent bg-brand-accent/10" : "text-brand-text"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <a href="#" className="mt-2 inline-block px-4 py-2 bg-brand-accent text-white rounded-md typography-label-md text-center">
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}