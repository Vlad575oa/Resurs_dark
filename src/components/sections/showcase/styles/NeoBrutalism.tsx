"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import { Truck } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "800"] });

export default function NeoBrutalism() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const cards = [
        { id: 1, title: "МАЛОТОННАЖНЫЙ", payload: "До 1.5 т", color: "bg-yellow-400" },
        { id: 2, title: "СРЕДНЕТОННАЖНЫЙ", payload: "До 5.0 т", color: "bg-blue-400" },
        { id: 3, title: "КРУПНОТОННАЖНЫЙ", payload: "До 20 т", color: "bg-white" },
    ];

    return (
        <div className={`p-10 bg-[#f4f4f0] rounded-3xl border-4 border-black ${montserrat.className}`}>
            <div className="mb-8">
                <h3 className="text-3xl font-black text-black uppercase tracking-tighter">Neo-Brutalism</h3>
                <p className="text-black font-medium mt-2">Яркий, дерзкий, трендовый. Толстые границы и жесткие тени.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card) => {
                    const isSelected = selectedId === card.id;
                    return (
                        <button
                            key={card.id}
                            onClick={() => setSelectedId(card.id)}
                            className={`relative group w-full text-left transition-all duration-200 outline-none`}
                        >
                            {/* Hard Shadow Layer */}
                            <div className="absolute inset-0 bg-black rounded-xl translate-x-2 translate-y-2 pointer-events-none" />

                            {/* Card Content Layer */}
                            <div className={`relative z-10 border-[3px] border-black rounded-xl p-6 ${card.color} transition-transform duration-200 ${isSelected ? "translate-x-1 translate-y-1" : "group-hover:-translate-x-1 group-hover:-translate-y-1"}`}>
                                <Truck className="w-12 h-12 text-black mb-4 stroke-[2.5]" />
                                <h4 className="text-xl font-black text-black mb-1 tracking-tight leading-none">{card.title}</h4>
                                <div className="inline-block mt-3 px-3 py-1 bg-black text-white text-sm font-bold tracking-wider">
                                    {card.payload}
                                </div>
                            </div>

                        </button>
                    );
                })}
            </div>
        </div>
    );
}
