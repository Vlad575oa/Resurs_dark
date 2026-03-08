"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function EcoKraft() {
    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#dcd2c6] p-6 relative overflow-hidden rounded-3xl" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", "Marker Felt", sans-serif' }}>

            {/* Kraft Paper Texture Background */}
            <div
                className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            <div className="relative w-full max-w-sm group">

                {/* Style Badge (Looks like a stamped ink mark) */}
                <div className="text-stone-800 text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2 border-2 border-stone-800 p-1 w-max transform -rotate-3 opacity-80 backdrop-blur-sm mix-blend-multiply">
                    <Leaf className="w-4 h-4" />
                    <span>Style 17: Eco-Kraft</span>
                </div>

                {/* The Card (Looks like a taped cardboard label) */}
                <div className="relative bg-[#c8bba6] border border-[#a89b86] p-8 shadow-[inset_0_0_20px_rgba(0,0,0,0.05),_5px_5px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:rotate-1">

                    {/* Tape strips */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm rotate-2 shadow-sm pointer-events-none" />
                    <div className="absolute -bottom-4 right-8 w-24 h-8 bg-white/30 backdrop-blur-sm -rotate-3 shadow-sm pointer-events-none" />

                    {/* Marker drawn borders */}
                    <div className="absolute inset-2 border-2 border-stone-800 border-dashed opacity-50 pointer-events-none rounded" style={{ borderImage: 'url("data:image/svg+xml,%3Csvg width=\'10\' height=\'10\' viewBox=\'0 0 10 10\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'10\' height=\'10\' fill=\'none\' stroke=\'%23292524\' stroke-width=\'2\' stroke-dasharray=\'4 4\'/%3E%3C/svg%3E") 2' }} />

                    <h2 className="text-3xl font-bold text-stone-800 mb-2 transform -rotate-2">Эко-Доставка</h2>
                    <p className="text-stone-700 text-base mb-8 leading-relaxed max-w-[250px]">
                        Эстетика картонных коробок. Шрифты под "маркер". Наведи курсор на фуру!
                    </p>

                    {/* Graphic Area */}
                    <div className="relative h-40 w-full flex items-center justify-center border-b-2 border-stone-800 border-dashed pb-4 mb-6">

                        {/* The Drawn Truck */}
                        <div className="relative w-48 h-20 group-hover:scale-105 transition-transform duration-500">

                            {/* Box Cargo */}
                            <div className="absolute left-0 bottom-4 w-32 h-20 bg-[#bba993] border-4 border-stone-800 rounded-sm shadow-md flex items-center justify-center flex-col overflow-hidden">
                                {/* Box Texture lines */}
                                <div className="w-full h-[2px] bg-stone-800/20 mb-2" />
                                <div className="w-full h-[2px] bg-stone-800/20 mb-2" />
                                <div className="w-full h-[2px] bg-stone-800/20" />

                                {/* Care symbols (drawn) */}
                                <div className="absolute bottom-2 left-2 text-stone-800 text-xs font-bold opacity-60">↑↑</div>
                                <div className="absolute top-2 right-2 flex gap-1 opacity-60">
                                    <div className="w-3 h-3 border-2 border-stone-800 rounded-full" />
                                </div>
                            </div>

                            {/* Cabin */}
                            <div className="absolute right-2 bottom-4 w-12 h-14 bg-[#bba993] border-4 border-stone-800 rounded-t-xl rounded-r-md shadow-md z-10" />
                            <div className="absolute right-2 bottom-10 w-8 h-6 bg-sky-200 border-4 border-stone-800 rounded-tr-lg z-20" />

                            {/* Wheels */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute bottom-0 left-4 w-10 h-10 bg-stone-800 rounded-full border-4 border-[#bba993] flex items-center justify-center z-30"
                            >
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </motion.div>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute bottom-0 right-6 w-10 h-10 bg-stone-800 rounded-full border-4 border-[#bba993] flex items-center justify-center z-30"
                            >
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </motion.div>

                            {/* Exhaust (Scribbled clouds) */}
                            <div className="absolute bottom-2 -left-8 flex gap-1">
                                <motion.div animate={{ y: [-2, 2, -2], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-4 h-4 border-2 border-stone-800 rounded-full" />
                                <motion.div animate={{ y: [-4, 4, -4], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-6 h-6 border-2 border-stone-800 rounded-full" />
                            </div>

                        </div>

                    </div>

                    <button className="w-full text-center group/btn relative overflow-hidden bg-stone-800 text-[#dcd2c6] font-bold text-xl py-3 border-4 border-stone-800 transition-colors hover:bg-transparent hover:text-stone-800 rounded-sm transform rotate-1">
                        Оформить!
                        <div className="absolute inset-0 bg-stone-800/10 scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-300" />
                    </button>

                </div>
            </div>
        </div>
    );
}
