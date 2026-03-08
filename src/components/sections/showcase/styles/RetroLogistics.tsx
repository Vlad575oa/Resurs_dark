"use client";

import { useState } from "react";
import { Playfair_Display } from "next/font/google";
import { Truck } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], style: ["normal", "italic"] });

export default function RetroLogistics() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const cards = [
        { id: 1, title: "Малотоннажный", subtitle: "Для быстрых доставок", payload: "До 1.5 т" },
        { id: 2, title: "Среднетоннажный", subtitle: "Надежный выбор", payload: "До 5.0 т" },
        { id: 3, title: "Крупнотоннажный", subtitle: "Тяжелая артиллерия", payload: "До 20 т" },
    ];

    return (
        <div className={`p-10 bg-[#e3d5c8] rounded-3xl relative overflow-hidden ${playfair.className}`}>
            {/* Paper Texture Overlay */}
            <div
                className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply"
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}
            />

            <div className="relative z-10 mb-12 text-center">
                <h3 className="text-4xl font-bold text-[#5c3a21] mb-2 tracking-wide uppercase">Retro Logistics</h3>
                <p className="text-[#8b5a33] text-lg italic">Винтажный стиль, антиква, теплые горчичные оттенки.</p>
                <div className="w-24 h-1 bg-[#b24c38] mx-auto mt-6" />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {cards.map((card) => {
                    const isSelected = selectedId === card.id;
                    return (
                        <button
                            key={card.id}
                            onClick={() => setSelectedId(card.id)}
                            className={`relative text-center p-8 transition-all duration-300 outline-none
                ${isSelected
                                    ? "bg-[#b24c38] text-[#f4ebdc] shadow-[8px_8px_0px_#5c3a21] -translate-y-1 -translate-x-1 border-2 border-[#5c3a21]"
                                    : "bg-[#f4ebdc] text-[#5c3a21] border-2 border-[#8b5a33] hover:shadow-[4px_4px_0px_#8b5a33] hover:-translate-y-0.5 hover:-translate-x-0.5"
                                }`}
                        >
                            {/* Inner Border */}
                            <div className={`absolute inset-2 border ${isSelected ? 'border-[#f4ebdc]/30' : 'border-[#8b5a33]/20'} pointer-events-none`} />

                            <div className="mb-6 flex justify-center">
                                <Truck className={`w-12 h-12 ${isSelected ? 'text-[#e8b26a]' : 'text-[#b24c38]'}`} strokeWidth={1.5} />
                            </div>

                            <h4 className={`text-2xl font-bold mb-1 uppercase tracking-wider`}>
                                {card.title}
                            </h4>
                            <p className={`italic mb-6 text-sm ${isSelected ? 'text-[#f4ebdc]/80' : 'text-[#8b5a33]/80'}`}>
                                {card.subtitle}
                            </p>

                            <div className="inline-block relative">
                                <div className={`absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2 ${isSelected ? 'bg-[#e8b26a]' : 'bg-[#b24c38]'} -z-10`} />
                                <span className={`bg-inherit px-3 text-lg font-bold ${isSelected ? 'text-[#e8b26a]' : 'text-[#b24c38]'}`}>
                                    {card.payload}
                                </span>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
