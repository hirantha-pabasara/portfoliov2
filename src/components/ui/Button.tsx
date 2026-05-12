"use client";

import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

type ButtonCommonProps = {
    children: ReactNode;
    icon?: ReactNode;
    variant?: ButtonVariant;
    className?: string;
};

type ButtonAsButtonProps = ButtonCommonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
};

type ButtonAsLinkProps = ButtonCommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export default function Button({
    children,
    icon,
    variant = "primary",
    className,
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
        const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;

        return (
            <a className={sharedClassName} href={href} {...anchorProps}>
                {icon}
                {children}
            </a>
        );
    }

    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

    return (
        <button
            type={buttonProps.type ?? "button"}
            className={sharedClassName}
            {...buttonProps}
        >
            {icon}
            {children}
        </button>
    );
}