"use client";

import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

export default function PaperCut() {
    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#fdfbf7] p-6 relative overflow-hidden rounded-3xl" style={{ fontFamily: 'Georgia, serif' }}>

            {/* Paper texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            <div className="relative w-full max-w-sm group">
                <div className="text-orange-400 text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                    <Scissors className="w-4 h-4" />
                    <span>Style 12: Paper Cut</span>
                </div>

                {/* The Card - Looks like stacked papers */}
                <div className="relative">
                    {/* Background paper shadow layer */}
                    <div className="absolute inset-0 bg-red-100 rotate-3 rounded-2xl shadow-sm transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-orange-100 -rotate-2 rounded-2xl shadow-sm transition-transform duration-500 group-hover:-rotate-4 group-hover:scale-105" />

                    {/* Main Paper */}
                    <div className="relative bg-white p-8 rounded-2xl shadow-md border border-slate-100 z-10 transition-transform duration-500 group-hover:scale-105">

                        <h2 className="text-3xl font-bold text-slate-800 mb-2 font-sans tracking-tight">Оригами</h2>
                        <p className="text-slate-500 text-sm mb-8 leading-relaxed font-sans">
                            Теплые пастельные тона. Эффект складывания из бумаги. При наведении модель «складывается» из плоского листа.
                        </p>

                        {/* Interactive Paper Truck Graphic */}
                        <div className="relative h-32 w-full flex items-center justify-center border-b-2 border-dashed border-slate-200 pb-4 mb-6 perspective-[1000px]">

                            <div className="relative w-48 h-20 transform-style-preserve-3d flex items-end">

                                {/* Flat state (visible initially, folds away on hover) */}
                                <motion.div
                                    className="absolute bottom-2 left-0 w-full h-16 bg-orange-50 rounded-md border-2 border-dashed border-orange-200 flex items-center justify-center text-orange-300 text-xs font-bold font-sans uppercase tracking-widest"
                                    initial={{ rotateX: 0, opacity: 1 }}
                                    whileHover={{ rotateX: 90, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ transformOrigin: 'bottom' }}
                                >
                                    Лист развертки
                                </motion.div>

                                {/* 3D Folded Model (Hidden initially, folds up on hover) */}
                                <div className="absolute inset-0 pointer-events-none">
                                    {/* Cargo */}
                                    <motion.div
                                        className="absolute left-2 bottom-2 w-28 h-16 bg-orange-400 shadow-md origin-bottom flex items-center justify-center text-white"
                                        initial={{ rotateX: -90, opacity: 0 }}
                                        whileHover={{ rotateX: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }} // Giving it sharp paper edges
                                    >
                                        <div className="w-full h-full border-2 border-white/20 m-1" />
                                    </motion.div>

                                    {/* Cabin */}
                                    <motion.div
                                        className="absolute right-4 bottom-2 w-12 h-12 bg-red-400 shadow-md origin-bottom"
                                        initial={{ rotateX: -90, opacity: 0 }}
                                        whileHover={{ rotateX: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        style={{ clipPath: 'polygon(0 0, 70% 0, 100% 100%, 0 100%)' }} // Slanted windshield
                                    />

                                    {/* Wheels (Circles cut from paper) */}
                                    <motion.div
                                        className="absolute bottom-0 left-6 w-6 h-6 bg-slate-800 rounded-full border-2 border-white shadow-sm"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileHover={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.3, delay: 0.4 }}
                                    />
                                    <motion.div
                                        className="absolute bottom-0 right-8 w-6 h-6 bg-slate-800 rounded-full border-2 border-white shadow-sm"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileHover={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.3, delay: 0.5 }}
                                    />
                                </div>

                            </div>

                        </div>

                        <button className="w-full bg-orange-50 hover:bg-orange-100 text-orange-600 font-bold py-3 rounded-md transition-colors font-sans border-2 border-dashed border-orange-200">
                            Сложить цену
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}
