type JourneyItem = {
    title: string;
    subtitle: string;
    period: string;
    tags?: string[];
    bullets?: string[];
};

type JourneySection = {
    section: string;
    items: JourneyItem[];
};

const journey: JourneySection[] = [
    {
        section: "Professional Experience",
        items: [
            {
                title: "Software Development Intern",
                subtitle: "Developerstack • Online",
                period: "10/2025 - 04/2026",
                tags: ["Team Collaboration", "Industry Standards", "Software Development"],
                bullets: [
                    "Gained hands-on experience in software development in a professional team environment.",
                    "Applied industry-standard practices and contributed to real-world projects.",
                ],
            },
        ],
    },
    {
        section: "Education",
        items: [
            {
                title: "BSc (Hons) Software Engineering",
                subtitle: "Birmingham City University • UK",
                period: "01/2025 - 04/2026",
                tags: ["Software Engineering", "UK Degree"],
            },
            {
                title: "Software Engineering — UK Awards Levels 1-3",
                subtitle: "Java Institute for Advanced Technology • Gampaha",
                period: "01/2022 - 12/2024",
                tags: ["Foundation Diploma", "Diploma", "Higher Diploma"],
                bullets: [
                    "Level 1 - Foundation Diploma in Software Engineering",
                    "Level 2 - Diploma in Software Engineering",
                    "Level 3 - Higher / Graduate Diploma in Software Engineering",
                ],
            },
        ],
    },
    {
        section: "Certifications",
        items: [
            {
                title: "Google UX Design Professional Certificate",
                subtitle: "Google • Online",
                period: "08/2025 - 10/2025",
                tags: ["UX Design", "Figma", "Prototyping", "User Research"],
                bullets: [
                    "Courses 1–4: UX foundations, wireframes, low-fidelity prototypes, and usability testing.",
                ],
            },
            {
                title: "Cybersecurity Essentials",
                subtitle: "Cisco",
                period: "10/2021 - 11/2021",
                tags: ["Network Security", "Encryption", "CIA Triad"],
                bullets: [
                    "Foundational knowledge of network security, encryption, and cybersecurity law.",
                ],
            },
        ],
    },
];

export default function Journey() {
    return (
        <section style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
            <div className="site-container">

                {/* Page heading */}
                <h2
                    className="typography-h2 text-brand-text"
                    style={{ marginBottom: "2.5rem" }}
                >
                    My Journey
                </h2>

                {/* Sections */}
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                    {journey.map((group) => (
                        <div key={group.section}>

                            {/* Section label */}
                            <p
                                className="typography-label-md"
                                style={{
                                    color: "var(--color-brand-accent)",
                                    marginBottom: "0.875rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.07em",
                                    fontSize: "0.75rem",
                                }}
                            >
                                {group.section}
                            </p>

                            {/* Card */}
                            <div
                                style={{
                                    backgroundColor: "var(--color-brand-surface)",
                                    border: "1px solid var(--color-brand-border)",
                                    borderRadius: "1rem",
                                    overflow: "hidden",
                                }}
                            >
                                {group.items.map((item, index) => (
                                    <div key={item.title}>
                                        {index > 0 && (
                                            <div style={{ height: "1px", backgroundColor: "var(--color-brand-border)" }} />
                                        )}
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                                padding: "1.5rem 2rem",
                                                gap: "1.5rem",
                                            }}
                                        >
                                            {/* Left */}
                                            <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                                                <p
                                                    className="typography-h3"
                                                    style={{ color: "var(--color-brand-text)", fontSize: "1.05rem", fontWeight: 600 }}
                                                >
                                                    {item.title}
                                                </p>
                                                <p
                                                    className="typography-body-md"
                                                    style={{ color: "var(--color-brand-muted)", fontSize: "0.9rem" }}
                                                >
                                                    {item.subtitle}
                                                </p>

                                                {/* Bullets */}
                                                {item.bullets && item.bullets.length > 0 && (
                                                    <ul style={{ paddingLeft: "1rem", marginTop: "0.375rem", display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                                                        {item.bullets.map((b) => (
                                                            <li
                                                                key={b}
                                                                className="typography-caption"
                                                                style={{ color: "var(--color-brand-muted)", lineHeight: 1.6 }}
                                                            >
                                                                {b}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                                {/* Tags */}
                                                {item.tags && item.tags.length > 0 && (
                                                    <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
                                                        {item.tags.map((tag) => (
                                                            <span
                                                                key={tag}
                                                                style={{
                                                                    backgroundColor: "var(--color-brand-bg)",
                                                                    border: "1px solid var(--color-brand-border)",
                                                                    borderRadius: "9999px",
                                                                    padding: "0.2rem 0.65rem",
                                                                    color: "var(--color-brand-muted)",
                                                                    fontSize: "0.75rem",
                                                                }}
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Right: period */}
                                            <p
                                                className="typography-caption"
                                                style={{
                                                    color: "var(--color-brand-muted)",
                                                    whiteSpace: "nowrap",
                                                    flexShrink: 0,
                                                    paddingTop: "0.15rem",
                                                }}
                                            >
                                                {item.period}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}