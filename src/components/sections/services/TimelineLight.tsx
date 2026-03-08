"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        icon: "search",
        title: "Аудит",
        description: "Глубокий анализ текущей эффективности парка и расходов.",
        active: true,
    },
    {
        number: "02",
        icon: "architecture",
        title: "Разработка Модели",
        description: "Создание кастомной стратегии оптимизации.",
        active: true,
    },
    {
        number: "03",
        icon: "rocket_launch",
        title: "Запуск",
        description: "Внедрение новых протоколов и ИТ-инструментов.",
        active: true,
    },
    {
        number: "04",
        icon: "tune",
        title: "Контроль",
        description: "Непрерывный мониторинг и управление процессами.",
        active: false,
    },
    {
        number: "05",
        icon: "analytics",
        title: "Отчетность",
        description: "Регулярная аналитика и шаги по улучшению.",
        active: false,
    },
];

export default function TimelineLight() {
    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <span className="text-emerald-600 text-sm font-black uppercase tracking-widest mb-3 block">
                            Наш Процесс
                        </span>
                        <h2 className="text-slate-900 text-4xl md:text-5xl font-bold tracking-tight">Рабочие этапы</h2>
                    </div>
                    <p className="text-slate-500 max-w-sm text-sm font-medium">
                        От первичного знакомства до полноценного операционного контроля над вашим парком с регулярными отчетами об эффективности.
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden md:grid grid-cols-5 gap-4 relative mt-12 pb-12">
                    {/* Connecting Line */}
                    <div className="absolute top-8 left-0 w-full h-1 bg-slate-100 rounded-full z-0"></div>
                    <div className="absolute top-8 left-0 w-3/5 h-1 bg-gradient-to-r from-emerald-500 to-primary rounded-full z-0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={step.title}
                            className="relative z-10 flex flex-col items-center md:items-start group cursor-default pt-2"
                        >
                            <div className="text-slate-400 mb-8 font-mono text-xs font-bold bg-white px-2 group-hover:text-emerald-600 transition-colors">
                                ШАГ {step.number}
                            </div>
                            <div
                                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all shadow-sm -mt-16 bg-white ${step.active
                                    ? "border-2 border-emerald-500 shadow-emerald-500/20 group-hover:-translate-y-2 group-hover:shadow-lg"
                                    : "border border-slate-200 group-hover:border-slate-300 group-hover:-translate-y-1"
                                    }`}
                            >
                                <span
                                    className={`material-symbols-outlined text-2xl ${step.active ? "text-emerald-600" : "text-slate-400"
                                        }`}
                                >
                                    {step.icon}
                                </span>
                            </div>
                            <h4
                                className={`font-bold text-lg mb-3 ${step.active ? "text-slate-900" : "text-slate-600"
                                    }`}
                            >
                                {step.title}
                            </h4>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[90%]">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Timeline (Vertical) */}
                <div className="flex md:hidden flex-col gap-10 relative mt-8">
                    <div className="absolute left-7 top-4 bottom-4 w-1 bg-slate-100 rounded-full"></div>
                    <div className="absolute left-7 top-4 h-3/5 w-1 bg-gradient-to-b from-emerald-500 to-primary rounded-full"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={step.title}
                            className="flex gap-6 relative"
                        >
                            <div
                                className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 z-10 shadow-sm ${step.active
                                    ? "border-2 border-emerald-500 shadow-emerald-500/20"
                                    : "border border-slate-200"
                                    }`}
                            >
                                <span
                                    className={`material-symbols-outlined text-xl ${step.active ? "text-emerald-600" : "text-slate-400"
                                        }`}
                                >
                                    {step.icon}
                                </span>
                            </div>
                            <div className="pt-1">
                                <span
                                    className={`text-[10px] font-black uppercase tracking-widest mb-2 block ${step.active ? "text-emerald-600" : "text-slate-400"
                                        }`}
                                >
                                    Шаг {step.number}
                                </span>
                                <h4
                                    className={`font-bold text-xl mb-2 ${step.active ? "text-slate-900" : "text-slate-600"
                                        }`}
                                >
                                    {step.title}
                                </h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-slate-50 to-transparent rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        </section>
    );
}
