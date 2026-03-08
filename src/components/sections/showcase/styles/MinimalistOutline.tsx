"use client";

import { useState } from "react";
import { ArrowRight, Box } from "lucide-react";

// For minimalist look, standard sans-serif is best, like Inter or Roboto, but we'll use system fonts here.

export default function MinimalistOutline() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const cards = [
        { id: 1, title: "Light Duty", payload: "1.5t", volume: "9m³" },
        { id: 2, title: "Medium Duty", payload: "5.0t", volume: "35m³" },
        { id: 3, title: "Heavy Duty", payload: "20t", volume: "82m³" },
    ];

    return (
        <div className={`p-10 bg-white rounded-3xl font-sans`}>
            <div className="mb-10">
                <h3 className="text-2xl text-black uppercase tracking-[0.2em] font-light">Minimalist Outline</h3>
                <p className="text-gray-400 mt-2 text-sm">Белый, черный, красный акцент. Анимация тонких линий.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card) => {
                    const isSelected = selectedId === card.id;
                    return (
                        <button
                            key={card.id}
                            onClick={() => setSelectedId(card.id)}
                            className={`relative text-left p-8 group outline-none overflow-hidden transition-colors duration-500
                ${isSelected ? "bg-black text-white" : "bg-white text-black hover:bg-gray-50"}
              `}
                        >
                            {/* Outline Borders */}
                            <div className={`absolute top-0 left-0 w-full h-[1px] ${isSelected ? 'bg-red-500' : 'bg-gray-200 group-hover:bg-black transition-colors'}`} />
                            <div className={`absolute bottom-0 left-0 w-full h-[1px] ${isSelected ? 'bg-red-500' : 'bg-gray-200 group-hover:bg-black transition-colors'}`} />
                            <div className={`absolute top-0 left-0 w-[1px] h-full ${isSelected ? 'bg-red-500' : 'bg-gray-200 group-hover:bg-black transition-colors'}`} />
                            <div className={`absolute top-0 right-0 w-[1px] h-full ${isSelected ? 'bg-red-500' : 'bg-gray-200 group-hover:bg-black transition-colors'}`} />

                            {/* Red Accent line animation on hover if not selected */}
                            {!isSelected && (
                                <div className="absolute top-0 left-0 w-0 h-[1px] bg-red-500 group-hover:w-full transition-all duration-700 ease-out" />
                            )}

                            <div className="flex justify-between items-start mb-12">
                                <Box className={`w-6 h-6 stroke-[1] ${isSelected ? 'text-red-500' : 'text-black'}`} />
                                <span className={`text-[10px] uppercase tracking-widest ${isSelected ? 'text-gray-400' : 'text-gray-400'}`}>0{card.id}</span>
                            </div>

                            <h4 className={`text-2xl font-light mb-4 tracking-wide`}>
                                {card.title}
                            </h4>

                            <div className={`flex items-center justify-between text-xs tracking-widest uppercase ${isSelected ? 'text-gray-400' : 'text-gray-500'}`}>
                                <div className="flex gap-4">
                                    <span>P: {card.payload}</span>
                                    <span>V: {card.volume}</span>
                                </div>
                                {isSelected && <ArrowRight className="w-4 h-4 text-red-500" strokeWidth={1} />}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
