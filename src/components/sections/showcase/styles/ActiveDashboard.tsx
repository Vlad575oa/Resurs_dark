"use client";

import { useState } from "react";
import { Orbitron } from "next/font/google";
import { Gauge, BatteryCharging } from "lucide-react";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function ActiveDashboard() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const cards = [
        { id: 1, title: "LIGHT CV", payload: "1.5T", range: "800KM" },
        { id: 2, title: "MID SIZE", payload: "5.0T", range: "1200KM" },
        { id: 3, title: "HEAVY DUTY", payload: "20T", range: "2500KM" },
    ];

    return (
        <div className={`p-10 bg-[#13141a] rounded-3xl relative overflow-hidden ${orbitron.className}`}>
            {/* Background Texture */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "4px 4px" }}
            />

            <div className="relative z-10 mb-8 border-b border-white/5 pb-4 flex justify-between items-end">
                <div>
                    <h3 className="text-2xl font-black text-slate-100 uppercase tracking-widest">Active Dashboard</h3>
                    <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider font-sans">System Overview / Industrial Console</p>
                </div>
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card) => {
                    const isSelected = selectedId === card.id;
                    return (
                        <button
                            key={card.id}
                            onClick={() => setSelectedId(card.id)}
                            className={`relative text-left p-6 transition-all duration-200 outline-none rounded-xl flex flex-col justify-between h-[180px]
                ${isSelected
                                    ? "bg-[#1f2129] border border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.1)]"
                                    : "bg-[#181a20] border border-white/5 hover:border-white/10 hover:bg-[#1f2129]"
                                }`}
                        >
                            {/* Virtual Indicator Light */}
                            <div className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-300 ${isSelected ? "bg-orange-500 shadow-[0_0_10px_#f97316]" : "bg-white/10"}`} />

                            <div>
                                <span className={`text-[10px] uppercase font-bold tracking-widest ${isSelected ? 'text-orange-500' : 'text-slate-500'}`}>UNIT {card.id}</span>
                                <h4 className={`text-xl font-bold mt-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                                    {card.title}
                                </h4>
                            </div>

                            <div className="flex items-center gap-6 mt-6">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-1 text-slate-500">
                                        <Gauge className="w-3 h-3" />
                                        <span className="text-[10px]">CAPACITY</span>
                                    </div>
                                    <span className={`text-sm font-bold ${isSelected ? 'text-orange-400' : 'text-slate-400'}`}>{card.payload}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-1 text-slate-500">
                                        <BatteryCharging className="w-3 h-3" />
                                        <span className="text-[10px]">RANGE</span>
                                    </div>
                                    <span className={`text-sm font-bold ${isSelected ? 'text-orange-400' : 'text-slate-400'}`}>{card.range}</span>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
