"use client";

import { motion } from "framer-motion";
import { Search, Bot, Activity } from "lucide-react";
import { useHaptic } from "@/hooks/useHaptic";

export const MobileActionBar = () => {
    const { trigger } = useHaptic();

    return (
        <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="glass-panel p-2 rounded-2xl flex items-center justify-between shadow-2xl border border-white/10 backdrop-blur-xl bg-black/60"
            >
                {/* Search / Tech Stack */}
                <button
                    onClick={trigger}
                    className="p-3 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                >
                    <Search className="w-5 h-5" />
                </button>

                {/* AI Agent - Center Prominent */}
                <button
                    onClick={trigger}
                    className="flex items-center gap-2 bg-burnt-terra text-white px-5 py-3 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-burnt-terra/20"
                >
                    <Bot className="w-5 h-5" />
                    <span className="font-mono">ASK AI</span>
                </button>

                {/* System Status */}
                <div className="p-3 flex items-center gap-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-safe-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-safe-green"></span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
