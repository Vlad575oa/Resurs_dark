"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ru from "@/app/messages/ru.json";

export default function TelegramFab() {
    const [isOpen, setIsOpen] = useState(false);
    const { TelegramModal } = ru;

    const telegramLink = "https://t.me/resourcetrans"; // Example link

    const handleProceed = () => {
        window.open(telegramLink, "_blank", "noopener,noreferrer");
        setIsOpen(false);
    };

    return (
        <>
            <div className="fixed bottom-8 right-8 z-[100]">
                <button
                    onClick={() => setIsOpen(true)}
                    className="size-14 rounded-full bg-[#24A1DE] flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-all group relative"
                    aria-label="Telegram"
                >
                    <div className="absolute inset-0 rounded-full bg-[#24A1DE] animate-ping opacity-20 pointer-events-none"></div>
                    <svg
                        className="size-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-md bg-[#161b22] border border-[#282e39] rounded-2xl p-8 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] pointer-events-none"></div>

                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <span className="material-symbols-outlined text-3xl">terminal</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                                {TelegramModal.title}
                            </h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                {TelegramModal.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex-1 py-3 px-6 rounded-xl border border-[#282e39] text-white hover:bg-[#282e39] transition-all font-bold text-sm"
                                >
                                    {TelegramModal.cancel}
                                </button>
                                <button
                                    onClick={handleProceed}
                                    className="flex-1 py-3 px-6 rounded-xl bg-primary text-white hover:bg-blue-600 transition-all font-bold text-sm shadow-glow"
                                >
                                    {TelegramModal.proceed}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
