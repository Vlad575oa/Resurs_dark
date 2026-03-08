"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import { Truck, Package } from "lucide-react";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["300", "400", "600"] });

export default function Glassmorphism() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const cards = [
        { id: 1, title: "Малотоннажный", payload: "До 1.5 т", volume: "9 м³" },
        { id: 2, title: "Среднетоннажный", payload: "До 5.0 т", volume: "35 м³" },
        { id: 3, title: "Крупнотоннажный", payload: "До 20 т", volume: "82 м³" },
    ];

    return (
        <div className={`p-10 rounded-3xl relative overflow-hidden ${inter.className}`}>
            {/* Abstract Background for Glass Effect */}
            <div className="absolute inset-0 bg-slate-100" />
            <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
            <div className="absolute bottom-[-50px] left-[-50px] w-96 h-96 bg-purple-400/30 rounded-full blur-3xl" />

            <div className="relative z-10 mb-8">
                <h3 className="text-3xl font-semibold text-slate-800 tracking-tight">Glassmorphism</h3>
                <p className="text-slate-600 font-light mt-2 max-w-xl">Эффект матового стекла, блюр, воздушность и мягкое внутреннее свечение при выборе.</p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card) => {
                    const isSelected = selectedId === card.id;
                    return (
                        <button
                            key={card.id}
                            onClick={() => setSelectedId(card.id)}
                            className={`relative text-left p-6 rounded-2xl transition-all duration-500 overflow-hidden outline-none ${isSelected
                                    ? "bg-white/40 border border-white/60 shadow-[inset_0_0_30px_rgba(255,255,255,0.8),0_8px_32px_rgba(0,0,0,0.05)]"
                                    : "bg-white/20 border border-white/30 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.02)] hover:bg-white/30"
                                }`}
                        >
                            <div className="backdrop-blur-xl absolute inset-0 -z-10" />

                            <div className="flex items-center justify-between mb-6">
                                <Truck className={`w-8 h-8 transition-colors duration-500 ${isSelected ? 'text-blue-600' : 'text-slate-500'}`} strokeWidth={1.5} />
                                {isSelected && (
                                    <motion.div layoutId="glassGlow" className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                )}
                            </div>

                            <h4 className={`text-xl mb-2 transition-colors duration-500 ${isSelected ? 'text-slate-900 font-semibold' : 'text-slate-700 font-medium'}`}>
                                {card.title}
                            </h4>

                            <div className="flex items-center gap-4 text-sm text-slate-500 font-light">
                                <span className="flex items-center gap-1"><Package className="w-4 h-4" /> {card.payload}</span>
                                <span>{card.volume}</span>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
