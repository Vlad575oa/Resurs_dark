"use client";

import { motion } from "framer-motion";

export default function TechStackDark({ locale }: { locale: string }) {
    const techs = [
        {
            title: locale === 'en' ? "GPS Monitoring" : "GPS Мониторинг",
            desc: locale === 'en' ? "Accuracy up to 1 meter in real time. Intelligent geofencing and route history." : "Точность до 1 метра в реальном времени. Интеллектуальное геофехтование и история маршрутов.",
            icon: "location_on",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX1fLUueR8AUAmJP2mwj2QsbDid24qvsqIz-_25yRFy47XwwNyTGlgiKZTqJQyOAngU5yFI85dr_yq0rgKEo3PmXP2-u7Qp2ep7eonl5Aygg0jHznoGGT91_2k6sJVtfJn5DkNad6ecDDGSFDCqcoHcY3fXSu6dBzAPRIpE_67qBQM2lyRCZ49pfoz8FoxUI2Qe3SNKW9VvyzrwxaxUezpr1ZuaU27KUO37DDoejwdVTTiA-bGfuAYGJaSnWPC2jmtflod0dZuIP2o",
        },
        {
            title: locale === 'en' ? "Fuel Analytics" : "Аналитика Топлива",
            desc: locale === 'en' ? "Consumption control, siphoning detection, and fueling monitoring via AI algorithms." : "Контроль расхода, детекция сливов и мониторинг заправок с помощью AI-алгоритмов.",
            icon: "local_gas_station",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBp6AyXQUbBHHAvp0vYq8KlUBSJnicSXPHwvWRE6n2c1n_AKJ-vFszvxXbFExY49h0nmnrKJpw4ivo78sOsbkp9ddMmw65LMdqOGzVP0fgWn7AALVg18HQMEEi_x04tKFCHjhw3KrJYDhzHGxA9lbA1MZ4jmpSQtQvWqKqjY0qheSCfXJ052dAAd7X2yp3GsfOpL3uEqHYsm7nz330XhMpuUn2woSB3L_pE5jTjo9coNLi8PzR8Nc_QRWpqb2hCA7VPEIDMrprgj4",
        },
        {
            title: locale === 'en' ? "BI Dashboards" : "BI Дашборды",
            desc: locale === 'en' ? "Aggregated data for strategic planning and cost control in real-time." : "Агрегированные данные для стратегического планирования и контроля затрат в реальном времени.",
            icon: "dashboard",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJBK94MihqMW1wwl5gGFOEFRUYX789hlz5YTWsMV5vacSEN3rwXy5beuBGQ_5JmymV5SVu311nqqqKxPQIj4YV-kMmLGiTJn2JkkzOMS6YOtAgD-CaygFvvkPru2xtUghKbcWwSgAb-wjBVFMG3snB4YaPf2BqwGJHyf48sXZlHYY4FfbFgJxwrddv-uMET-1NqXjjyrqUDuRu9_1xa05AM2L5UlRECj5jVRs2CN0br_JHmsnoxgLQkt0G7sDhtxYcC5qbNDVSM6E",
        },
        {
            title: locale === 'en' ? "Driver KPI" : "Driver KPI",
            desc: locale === 'en' ? "Automated system for evaluating driver safety, efficiency, and discipline." : "Автоматизированная система оценки безопасности, эффективности и дисциплины водителей.",
            icon: "badge",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ9msAiXUgFzCvAhKAJkZPshoLks_kCFrslC_b6DQCsinCCRIISR-a0mPtDkAJrJteP5L4bc136EtPDGPNki9_Tg8kgXyZh2jIsyYNf5geeXgRhx9TWuXmyZmTmT3_hirMkKUyL-S8q--fvp4BA74p6M4gWvs0xbf6RrMxtfpxZzKvDZk97Gq_cbdYED3SumN5q_d9981WawPDgr5FYJNd-PuG8bvBox66WPT76YJhvt_wKOritWWCch6-69bhPUTSi8-wdOtizHc",
        },
    ];

    return (
        <section className="py-24 px-6 md:px-10 lg:px-20 bg-background-dark relative overflow-hidden">
            {/* Background glow orbs */}
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block"
                    >
                        Digital Core
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight mb-6"
                    >
                        {locale === 'en' ? 'Technology ' : 'Технологический '}<span className="text-gradient">{locale === 'en' ? 'Stack' : 'Стек'}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed"
                    >
                        {locale === 'en'
                            ? 'We unite cutting-edge sensors, cloud computing, and AI to create a unified ecosystem for your fleet management.'
                            : 'Мы объединяем передовые датчики, облачные вычисления и AI для создания единой экосистемы управления вашим автопарком.'}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {techs.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-[#161b22]/70 backdrop-blur-md border border-[#282e39] rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-2xl"
                        >
                            <div className="p-8 pb-0">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="size-14 rounded-xl bg-[#0c1017] border border-[#282e39] flex items-center justify-center text-primary group-hover:shadow-[0_0_20px_rgba(37,106,244,0.3)] transition-all">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <div className="text-slate-600 group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-2xl">arrow_outward</span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed mb-8">{item.desc}</p>
                            </div>
                            <div className="relative h-64 w-full overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-transparent to-transparent"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
