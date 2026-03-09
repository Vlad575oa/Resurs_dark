"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ShieldAlert, ArrowRight } from "lucide-react";

interface Props {
    url: string;
    label: string;
    dict: any;
}

export default function TelegramConfirmLink({ url, label, dict }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const ext = dict.externalLink;

    const handleConfirm = () => {
        window.open(url, "_blank", "noopener,noreferrer");
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="hover:text-primary transition-colors font-bold text-left flex items-center gap-2"
            >
                {label}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-background-dark/80 backdrop-blur-md"
                        />

                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-md bg-[#161b22] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                            <div className="flex flex-col items-center text-center space-y-6">
                                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                                    <ShieldAlert size={32} />
                                </div>

                                <div className="space-y-2">
                                    <div className="text-xl font-black text-white uppercase tracking-tight italic">
                                        {dict.FooterNav?.legal?.privacy || "Security Check"}
                                    </div>
                                    <p className="text-sm text-slate-400 leading-relaxed px-4">
                                        {ext?.warning || "You are leaving the site."}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 w-full pt-4">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="py-4 px-6 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-white/10 transition-all"
                                    >
                                        {ext?.cancel || "Cancel"}
                                    </button>
                                    <button
                                        onClick={handleConfirm}
                                        className="py-4 px-6 rounded-2xl bg-primary text-background-dark text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl shadow-primary/20"
                                    >
                                        {ext?.confirm || "Proceed"}
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
