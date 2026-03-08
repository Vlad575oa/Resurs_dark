"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

export default function ComicStyle() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 1500); // Reset after 1.5s
    };

    return (
        <div
            className="w-full h-full min-h-[400px] flex items-center justify-center bg-yellow-400 p-6 relative overflow-hidden rounded-3xl"
            // Simulated Impact/Comic font using system fallbacks
            style={{ fontFamily: '"Impact", "Arial Black", sans-serif' }}
        >

            {/* Halftone Dot Pattern Background */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply"
                style={{
                    backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)',
                    backgroundSize: '10px 10px'
                }}
            />

            <div className="relative w-full max-w-sm">

                {/* Style Badge */}
                <div className="bg-red-500 text-white text-xs px-3 py-1 mb-4 inline-flex items-center gap-1 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] uppercase tracking-[0.2em] transform -rotate-2">
                    <Zap className="w-3 h-3 fill-yellow-400 text-yellow-500" />
                    <span>Style 14: Pop-Art</span>
                </div>

                {/* The Comic Panel Card */}
                <div className="relative bg-white border-4 border-black p-8 rounded-xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] group hover:-translate-y-1 hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transition-all duration-300">

                    <h2 className="text-3xl text-black mb-2 uppercase tracking-wide stroke-white">Поп-Арт Логистика</h2>
                    <p className="text-xl text-zinc-800 mb-8 leading-tight lowercase font-medium" style={{ fontFamily: 'sans-serif' }}>
                        Яркие контуры, растр, эффект комикса.
                        <br /> <span className="text-red-600 font-bold uppercase mt-2 inline-block">Кликни на машину!</span>
                    </p>

                    {/* Interactive Comic Graphic */}
                    <div className="relative h-32 w-full flex items-center justify-center border-b-4 border-black border-dashed pb-4 mb-6" onClick={handleClick}>

                        {/* The Truck */}
                        <div className="relative w-40 h-20 cursor-pointer group-hover:scale-105 transition-transform">

                            {/* Comic Action Background Burst (always spinning slowly, faster on hover) */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-40px] opacity-20 -z-10"
                                style={{
                                    background: 'repeating-conic-gradient(#ef4444 0% 10%, transparent 10% 20%)',
                                    borderRadius: '50%'
                                }}
                            />

                            {/* Cabin */}
                            <div className="absolute right-0 bottom-2 w-12 h-14 bg-red-500 border-4 border-black rounded-tr-xl rounded-br-md z-20 shadow-[inset_-4px_-4px_0_0_rgba(0,0,0,0.2)]" />
                            <div className="absolute right-[-4px] bottom-8 w-10 h-6 bg-cyan-300 border-4 border-black rounded-tr-md z-30" />

                            {/* Cargo Body */}
                            <div className="absolute left-0 bottom-2 w-32 h-18 bg-yellow-300 border-4 border-black rounded-l-md z-10 shadow-[inset_-4px_-4px_0_0_rgba(0,0,0,0.1)] flex items-center justify-center overflow-hidden">
                                <span className="text-black text-2xl opacity-30 transform -rotate-12">FAST</span>
                            </div>

                            {/* Wheels */}
                            <div className="absolute bottom-[-10px] left-4 w-8 h-8 bg-white rounded-full border-4 border-black flex items-center justify-center z-40">
                                <div className="w-2 h-2 bg-black rounded-full" />
                            </div>
                            <div className="absolute bottom-[-10px] right-14 w-8 h-8 bg-white rounded-full border-4 border-black flex items-center justify-center z-40">
                                <div className="w-2 h-2 bg-black rounded-full" />
                            </div>

                            {/* Speed Lines */}
                            <motion.div
                                animate={{ x: [-20, 0] }}
                                transition={{ duration: 0.2, repeat: Infinity }}
                                className="absolute top-1/2 -left-8 w-6 h-[4px] bg-black rounded-full"
                            />
                            <motion.div
                                animate={{ x: [-30, 0] }}
                                transition={{ duration: 0.3, repeat: Infinity, delay: 0.1 }}
                                className="absolute top-1/4 -left-12 w-10 h-[4px] bg-black rounded-full"
                            />

                        </div>

                        {/* The Action Bubble! */}
                        <AnimatePresence>
                            {clicked && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0, rotate: -20, x: 20 }}
                                    animate={{ scale: [1.2, 1], opacity: 1, rotate: 10, x: 0 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className="absolute -top-8 -right-8 z-50 pointer-events-none"
                                >
                                    {/* Speech bubble shape */}
                                    <div className="relative bg-white border-4 border-black px-6 py-4 shadow-[6px_6px_0_0_rgba(239,68,68,1)]" style={{ borderRadius: '50% 50% 50% 0' }}>
                                        <span className="text-3xl text-red-600 block transform -rotate-10">ВРУММ!</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>

                    <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-black border-4 border-black text-2xl uppercase py-3 rounded-lg transition-transform active:translate-y-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:shadow-none">
                        Погнали!
                    </button>

                </div>
            </div>
        </div>
    );
}
