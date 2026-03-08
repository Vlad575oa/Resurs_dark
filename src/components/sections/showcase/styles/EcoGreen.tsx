"use client";

import { useState } from "react";
import { Open_Sans } from "next/font/google";
import { Leaf, Wind, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const openSans = Open_Sans({ subsets: ["latin", "cyrillic"], weight: ["400", "600", "700"] });

export default function EcoGreen() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const cards = [
        { id: 1, title: "Малотоннажный (Газ)", co2: "-40%", payload: "До 1.5 т" },
        { id: 2, title: "Среднетоннажный (LNG)", co2: "-45%", payload: "До 5.0 т" },
        { id: 3, title: "Крупнотоннажный (Euro-6)", co2: "-30%", payload: "До 20 т" },
    ];

    return (
        <div className={`p-10 bg-emerald-50 rounded-3xl relative overflow-hidden ${openSans.className}`}>
            {/* Wooden texture bar at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#8b5a2b] opacity-20" />

            <div className="relative z-10 mb-10 flex items-center justify-between">
                <div>
                    <h3 className="text-3xl font-bold text-emerald-900 tracking-tight flex items-center gap-3">
                        Eco-Green <Leaf className="w-8 h-8 text-emerald-500" />
                    </h3>
                    <p className="text-emerald-700/70 mt-2 text-sm">Природный, чистый, экологичный стиль. Анимация роста растения.</p>
                </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card) => {
                    const isSelected = selectedId === card.id;
                    return (
                        <button
                            key={card.id}
                            onClick={() => setSelectedId(card.id)}
                            className={`relative text-left p-6 transition-all duration-500 outline-none rounded-2xl overflow-hidden
                ${isSelected
                                    ? "bg-white shadow-[0_10px_40px_rgba(16,185,129,0.15)] ring-2 ring-emerald-500"
                                    : "bg-white/60 hover:bg-white shadow-sm ring-1 ring-emerald-900/5 hover:ring-emerald-200"
                                }`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`rounded-full p-3 transition-colors duration-500 ${isSelected ? 'bg-emerald-100 text-emerald-600' : 'bg-emerald-50 text-emerald-800/40 group-hover:bg-emerald-100 group-hover:text-emerald-500'}`}>
                                    <Wind className="w-6 h-6" strokeWidth={1.5} />
                                </div>

                                {/* Eco Leaf Animation */}
                                <div className="w-8 h-8 relative flex items-center justify-center">
                                    <AnimatePresence>
                                        {isSelected && (
                                            <motion.div
                                                initial={{ scale: 0, originY: 1 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                                className="text-emerald-500"
                                            >
                                                <Leaf className="w-6 h-6 fill-emerald-500" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <h4 className={`text-xl font-semibold mb-4 transition-colors ${isSelected ? 'text-emerald-900' : 'text-emerald-950/70'}`}>
                                {card.title}
                            </h4>

                            <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-emerald-100">
                                <div>
                                    <span className="text-[10px] text-emerald-600/60 uppercase font-bold tracking-wider block mb-1">CO2 Reduction</span>
                                    <span className={`text-sm font-bold flex items-center gap-1 ${isSelected ? 'text-emerald-600' : 'text-emerald-800/60'}`}>
                                        <Droplets className="w-3 h-3" /> {card.co2}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-[10px] text-emerald-600/60 uppercase font-bold tracking-wider block mb-1">Payload</span>
                                    <span className={`text-sm font-bold ${isSelected ? 'text-emerald-900' : 'text-emerald-800/60'}`}>
                                        {card.payload}
                                    </span>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
