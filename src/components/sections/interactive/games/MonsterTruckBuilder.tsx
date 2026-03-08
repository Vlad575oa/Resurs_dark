"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Settings2, Sparkles, Wrench, Palette, Ruler, FileText } from "lucide-react";
import { useMetaGame } from "@/context/MetaGameContext";

const PARTS = {
    wheels: [
        { id: "standard", label: "Стандарт", size: "scale-100", color: "bg-slate-700", stat: "Экономия топлива +20%" },
        { id: "offroad", label: "Внедорожные", size: "scale-125", color: "bg-slate-900 border-2 border-slate-600", stat: "Проходимость вне дорог" },
        { id: "monster", label: "Монстр-катки", size: "scale-150", color: "bg-black border-4 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]", stat: "Преодоление любых заторов" },
    ],
    body: [
        { id: "delivery", label: "Фургон", color: "border-slate-400", height: 'h-24' },
        { id: "pickup", label: "Пикап", color: "border-emerald-400", height: 'h-16' },
        { id: "tanker", label: "Танкер", color: "border-blue-400", height: 'h-20' },
        { id: "bus", label: "Автобус", color: "border-orange-400", height: 'h-28' },
        { id: "passenger", label: "Седан", color: "border-pink-400", height: 'h-12' },
    ],
    size: [
        { id: "compact", label: "Компакт", scale: 0.8 },
        { id: "standard", label: "Норма", scale: 1.0 },
        { id: "heavy", label: "Тяжеловес", scale: 1.3 },
    ],
    paint: [
        { id: "classic", label: "Классик", class: "bg-slate-400" },
        { id: "chrome", label: "Хром", class: "bg-gradient-to-br from-slate-200 to-slate-500 shadow-inner" },
        { id: "neon", label: "Неон", class: "bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.7)]" },
        { id: "carbon", label: "Карбон", class: "bg-[repeating-linear-gradient(45deg,#1a1a1a,#1a1a1a_2px,#000_2px,#000_4px)]" },
        { id: "fire", label: "Пламя", class: "bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 shadow-[0_0_20px_rgba(239,68,68,0.5)]" },
    ]
};

