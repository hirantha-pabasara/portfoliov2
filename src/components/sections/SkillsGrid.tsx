import {
    Code2,
    Database,
    Wrench,
    CheckCircle2,
    CircleDashed,
    Globe,
    Layers,
    Paintbrush,
    GitBranch,
    Container,
    Infinity,
    FlaskConical,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────────── */

const frontendSections = [
    {
        label: "Core Frameworks",
        skills: [
            { icon: Globe,      name: "React" },
            { icon: Code2,      name: "TypeScript" },
            { icon: Layers,     name: "Next.js" },
            { icon: Code2,      name: "Angular" },
        ],
    },
    {
        label: "Styling & UI",
        skills: [
            { icon: Paintbrush, name: "Tailwind CSS" },
            { icon: Paintbrush, name: "HTML5 / CSS3" },
            { icon: Paintbrush, name: "SCSS" },
            { icon: Paintbrush, name: "Figma" },
        ],
    },
];

type BackendSkill = { name: string; known: boolean };
const backendSkills: BackendSkill[] = [
    { name: "Node.js",    known: true  },
    { name: "NestJS",     known: true  },
    { name: "PostgreSQL", known: true  },
    { name: "MongoDB",    known: true  },
    { name: "MySQL",      known: true  },
    { name: "Supabase",   known: false },
    { name: "GraphQL",    known: false },
];

const tools = [
    { icon: GitBranch,    label: "Git & GitHub"  },
    { icon: Container,    label: "Docker"         },
    { icon: Infinity,     label: "CI/CD"          },
    { icon: FlaskConical, label: "Jest / Testing" },
];

/* ── Component ────────────────────────────────────────── */

export default function SkillsGrid() {
    return (
        <section style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
            <div className="site-container">

                {/* ── Hero header ─────────────────────────── */}
                <div
                    style={{
                        textAlign: "center",
                        maxWidth: "38rem",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginBottom: "3rem",
                    }}
                >
                    <h1
                        className="typography-h1"
                        style={{ color: "var(--color-brand-text)", marginBottom: "1rem" }}
                    >
                        Technical Toolkit
                    </h1>
                    <p
                        className="typography-body-lg"
                        style={{ color: "var(--color-brand-muted)" }}
                    >
                        A curated list of technologies I use to build scalable, approachable,
                        and robust applications. Always eagerly learning and expanding.
                    </p>
                </div>

                {/* ── Top row: Frontend (wide) + Backend (narrow) ── */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "minmax(0,5fr) minmax(0,3fr)",
                        gap: "1.5rem",
                        marginBottom: "1.5rem",
                    }}
                >
                    {/* Frontend card */}
                    <div
                        style={{
                            backgroundColor: "var(--color-brand-surface)",
                            border: "1px solid var(--color-brand-border)",
                            borderRadius: "1rem",
                            padding: "2rem",
                        }}
                    >
                        {/* Card heading */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.75rem" }}>
                            <Code2 size={20} style={{ color: "var(--color-brand-text)" }} />
                            <h2
                                className="typography-h2"
                                style={{ color: "var(--color-brand-text)", fontSize: "1.375rem" }}
                            >
                                Frontend Development
                            </h2>
                        </div>

                        {/* Sub-sections */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            {frontendSections.map((section) => (
                                <div key={section.label}>
                                    <p
                                        className="typography-body-md"
                                        style={{
                                            color: "var(--color-brand-text)",
                                            fontWeight: 500,
                                            marginBottom: "0.625rem",
                                        }}
                                    >
                                        {section.label}
                                    </p>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                        {section.skills.map(({ icon: Icon, name }) => (
                                            <span
                                                key={name}
                                                style={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "0.375rem",
                                                    backgroundColor: "var(--color-brand-bg)",
                                                    border: "1px solid var(--color-brand-border)",
                                                    borderRadius: "9999px",
                                                    padding: "0.3rem 0.75rem",
                                                    color: "var(--color-brand-muted)",
                                                    fontSize: "0.85rem",
                                                }}
                                            >
                                                <Icon size={13} />
                                                {name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend card */}
                    <div
                        style={{
                            backgroundColor: "var(--color-brand-surface)",
                            border: "1px solid var(--color-brand-border)",
                            borderRadius: "1rem",
                            padding: "2rem",
                        }}
                    >
                        {/* Card heading */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.75rem" }}>
                            <Database size={20} style={{ color: "#c27c2c" }} />
                            <h2
                                className="typography-h2"
                                style={{ color: "var(--color-brand-text)", fontSize: "1.375rem" }}
                            >
                                Backend
                            </h2>
                        </div>

                        {/* Row list */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {backendSkills.map(({ name, known }) => (
                                <div
                                    key={name}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        backgroundColor: "var(--color-brand-bg)",
                                        border: "1px solid var(--color-brand-border)",
                                        borderRadius: "0.5rem",
                                        padding: "0.6rem 0.875rem",
                                    }}
                                >
                                    <span
                                        className="typography-body-md"
                                        style={{ color: "var(--color-brand-text)", fontSize: "0.9rem" }}
                                    >
                                        {name}
                                    </span>
                                    {known
                                        ? <CheckCircle2 size={16} style={{ color: "#4caf72", flexShrink: 0 }} />
                                        : <CircleDashed  size={16} style={{ color: "var(--color-brand-outline)", flexShrink: 0 }} />
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Tools & Workflow (full width) ──────────── */}
                <div
                    style={{
                        backgroundColor: "var(--color-brand-surface)",
                        border: "1px solid var(--color-brand-border)",
                        borderRadius: "1rem",
                        padding: "2rem",
                    }}
                >
                    {/* Card heading */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.75rem" }}>
                        <Wrench size={20} style={{ color: "var(--color-brand-text)" }} />
                        <h2
                            className="typography-h2"
                            style={{ color: "var(--color-brand-text)", fontSize: "1.375rem" }}
                        >
                            Tools &amp; Workflow
                        </h2>
                    </div>

                    {/* Icon tiles */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "1rem",
                        }}
                        className="md:grid-cols-3 lg:grid-cols-6"
                    >
                        {tools.map(({ icon: Icon, label }) => (
                            <div
                                key={label}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "0.625rem",
                                    backgroundColor: "var(--color-brand-bg)",
                                    border: "1px solid var(--color-brand-border)",
                                    borderRadius: "0.75rem",
                                    padding: "1.25rem 1rem",
                                    textAlign: "center",
                                }}
                            >
                                <Icon size={26} style={{ color: "var(--color-brand-muted)" }} />
                                <span
                                    className="typography-caption"
                                    style={{ color: "var(--color-brand-text)", fontWeight: 500 }}
                                >
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
