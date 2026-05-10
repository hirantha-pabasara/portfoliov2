import { Lightbulb, Gauge, MessagesSquare, GraduationCap } from "lucide-react";

const traits = [
    {
        icon: Gauge,
        title: "Adaptable",
        description: "Comfortable diving into unfamiliar codebases and quickly ramping up on new technologies as project needs evolve.",
        iconColor: "text-blue-700",
        iconBg: "bg-blue-50",
    },
    {
        icon: MessagesSquare,
        title: "Communicative",
        description: "Believes that writing code is only half the job. Clear documentation and open team communication are my priorities.",
        iconColor: "text-green-700",
        iconBg: "bg-green-50",
    },
    {
        icon: GraduationCap,
        title: "Current",
        description: "Trained on modern stacks (React, TypeScript) and eager to apply best practices in real-world scenarios.",
        iconColor: "text-amber-700",
        iconBg: "bg-amber-50",
    },
];

export default function SoftSkills() {
    return (
        <section className="py-16">
            <div className="site-container">
                <div
                    className="bg-brand-surface rounded-2xl border border-brand-border"
                    style={{ padding: "3rem" }}
                >

                    {/* Header */}
                    <div
                        className="mb-12"
                        style={{
                            width: "100%",
                            maxWidth: "42rem",
                            marginLeft: "auto",
                            marginRight: "auto",
                            textAlign: "center",
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
                            <Lightbulb className="text-brand-accent" size={32} />
                        </div>
                        <h2 className="typography-h2 text-brand-text mb-6" style={{ textAlign: "center" }}>
                            Fresh Eyes, Fast Learner
                        </h2>
                        <p className="typography-body-md text-brand-muted" style={{ textAlign: "center" }}>
                            While I might not have a decade of experience, I bring something
                            equally valuable: an untethered curiosity and the latest industry
                            knowledge. I am not set in my ways; I adapt quickly to new
                            paradigms and thrive in environments that value continuous growth.
                        </p>
                    </div>

                    {/* Trait Cards */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-3"
                        style={{ marginTop: "2rem", gap: "1.5rem" }}
                    >
                        {traits.map((trait) => {
                            const Icon = trait.icon;
                            return (
                                <div
                                    key={trait.title}
                                    className="bg-brand-bg rounded-xl flex flex-col"
                                    style={{ padding: "1.5rem" }}
                                >
                                    <div className={`w-10 h-10 rounded-full ${trait.iconBg} flex items-center justify-center mb-6`}>
                                        <Icon size={20} className={trait.iconColor} />
                                    </div>
                                    <h3 className="typography-h3 text-brand-text mb-3">
                                        {trait.title}
                                    </h3>
                                    <p className="typography-body-md text-brand-muted leading-relaxed">
                                        {trait.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}