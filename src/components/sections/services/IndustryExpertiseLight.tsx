"use client";

import { motion } from "framer-motion";
import {
    Factory,
    Wrench,
    Zap,
    Bus,
    Building2
} from "lucide-react";

const INDUSTRIES = [
    {
        icon: Factory,
        label: "Промпредприятия"
    },
    {
        icon: Wrench,
        label: "Строительство"
    },
    {
        icon: Zap,
        label: "Энергетика"
    },
    {
        icon: Bus,
        label: "Мун. транспорт"
    },
    {
        icon: Building2,
        label: "Корп. парки"
    }
];

export const IndustryExpertiseLight = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16 tracking-tight"
                >
                    Отраслевая экспертиза
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {INDUSTRIES.map((industry, index) => {
                        const Icon = industry.icon;
                        return (
                            <motion.div
                                key={industry.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center group transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-500/30"
                            >
                                <div className="mb-6 p-4 rounded-2xl bg-slate-100 group-hover:bg-emerald-50 transition-colors">
                                    <Icon className="w-8 h-8 text-primary group-hover:text-emerald-500 transition-colors" />
                                </div>
                                <h3 className="text-sm md:text-base font-bold text-slate-800 tracking-wide">
                                    {industry.label}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center text-slate-500 mt-12 text-sm font-medium"
                >
                    Работаем с парками от <span className="text-emerald-600 font-bold">50 до 5000+</span> единиц техники
                </motion.p>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-emerald-50/50 via-transparent to-transparent pointer-events-none" />
        </section>
    );
};
