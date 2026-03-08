"use client";
import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

export default function ParallaxLive() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [wipers, setWipers] = useState(false);
    const lastX = useRef(0);
    const wipersTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const speed = Math.abs(e.clientX - lastX.current);
        lastX.current = e.clientX;
        setPos({ x, y });
        if (speed > 20) {
            setWipers(true);
            if (wipersTimeout.current) clearTimeout(wipersTimeout.current);
            wipersTimeout.current = setTimeout(() => setWipers(false), 2000);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-[380px] rounded-3xl border border-slate-700 overflow-hidden cursor-move select-none bg-sky-900"
        >
            {/* Sky */}
            <motion.div className="absolute inset-0 bg-gradient-to-b from-sky-700 to-sky-500" style={{ x: pos.x * -10, y: pos.y * -8 }} />
            {/* Hills */}
            <motion.div className="absolute bottom-20 left-0 right-0 h-40 bg-emerald-800 rounded-t-[50%]" style={{ x: pos.x * -20, y: pos.y * -5 }} />
            {/* Road */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-slate-700" />
            <div className="absolute bottom-8 left-0 right-0 h-2 border-t-4 border-dashed border-yellow-400/40" />
            {/* Wiper (left) */}
            {wipers && (
                <motion.div animate={{ rotate: [0, 60, 0] }} transition={{ duration: 0.4, repeat: 4 }} style={{ transformOrigin: "bottom left" }}
                    className="absolute bottom-[60px] left-[35%] h-24 w-1 bg-slate-300/80 rounded-full" />
            )}
            {/* Wiper (right) */}
            {wipers && (
                <motion.div animate={{ rotate: [0, -60, 0] }} transition={{ duration: 0.4, repeat: 4 }} style={{ transformOrigin: "bottom right" }}
                    className="absolute bottom-[60px] right-[35%] h-24 w-1 bg-slate-300/80 rounded-full" />
            )}
            {/* Label */}
            <div className="absolute top-4 left-0 right-0 text-center">
                <h3 className="text-xl font-black text-white drop-shadow">Живая Панорама</h3>
                <p className="text-sky-200 text-xs mt-1">Двигайте мышкой — пейзаж движется. Резко — включатся дворники.</p>
            </div>
        </div>
    );
}
