"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Fuel, Map, Wrench, Clock, ShieldAlert, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useHaptic } from "@/hooks/useHaptic";

const LOSSES = [
    { icon: <Fuel className="w-6 h-6" />, text: "Перерасход топлива" },
    { icon: <Map className="w-6 h-6" />, text: "Неэффективные маршруты" },
    { icon: <Wrench className="w-6 h-6" />, text: "Внеплановые ремонты" },
    { icon: <Clock className="w-6 h-6" />, text: "Простои" },
    { icon: <ShieldAlert className="w-6 h-6" />, text: "Штрафы" },
    { icon: <Users className="w-6 h-6" />, text: "Человеческий фактор" },
];

export const Losses = () => {
    const { trigger } = useHaptic();

    return (
        <section id="losses" className="py-32 bg-anthracite-core relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-burnt-terra/5 blur-[120px] -z-10" />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-burnt-terra font-mono text-xs uppercase tracking-widest mb-4 block">Hidden Costs</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-cloud-dancer mb-8 tracking-tighter leading-tight">
                            Каждый день автопарк <br />
                            <span className="text-burnt-terra italic font-serif">теряет деньги</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {LOSSES.map((loss, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-burnt-terra group-hover:bg-burnt-terra group-hover:text-white transition-all duration-500">
                                        {loss.icon}
                                    </div>
                                    <span className="text-white/80 font-serif italic text-lg">{loss.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="p-8 bg-white/5 border-l-4 border-burnt-terra max-w-xl">
                            <p className="text-xl text-white/90 font-serif italic leading-relaxed">
                                "Если у вас нет цифровой системы контроля — вы теряете до <span className="text-burnt-terra font-bold">30% бюджета</span>."
                            </p>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center justify-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="relative w-full aspect-square max-w-md flex items-center justify-center"
                        >
                            {/* Abstract Visual of Loss */}
                            <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full animate-spin-slow" />
                            <div className="absolute inset-10 border border-white/5 rounded-full" />

                            <div className="text-center z-10 p-12 glass-panel rounded-full aspect-square flex flex-col items-center justify-center bg-black/40">
                                <AlertTriangle className="w-16 h-16 text-burnt-terra mb-6 animate-pulse" />
                                <div className="text-5xl font-black text-white mb-2 font-mono">30%</div>
                                <div className="text-xs uppercase tracking-widest text-white/40">Потенциал экономии</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-12"
                        >
                            <Button
                                onClick={trigger}
                                className="bg-burnt-terra text-white hover:bg-burnt-terra/90 rounded-none px-10 py-8 text-xl tracking-widest uppercase font-black transition-all hover:scale-105"
                            >
                                → Проверить свой автопарк
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
