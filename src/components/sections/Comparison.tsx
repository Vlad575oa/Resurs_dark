"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

const COMPARISON_DATA = [
    {
        category: "Бюджет",
        own: "Скрытые расходы на ремонт и страховку сверх плана.",
        resurs: "Фиксированный тариф: Прозрачное планирование на год."
    },
    {
        category: "Налоги",
        own: "Высокая нагрузка на ФОТ (штат водителей и механиков).",
        resurs: "Вычет НДС 20%: Все услуги принимаются к расходам."
    },
    {
        category: "Надежность",
        own: "Убытки при поломке техники или болезни персонала.",
        resurs: "Замена за 2 часа: Гарантия подмены транспорта."
    },
    {
        category: "Финансы",
        own: "Замораживание капитала в «железе» (CapEx).",
        resurs: "OpEx модель: Деньги работают на развитие бизнеса."
    }
];

export const Comparison = () => {
    return (
        <section className="py-24 bg-cloud-dancer relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-anthracite-core mb-4">Сравнение моделей</h2>
                    <p className="text-anthracite-core/60 font-serif italic text-lg">Почему лидеры рынка переходят на аутсорсинг</p>
                </div>

                <div className="grid grid-cols-1 overflow-hidden rounded-sm border border-anthracite-core/10">
                    {/* Header Row */}
                    <div className="grid grid-cols-12 bg-anthracite-core/5 border-b border-anthracite-core/10 p-6 text-xs font-mono uppercase tracking-widest text-anthracite-core/50">
                        <div className="col-span-12 md:col-span-2">Параметр</div>
                        <div className="col-span-12 md:col-span-5 text-burnt-terra mt-2 md:mt-0 font-bold">Свой автопарк (Риски)</div>
                        <div className="col-span-12 md:col-span-5 text-safe-green mt-2 md:mt-0 font-bold">РесурсТранс (Выгода)</div>
                    </div>

                    {/* Data Rows */}
                    {COMPARISON_DATA.map((row, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-12 p-6 border-b border-anthracite-core/5 hover:bg-white transition-colors gap-y-4 md:gap-y-0"
                        >
                            <div className="col-span-12 md:col-span-2 font-bold font-sans text-anthracite-core/80 self-center">
                                {row.category}
                            </div>

                            {/* Own Fleet (Negative) */}
                            <div className="col-span-12 md:col-span-5 flex gap-4 text-anthracite-core/70 items-start">
                                <XCircle className="w-5 h-5 text-burnt-terra/50 shrink-0 mt-0.5" />
                                <span className="font-serif italic text-sm md:text-base">{row.own}</span>
                            </div>

                            {/* ResursTrans (Positive) */}
                            <div className="col-span-12 md:col-span-5 flex gap-4 text-anthracite-core font-medium items-start">
                                <CheckCircle className="w-5 h-5 text-safe-green shrink-0 mt-0.5" />
                                <span className="text-sm md:text-base">{row.resurs}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
