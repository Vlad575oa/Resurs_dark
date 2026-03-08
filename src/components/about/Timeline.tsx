"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const timelineData = [
    {
        year: "2010",
        title: "Основание компании",
        description: "РесурсТранс начинает свой путь как амбициозный стартап в сфере транспортной логистики. Первые клиенты, первые маршруты, первые успехи.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        year: "2014",
        title: "Запуск первых ИТ-решений",
        description: "Осознание необходимости цифровизации. Внедрение первых модулей АСУ «Авто-контроль» для мониторинга корпоративного автопарка.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        year: "2018",
        title: "Выход на федеральный уровень",
        description: "Открытие филиалов в 10 регионах РФ. Значительное расширение автопарка до 1500 единиц техники.",
        image: "https://images.unsplash.com/photo-1449824913935-5b8d23425f20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        year: "2021",
        title: "Полная цифровизация",
        description: "Переход на электронные путевые листы и транспортные накладные. Внедрение ИИ для предиктивной аналитики ремонтов.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        year: "2024",
        title: "Лидер рынка аутсорсинга",
        description: "РесурсТранс — признанный эксперт и надежный партнер крупнейших корпораций России в сфере управления транспортом.",
        image: "https://images.unsplash.com/photo-1627995133379-3733cc8165cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
];

export function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"],
    });

    return (
        <section ref={containerRef} className="py-24 bg-white relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Central Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2" />

                {/* Animated progress line */}
                <motion.div
                    className="absolute left-[20px] md:left-1/2 top-0 w-0.5 bg-primary origin-top transform md:-translate-x-1/2 z-0"
                    style={{ scaleY: scrollYProgress, bottom: 0 }}
                />

                <div className="space-y-32">
                    {timelineData.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <TimelineItem
                                key={item.year}
                                item={item}
                                isEven={isEven}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ item, isEven }: { item: typeof timelineData[0], isEven: boolean }) {
    const itemRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start 80%", "center center"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
    const opacity = scrollYProgress;

    return (
        <motion.div
            ref={itemRef}
            style={{ y, opacity }}
            className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 relative z-10 ${isEven ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Year Node */}
            <div className="absolute left-[20px] md:left-1/2 w-12 h-12 bg-white border-4 border-primary rounded-full transform -translate-x-1/2 flex items-center justify-center font-bold text-slate-900 shadow-md z-20">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            </div>

            {/* Content Sidebar */}
            <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? "md:text-left" : "md:text-right"}`}>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 font-display">{item.year}</h3>
                <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                    {item.description}
                </p>
            </div>

            {/* Image Sidebar */}
            <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
            </div>
        </motion.div>
    );
}
