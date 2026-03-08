"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface NavItem {
    name: string;
    href: string;
}

export const NavigationClient = ({ items }: { items: NavItem[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button - Isolate Client Interaction */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-navy p-2 hover:bg-navy/5 rounded-lg transition-colors flex items-center justify-center"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <span className="material-symbols-outlined text-3xl">close</span>
                ) : (
                    <span className="material-symbols-outlined text-3xl">menu</span>
                )}
            </button>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-20 left-0 w-full md:hidden bg-white border-b border-gray-100 overflow-hidden z-40"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {items.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-navy text-lg font-bold"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button className="w-full bg-primary-main text-white py-4 rounded-xl text-center font-bold">
                                Оставить заявку
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