export default function MonsterTruckBuilder() {
    const [selections, setSelections] = useState({
        wheel: PARTS.wheels[0],
        body: PARTS.body[0],
        paint: PARTS.paint[0],
        size: PARTS.size[1],
    });
    const [showCertificate, setShowCertificate] = useState(false);
    const [burstKey, setBurstKey] = useState(0);
    const { addCoins } = useMetaGame();

    const isSpecialCombo = selections.wheel.id === "monster" && selections.paint.id === "neon" && selections.size.id === "heavy";

    const handleRegister = () => {
        setShowCertificate(true);
        setBurstKey(k => k + 1);
        if (isSpecialCombo) {
            addCoins(500);
        } else {
            addCoins(150);
        }
    };

    return (
        <div className="relative w-full min-h-[500px] bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-950 rounded-3xl border border-white/10 p-8 overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Wrench className="w-5 h-5 text-amber-500 animate-spin-slow" />
                            <span className="text-[10px] uppercase font-black tracking-widest text-amber-500">Custom Engineering v04</span>
                        </div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">Собери монстр-трак</h3>
                        <p className="text-slate-400 text-sm max-w-sm font-medium">Тюнинг, который выходит за рамки регламентов. Сделай свой транспорт непобедимым.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-500 tracking-wider">
                                <Ruler className="w-3 h-3" /> Габариты надстройки
                            </label>
                            <div className="flex gap-2">
                                {PARTS.size.map(sz => (
                                    <button
                                        key={sz.id}
                                        onClick={() => setSelections(s => ({ ...s, size: sz }))}
                                        className={`flex-1 py-3 px-2 rounded-xl text-[10px] font-bold transition-all border ${selections.size.id === sz.id ? 'bg-orange-500/20 border-orange-500 text-orange-400' : 'bg-white/5 border-white/5 text-slate-500 hover:bg-white/10'
                                            }`}
                                    >
                                        {sz.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-500 tracking-wider">
                                <Settings2 className="w-3 h-3" /> Тип кузова
                            </label>
                            <div className="flex gap-2">
                                {PARTS.body.map(b => (
                                    <button
                                        key={b.id}
                                        onClick={() => setSelections(s => ({ ...s, body: b }))}
                                        className={`flex-1 py-3 px-2 rounded-xl text-[10px] font-bold transition-all border ${selections.body.id === b.id ? 'bg-blue-500/20 border-blue-500 text-blue-400' : 'bg-white/5 border-white/5 text-slate-500 hover:bg-white/10'
                                            }`}
                                    >
                                        {b.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-500 tracking-wider">
                                <Palette className="w-3 h-3" /> Покраска / Скин
                            </label>
                            <div className="flex gap-3 flex-wrap">
                                {PARTS.paint.map(p => (
                                    <button
                                        key={p.id}
                                        onClick={() => setSelections(s => ({ ...s, paint: p }))}
                                        className={`w-10 h-10 rounded-xl border-2 transition-all ${selections.paint.id === p.id ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                                            } ${p.class}`}
                                        title={p.label}
                                    />
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handleRegister}
                            className="w-full mt-4 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-2xl font-black text-sm text-[11px] uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            <FileText className="w-4 h-4" /> Сертифицировать
                        </button>
                    </div>
                </div>

                <div className="relative flex items-center justify-center bg-black/40 rounded-2xl border border-white/5 min-h-[400px] overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />

                    {/* Dynamic Truck Visual */}
                    <motion.div
                        style={{ scale: selections.size.scale }}
                        className="relative transition-transform duration-500"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${selections.body.id}-${selections.paint.id}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                className={`w-48 ${selections.body.height} rounded-t-2xl border-x-8 border-t-8 transition-all duration-500 ${selections.body.color} ${selections.paint.class} relative`}
                            >
                                {/* Cab */}
                                <div className={`absolute -left-12 bottom-0 w-12 ${selections.body.id === 'bus' ? 'h-full' : 'h-16'} bg-inherit border-l-8 border-t-8 border-slate-900 rounded-tl-2xl overflow-hidden`}>
                                    <div className="w-full h-1/2 bg-sky-400/30 border-b border-black/20" />
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Wheels Container */}
                        <div className="absolute -bottom-8 left-0 right-0 flex justify-around">
                            <motion.div
                                key={selections.wheel.id}
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                className={`w-16 h-16 rounded-full ${selections.wheel.color} ${selections.wheel.size} border-4 border-slate-900 flex items-center justify-center`}
                            >
                                <div className="w-1/2 h-1/2 rounded-full border border-white/10" />
                            </motion.div>
                            <motion.div
                                key={`${selections.wheel.id}-rear`}
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                className={`w-16 h-16 rounded-full ${selections.wheel.color} ${selections.wheel.size} border-4 border-slate-900 flex items-center justify-center`}
                            >
                                <div className="w-1/2 h-1/2 rounded-full border border-white/10" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Sparkles effect */}
                    <div className="absolute top-10 right-10">
                        <Sparkles className="w-8 h-8 text-amber-500/30 animate-pulse" />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span>МАССА: {Math.round(selections.size.scale * 4500)} КГ</span>
                <div className="w-[1px] h-3 bg-white/10" />
                <span className="text-amber-500">СВОЙСТВО: {selections.wheel.stat}</span>
            </div>

            <AnimatePresence>
                {showCertificate && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center"
                    >
                        <div className="bg-[#f8f9fa] text-slate-900 p-8 rounded-2xl max-w-sm w-full relative shadow-[0_0_50px_rgba(255,255,255,0.1)] border border-slate-200">
                            <div className="absolute top-4 right-4 bg-amber-500 text-white px-2 py-1 text-[8px] font-black rounded uppercase">Одобрено</div>
                            <h4 className="text-2xl font-black uppercase tracking-tighter mb-6 border-b-2 border-slate-200 pb-4 text-slate-800">Сертификат ТС</h4>

                            <div className="space-y-3 text-left mb-6 text-sm font-semibold text-slate-600">
                                <p className="flex justify-between"><span className="text-slate-400">Модель:</span> <span className="text-slate-900">{selections.body.label} {selections.size.label}</span></p>
                                <p className="flex justify-between"><span className="text-slate-400">Шасси:</span> <span className="text-slate-900">{selections.wheel.label}</span></p>
                                <p className="flex justify-between"><span className="text-slate-400">Допуск:</span> <span className="text-slate-900">{selections.wheel.stat}</span></p>
                                <p className="flex justify-between"><span className="text-slate-400">Масса:</span> <span className="text-slate-900">{Math.round(selections.size.scale * 4500)} кг</span></p>
                            </div>

                            {isSpecialCombo && (
                                <motion.div
                                    initial={{ scale: 0, rotate: -20 }}
                                    animate={{ scale: 1, rotate: [-10, 10, -5, 5, 0] }}
                                    className="absolute -top-8 -left-8 bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 rounded-full shadow-[0_0_30px_rgba(99,102,241,0.8)] border-4 border-indigo-300 z-10 font-black uppercase text-[10px] tracking-widest text-center"
                                >
                                    Инновационный<br />Флот!
                                </motion.div>
                            )}

                            <div className={`p-3 rounded-xl mb-6 text-[10px] uppercase tracking-widest font-black border ${isSpecialCombo ? 'bg-indigo-50 text-indigo-700 border-indigo-300 shadow-inner' : 'bg-emerald-50 text-emerald-600 border-emerald-200'}`}>
                                Транспорт добавлен в парк! <br />
                                <span className={`${isSpecialCombo ? 'text-indigo-600 font-black text-lg' : 'text-emerald-500 text-sm'} mt-1 block`}>Выдан грант +{isSpecialCombo ? 500 : 150} LC</span>
                            </div>

                            <button
                                onClick={() => setShowCertificate(false)}
                                className="w-full py-4 bg-slate-900 text-white hover:bg-slate-800 rounded-xl text-xs font-black uppercase tracking-widest transition-all"
                            >
                                К сборке новой модели
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Confetti Particles inside the main container but above everything */}
            {showCertificate && [...Array(40)].map((_, i) => (
                <motion.div
                    key={`${burstKey}-confetti-${i}`}
                    initial={{ opacity: 0, scale: 0, y: 0, x: 0 }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        scale: [0, 1, 0.8, 0.5],
                        x: [0, (Math.random() - 0.5) * 800],
                        y: [0, Math.random() * -600 - 100],
                        rotate: Math.random() * 720,
                    }}
                    transition={{ duration: 3, ease: "easeOut", delay: i * 0.015 }}
                    className="absolute bottom-0 left-1/2 w-3 h-4 rounded-sm z-[60] pointer-events-none"
                    style={{ backgroundColor: ['#fbbf24', '#34d399', '#f472b6', '#60a5fa', '#a78bfa'][i % 5] }}
                />
            ))}
        </div>
    );
}
