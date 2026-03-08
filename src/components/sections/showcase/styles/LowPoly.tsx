"use client";

import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

export default function LowPoly() {
    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-violet-600 p-6 relative overflow-hidden rounded-3xl" style={{ fontFamily: '"Courier New", Courier, monospace' }}>

            {/* 8-bit Background Pattern */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)`,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px'
                }}
            />

            <div className="relative w-full max-w-sm group perspective-[800px]">

                {/* Style Badge (Pixelated look) */}
                <div className="bg-yellow-400 text-black text-[10px] font-bold tracking-widest uppercase mb-4 flex items-center gap-2 p-2 shadow-[2px_2px_0_0_#000] w-max border-2 border-black">
                    <Gamepad2 className="w-4 h-4" />
                    <span>Style 20: Low Poly</span>
                </div>

                {/* The Card */}
                <div className="relative bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#000] group-hover:shadow-[12px_12px_0_0_#000] transition-shadow duration-300">

                    <h2 className="text-2xl font-black text-black mb-2 uppercase tracking-tighter" style={{ textShadow: '2px 2px 0px #a855f7' }}>
                        Retro Deliver
                    </h2>
                    <p className="text-zinc-600 text-xs mb-8 uppercase font-bold tracking-wide">
                        ПИКСЕЛЬ-АРТ. НАВЕДИ, ЧТОБЫ КРУТИТЬ. PRESS START.
                    </p>

                    {/* Interactive Graphic Area */}
                    <div className="relative h-32 w-full flex items-center justify-center border-b-4 border-black border-dashed pb-4 mb-6 transform-style-preserve-3d">

                        {/* The Low Poly Truck (Simulated with simple CSS shapes and rotations) */}
                        <motion.div
                            className="relative w-40 h-20 transform-style-preserve-3d"
                            whileHover={{ rotateY: 360 }}
                            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                        >

                            {/* Main Cargo Block (Front face) */}
                            <div className="absolute left-0 bottom-4 w-24 h-16 bg-blue-500 border-4 border-black transform translate-z-[12px] flex items-center justify-center">
                                <div className="w-8 h-8 border-4 border-black bg-blue-400" />
                            </div>
                            {/* Cargo Block (Back face) */}
                            <div className="absolute left-0 bottom-4 w-24 h-16 bg-blue-700 border-4 border-black transform translate-z-[-12px]" />
                            {/* Cargo Block (Top face) */}
                            <div className="absolute left-0 bottom-20 w-24 h-6 bg-blue-300 border-4 border-black transform rotate-x-90 translate-y-[12px]" />
                            {/* Cargo Block (Right face) */}
                            <div className="absolute left-24 bottom-4 w-6 h-16 bg-blue-600 border-4 border-black border-l-0 transform rotate-y-90 origin-left translate-x-[2px]" />


                            {/* Cabin Block (Front) */}
                            <div className="absolute right-4 bottom-4 w-12 h-12 bg-red-500 border-4 border-black transform translate-z-[10px]" />
                            {/* Cabin Glass */}
                            <div className="absolute right-4 bottom-10 w-8 h-6 bg-cyan-300 border-4 border-black border-b-0 transform translate-z-[11px]" />

                            {/* Wheels (Squares!) */}
                            <div className="absolute bottom-0 left-2 w-8 h-8 bg-zinc-800 border-4 border-black transform translate-z-[14px]">
                                <div className="w-2 h-2 bg-white m-1" />
                            </div>
                            <div className="absolute bottom-0 right-6 w-8 h-8 bg-zinc-800 border-4 border-black transform translate-z-[14px]">
                                <div className="w-2 h-2 bg-white m-1" />
                            </div>

                        </motion.div>

                    </div>

                    <button className="w-full bg-yellow-400 text-black border-4 border-black font-black py-2 text-xl uppercase tracking-widest shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-y-1 active:translate-x-1 transition-all">
                        Start
                    </button>

                </div>
            </div>
        </div>
    );
}
