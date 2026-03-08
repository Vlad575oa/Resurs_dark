"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

const NeoBrutalism = dynamic(() => import("./styles/NeoBrutalism"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const Glassmorphism = dynamic(() => import("./styles/Glassmorphism"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const Blueprint = dynamic(() => import("./styles/Blueprint"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const ActiveDashboard = dynamic(() => import("./styles/ActiveDashboard"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const Soft3D = dynamic(() => import("./styles/Soft3D"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const MinimalistOutline = dynamic(() => import("./styles/MinimalistOutline"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const RetroLogistics = dynamic(() => import("./styles/RetroLogistics"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const HighTechGlow = dynamic(() => import("./styles/HighTechGlow"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const EcoGreen = dynamic(() => import("./styles/EcoGreen"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const InteractiveCard = dynamic(() => import("./styles/InteractiveCard"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const XRay = dynamic(() => import("./styles/XRay"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const PaperCut = dynamic(() => import("./styles/PaperCut"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const GridMaster = dynamic(() => import("./styles/GridMaster"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const ComicStyle = dynamic(() => import("./styles/ComicStyle"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const Isolayer = dynamic(() => import("./styles/Isolayer"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const CarbonFiber = dynamic(() => import("./styles/CarbonFiber"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const EcoKraft = dynamic(() => import("./styles/EcoKraft"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const LiquidStyle = dynamic(() => import("./styles/LiquidStyle"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const GoldenPremium = dynamic(() => import("./styles/GoldenPremium"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const LowPoly = dynamic(() => import("./styles/LowPoly"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });

const stylesArray = [
    { id: 1, name: "NeoBrutalism", component: NeoBrutalism },
    { id: 2, name: "Glassmorphism", component: Glassmorphism },
    { id: 3, name: "Blueprint", component: Blueprint },
    { id: 4, name: "ActiveDashboard", component: ActiveDashboard },
    { id: 5, name: "Soft3D", component: Soft3D },
    { id: 6, name: "MinimalistOutline", component: MinimalistOutline },
    { id: 7, name: "RetroLogistics", component: RetroLogistics },
    { id: 8, name: "High-Tech Glow", component: HighTechGlow },
    { id: 9, name: "Eco-Green", component: EcoGreen },
    { id: 10, name: "Interactive Flip", component: InteractiveCard },
    { id: 11, name: "X-Ray", component: XRay },
    { id: 12, name: "Paper Cut", component: PaperCut },
    { id: 13, name: "Grid Master", component: GridMaster },
    { id: 14, name: "Comic Style", component: ComicStyle },
    { id: 15, name: "Isolayer", component: Isolayer },
    { id: 16, name: "Carbon Fiber", component: CarbonFiber },
    { id: 17, name: "Eco-Kraft", component: EcoKraft },
    { id: 18, name: "Liquid", component: LiquidStyle },
    { id: 19, name: "Golden Premium", component: GoldenPremium },
    { id: 20, name: "Low Poly", component: LowPoly },
];

function InteractiveWrapper({ children, id }: { children: React.ReactNode, id: number }) {
    const [state, setState] = useState(0);

    if (id < 11) return <div className="w-full h-full">{children}</div>;

    const handleClick = () => setState(s => (s + 1) % 4);

    const filters = [
        "none",
        "hue-rotate(90deg) brightness(1.2) saturate(1.2)",
        "hue-rotate(210deg) contrast(1.1)",
        "brightness(0.7) grayscale(0.2) contrast(1.2)"
    ];

    return (
        <div
            onClick={handleClick}
            className="group relative cursor-pointer active:scale-[0.99] transition-all duration-300"
        >
            <div
                style={{ filter: filters[state], transition: "filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)" }}
                className="w-full h-full"
            >
                {children}
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 pointer-events-none flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">
                    Click to Shift Shade
                </span>
            </div>
        </div>
    );
}

export default function StyleVariants() {
    return (
        <div className="space-y-24">
            {stylesArray.map((style) => (
                <section key={style.id} id={`style-${style.id}`} className="group/section">
                    <div className="flex items-center gap-6 mb-8">
                        <span className="text-7xl font-black text-white/5 tabular-nums leading-none select-none transition-colors group-hover/section:text-emerald-500/10">
                            {style.id.toString().padStart(2, '0')}
                        </span>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-white/80">
                                {style.name}
                            </h2>
                            <div className="h-[2px] w-12 bg-emerald-500/50 rounded-full" />
                        </div>
                        <div className="h-[1px] flex-1 bg-white/[0.03]" />
                        {style.id >= 11 && (
                            <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-500/50 bg-emerald-500/5 px-3 py-1 rounded-full border border-emerald-500/10">
                                Interactive Lab
                            </span>
                        )}
                    </div>

                    <InteractiveWrapper id={style.id}>
                        <style.component />
                    </InteractiveWrapper>
                </section>
            ))}
        </div>
    );
}
