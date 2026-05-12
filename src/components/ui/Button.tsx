"use client";

import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    icon?: ReactNode;
    variant?: ButtonVariant;
    className?: string;
    href?: string;
}

export default function Button({
    children,
    icon,
    variant = "primary",
    className,
    type = "button",
    href,
    ...props
}: ButtonProps) {
    const baseStyles = `
        inline-flex items-center justify-center gap-2.5
        px-6 py-3 rounded-xl
        text-[15px] font-bold tracking-tight leading-none
        transition-all duration-300 ease-out
        active:scale-[0.97]
        disabled:opacity-50 disabled:pointer-events-none
    `;

    const variants = {
        primary: `
            bg-brand-accent
            text-white
            shadow-[0_4px_14px_0_rgba(40,96,136,0.39)]
            hover:bg-brand-accent-hover
            hover:shadow-[0_6px_20px_rgba(40,96,136,0.23)]
            hover:-translate-y-0.5
        `,

        outline: `
            border-2 border-brand-accent/30
            text-brand-accent
            bg-transparent
            hover:bg-brand-accent/5
            hover:border-brand-accent
            hover:-translate-y-0.5
        `,
    };

    const sharedClassName = `${baseStyles} ${variants[variant]} ${className ?? ""}`;

    if (href) {
        return (
            <a className={sharedClassName} href={href} {...props}>
                {icon}
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={sharedClassName}
            {...props}
        >
            {icon}
            {children}
        </button>
    );
}