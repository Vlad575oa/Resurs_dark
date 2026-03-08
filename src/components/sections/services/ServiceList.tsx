"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Service {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    colSpan: string;
    image: string;
    imageColor: string;
}

interface Titles {
    catalogTitle: string;
    catalogDescription: string;
    edition: string;
    company: string;
    haveTask: string;
    letsDiscuss: string;
    contactUs: string;
}

interface ServiceListProps {
    services: Service[];
    titles: Titles;
}

export const ServiceList = ({ services, titles }: ServiceListProps) => {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                <div>
                    <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] text-slate-300 uppercase mb-4">
                        <span className="w-12 h-[1px] bg-slate-700"></span>
                        {titles.edition}
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 text-white text-glow">
                        {titles.catalogTitle}
                    </h1>
                    <p className="max-w-md text-slate-400 text-lg leading-relaxed">
                        {titles.catalogDescription}
                    </p>
                </div>
                <div className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase md:mb-2">
                    {titles.company}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`${service.colSpan} h-[500px]`}
                    >
                        <Link
                            href={`/services/${service.id}`}
                            className="group relative block w-full h-full overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <div className={`absolute inset-0 ${service.imageColor} transition-transform duration-700 group-hover:scale-105`}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-10 flex flex-col justify-end">
                                <div className="mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="text-xs font-bold tracking-widest text-primary font-bold text-primary uppercase">
                                        {service.subtitle}
                                    </span>
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-2 tracking-tight uppercase leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-slate-200/80 line-clamp-2 max-w-sm">
                                    {service.description}
                                </p>

                                <div className="mt-8 flex items-center gap-4 text-white font-bold text-sm tracking-widest uppercase group-hover:gap-6 transition-all">
                                    <span>Подробнее</span>
                                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="mt-24 bg-anthracite-core rounded-3xl p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-main/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10 text-center md:text-left">
                    <div className="text-xs font-bold tracking-[0.3em] text-primary-main uppercase mb-6">
                        {titles.haveTask}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2">
                        {titles.letsDiscuss}
                    </h2>
                </div>

                <button className="relative z-10 bg-cloud-dancer text-anthracite-core px-10 py-5 rounded-xl font-black uppercase text-sm tracking-widest hover:bg-white hover:scale-105 transition-all shadow-xl active:scale-95">
                    {titles.contactUs}
                </button>
            </div>
        </section>
    );
};
