import Image from "next/image";
import Button from "../ui/Button";
import { Mail } from "lucide-react";

export default function Hero() {
    return (
        <section className="hero-custom-spacing min-h-[calc(100vh-var(--navbar-height))] flex flex-col justify-center py-16 px-6 md:py-20">
            <div className="site-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                    {/* left-content */}
                    <div className="min-w-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <p className="typography-label-md text-brand-muted uppercase tracking-widest">Hello, I&apos;m</p>
                        <h1 className="typography-h1 text-brand-text mt-3 text-5xl sm:text-6xl lg:text-7xl">Hirantha.</h1>
                        <p className="typography-body-lg text-brand-muted mt-6 max-w-lg">A software engineer with a non-traditional background, passionate about creating clean and friendly digital experiences. I believe great code should be easy to maintain and empathetic to the user.</p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-10 justify-center lg:justify-start items-center">
                            <Button
                                variant="primary"
                                icon={<Mail size={20} />}
                                className="w-64 h-14 mx-auto lg:mx-0 mb-12 sm:mb-0"
                            >
                                Get In Touch
                            </Button>
                        </div>
                    </div>
                    {/* right-content */}
                    <div className="min-w-0 w-full lg:max-w-xl lg:justify-self-end order-first lg:order-last" >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-brand-accent-hover rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
                            <Image
                                src="/images/profile.png"
                                alt="Hirantha"
                                width={800}
                                height={1000}
                                className="relative w-full aspect-square sm:aspect-[4/5] lg:h-[650px] object-cover object-top rounded-3xl shadow-2xl max-h-[450px] sm:max-h-none"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}