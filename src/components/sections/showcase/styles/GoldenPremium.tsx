"use client";

import { motion } from "framer-motion";
import { Crown } from "lucide-react";

export default function GoldenPremium() {
    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-black p-6 relative overflow-hidden rounded-3xl" style={{ fontFamily: '"Bodoni MT", "Didot", serif' }}>

            {/* Deep luxury background with radial gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2a2414_0%,_#000_100%)]" />

            {/* Gold foil texture overlay */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none mix-blend-color-dodge"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            <div className="relative w-full max-w-sm group">

                <div className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-6 flex items-center justify-center gap-3 w-full">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-700/50" />
                    <Crown className="w-3 h-3" />
                    <span>Style 19: Premium</span>
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-amber-700/50" />
                </div>

                {/* The Card */}
                <div className="relative bg-zinc-950 border border-amber-900/40 p-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-700 hover:-translate-y-2">

                    {/* Animated Gold Sheen traversing the card */}
                    <motion.div
                        className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent skew-x-[-30deg] z-50 pointer-events-none"
                        animate={{ left: ["-100%", "200%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                    />

                    {/* Thin border accents */}
                    <div className="absolute inset-2 border border-amber-500/10 pointer-events-none" />

                    <h2 className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600 mb-4 font-normal tracking-wide">
                        EXECUTIVE
                    </h2>
                    <p className="text-zinc-500 text-sm mb-10 text-center italic tracking-wider font-sans">
                        Перевозка грузов особой ценности.<br />Безупречный сервис.
                    </p>

                    {/* Graphic Area */}
                    <div className="relative h-24 w-full flex items-center justify-center mb-8">

                        {/* The Truck (Sleek, black, gold accents) */}
                        <div className="relative w-56 h-16 group-hover:scale-105 transition-transform duration-700 ease-out">

                            {/* Sleek Body */}
                            <div className="absolute left-0 bottom-2 w-40 h-16 bg-gradient-to-t from-zinc-900 to-zinc-800 rounded-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border-b border-amber-700/30 overflow-hidden">
                                {/* Gold stripe */}
                                <div className="absolute top-4 w-full h-[1px] bg-gradient-to-r from-amber-700/50 via-amber-400 to-amber-700/50 opacity-50" />
                                {/* Logo mark placeholder */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-amber-900/50 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-amber-800 opacity-20" />
                                </div>
                            </div>

                            {/* Aerodynamic Cabin */}
                            <div className="absolute right-0 bottom-2 w-16 h-14 bg-gradient-to-t from-zinc-900 to-zinc-800 rounded-tr-[30px] rounded-br-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border-b border-amber-700/30 overflow-hidden z-10" />
                            <div className="absolute right-2 bottom-8 w-12 h-6 bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-tr-[20px] z-20" />


                            {/* Wheels (Chrome/Gold rims) */}
                            <div className="absolute bottom-[2px] left-6 w-8 h-8 bg-zinc-950 rounded-full border border-zinc-700 flex items-center justify-center z-30 shadow-[0_5px_10px_rgba(0,0,0,0.5)]">
                                <div className="w-4 h-4 rounded-full border-[1px] border-amber-500/50 bg-gradient-to-br from-amber-200/20 to-transparent" />
                            </div>
                            <div className="absolute bottom-[2px] right-6 w-8 h-8 bg-zinc-950 rounded-full border border-zinc-700 flex items-center justify-center z-30 shadow-[0_5px_10px_rgba(0,0,0,0.5)]">
                                <div className="w-4 h-4 rounded-full border-[1px] border-amber-500/50 bg-gradient-to-br from-amber-200/20 to-transparent" />
                            </div>

                            {/* Floor reflection */}
                            <div className="absolute -bottom-8 left-4 right-4 h-4 bg-gradient-to-t from-transparent to-amber-900/10 blur-sm rounded-[100%]" />

                        </div>

                    </div>

                    <button className="w-full relative group/btn overflow-hidden border border-amber-700/50 bg-zinc-900 py-4 transition-all hover:border-amber-500">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-amber-600/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                        <span className="relative z-10 text-amber-500 text-xs font-sans tracking-[0.2em] uppercase">Запросить статус</span>
                    </button>

                </div>
            </div>
        </div>
    );
}
