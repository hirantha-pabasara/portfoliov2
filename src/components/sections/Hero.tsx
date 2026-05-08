import Image from "next/image";
import Button from "../ui/Button";
import { Mail } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-[calc(100vh-var(--navbar-height))] flex flex-col justify-center py-12 md:py-16">
            <div className="site-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center">
                    {/* left-content */}
                    <div className="min-w-0">
                        <p className="typography-label-md text-brand-muted">Hello, I&apos;m</p>
                        <h1 className="typography-h1 text-brand-text mt-2">Hirantha.</h1>
                        <p className="typography-body-lg text-brand-muted mt-4">A software engineer with a non-traditional background, passionate about creating clean and friendly digital experiences. I believe great code should be easy to maintain and empathetic to the user.</p>
                        <div className="flex flex-wrap gap-3 md:gap-4" style={{ marginTop: '1.5rem' }}>
                            <Button
                                variant="primary"
                                icon={<Mail size={18} />}
                                className="w-40 h-10 "
                            >
                                Get In Touch
                            </Button>
                        </div>
                    </div>
                    {/* right-content */}
                    <div className="min-w-0 w-full lg:max-w-xl lg:justify-self-end" >
                        <Image src="/images/profile.png" alt="Hirantha" width={800} height={800} className="w-full h-56 md:h-72 lg:h-125 object-cover rounded-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}