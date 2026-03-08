"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative overflow-hidden rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-main",
                    // Size
                    size === "sm" && "px-4 py-2 text-sm",
                    size === "md" && "px-6 py-3 text-base",
                    size === "lg" && "px-8 py-4 text-lg",
                    // Variant
                    variant === "primary" && "bg-primary-main text-white hover:bg-primary-dark",
                    variant === "secondary" && "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20",
                    variant === "ghost" && "bg-transparent text-white hover:bg-white/5",
                    variant === "outline" && "bg-white text-navy border-2 border-gray-200 hover:border-navy/30",
                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center gap-2">{children}</span>

                {/* Liquid Effect Layer (Mock visual for now) */}
                <motion.div
                    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />
            </motion.button>
        );
    }
);
Button.displayName = "Button";
