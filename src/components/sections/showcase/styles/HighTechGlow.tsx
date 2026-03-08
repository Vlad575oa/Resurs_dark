"use client";

import { useState } from "react";
import { Exo_2 } from "next/font/google";
import { Cpu, Zap } from "lucide-react";

const exo = Exo_2({ subsets: ["latin", "cyrillic"], weight: ["400", "700", "900"] });

export default function HighTechGlow() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const cards = [
        { id: 1, title: "L-Class Unit", payload: "1.5T", power: "120kW" },
        { id: 2, title: "M-Class Unit", payload: "5.0T", power: "250kW" },
        { id: 3, title: "H-Class Unit", payload: "20.0T", power: "480kW" },
    ];

    return (
        <div className={`p-10 bg-black rounded-3xl relative overflow-hidden ${exo.className}`}>
            <div className="relative z-10 mb-10 border-l-4 border-cyan-400 pl-6">
                <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 uppercase italic tracking-wider">
                    High-Tech Glow
                </h3>
                <p className="text-cyan-400/70 mt-2 font-medium">Киберпанк, неон, грязный черный фон. Анимированный шлейф.</p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card) => {
                    const isSelected = selectedId === card.id;
                    return (
                        <button
                            key={card.id}
                            onClick={() => setSelectedId(card.id)}
                            className={`relative text-left p-6 transition-all duration-300 outline-none group bg-[#050505]
                ${isSelected
                                    ? "border border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5),inset_0_0_15px_rgba(34,211,238,0.2)]"
                                    : "border border-zinc-800 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                                }`}
                        >
                            {/* Neon Glow Trail Effect on Hover */}
                            {!isSelected && (
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent -translate-x-full group-hover:animate-[scan_2s_ease-in-out_infinite]" />
                            )}
                            {isSelected && (
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent -translate-x-full animate-[scan_2s_ease-in-out_infinite]" />
                            )}

                            <div className="flex justify-between items-start mb-8">
                                <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-400/20 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'bg-zinc-900 text-zinc-500 group-hover:text-purple-400'}`}>
                                    <Cpu className="w-6 h-6" />
                                </div>
                                {isSelected && <div className="text-cyan-400 text-xs font-bold animate-pulse">ONLINE</div>}
                            </div>

                            <h4 className={`text-2xl font-bold uppercase italic tracking-widest mb-2 ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                                {card.title}
                            </h4>

                            <div className="flex gap-4 mt-6">
                                <div className="bg-zinc-900 px-3 py-1 border border-zinc-800 rounded">
                                    <span className="text-[10px] text-zinc-500 block mb-1">PAYLOAD</span>
                                    <span className={`text-sm font-bold ${isSelected ? 'text-cyan-400' : 'text-zinc-300'}`}>{card.payload}</span>
                                </div>
                                <div className="bg-zinc-900 px-3 py-1 border border-zinc-800 rounded">
                                    <span className="text-[10px] text-zinc-500 block mb-1">POWER</span>
                                    <span className={`text-sm font-bold ${isSelected ? 'text-purple-400' : 'text-zinc-300'}`}>{card.power}</span>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
}
