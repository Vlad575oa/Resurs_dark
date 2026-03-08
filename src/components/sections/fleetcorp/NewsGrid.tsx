"use client";

import { motion } from "framer-motion";

import Link from "next/link";

export default function NewsGrid() {
    const news = [
        {
            slug: "predictive-risk-analysis-2-0",
            date: "07 Мар 2026",
            title: "Запуск Предиктивной Системы Анализа Рисков 2.0",
            desc: "Новое обновление FleetTech позволяет предсказывать поломки узлов автомобиля с точностью до 92% за 500 км до возникновения неисправности.",
            tag: "Технологии",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJBK94MihqMW1wwl5gGFOEFRUYX789hlz5YTWsMV5vacSEN3rwXy5beuBGQ_5JmymV5SVu311nqqqKxPQIj4YV-kMmLGiTJn2JkkzOMS6YOtAgD-CaygFvvkPru2xtUghKbcWwSgAb-wjBVFMG3snB4YaPf2BqwGJHyf48sXZlHYY4FfbFgJxwrddv-uMET-1NqXjjyrqUDuRu9_1xa05AM2L5UlRECj5jVRs2CN0br_JHmsnoxgLQkt0G7sDhtxYcC5qbNDVSM6E",
        },
        {
            slug: "expansion-central-asia",
            date: "01 Мар 2026",
            title: "FleetCorp расширяет присутствие в Центральной Азии",
            desc: "Открытие нового операционного хаба в Алматы позволит оптимизировать трансграничные перевозки и усилить контроль качества сервиса.",
            tag: "Компания",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX1fLUueR8AUAmJP2mwj2QsbDid24qvsqIz-_25yRFy47XwwNyTGlgiKZTqJQyOAngU5yFI85dr_yq0rgKEo3PmXP2-u7Qp2ep7eonl5Aygg0jHznoGGT91_2k6sJVtfJn5DkNad6ecDDGSFDCqcoHcY3fXSu6dBzAPRIpE_67qBQM2lyRCZ49pfoz8FoxUI2Qe3SNKW9VvyzrwxaxUezpr1ZuaU27KUO37DDoejwdVTTiA-bGfuAYGJaSnWPC2jmtflod0dZuIP2o",
        },
        {
            slug: "zero-emission-2026",
            date: "25 Фев 2026",
            title: "Экологические стандарты 2026: Путь к Zero Emission",
            desc: "Как интеграция электрофлота в корпоративные перевозки влияет на экономическую эффективность и ESG-показатели бизнеса.",
            tag: "Экология",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBp6AyXQUbBHHAvp0vYq8KlUBSJnicSXPHwvWRE6n2c1n_AKJ-vFszvxXbFExY49h0nmnrKJpw4ivo78sOsbkp9ddMmw65LMdqOGzVP0fgWn7AALVg18HQMEEi_x04tKFCHjhw3KrJYDhzHGxA9lbA1MZ4jmpSQtQvWqKqjY0qheSCfXJ052dAAd7X2yp3GsfOpL3uEqHYsm7nz330XhMpuUn2woSB3L_pE5jTjo9coNLi8PzR8Nc_QRWpqb2hCA7VPEIDMrprgj4",
        },
    ];

    return (
        <section className="py-24 px-6 md:px-10 lg:px-20 bg-background-dark">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item, idx) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-[#161b22]/70 backdrop-blur-md border border-[#282e39] rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col"
                        >
                            <Link href={`/news/${item.slug}`} className="relative h-60 w-full overflow-hidden block">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-80"
                                />
                                <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                                    {item.tag}
                                </div>
                            </Link>
                            <div className="p-8 flex-grow flex flex-col justify-between">
                                <div>
                                    <span className="text-slate-500 text-xs font-mono mb-4 block">{item.date}</span>
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                </div>
                                <Link href={`/news/${item.slug}`} className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all w-fit">
                                    Читать полностью
                                    <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
