"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Scale = ({ locale }: { locale: string }) => {
    const STATS = [
        { value: "18", label: locale === 'en' ? "Years of Leadership" : "Лет лидерства", suffix: " " },
        { value: "10", label: locale === 'en' ? "Equipment Units" : "Единиц техники", suffix: "k" },
        { value: "13", label: locale === 'en' ? "Professionals" : "Профессионалов", suffix: "k" },
        { value: "70", label: locale === 'en' ? "Digital Processes" : "Процессов в цифре", suffix: "%" },
        { value: "15", label: locale === 'en' ? "Branches in RF" : "Филиалов по РФ", suffix: " " }
    ];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const mapScale = useTransform(scrollYProgress, [0, 0.5], [1.5, 1]);
    const mapOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    const textureOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
    const textureScale = useTransform(scrollYProgress, [0.3, 0.8], [1.2, 1]);

    return (
        <section ref={containerRef} className="py-32 bg-anthracite-core border-y border-white/5 relative overflow-hidden">

            {/* Parallax Storytelling Background */}
            <div className="absolute inset-0 pointer-events-none mix-blend-overlay">
                {/* Layer 1: Map of Russia (Abstract) */}
                <motion.div
                    style={{ scale: mapScale, opacity: mapOpacity }}
                    className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Russia_edcp_relief_location_map.jpg/1000px-Russia_edcp_relief_location_map.jpg')] bg-cover bg-center filter grayscale opacity-20"
                />

                {/* Layer 2: Driver Uniform Texture (Macro) */}
                <motion.div
                    style={{ scale: textureScale, opacity: textureOpacity }}
                    className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/dark-blue-fabric-texture_1194-6032.jpg')] bg-cover bg-center opacity-40"
                />
            </div>

            {/* Grain Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold text-cloud-dancer tracking-tighter leading-[0.9]"
                    >
                        Масштаб,<br />
                        <span className="text-white/40 font-serif italic">гарантирующий</span><br />
                        стабильность.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-white/60 font-serif leading-relaxed"
                    >
                        Наши решения работают там, где критична точность и безопасность.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
                    {STATS.map((stat, i) => (
                        <div key={i} className="bg-anthracite-core p-8 flex flex-col justify-between aspect-square group hover:bg-[#333436] transition-colors relative overflow-hidden">
                            {/* Hover Accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-burnt-terra scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

                            <div className="text-cloud-dancer/40 font-mono text-xs uppercase tracking-widest mb-4">
                                0{i + 1} / FACT
                            </div>

                            <div>
                                <div className="text-5xl md:text-6xl font-bold text-cloud-dancer mb-2 flex items-baseline tracking-tighter">
                                    {stat.value}
                                    <span className="text-2xl text-burnt-terra ml-1 font-serif italic">{stat.suffix}</span>
                                </div>
                                <div className="text-sm font-sans text-white/60">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
