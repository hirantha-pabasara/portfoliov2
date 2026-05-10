"use client";

import Image from "next/image";

const socialLinks = [
    { src: "/icons/github-sign.png", label: "GitHub",   href: "#" },
    { src: "/icons/linkedin.png",   label: "LinkedIn", href: "#" },
    { src: "/icons/twitter.png",     label: "Twitter",  href: "#" },
    { src: "/icons/email.png",       label: "Email",    href: "#" },
];

export default function Footer() {
    return (
        <footer
            className="mt-auto"
            style={{
                borderTop: "1px solid var(--color-brand-border)",
                backgroundColor: "var(--color-brand-surface)",
            }}
        >
            <div className="site-container">

                {/* Main row */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        paddingTop: "2.5rem",
                        paddingBottom: "2rem",
                    }}
                >
                    {/* Brand */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                        <span
                            className="typography-label-md"
                            style={{ color: "var(--color-brand-accent)", letterSpacing: "0.05em" }}
                        >
                            Hirantha Pabasara
                        </span>
                        <p
                            className="typography-body-md"
                            style={{ color: "var(--color-brand-muted)" }}
                        >
                            Full-stack developer - building thoughtful things for the web.
                        </p>
                    </div>

                    {/* Social icons */}
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                        {socialLinks.map(({ src, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                title={label}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "2.25rem",
                                    height: "2.25rem",
                                    borderRadius: "0.5rem",
                                    border: "1px solid var(--color-brand-border)",
                                    color: "var(--color-brand-muted)",
                                    transition: "color 150ms, border-color 150ms, background-color 150ms",
                                    textDecoration: "none",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-brand-accent)";
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-brand-accent)";
                                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-brand-bg)";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-brand-muted)";
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-brand-border)";
                                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                                }}
                            >
                                <Image src={src} alt={label} width={18} height={18} style={{ objectFit: "contain" }} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        borderTop: "1px solid var(--color-brand-border)",
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                    }}
                >
                    <p className="typography-caption" style={{ color: "var(--color-brand-muted)" }}>
                        © 2024 Built with Purpose &amp; Code
                    </p>
                    <p
                        className="typography-caption"
                        style={{ color: "var(--color-brand-muted)", display: "flex", alignItems: "center", gap: "0.25rem" }}
                    >
                        Made By HIRA
                    </p>
                </div>

            </div>
        </footer>
    );
}