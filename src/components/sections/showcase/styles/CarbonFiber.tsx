"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GaugeCircle, Play } from "lucide-react";

export default function CarbonFiber() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleInteract = () => {
        setIsPlaying(true);
        // VROOM visual effect length matches the engine sound conceptual length
        setTimeout(() => setIsPlaying(false), 800);
    };

    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#1a1a1a] p-6 relative overflow-hidden rounded-3xl" style={{ fontFamily: '"Exo 2", sans-serif' }}>

            {/* Carbon Fiber Background Texture */}
            <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(45deg, #111 25%, transparent 25%, transparent 75%, #111 75%, #111), linear-gradient(45deg, #111 25%, transparent 25%, transparent 75%, #111 75%, #111)`,
                    backgroundSize: '8px 8px',
                    backgroundPosition: '0 0, 4px 4px',
                    backgroundColor: '#222'
                }}
            />

            {/* Red ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-red-600/20 blur-[60px] pointer-events-none" />

            <div className="relative w-full max-w-sm group">

                <div className="text-red-500 text-xs font-black tracking-widest uppercase mb-4 flex items-center gap-2">
                    <GaugeCircle className="w-4 h-4" />
                    <span>Style 16: Carbon Fiber</span>
                </div>

                {/* The Card */}
                <div
                    onClick={handleInteract}
                    className="relative bg-zinc-900 border-2 border-zinc-800 hover:border-red-600/50 p-8 rounded-2xl shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                >
                    {/* Card internal carbon fiber subtle */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

                    <div className="flex justify-between items-start mb-2 relative z-10">
                        <h2 className="text-3xl font-black text-white tracking-tight italic">КАРБОН RS</h2>
                        {/* RPM gauge mock */}
                        <div className="w-10 h-10 border-4 border-zinc-800 rounded-full flex items-center justify-center relative">
                            <motion.div
                                animate={{ rotate: isPlaying ? [0, 180, 45, 120, 0] : 0 }}
                                transition={{ duration: 0.8, times: [0, 0.2, 0.4, 0.6, 1] }}
                                className="absolute bottom-1/2 left-1/2 w-1 h-3 bg-red-500 origin-bottom rounded-full -translate-x-1/2"
                            />
                            <span className="text-[8px] text-zinc-500 mt-4 font-black">RPM</span>
                        </div>
                    </div>

                    <p className="text-zinc-400 text-sm mb-8 leading-relaxed italic border-l-2 border-red-600 pl-3">
                        Стиль гоночных болидов. Кликните на карточку, чтобы запустить двигатель.
                    </p>

                    {/* Interactive Racing Truck Graphic */}
                    <div className="relative h-24 w-full flex items-center justify-center border-b border-zinc-800 pb-2 mb-6">

                        {/* The Truck */}
                        <motion.div
                            animate={isPlaying ? { x: [0, -2, 2, -1, 1, 0], y: [0, 1, -1, 0] } : {}}
                            transition={{ duration: 0.1, repeat: 8 }}
                            className="relative w-48 h-16"
                        >

                            {/* Racing Stripes */}
                            <div className="absolute inset-0 bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 shadow-inner z-10">
                                <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-red-600 -skew-x-12" />
                                <div className="absolute top-0 bottom-0 left-[55%] w-1 bg-white -skew-x-12" />
                            </div>

                            {/* Cabin Glass */}
                            <div className="absolute right-0 top-0 bottom-0 w-12 bg-black opacity-80 rounded-r-lg z-20 border-l border-zinc-700" />


                            {/* Wheels (Low profile, big rims) */}
                            <div className="absolute -bottom-4 left-4 w-10 h-10 bg-black rounded-full border-4 border-zinc-800 flex items-center justify-center z-30 shadow-lg">
                                <motion.div animate={isPlaying ? { rotate: 360 } : {}} transition={{ duration: 0.2, repeat: 4 }} className="w-4 h-4 border-2 border-red-600 rounded-full" />
                            </div>
                            <div className="absolute -bottom-4 right-10 w-10 h-10 bg-black rounded-full border-4 border-zinc-800 flex items-center justify-center z-30 shadow-lg">
                                <motion.div animate={isPlaying ? { rotate: 360 } : {}} transition={{ duration: 0.2, repeat: 4 }} className="w-4 h-4 border-2 border-red-600 rounded-full" />
                            </div>

                            {/* Exhaust Flames */}
                            <AnimatePresence>
                                {isPlaying && (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: [1, 1.5, 0.5, 0], opacity: [1, 1, 0, 0] }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute -bottom-2 -left-8 w-12 h-4 bg-gradient-to-l from-orange-400 to-red-600 rounded-full blur-[2px] z-0 origin-right"
                                    />
                                )}
                            </AnimatePresence>

                        </motion.div>

                    </div>

                    <button className="w-full bg-red-600 hover:bg-red-500 text-white font-black italic py-3 rounded-lg transition-colors flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                        <Play className="w-4 h-4 fill-white" />
                        ЗАКАЗАТЬ ДОСТАВКУ
                    </button>

                    {/* VROOM Text Overlay */}
                    <AnimatePresence>
                        {isPlaying && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                className="absolute inset-0 flex items-center justify-center bg-black/60 pointer-events-none z-50 backdrop-blur-[2px]"
                            >
                                <div className="text-5xl font-black text-white italic tracking-tighter" style={{ WebkitTextStroke: '2px #ef4444' }}>
                                    VROOOOM!
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    );
}
