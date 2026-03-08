"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";

export default function Isolayer() {
    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 p-6 relative overflow-hidden rounded-3xl" style={{ fontFamily: '"Montserrat", sans-serif' }}>

            {/* Subtle isometric grid background */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 10L20 20L0 10L20 0Z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3Cpath d='M20 20L40 30L20 40L0 30L20 20Z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3Cpath d='M0 10V30M20 0V20M20 20V40M40 10V30' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '100px 100px',
                    backgroundPosition: 'center'
                }}
            />

            <div className="relative w-full max-w-sm">

                <div className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>Style 15: Isolayer</span>
                </div>

                {/* The Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl group transition-all duration-500">

                    <h2 className="text-2xl font-black text-white mb-2 tracking-tight">Изометрия</h2>
                    <p className="text-indigo-200/60 text-sm mb-12 leading-relaxed">
                        Градиенты, перспектива. При наведении на автомобиль он плавно приподнимается над поверхностью.
                    </p>

                    {/* Interactive Isometric Truck Graphic */}
                    <div className="relative h-48 w-full flex items-center justify-center border-t border-indigo-900/30 pt-8 mb-6 perspective-[1000px]">

                        {/* The Isometric Stage container */}
                        <div className="relative w-48 h-48 transform rotate-x-60 rotate-z-[-45deg] scale-y-75 group-hover:rotate-z-[-40deg] transition-transform duration-700 ease-in-out origin-center">

                            {/* Floor Shadow / Projection */}
                            <div className="absolute inset-0 bg-indigo-500/10 border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.2)] rounded-lg" />

                            {/* The Truck Object (Levitating on Hover) */}
                            <motion.div
                                className="absolute inset-0 preserve-3d"
                                whileHover={{ z: 80 }} // Levitate in Z axis inside the isometric projection
                                initial={{ z: 0 }}
                                transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                            >

                                {/* Cargo Box (Isometric Top/Sides) */}
                                <div className="absolute bottom-[20%] right-[20%] w-[60%] h-[50%] bg-blue-600 shadow-xl preserve-3d" style={{ transform: 'translateZ(20px)' }}>
                                    {/* Top face */}
                                    <div className="absolute inset-0 bg-blue-400 transform origin-top rotate-x-[-90deg] h-[40px] border border-blue-300/30" />
                                    {/* Right face */}
                                    <div className="absolute top-0 right-0 w-[40px] h-full bg-blue-800 transform origin-right rotate-y-90 border border-blue-900/30" />
                                    {/* Front face (main) */}
                                    <div className="absolute inset-0 border border-blue-500/30 flex items-center justify-center opacity-50">
                                        <div className="w-1/2 h-1/2 bg-blue-500 rounded-full blur-[2px]" />
                                    </div>
                                </div>

                                {/* Cabin Box */}
                                <div className="absolute bottom-[60%] right-[60%] w-[25%] h-[30%] bg-indigo-500 shadow-xl preserve-3d" style={{ transform: 'translateZ(20px)' }}>
                                    {/* Top face */}
                                    <div className="absolute inset-0 bg-indigo-400 transform origin-top rotate-x-[-90deg] h-[40px] border border-indigo-300/30" />
                                    {/* Right face */}
                                    <div className="absolute top-0 right-0 w-[40px] h-full bg-indigo-800 transform origin-right rotate-y-90 border border-indigo-900/30 flex items-center justify-center">
                                        {/* Window */}
                                        <div className="w-[80%] h-[50%] bg-cyan-200/50 -translate-x-[2px] backdrop-blur-sm" />
                                    </div>
                                </div>

                                {/* Drop shadow that fades as truck levitates */}
                                <div className="absolute bottom-[20%] right-[20%] w-[60%] h-[50%] bg-black/40 blur-md transform translate-z-[-50px] group-hover:opacity-20 transition-opacity duration-700" />
                                <div className="absolute bottom-[60%] right-[60%] w-[25%] h-[30%] bg-black/40 blur-md transform translate-z-[-50px] group-hover:opacity-20 transition-opacity duration-700" />

                            </motion.div>

                        </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-[0_10px_20px_rgba(79,70,229,0.3)] hover:shadow-[0_15px_30px_rgba(79,70,229,0.4)] text-sm tracking-widest uppercase">
                        Посмотреть тариф
                    </button>

                </div>
            </div>
        </div>
    );
}
