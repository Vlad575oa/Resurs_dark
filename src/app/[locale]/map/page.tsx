"use client";

import { use, useState, useEffect } from "react";
import { ArrowRight, MapPin, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Branch {
    id: string;
    city: string;
    name: string;
    address: string;
    phone: string;
}

export default function MapPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params);
    const [branches, setBranches] = useState<Branch[]>([]);
    const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const mockBranches: Branch[] = locale === 'ru' ? [
            { id: 'moscow', city: "Москва", name: "Филиал г. Москва", address: "127276, г. Москва, ул. Ботаническая, д. 10 Д, стр. 1", phone: "+7 (495) 150-00-59" },
            { id: 'khabarovsk', city: "Хабаровск", name: "Филиал г. Хабаровск", address: "680000, г. Хабаровск, ул. Пушкина, д. 50", phone: "+7 (421) 259-89-95" },
            { id: 'irkutsk', city: "Иркутск", name: "Филиал г. Иркутск", address: "664025 г. Иркутск, ул. Ленина 6, оф.421", phone: "+7 (395) 248-28-23" },
            { id: 'spb', city: "Санкт-Петербург", name: "Филиал г. Санкт-Петербург", address: "191144, г. Санкт-Петербург, пр-т Бакунина, д.5", phone: "+7 (812) 317-11-36" },
            { id: 'chita', city: "Чита", name: "Филиал г. Чита", address: "672012, г. Чита, ул. Подгорбунского д. 62", phone: "+7 (302) 228-41-76" },
            { id: 'novosibirsk', city: "Новосибирск", name: "Филиал г. Новосибирск", address: "630099, г. Новосибирск, Вокзальная магистраль, д. 16, оф.708", phone: "+7 (383) 227-84-40" },
            { id: 'chelyabinsk', city: "Челябинск", name: "Филиал г. Челябинск", address: "454091, г. Челябинск, ул. Елькина 45 А, 15 этаж", phone: "+7 (351) 242-00-51" },
            { id: 'ekaterinburg', city: "Екатеринбург", name: "Филиал г. Екатеринбург", address: "620107, г. Екатеринбург, Выездной пер., д.1", phone: "+7 (343) 311-12-22" },
            { id: 'samara', city: "Самара", name: "Филиал г. Самара", address: "443082, г. Самара, ул. Речная, д. 46", phone: "+7 (846) 300-44-97" },
            { id: 'saratov', city: "Саратов", name: "Филиал г. Саратов", address: "410012, г.Саратов, пл. Театральная, д. 11а, пом.1", phone: "+7 (845) 233-85-84" },
            { id: 'nnovgorod', city: "Н. Новгород", name: "Филиал г. Н. Новгород", address: "603108, г. Нижний Новгород, ст. Костариха - 2", phone: "+7 (831) 262-16-58" },
            { id: 'balakovo', city: "Балаково", name: "ОП г. Балаково", address: "413840, Саратовская область, г.Балаково, ул. Дорожная, д. 4/10", phone: "+7 (845) 354-49-00" },
            { id: 'vladimir', city: "Владимир", name: "ОП г. Владимир", address: "600001, г. Владимир, ул. Дворянская, д. 27А, корп. 7", phone: "+7 (495) 477-56-05" },
            { id: 'kaliningrad', city: "Калининград", name: "Филиал г. Калининград", address: "236011, г. Калининград, ул. Тихорецкий тупик, д.2В", phone: "+7 (4012) 720-388" }
        ] : [
            { id: 'moscow', city: "Moscow", name: "Moscow Branch", address: "127276, Moscow, Botanicheskaya st., 10 D, bld. 1", phone: "+7 (495) 150-00-59" },
            { id: 'khabarovsk', city: "Khabarovsk", name: "Khabarovsk Branch", address: "680000, Khabarovsk, Pushkina st., 50", phone: "+7 (421) 259-89-95" },
            { id: 'irkutsk', city: "Irkutsk", name: "Irkutsk Branch", address: "664025 Irkutsk, Lenina st. 6, of.421", phone: "+7 (395) 248-28-23" },
            { id: 'spb', city: "St. Petersburg", name: "St. Petersburg Branch", address: "191144, St. Petersburg, Bakunina ave., 5", phone: "+7 (812) 317-11-36" },
            { id: 'chita', city: "Chita", name: "Chita Branch", address: "672012, Chita, Podgorbunskogo st., 62", phone: "+7 (302) 228-41-76" },
            { id: 'novosibirsk', city: "Novosibirsk", name: "Novosibirsk Branch", address: "630099, Novosibirsk, Vokzalnaya magistral, 16, of.708", phone: "+7 (383) 227-84-40" },
            { id: 'chelyabinsk', city: "Chelyabinsk", name: "Chelyabinsk Branch", address: "454091, Chelyabinsk, Elkina st. 45 A, 15th floor", phone: "+7 (351) 242-00-51" },
            { id: 'ekaterinburg', city: "Ekaterinburg", name: "Ekaterinburg Branch", address: "620107, Ekaterinburg, Vyezdnoy lane, 1", phone: "+7 (343) 311-12-22" },
            { id: 'samara', city: "Samara", name: "Samara Branch", address: "443082, Samara, Rechnaya st., 46", phone: "+7 (846) 300-44-97" },
            { id: 'saratov', city: "Saratov", name: "Saratov Branch", address: "410012, Saratov, Teatralnaya sq., 11a, room 1", phone: "+7 (845) 233-85-84" },
            { id: 'nnovgorod', city: "N. Novgorod", name: "N. Novgorod Branch", address: "603108, Nizhny Novgorod, Kostarikha station - 2", phone: "+7 (831) 262-16-58" },
            { id: 'balakovo', city: "Balakovo", name: "Balakovo Subdivision", address: "413840, Saratov region, Balakovo, Dorozhnaya st., 4/10", phone: "+7 (845) 354-49-00" },
            { id: 'vladimir', city: "Vladimir", name: "Vladimir Subdivision", address: "600001, Vladimir, Dvoryanskaya st., 27A, bld. 7", phone: "+7 (495) 477-56-05" },
            { id: 'kaliningrad', city: "Kaliningrad", name: "Kaliningrad Branch", address: "236011, Kaliningrad, Tikhoretsky dead end, 2V", phone: "+7 (4012) 720-388" }
        ];

        setBranches(mockBranches);
        setIsLoaded(true);
    }, [locale]);

    const marqueeBranches = [...branches, ...branches]; // Duplicate for seamless loop

    return (
        <div className="relative h-screen w-screen bg-[#05070a] overflow-hidden flex items-center justify-center font-sans">
            {/* Background Globe Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/globe_background.png"
                    alt="Globe Background"
                    fill
                    className="object-cover transition-opacity duration-1000 opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-[#05070a]" />
            </div>

            {/* Header / Back */}
            <div className="absolute top-8 left-8 z-50">
                <Link
                    href={`/${locale}`}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                >
                    <X className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">{locale === 'ru' ? 'Закрыть' : 'Close'}</span>
                </Link>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 w-full h-full pointer-events-none flex flex-col items-center justify-center">
                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 pointer-events-auto"
                >
                    <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter leading-none uppercase italic opacity-80 text-center">
                        Global <span className="text-primary">Presence</span>
                    </h1>
                    <div className="h-1 w-32 bg-primary/40 mt-4 mx-auto"></div>
                </motion.div>

                {/* Marquee (Scrolling Line) */}
                <div className="w-full pointer-events-auto relative overflow-hidden bg-white/5 backdrop-blur-sm border-y border-white/10 py-6 transform -rotate-1">
                    <motion.div
                        className="flex whitespace-nowrap gap-12"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {marqueeBranches.map((branch, idx) => (
                            <button
                                key={`${branch.id}-${idx}`}
                                onClick={() => setSelectedBranch(branch)}
                                className="group flex items-center gap-4 transition-all"
                            >
                                <span className={`text-2xl lg:text-4xl font-black uppercase tracking-tighter transition-colors ${selectedBranch?.id === branch.id ? "text-primary" : "text-white/40 group-hover:text-white"}`}>
                                    {branch.city}
                                </span>
                                <div className="w-2 h-2 rounded-full bg-primary/30" />
                            </button>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Selected Branch Detail Modal */}
            <AnimatePresence>
                {selectedBranch && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[60] w-full max-w-md px-6 md:bottom-12"
                    >
                        <div className="bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                            {/* Decorative glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full -mr-16 -mt-16" />

                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="max-w-[80%]">
                                    <h2 className="text-xl font-black text-white uppercase tracking-tight leading-tight">{selectedBranch.name}</h2>
                                    <p className="text-primary text-xs font-mono uppercase tracking-[0.2em] mt-2 font-bold">{selectedBranch.city}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedBranch(null)}
                                    className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 hover:rotate-90"
                                >
                                    <X size={18} className="text-slate-400" />
                                </button>
                            </div>

                            <div className="space-y-4 relative z-10">
                                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div className="p-2.5 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                                        <MapPin size={18} />
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed font-medium">{selectedBranch.address}</p>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div className="p-2.5 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                                        <Phone size={18} />
                                    </div>
                                    <a href={`tel:${selectedBranch.phone}`} className="text-white text-lg font-black hover:text-primary transition-colors tracking-tight italic">
                                        {selectedBranch.phone}
                                    </a>
                                </div>
                            </div>

                            <button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-primary/20 uppercase tracking-widest text-xs">
                                <span>{locale === 'ru' ? 'Связаться с филиалом' : 'Contact Branch'}</span>
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="absolute bottom-6 left-8 right-8 flex justify-between items-center z-10 pointer-events-none">
                <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        {locale === 'ru' ? 'СИСТЕМЫ ОНЛАЙН' : 'SYSTEMS ONLINE'}
                    </span>
                    <span className="hidden md:inline px-3 py-1 bg-white/5 rounded-full border border-white/5">14 OFFICES NATIONWIDE</span>
                </div>
                <div className="text-[10px] font-mono text-slate-600 hidden md:block opacity-40">
                    &copy; 2026 RESURSLOGISTICS
                </div>
            </div>
        </div>
    );
}
