"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const timelineEvents = [
    { year: 2008, title: "Создание компании ООО «РесурсТранс»", description: "Начало работы на Куйбышевской железной дороге. Формирование базовой стратегии развития." },
    { year: 2009, title: "Расширение географии", description: "Начало работы на Октябрьской и Горьковской железных дорогах. Открытие первых филиалов." },
    { year: 2010, title: "Выход на новые магистрали", description: "Начало работы на Свердловской железной дороге. Укрепление позиций на рынке транспортного аутсорсинга." },
    { year: 2011, title: "Масштабный рост", description: "Начало работы на Северной, Приволжской и Юго-Восточной железных дорогах. Внедрение новых стандартов управления автопарком." },
    { year: 2012, title: "Завоевание Востока и Юга", description: "Начало работы на Дальневосточной и Северо-Кавказской железных дорогах. Освоение новых логистических маршрутов." },
    { year: 2013, title: "Проникновение в Сибирь", description: "Начало работы на Восточно-Сибирской и Западно-Сибирской железных дорогах. Увеличение штата и парка техники." },
    { year: 2014, title: "Охват Урала", description: "Начало работы на Южно-Уральской железной дороге. Внедрение первых элементов цифровизации транспортных процессов." },
    { year: 2016, title: "Выход в Забайкалье", description: "Начало работы на Забайкальской железной дороге. Расширение комплексных логистических услуг." },
    { year: 2018, title: "Освоение Севера", description: "Начало работы на Красноярской железной дороге. Оптимизация работы в сложных климатических условиях." },
    { year: 2019, title: "Завершение формирования сети", description: "Начало работы на Калининградской железной дороге. Присутствие на всех ключевых железнодорожных узлах РФ." }
];

export function HistoryTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="relative max-w-4xl mx-auto py-10" ref={containerRef}>
            {/* Main vertical line background */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 transform md:-translate-x-1/2 rounded-full overflow-hidden">
                {/* Animated fill line */}
                <motion.div
                    className="w-full bg-primary"
                    style={{ height: lineHeight, originY: 0 }}
                />
            </div>

            <div className="space-y-16">
                {timelineEvents.map((event, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={event.year} className="relative flex items-center md:justify-between flex-col md:flex-row gap-8 md:gap-0">

                            {/* Dot indicator */}
                            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#2a2018] border-4 border-slate-200 dark:border-slate-700 transform -translate-x-1/2 flex items-center justify-center z-10">
                                <motion.div
                                    className="w-3 h-3 rounded-full bg-primary"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                />
                            </div>

                            {/* Event content - alternating sides on desktop */}
                            <motion.div
                                className={`w-full md:w-[45%] ml-12 md:ml-0 flex flex-col ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left md:order-last'}`}
                                initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                            >
                                <div className="bg-white dark:bg-[#2a2018] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow p-6 rounded-2xl relative">
                                    {/* Triangle pointer */}
                                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-[#2a2018] border-slate-100 dark:border-slate-800 ${isEven ? 'border-t border-r -right-2 rotate-45' : 'border-b border-l -left-2 rotate-45'}`}></div>

                                    <span className="text-primary font-extrabold text-3xl mb-2 block">{event.year}</span>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{event.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        {event.description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Empty spacer for flex layout grid */}
                            <div className="hidden md:block md:w-[45%]"></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
