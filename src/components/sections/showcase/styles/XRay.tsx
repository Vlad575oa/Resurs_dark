"use client";

import { motion } from "framer-motion";
import { Package, ScanEye } from "lucide-react";

export default function XRay() {
    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-zinc-950 p-6 font-mono relative overflow-hidden group border border-zinc-800 rounded-3xl">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

            {/* X-Ray Scanner Sweep */}
            <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent skew-x-12 z-20 pointer-events-none"
            />

            <div className="relative w-full max-w-sm">
                <div className="text-cyan-500 text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                    <ScanEye className="w-4 h-4" />
                    <span>Style 11: X-Ray</span>
                </div>

                {/* The Card */}
                <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-cyan-900/30 p-8 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] transition-shadow duration-500">

                    <h2 className="text-2xl font-black text-white mb-2 tracking-tight">Рентген-Контроль</h2>
                    <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                        Индустриальный серый, неоновый синий. JetBrains Mono. Полупрозрачный кузов, сквозь который виден грузовой объем.
                    </p>

                    {/* Interactive Truck Graphic */}
                    <div className="relative h-32 w-full flex items-center justify-center border-b border-cyan-900/50 pb-4 mb-6">

                        {/* The Truck Shell */}
                        <div className="relative w-48 h-20 transition-all duration-500">
                            {/* Cabin */}
                            <div className="absolute right-0 bottom-2 w-12 h-14 bg-zinc-800 border-2 border-cyan-900/50 rounded-tr-lg rounded-br-md z-10" />
                            <div className="absolute right-0 bottom-8 w-10 h-6 bg-cyan-950/50 border-2 border-cyan-800/50 rounded-tr-md z-10" />

                            {/* Cargo Body (Transparent/X-Ray on hover) */}
                            <div className="absolute left-0 bottom-2 w-36 h-18 bg-zinc-800 border-2 border-cyan-900/50 rounded-l-md transition-colors duration-500 group-hover:bg-cyan-950/20 group-hover:border-cyan-500/50 z-20 overflow-hidden">

                                {/* Inside Cargo (Visible only on hover) */}
                                <div className="absolute inset-0 flex items-end justify-center gap-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="text-cyan-400">
                                        <Package className="w-6 h-6" />
                                    </motion.div>
                                    <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="text-cyan-400">
                                        <Package className="w-8 h-8" />
                                    </motion.div>
                                    <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} className="text-cyan-400">
                                        <Package className="w-5 h-5" />
                                    </motion.div>
                                </div>

                                {/* X-Ray Scanline effect inside truck */}
                                <motion.div
                                    className="absolute top-0 bottom-0 left-0 w-1 bg-cyan-400/80 shadow-[0_0_10px_#22d3ee] opacity-0 group-hover:opacity-100"
                                    animate={{ x: ["0%", "3600%"] /* 36 * 4px roughly = 144px width */ }}
                                    transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                                />

                            </div>

                            {/* Wheels */}
                            <div className="absolute bottom-0 left-4 w-6 h-6 bg-zinc-900 rounded-full border-2 border-cyan-900/80 z-30" />
                            <div className="absolute bottom-0 right-14 w-6 h-6 bg-zinc-900 rounded-full border-2 border-cyan-900/80 z-30" />
                        </div>

                    </div>

                    <button className="w-full bg-cyan-950 hover:bg-cyan-900 text-cyan-400 border border-cyan-800 font-bold py-3 rounded-md transition-all uppercase text-sm tracking-widest relative overflow-hidden">
                        <span className="relative z-10">Просветить тариф</span>
                        {/* Button scan effect */}
                        <div className="absolute inset-0 bg-cyan-400/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                    </button>

                </div>
            </div>
        </div>
    );
}
