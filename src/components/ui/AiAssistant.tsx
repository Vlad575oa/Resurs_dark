"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const AiAssistant = () => {
    return (
        <motion.div
            className="fixed bottom-8 right-8 z-40 group cursor-pointer"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative">
                {/* Pulse Effect */}
                <motion.div
                    className="absolute inset-0 bg-transformative-teal rounded-full blur-xl opacity-20"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Orb */}
                <motion.div
                    className="glass-panel w-14 h-14 rounded-full flex items-center justify-center text-transformative-teal border-transformative-teal/30 shadow-[0_0_30px_rgba(15,118,110,0.3)]"
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <Sparkles className="w-6 h-6" />
                </motion.div>

                {/* Tooltip (Hidden initially) */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-3 py-1.5 glass-panel rounded-full text-xs text-transformative-teal font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    AI Assistant
                </div>
            </div>
        </motion.div>
    );
};
