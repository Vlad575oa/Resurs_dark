"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet } from "lucide-react";

export default function LiquidStyle() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 600);
    };

    return (
        <div
            className="w-full h-full min-h-[400px] flex items-center justify-center bg-cyan-50 p-6 relative overflow-hidden rounded-[40px]"
            style={{ fontFamily: '"Comfortaa", "Varela Round", sans-serif' }}
        >

            <div className="relative w-full max-w-sm group z-10">

                <div className="text-cyan-500 text-sm tracking-widest uppercase mb-4 flex items-center gap-2 font-bold px-4">
                    <Droplet className="w-4 h-4 fill-cyan-400" />
                    <span>Style 18: Liquid</span>
                </div>

                {/* The Card - Smooth dripping borders */}
                <motion.div
                    animate={clicked ? { scale: [1, 0.95, 1.05, 1] } : {}}
                    transition={{ duration: 0.5 }}
                    className="relative bg-white/80 backdrop-blur-md p-8 shadow-[0_20px_40px_rgba(6,182,212,0.15)] transition-all duration-300"
                    style={{
                        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', // Organic blob shape
                    }}
                >

                    <h2 className="text-3xl font-black text-slate-800 mb-2 mt-4 text-center">Гибкость</h2>
                    <p className="text-slate-500 text-sm mb-8 leading-relaxed text-center font-medium max-w-[240px] mx-auto">
                        Текучие края и мягкие анимации. Идеально для наливных и пищевых грузов.
                    </p>

                    {/* Interactive Graphic */}
                    <div className="relative h-32 w-full flex items-center justify-center pb-4 mb-6">

                        {/* The Truck (Blobby) */}
                        <div className="relative w-48 h-20 transition-transform duration-500 group-hover:translate-x-2">

                            {/* Cargo Tank (Liquid capsule) */}
                            <motion.div
                                animate={{ borderRadius: ["40px", "50px", "40px"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute left-0 bottom-4 w-32 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 shadow-inner overflow-hidden z-10 border-2 border-white/50"
                            >
                                {/* Liquid Level inside tank */}
                                <motion.div
                                    animate={{ y: ["0%", "10%", "0%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-0 left-0 right-0 h-[60%] bg-blue-500/50"
                                    style={{ borderRadius: '50% 50% 0 0' }}
                                />
                                <motion.div
                                    animate={{ y: ["10%", "0%", "10%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute bottom-0 left-0 right-0 h-[65%] bg-cyan-300/50"
                                    style={{ borderRadius: '60% 40% 0 0' }}
                                />
                            </motion.div>

                            {/* Cabin (Smooth) */}
                            <div className="absolute right-0 bottom-4 w-14 h-14 bg-slate-800 rounded-2xl rounded-tr-3xl z-20 shadow-lg border-2 border-white/20" />
                            <div className="absolute right-0 bottom-8 w-10 h-8 bg-cyan-100 rounded-tr-2xl rounded-bl-sm z-30" />

                            {/* Connecting pipe */}
                            <div className="absolute right-12 bottom-6 w-6 h-4 bg-slate-400 rounded-full z-0" />

                            {/* Wheels (Soft circles) */}
                            <div className="absolute bottom-0 left-4 w-10 h-10 bg-slate-800 rounded-full border-4 border-slate-700 flex items-center justify-center z-40 shadow-[0_5px_10px_rgba(0,0,0,0.2)]">
                                <div className="w-3 h-3 bg-cyan-300 rounded-full" />
                            </div>
                            <div className="absolute bottom-0 right-2 w-10 h-10 bg-slate-800 rounded-full border-4 border-slate-700 flex items-center justify-center z-40 shadow-[0_5px_10px_rgba(0,0,0,0.2)]">
                                <div className="w-3 h-3 bg-cyan-300 rounded-full" />
                            </div>

                        </div>

                    </div>

                    <div className="flex justify-center mb-4">
                        <button
                            onClick={handleClick}
                            className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 px-10 transition-colors shadow-[0_10px_20px_rgba(6,182,212,0.3)] hover:shadow-[0_15px_25px_rgba(6,182,212,0.4)] relative"
                            style={{ borderRadius: '30px 40px 30px 40px' }} // Squishy button
                        >
                            ВЫБРАТЬ

                            {/* Ripple effect inside button on click */}
                            <AnimatePresence>
                                {clicked && (
                                    <motion.span
                                        initial={{ scale: 0, opacity: 0.5 }}
                                        animate={{ scale: 3, opacity: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 bg-white/40 rounded-full pointer-events-none"
                                        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '20px', height: '20px' }}
                                    />
                                )}
                            </AnimatePresence>
                        </button>
                    </div>

                </motion.div>
            </div>

            {/* Ambient background decorative liquid blobs */}
            <motion.div
                animate={{ x: [0, 20, 0], y: [0, -30, 0], rotate: [0, 45, 0], borderRadius: ["40% 60% 70% 30%", "60% 40% 30% 70%", "40% 60% 70% 30%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-64 h-64 bg-cyan-300/20 blur-xl -z-10"
            />
            <motion.div
                animate={{ x: [0, -30, 0], y: [0, 20, 0], rotate: [0, -45, 0], borderRadius: ["60% 40% 30% 70%", "40% 60% 70% 30%", "60% 40% 30% 70%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 w-72 h-72 bg-blue-300/20 blur-xl -z-10"
            />
        </div>
    );
}
