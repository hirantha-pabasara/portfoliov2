export default function Footer() {
    return (
        <footer className="border-t border-brand-border bg-brand-bg mt-auto">
            <div className="site-container flex flex-col md:flex-row justify-between py-6 text-sm text-brand-muted gap-4 md:gap-0">
                {/* left-content */}
                <div>
                    <p>© {new Date().getFullYear()} Hirantha. All rights reserved.</p>
                </div>
                {/* right-content  */}
                <div>
                    {/* Social links or additional info */}
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-brand-accent transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-brand-accent transition-colors">GitHub</a>
                        <a href="#" className="hover:text-brand-accent transition-colors">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}