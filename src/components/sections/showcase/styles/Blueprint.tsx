"use client";

import { useState } from "react";
import { JetBrains_Mono } from "next/font/google";
import { MoveHorizontal, MoveVertical } from "lucide-react";

const jetbrains = JetBrains_Mono({ subsets: ["latin", "cyrillic"] });

export default function Blueprint() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const cards = [
        { id: 1, title: "TYPE_A_LIGHT", payload: "1.5T", volume: "9M3", length: "3.2m", width: "1.8m" },
        { id: 2, title: "TYPE_B_MID", payload: "5.0T", volume: "35M3", length: "6.0m", width: "2.4m" },
        { id: 3, title: "TYPE_C_HEAVY", payload: "20.0T", volume: "82M3", length: "13.6m", width: "2.5m" },
    ];

    return (
        <div className={`p-10 bg-[#0a192f] rounded-3xl relative overflow-hidden ${jetbrains.className}`}>
            {/* Blueprint Grid Background */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: "linear-gradient(rgba(100,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,255,0.3) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
            />
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: "linear-gradient(rgba(100,255,255,0.5) 2px, transparent 2px), linear-gradient(90deg, rgba(100,255,255,0.5) 2px, transparent 2px)", backgroundSize: "100px 100px" }}
            />

            <div className="relative z-10 mb-8">
                <h3 className="text-3xl font-bold text-cyan-400 tracking-tighter uppercase">Blueprint</h3>
                <p className="text-cyan-200/60 text-sm mt-2 max-w-xl">Инженерный стиль. Моноширинный шрифт, сетка чертежа и схематичные указания габаритов.</p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card) => {
                    const isSelected = selectedId === card.id;
                    return (
                        <button
                            key={card.id}
                            onClick={() => setSelectedId(card.id)}
                            className={`relative text-left p-6 transition-all duration-300 outline-none  ${isSelected
                                    ? "bg-cyan-950/40 border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                                    : "bg-[#0a192f] border border-cyan-800/50 border-dashed hover:border-cyan-500 hover:bg-cyan-900/20"
                                }`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className={`text-xs ${isSelected ? 'text-cyan-300' : 'text-cyan-700'}`}>{"// SPECS"}</span>
                                {isSelected && <span className="text-xs text-cyan-400 animate-pulse">{"[SELECTED]"}</span>}
                            </div>

                            <h4 className={`text-lg mb-4 ${isSelected ? 'text-cyan-100 font-bold' : 'text-cyan-300'}`}>
                                {card.title}
                            </h4>

                            {/* Dimensions Schematic */}
                            <div className="flex gap-4 mb-4 opacity-80">
                                <div className="flex flex-col items-center">
                                    <MoveHorizontal className={`w-4 h-4 mb-1 ${isSelected ? 'text-cyan-300' : 'text-cyan-600'}`} />
                                    <span className="text-xs text-cyan-400">L:{card.length}</span>
                                </div>
                                <div className="w-[1px] h-8 bg-cyan-800" />
                                <div className="flex flex-col items-center">
                                    <MoveVertical className={`w-4 h-4 mb-1 ${isSelected ? 'text-cyan-300' : 'text-cyan-600'}`} />
                                    <span className="text-xs text-cyan-400">W:{card.width}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-xs text-cyan-500 border-t border-cyan-900 pt-3">
                                <span>VOL: {card.volume}</span>
                                <span>MAX: {card.payload}</span>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
