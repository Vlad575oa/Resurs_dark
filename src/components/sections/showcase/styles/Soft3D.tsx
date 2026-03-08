"use client";

import { useState } from "react";
import { Ubuntu } from "next/font/google";
import { Truck } from "lucide-react";

const ubuntu = Ubuntu({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "700"] });

export default function Soft3D() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const cards = [
        { id: 1, title: "Малотоннажный", payload: "До 1.5 т", volume: "9 м³" },
        { id: 2, title: "Среднетоннажный", payload: "До 5.0 т", volume: "35 м³" },
        { id: 3, title: "Крупнотоннажный", payload: "До 20 т", volume: "82 м³" },
    ];

    return (
        <div className={`p-10 bg-[#e0e5ec] rounded-3xl ${ubuntu.className}`}>
            <div className="mb-8 pl-4">
                <h3 className="text-3xl font-bold text-slate-700">Soft 3D (Neumorphism)</h3>
                <p className="text-slate-500 mt-2">Пастельные тона, объемные мягкие тени. Карточка вдавливается в экран при выборе.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card) => {
                    const isSelected = selectedId === card.id;
                    return (
                        <button
                            key={card.id}
                            onClick={() => setSelectedId(card.id)}
                            className={`relative text-left p-8 rounded-[2rem] transition-all duration-300 outline-none flex flex-col items-center text-center
                ${isSelected
                                    ? "bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#a3b1c6,inset_-8px_-8px_16px_#ffffff]"
                                    : "bg-[#e0e5ec] shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_20px_#a3b1c6,-12px_-12px_20px_#ffffff] hover:-translate-y-1"
                                }`}
                        >
                            <div className={`p-5 rounded-full mb-6 transition-all duration-300 ${isSelected ? "shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]" : "shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]"}`}>
                                <Truck className={`w-10 h-10 ${isSelected ? 'text-blue-500' : 'text-slate-400'}`} />
                            </div>

                            <h4 className={`text-xl font-bold mb-2 ${isSelected ? 'text-slate-800' : 'text-slate-600'}`}>
                                {card.title}
                            </h4>

                            <div className={`flex gap-3 text-sm font-medium ${isSelected ? 'text-blue-600/80' : 'text-slate-500'}`}>
                                <span className="bg-[#e0e5ec] px-3 py-1 rounded-full shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]">{card.payload}</span>
                                <span className="bg-[#e0e5ec] px-3 py-1 rounded-full shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]">{card.volume}</span>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
