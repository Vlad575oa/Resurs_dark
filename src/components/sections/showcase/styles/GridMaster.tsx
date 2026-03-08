"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Map, Crosshair } from "lucide-react";

export default function GridMaster() {
    const cardRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the mouse movement
    const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

    // Map the smooth mouse position to truck constraints (-30 to +30 pixels)
    const truckX = useTransform(springX, [-100, 100], [-40, 40]);
    const truckY = useTransform(springY, [-100, 100], [-20, 20]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 200 - 100; // -100 to 100
        const y = ((e.clientY - rect.top) / rect.height) * 200 - 100; // -100 to 100
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        // Return to center
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#0a0f0a] p-6 font-mono relative overflow-hidden rounded-3xl">

            {/* Global strict grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:10px_10px]" />

            <div className="relative w-full max-w-sm">
                <div className="text-green-500 text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2 bg-black w-max px-2 border border-green-900/50">
                    <Map className="w-4 h-4" />
                    <span>Style 13: Grid Master</span>
                </div>

                {/* The Card */}
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="relative bg-black border-2 border-green-900/50 p-8 rounded-none shadow-[0_0_20px_rgba(34,197,94,0.1)] group overflow-hidden cursor-crosshair"
                >
                    {/* Card internal grid highlighting */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-green-500/30 m-4 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-green-500/30 m-4 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity" />

                    <h2 className="text-2xl font-black text-white mb-2 tracking-tight flex items-center gap-2">
                        Сетка <span className="text-green-500 text-sm font-normal">v.1.0</span>
                    </h2>
                    <p className="text-green-900/80 text-sm mb-8 leading-relaxed">
                        Черный фон, зеленые линии. Roboto Mono. Интерфейс управления. Двигайте мышью по карточке.
                    </p>

                    {/* Interactive Truck Graphic bounded by grid */}
                    <div className="relative h-32 w-full flex items-center justify-center border-y border-dashed border-green-900/50 py-4 mb-6">

                        {/* Coordinate markers */}
                        <div className="absolute top-2 left-2 text-[10px] text-green-700">X: 245 Y: 112</div>
                        <div className="absolute bottom-2 right-2 text-[10px] text-green-700">SYS.OK</div>

                        {/* The Truck that follows cursor */}
                        <motion.div
                            style={{ x: truckX, y: truckY }}
                            className="relative w-32 h-12 flex items-end drop-shadow-[0_0_10px_rgba(34,197,94,0.5)] z-10"
                        >
                            {/* Body */}
                            <div className="w-24 h-12 bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                                <Crosshair className="w-6 h-6 text-green-400 opacity-50" />
                            </div>
                            {/* Cabin */}
                            <div className="w-8 h-8 bg-black border-2 border-green-500 border-l-0" />

                            {/* Wheels */}
                            <div className="absolute -bottom-2 left-2 w-4 h-4 bg-black border-2 border-green-500 rounded-full" />
                            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-black border-2 border-green-500 rounded-full" />

                            {/* Targeting line */}
                            <div className="absolute top-1/2 left-full w-48 h-[1px] bg-green-500/50 border-t border-dashed border-green-400/50" />
                        </motion.div>

                    </div>

                    <button className="w-full bg-transparent hover:bg-green-950 text-green-400 border border-green-600 font-bold py-3 transition-colors uppercase text-sm tracking-widest relative">
                        [ Инициировать ]
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-300" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-300" />
                    </button>

                </div>
            </div>
        </div>
    );
}
