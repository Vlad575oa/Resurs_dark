"use client";

import { motion } from "framer-motion";
import { CaseStudy } from "@/data/cases";

interface AllCasesGridProps {
    locale: string;
    cases: CaseStudy[];
    dict?: any;
}

export default function AllCasesGrid({ locale, cases, dict }: AllCasesGridProps) {
    const colorClasses: Record<string, string> = {
        orange: "from-orange-500/20 to-orange-600/20 border-orange-500/30 hover:border-orange-500/50",
        blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-500/50",
        purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:border-purple-500/50",
        green: "from-green-500/20 to-green-600/20 border-green-500/30 hover:border-green-500/50",
        red: "from-red-500/20 to-red-600/20 border-red-500/30 hover:border-red-500/50",
        yellow: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 hover:border-yellow-500/50",
    };

    const iconColorClasses: Record<string, string> = {
        orange: "text-orange-500",
        blue: "text-blue-500",
        purple: "text-purple-500",
        green: "text-green-500",
        red: "text-red-500",
        yellow: "text-yellow-500",
    };

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {cases.map((caseItem, index) => (
                        <motion.div
                            key={caseItem.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative bg-gradient-to-br ${colorClasses[caseItem.color] || colorClasses.blue} 
                                border rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300`}
                        >
                            {/* Category Badge */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    {caseItem.category}
                                </span>
                                <span className={`text-2xl material-icons ${iconColorClasses[caseItem.color] || iconColorClasses.blue}`}>
                                    {caseItem.icon}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                {caseItem.title}
                            </h3>

                            {/* Description */}
                            <p className="text-muted-foreground mb-6 line-clamp-2">
                                {caseItem.desc}
                            </p>

                            {/* Main Metric */}
                            <div className="bg-slate-900/50 rounded-xl p-4 mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl md:text-5xl font-bold text-primary">
                                        {caseItem.metric}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        {caseItem.metricLabel}
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">
                                    {caseItem.outcome}
                                </p>
                            </div>

                            {/* Challenge & Solution */}
                            {caseItem.challenge && (
                                <div className="space-y-3 mb-6">
                                    <div>
                                        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                                            {locale === 'en' ? 'Challenge' : locale === 'ru' ? 'Задача' : 'चुनौती'}
                                        </div>
                                        <p className="text-sm text-foreground">
                                            {caseItem.challenge}
                                        </p>
                                    </div>
                                    <div>
                                        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                                            {locale === 'en' ? 'Solution' : locale === 'ru' ? 'Решение' : 'समाधान'}
                                        </div>
                                        <p className="text-sm text-foreground">
                                            {caseItem.solution}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Impact */}
                            {caseItem.impact && (
                                <div className="border-t border-slate-700 pt-4">
                                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                                        {locale === 'en' ? 'Impact' : locale === 'ru' ? 'Результат' : 'प्रभाव'}
                                    </div>
                                    <p className="text-sm text-foreground">
                                        {caseItem.impact}
                                    </p>
                                </div>
                            )}

                            {/* View Details Link */}
                            <a
                                href={`/${locale}/cases/${caseItem.slug}`}
                                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-4 group/link"
                            >
                                <span className="text-sm font-medium">
                                    {locale === 'en'
                                        ? 'View Full Case Study'
                                        : locale === 'ru'
                                            ? 'Посмотреть полный кейс'
                                            : 'पूर्ण केस स्टडी देखें'}
                                </span>
                                <span className="material-icons text-sm group-hover/link:translate-x-1 transition-transform">
                                    arrow_forward
                                </span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
