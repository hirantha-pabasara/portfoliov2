import { Code, Database, Wrench, CheckCircle } from "lucide-react";

const frontendFrameworks = ["Angular", "Next.js", "React.js", "TypeScript"];
const frontendStyling = ["Tailwind CSS", "SCSS", "Figma"];
const backend = ["Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL", "MySQL", "Supabase"];
const tools = [
    { icon: Code, label: "Git & GitHub" },
    { icon: Code, label: "VS Code" },
    { icon: Database, label: "Docker" },
    { icon: Database, label: "Postman" },
    { icon: CheckCircle, label: "AI Tools" },
];

export default function SkillsGrid() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="typography-h1 text-brand-text mb-4">Technical Toolkit</h1>
                <p className="typography-body-lg text-brand-muted">
                    A curated list of technologies I use to build scalable, approachable, and robust applications. Always learning and expanding.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 p-6 rounded-2xl border border-brand-border bg-brand-surface shadow-sm">
                    <h3 className="typography-h3 flex items-center gap-2 mb-4">
                        <Code size={20} />
                        Frontend
                    </h3>

                    <div className="mb-4">
                        <p className="typography-caption text-brand-muted mb-2">Frameworks</p>
                        <div className="flex flex-wrap gap-2">
                            {frontendFrameworks.map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full typography-caption">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="typography-caption text-brand-muted mb-2">Styling</p>
                        <div className="flex flex-wrap gap-2">
                            {frontendStyling.map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full typography-caption">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-2xl border border-brand-border bg-brand-surface shadow-sm">
                    <h3 className="typography-h3 mb-4 flex items-center gap-2">
                        <Database size={20} /> Backend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {backend.map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full typography-caption">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-3 p-6 rounded-2xl border border-brand-border bg-brand-surface shadow-sm">
                    <h3 className="typography-h3 mb-4 flex items-center gap-2">
                        <Wrench size={20} /> Tools
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {tools.map((tool) => {
                            const Icon = tool.icon;
                            return (
                                <div key={tool.label} className="flex flex-col items-center justify-center p-4 rounded-lg bg-brand-border/20 hover:bg-brand-border/40 transition-colors text-center gap-2">
                                    <Icon size={28} className="text-brand-muted" />
                                    <span className="typography-caption font-medium text-brand-text">{tool.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
