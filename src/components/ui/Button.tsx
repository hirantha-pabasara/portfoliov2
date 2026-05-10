"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    icon?: ReactNode;
    variant?: ButtonVariant;
    className?: string;
}

export default function Button({
    children,
    icon,
    variant = "primary",
    className,
    type = "button",
    ...props
}: ButtonProps) {
    const baseStyles = `
    inline-flex items-center justify-center gap-2
        px-4 py-2 rounded-md
        text-sm font-semibold leading-none
        transition-all duration-200
    active:scale-95
  `;

    const variants = {
        primary: `
            bg-brand-accent
      text-white
            shadow-sm shadow-brand-accent/25
            hover:bg-brand-accent-hover
            hover:shadow-md hover:shadow-brand-accent/30
    `,

        outline: `
            border border-brand-accent/70
            text-brand-accent
            bg-white
            hover:bg-brand-accent
      hover:text-white
            hover:shadow-sm hover:shadow-brand-accent/20
    `,
    };

    return (
        <button
            type={type}
                        className={`${baseStyles} ${variants[variant]} ${className ?? ""}`}
            {...props}
        >
            {icon}
            {children}
        </button>
    );
}