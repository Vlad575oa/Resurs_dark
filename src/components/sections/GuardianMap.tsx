"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const LOCATIONS = [
    { id: 1, x: 20, y: 40, label: "Moscow HQ", status: "Active" },
    { id: 2, x: 45, y: 30, label: "Ural Hub", status: "Active" },
    { id: 3, x: 70, y: 45, label: "Siberia Ed.", status: "Warning" },
    { id: 4, x: 30, y: 60, label: "South Branch", status: "Active" },
    { id: 5, x: 80, y: 35, label: "Far East", status: "Active" },
];

export const GuardianMap = () => {
    const [activeLocation, setActiveLocation] = useState<number | null>(null);

    return (
        <section className="py-32 bg-anthracite-core relative overflow-hidden flex flex-col items-center">

            <div className="container mx-auto px-6 mb-12 text-center relative z-10">
                <span className="text-safe-green font-mono text-xs uppercase tracking-widest mb-4 block">Guardian Control System</span>
                <h2 className="text-4xl md:text-5xl font-bold text-cloud-dancer">Карта присутствия</h2>
            </div>

            {/* Contour Map Construction */}
            <div className="relative w-full max-w-5xl aspect-[2/1] bg-[#1a1b1d] rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
                {/* Grid Lines */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                {/* Abstract Data Flow (SVG) */}
                <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 1000 500">
                    <defs>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>
                    <motion.path
                        d="M100,250 Q400,100 600,250 T900,200"
                        stroke="url(#gradient-line)"
                        strokeWidth="2"
                        fill="none"
                        filter="url(#glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#E63946" stopOpacity="0" />
                        <stop offset="50%" stopColor="#E63946" stopOpacity="1" />
                        <stop offset="100%" stopColor="#2A9D8F" stopOpacity="0" />
                    </linearGradient>
                </svg>

                {/* Interactive Clusters */}
                {LOCATIONS.map((loc) => (
                    <div
                        key={loc.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                        onMouseEnter={() => setActiveLocation(loc.id)}
                        onMouseLeave={() => setActiveLocation(null)}
                    >
                        {/* Cluster Visual */}
                        <div className="relative w-12 h-12 flex items-center justify-center cursor-pointer group">
                            {/* Outer Ripples */}
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity, delay: loc.id * 0.2 }}
                                className={`absolute inset-0 rounded-full border border-white/10`}
                            />
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: loc.id * 0.2 }}
                                className={`absolute inset-2 rounded-full border ${loc.status === 'Warning' ? 'border-burnt-terra/30' : 'border-safe-green/30'}`}
                            />

                            {/* Core */}
                            <div className={`relative w-3 h-3 rounded-full ${loc.status === 'Warning' ? 'bg-burnt-terra shadow-[0_0_10px_rgba(230,57,70,0.5)]' : 'bg-safe-green shadow-[0_0_10px_rgba(42,157,143,0.5)]'}`} />
                        </div>

                        {/* Hover Card */}
                        {activeLocation === loc.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-56 bg-[#1a1b1d]/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl z-20"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-cloud-dancer font-bold font-mono text-sm uppercase tracking-wide">{loc.label}</div>
                                    <div className={`w-2 h-2 rounded-full ${loc.status === 'Warning' ? 'bg-burnt-terra' : 'bg-safe-green'}`} />
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-white/40">
                                    <div>LOAD: {Math.floor(Math.random() * 40) + 40}%</div>
                                    <div>UPTIME: 99.9%</div>
                                    <div className="col-span-2">LATENCY: 12ms</div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-8 flex gap-8 text-xs font-mono text-white/30">
                <div>ACTIVE UNITS: 10,420</div>
                <div>SYSTEM LOAD: 42%</div>
                <div>SECURITY LEVEL: MAX</div>
            </div>

        </section>
    );
};
