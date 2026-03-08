"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator as CalcIcon, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useHaptic } from "@/hooks/useHaptic";

export const Calculator = () => {
    const { trigger } = useHaptic();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        vehicles: 50,
        mileage: 5000,
        consumption: 30,
        region: "Центральный ФО"
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleCalculate = () => {
        trigger();
        setIsSubmitted(true);
    };

    // Simple math for "wow" effect
    const estimatedSavings = Math.floor(formData.vehicles * (formData.mileage / 100) * formData.consumption * 60 * 0.3);

    return (
        <section id="calculator" className="py-32 bg-anthracite-core relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-burnt-terra/10 text-burnt-terra text-xs font-mono font-bold tracking-widest uppercase mb-4">
                        Financial Audit
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-cloud-dancer mb-4 tracking-tight">
                        Рассчитайте экономию <br />
                        <span className="text-burnt-terra italic font-serif">за 1 минуту</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[40px] overflow-hidden backdrop-blur-xl shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:p-12 border-r border-white/10">
                            {!isSubmitted ? (
                                <div className="space-y-8">
                                    <div>
                                        <label className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4 block">Количество ТС: <span className="text-white text-lg ml-2 font-mono">{formData.vehicles}</span></label>
                                        <input
                                            type="range"
                                            min="10"
                                            max="1000"
                                            value={formData.vehicles}
                                            onChange={(e) => setFormData({ ...formData, vehicles: parseInt(e.target.value) })}
                                            className="w-full accent-burnt-terra bg-white/10 h-1 rounded-full appearance-none cursor-pointer"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4 block">Средний пробег/мес (км): <span className="text-white text-lg ml-2 font-mono">{formData.mileage}</span></label>
                                        <input
                                            type="range"
                                            min="1000"
                                            max="20000"
                                            step="500"
                                            value={formData.mileage}
                                            onChange={(e) => setFormData({ ...formData, mileage: parseInt(e.target.value) })}
                                            className="w-full accent-burnt-terra bg-white/10 h-1 rounded-full appearance-none cursor-pointer"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4 block">Средний расход (л/100км): <span className="text-white text-lg ml-2 font-mono">{formData.consumption}</span></label>
                                        <input
                                            type="range"
                                            min="5"
                                            max="60"
                                            value={formData.consumption}
                                            onChange={(e) => setFormData({ ...formData, consumption: parseInt(e.target.value) })}
                                            className="w-full accent-burnt-terra bg-white/10 h-1 rounded-full appearance-none cursor-pointer"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4 block">Регион</label>
                                        <select
                                            value={formData.region}
                                            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-burnt-terra transition-colors"
                                        >
                                            <option>Центральный ФО</option>
                                            <option>Северо-Западный ФО</option>
                                            <option>Уральский ФО</option>
                                            <option>Сибирский ФО</option>
                                            <option>Дальневосточный ФО</option>
                                        </select>
                                    </div>

                                    <Button
                                        onClick={handleCalculate}
                                        className="w-full bg-burnt-terra text-white hover:bg-burnt-terra/90 rounded-none py-8 text-xl tracking-widest uppercase font-black"
                                    >
                                        Получить расчёт
                                    </Button>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-20 h-20 rounded-full bg-safe-green/20 flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-safe-green" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Спасибо!</h3>
                                    <p className="text-white/60 font-serif italic mb-8">
                                        Мы подготовим индивидуальный расчёт и свяжемся с вами в течение 24 часов.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-burnt-terra font-mono text-xs uppercase tracking-[0.2em] border-b border-burnt-terra/20 pb-1"
                                    >
                                        ← Изменить данные
                                    </button>
                                </motion.div>
                            )}
                        </div>

                        <div className="p-8 md:p-12 bg-white/5 flex flex-col justify-center relative overflow-hidden">
                            {/* Abstract Graphic Backdrop */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-burnt-terra/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

                            <div className="relative z-10">
                                <div className="text-xs uppercase tracking-widest text-white/40 font-bold mb-2">Estimated Annual Savings</div>
                                <div className="text-6xl md:text-7xl font-black text-cloud-dancer mb-4 font-mono tracking-tighter">
                                    ₽{estimatedSavings >= 1000000 ? (estimatedSavings / 1000000).toFixed(1) + "M" : estimatedSavings.toLocaleString("ru-RU")}
                                </div>
                                <div className="p-6 bg-burnt-terra rounded-2xl">
                                    <div className="text-white text-sm font-bold uppercase tracking-tight mb-2">ROI Potential</div>
                                    <p className="text-white/80 text-xs font-serif italic leading-relaxed">
                                        Расчёт основан на средневзвешенных показателях оптимизации 100+ проектов. Точный результат зависит от структуры вашего парка.
                                    </p>
                                </div>

                                <div className="mt-12 space-y-4">
                                    <div className="flex items-center gap-3 text-white/40">
                                        <ArrowRight className="w-4 h-4 text-burnt-terra" />
                                        <span className="text-[10px] uppercase tracking-widest">Аудит всех зон потерь</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-white/40">
                                        <ArrowRight className="w-4 h-4 text-burnt-terra" />
                                        <span className="text-[10px] uppercase tracking-widest">Разработка стратегии 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
