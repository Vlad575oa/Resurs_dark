"use client";

import { TrendingUp, Map, Wrench, Timer, Gavel, UserX, AlertCircle, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const LOSSES = [
    {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Перерасход топлива",
        desc: "Неконтролируемый пробег и махинации съедают до 20% ГСМ."
    },
    {
        icon: <Map className="w-5 h-5" />,
        title: "Неэффективные маршруты",
        desc: "Пустые пробеги и неоптимальная логистика."
    },
    {
        icon: <Wrench className="w-5 h-5" />,
        title: "Внеплановые ремонты",
        desc: "Отсутствие превентивного ТО ведет к дорогим поломкам."
    },
    {
        icon: <Timer className="w-5 h-5" />,
        title: "Простои техники",
        desc: "Машины стоят в ожидании ремонта или запчастей."
    },
    {
        icon: <Gavel className="w-5 h-5" />,
        title: "Штрафы и ДТП",
        desc: "Агрессивное вождение увеличивает риски и расходы."
    },
    {
        icon: <UserX className="w-5 h-5" />,
        title: "Человеческий фактор",
        desc: "Ошибки водителей, левые рейсы и низкая дисциплина."
    }
];

// How long each item stays "lit" before moving to next one (ms)
const GLOW_CYCLE = 1500;

export const PainPoints = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    // Sequential glow loop — only runs when section is visible
    useEffect(() => {
        if (!isInView) {
            setActiveIndex(-1);
            return;
        }
        let idx = 0;
        setActiveIndex(0);
        const interval = setInterval(() => {
            idx = (idx + 1) % LOSSES.length;
            setActiveIndex(idx);
        }, GLOW_CYCLE);
        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <section ref={sectionRef} className="py-24 bg-background-offset font-sans antialiased overflow-hidden" id="checkpoints">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 w-fit mb-4">
                            <span className="text-xs font-bold text-red-500 uppercase tracking-wide">Hidden Costs</span>
                        </div>
                        <h2 className="text-navy text-3xl md:text-5xl font-black leading-tight tracking-tight mb-4 text-balance">
                            Каждый день автопарк теряет деньги
                        </h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Losses Grid */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                        {LOSSES.map((loss, i) => {
                            const isActive = i === activeIndex;
                            return (
                                <motion.div
                                    key={i}
                                    className="group flex gap-4 bg-white p-5 rounded-xl border shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-red-200"
                                    animate={{
                                        borderColor: isActive ? "rgba(239,68,68,0.6)" : "rgba(241,245,249,1)",
                                        boxShadow: isActive
                                            ? "0 0 0 3px rgba(239,68,68,0.15), 0 4px 20px rgba(239,68,68,0.12)"
                                            : "0 1px 3px rgba(0,0,0,0.05)",
                                    }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                >
                                    <motion.div
                                        className="size-10 shrink-0 rounded-lg flex items-center justify-center transition-colors"
                                        animate={{
                                            backgroundColor: isActive ? "rgb(239,68,68)" : "rgb(254,242,242)",
                                            color: isActive ? "rgb(255,255,255)" : "rgb(239,68,68)",
                                            scale: isActive ? 1.15 : 1,
                                        }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        {loss.icon}
                                    </motion.div>
                                    <div>
                                        <h3 className="text-base font-bold text-navy mb-1">{loss.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{loss.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Highlight Box */}
                    <div className="lg:col-span-5 relative h-full min-h-[400px]">
                        <div className="bg-navy text-white rounded-2xl p-8 lg:p-10 h-full relative overflow-hidden shadow-2xl flex flex-col justify-between group">
                            {/* Decorative background circle */}
                            <div className="absolute -right-20 -top-20 size-64 bg-red-500/10 border-[40px] border-red-500/10 rounded-full blur-2xl transition-all duration-1000 group-hover:scale-150 animate-pulse"></div>

                            <div className="relative z-10 mb-8">
                                {/* Brighter AlertCircle icon with strong glow */}
                                <motion.div
                                    className="size-12 rounded-full flex items-center justify-center mb-6"
                                    animate={{
                                        backgroundColor: ["rgba(239,68,68,0.25)", "rgba(239,68,68,0.45)", "rgba(239,68,68,0.25)"],
                                        boxShadow: [
                                            "0 0 0px rgba(239,68,68,0)",
                                            "0 0 24px 6px rgba(239,68,68,0.5)",
                                            "0 0 0px rgba(239,68,68,0)",
                                        ],
                                    }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <AlertCircle className="w-6 h-6 text-red-400" style={{ filter: "drop-shadow(0 0 6px rgba(239,68,68,0.9))" }} />
                                </motion.div>

                                <h3 className="text-2xl sm:text-3xl font-bold leading-snug mb-4">
                                    "Если у вас нет цифровой системы контроля — вы теряете до 30% бюджета."
                                </h3>
                                <div className="text-red-400 font-bold text-xl flex items-center gap-2">
                                    <span>30%</span> Потенциал экономии
                                </div>
                            </div>

                            <div className="relative z-10 mt-auto pt-8 border-t border-white/10">
                                {/* Pulsing CTA button */}
                                <motion.a
                                    href="#cta"
                                    className="w-full bg-white text-navy font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 relative overflow-hidden"
                                    animate={{
                                        boxShadow: [
                                            "0 0 0px 0px rgba(255,255,255,0)",
                                            "0 0 0px 6px rgba(255,255,255,0.25)",
                                            "0 0 0px 0px rgba(255,255,255,0)",
                                        ],
                                    }}
                                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                >
                                    {/* Shimmer sweep effect */}
                                    <motion.span
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50 to-transparent opacity-60 pointer-events-none"
                                        animate={{ x: ["-100%", "200%"] }}
                                        transition={{ duration: 2.2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                                    />
                                    <span className="relative z-10">Проверить свой автопарк</span>
                                    <ArrowRight className="w-5 h-5 ml-1 relative z-10" />
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
