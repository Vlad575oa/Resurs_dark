"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, AlertCircle, CheckCircle, Info, TrafficCone, Siren } from "lucide-react";

const INFRACTIONS = [
    { id: 1, title: "Превышение скорости", points: 2, icon: AlertCircle, color: "text-red-400" },
    { id: 2, title: "Нарушение режима труда", points: 3, icon: TrafficCone, color: "text-amber-400" },
    { id: 3, title: "Перевес", points: 4, icon: Info, color: "text-orange-400" },
];

export default function TrafficController() {
    const [score, setScore] = useState(100);
    const [scannedId, setScannedId] = useState<number | null>(null);
    const [isScanning, setIsScanning] = useState(false);
    const [history, setHistory] = useState<any[]>([]);

    const scanDriver = () => {
        setIsScanning(true);
        setScannedId(null);

        setTimeout(() => {
            const hasInfraction = Math.random() > 0.4;
            if (hasInfraction) {
                const infraction = INFRACTIONS[Math.floor(Math.random() * INFRACTIONS.length)];
                setScannedId(infraction.id);
                setScore(prev => Math.max(prev - infraction.points * 5, 0));
                setHistory(prev => [{ ...infraction, timestamp: new Date().toLocaleTimeString() }, ...prev].slice(0, 5));
            } else {
                setScannedId(0); // Clean
                setScore(prev => prev + 10);
            }
            setIsScanning(false);
        }, 1500);
    };

    return (
        <div className="relative w-full min-h-[450px] bg-gradient-to-br from-slate-900 to-emerald-950 rounded-3xl border border-white/10 p-8 overflow-hidden group">
            {/* Radar scanner effect */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full -mr-48 -mt-48 blur-3xl" />

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Siren className="w-5 h-5 text-emerald-400 animate-pulse" />
                            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Inspector Terminal v2.0</span>
                        </div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Укротитель ГИБДД</h3>
                        <p className="text-slate-400 text-sm">
                            Твой автопарк — твои правила. Сканируй водителей, выявляй нарушения до того, как их увидит инспектор.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex-1 space-y-1">
                            <div className="flex justify-between text-[10px] font-black uppercase text-slate-500">
                                <span>Fleet Compliance Rate</span>
                                <span className={score > 80 ? 'text-emerald-400' : score > 50 ? 'text-amber-400' : 'text-red-400'}>{score}%</span>
                            </div>
                            <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
                                <motion.div
                                    className={`h-full rounded-full ${score > 80 ? 'bg-emerald-500' : score > 50 ? 'bg-amber-500' : 'bg-red-500'}`}
                                    initial={{ width: "100%" }}
                                    animate={{ width: `${score}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={scanDriver}
                        disabled={isScanning}
                        className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 text-white rounded-2xl font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.3)] border border-emerald-400/20"
                    >
                        {isScanning ? (
                            <>
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                                СКАН ПРОВЕРКА...
                            </>
                        ) : (
                            <>
                                <Shield className="w-5 h-5" />
                                ПРОВЕРИТЬ ЭКИПАЖ
                            </>
                        )}
                    </button>

                    <div className="space-y-3">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Последние протоколы</span>
                        <AnimatePresence>
                            {history.length > 0 ? (
                                history.map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5"
                                    >
                                        <div className="flex items-center gap-3">
                                            <h.icon className={`w-4 h-4 ${h.color}`} />
                                            <div>
                                                <p className="text-[10px] font-black text-white uppercase">{h.title}</p>
                                                <p className="text-[8px] text-slate-500">{h.timestamp} // ID_{Math.floor(Math.random() * 9000 + 1000)}</p>
                                            </div>
                                        </div>
                                        <span className={`text-[10px] font-black ${h.color}`}>-{h.points * 5}%</span>
                                    </motion.div>
                                ))
                            ) : (
                                <p className="text-xs text-slate-600 italic">Нарушений не обнаружено</p>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="relative flex-1 bg-black/40 rounded-2xl border border-emerald-500/20 flex flex-col items-center justify-center overflow-hidden min-h-[300px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />

                    <AnimatePresence mode="wait">
                        {isScanning ? (
                            <motion.div
                                key="scanning"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="relative flex flex-col items-center gap-4"
                            >
                                <div className="w-32 h-32 relative">
                                    <motion.div
                                        className="absolute inset-0 border-4 border-emerald-500/20 rounded-full"
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.1, 0.5] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                    />
                                    <motion.div
                                        className="absolute inset-0 border-t-4 border-emerald-500 rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                    />
                                    <Shield className="absolute inset-0 m-auto w-12 h-12 text-emerald-500/50" />
                                </div>
                                <span className="text-xs font-black text-emerald-400 uppercase tracking-[0.4em] animate-pulse">Анализ данных...</span>
                            </motion.div>
                        ) : scannedId !== null ? (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center gap-6 p-8"
                            >
                                {scannedId === 0 ? (
                                    <>
                                        <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center border-2 border-emerald-500/50">
                                            <CheckCircle className="w-12 h-12 text-emerald-400" />
                                        </div>
                                        <div className="text-center">
                                            <h4 className="text-2xl font-black text-white uppercase italic">ЧИСТО</h4>
                                            <p className="text-emerald-400 text-[10px] font-bold mt-2 uppercase tracking-widest">Водитель полностью соответствует стандартам</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center border-2 border-red-500/50">
                                            <AlertCircle className="w-12 h-12 text-red-500" />
                                        </div>
                                        <div className="text-center">
                                            <h4 className="text-2xl font-black text-white uppercase italic">НАРУШЕНИЕ</h4>
                                            <p className="text-red-500 text-[10px] font-bold mt-2 uppercase tracking-widest">
                                                {INFRACTIONS.find(i => i.id === scannedId)?.title}
                                            </p>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        ) : (
                            <div className="flex flex-col items-center gap-4 opacity-30">
                                <Shield className="w-16 h-16 text-slate-500" />
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Готовность к сканированию</span>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
