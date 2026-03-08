"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Package, AlertCircle, CheckCircle2, Navigation } from "lucide-react";

export default function WhereIsMyCargo() {
    const [isSearching, setIsSearching] = useState(false);
    const [found, setFound] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [cargoZone, setCargoZone] = useState<{ x: number, y: number } | null>(null);
    const [signal, setSignal] = useState(0); // 0 to 100
    const [lastScan, setLastScan] = useState<{ x: number, y: number } | null>(null);
    const [showTutorial, setShowTutorial] = useState(true);

    const startSearch = () => {
        setIsSearching(true);
        setFound(false);
        setAttempts(0);
        setSignal(0);
        setCargoZone({ x: Math.random() * 80 + 10, y: Math.random() * 80 + 10 });
        setShowTutorial(false);
    };

    const checkZone = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isSearching || found) return;

        setAttempts(prev => prev + 1);
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setLastScan({ x, y });

        if (cargoZone) {
            const dist = Math.sqrt(Math.pow(x - cargoZone.x, 2) + Math.pow(y - cargoZone.y, 2));
            const strength = Math.max(0, 100 - (dist * 2.5));
            setSignal(strength);

            if (dist < 6) {
                setFound(true);
                setSignal(100);
            }
        }
    };

    return (
        <div className="relative w-full min-h-[550px] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 rounded-3xl border border-white/10 p-8 overflow-hidden group">
            <div className="grid lg:grid-cols-2 gap-12 relative z-10 h-full">
                <div className="flex flex-col justify-between">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Navigation className="w-5 h-5 text-blue-400 animate-pulse" />
                                <span className="text-[10px] uppercase font-black tracking-[0.3em] text-blue-400">Deep Scan Terminal v0.9</span>
                            </div>
                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">Поиск контейнера</h3>
                            <p className="text-slate-400 text-sm max-w-sm font-medium">Используйте датчик приближения для обнаружения потерянного груза на территории терминала.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Signal Strength</span>
                                    <span className={`text-[10px] font-black px-2 py-0.5 rounded ${signal > 80 ? 'bg-emerald-500/20 text-emerald-400' : signal > 40 ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-500/20 text-slate-500'}`}>
                                        {signal > 80 ? 'HOT' : signal > 40 ? 'WARM' : 'COLD'}
                                    </span>
                                </div>
                                <div className="h-4 bg-black/40 rounded-full border border-white/5 overflow-hidden flex gap-0.5 p-0.5">
                                    {[...Array(10)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ opacity: (signal / 10) > i ? 1 : 0.2 }}
                                            className={`flex-1 rounded-sm ${signal > 80 ? 'bg-emerald-500' : signal > 40 ? 'bg-amber-500' : 'bg-blue-500'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Attempts</span>
                                    <div className="text-2xl font-black text-white font-mono">{attempts}/15</div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">System</span>
                                    <div className={`text-2xl font-black uppercase italic tracking-tighter ${found ? 'text-emerald-400' : 'text-blue-400'}`}>
                                        {found ? 'LOCKED' : 'ACTIVE'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {!isSearching || found ? (
                        <button
                            onClick={startSearch}
                            className="w-full mt-8 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(37,99,235,0.3)] border border-blue-400/20"
                        >
                            <Search className="w-5 h-5" /> {found ? 'НОВАЯ ЦЕЛЬ' : 'АКТИВИРОВАТЬ СКАНЕР'}
                        </button>
                    ) : (
                        <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-[10px] font-black uppercase text-blue-400 text-center tracking-widest animate-pulse">
                            Кликайте по карте для триангуляции
                        </div>
                    )}
                </div>

                <div
                    onClick={checkZone}
                    className={`relative bg-black/60 rounded-3xl border transition-all duration-500 ${isSearching ? 'border-blue-500/30 cursor-crosshair shadow-[inset_0_0_50px_rgba(37,99,235,0.1)]' : 'border-white/5'} overflow-hidden min-h-[400px]`}
                >
                    <AnimatePresence>
                        {showTutorial && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 z-30 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center"
                            >
                                <AlertCircle className="w-12 h-12 text-blue-400 mb-4" />
                                <h4 className="text-lg font-black text-white uppercase italic mb-2 tracking-tight">Инструктаж</h4>
                                <p className="text-slate-400 text-xs leading-relaxed max-w-[250px]">
                                    Кликайте по сетке, чтобы просканировать область. Индикатор <span className="text-blue-400">Signal Strength</span> покажет, насколько близко вы к цели.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Scan Visuals */}
                    {lastScan && isSearching && !found && (
                        <motion.div
                            key={`${lastScan.x}-${lastScan.y}`}
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ scale: 1, opacity: 0 }}
                            className="absolute pointer-events-none border border-blue-400/50 rounded-full"
                            style={{
                                left: `${lastScan.x}%`,
                                top: `${lastScan.y}%`,
                                width: '60px',
                                height: '60px',
                                transform: 'translate(-50%, -50%)'
                            }}
                        />
                    )}

                    {/* Radar decoration */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-blue-400/30" />
                        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-blue-400/30" />
                        <div className="absolute inset-0 border border-blue-400/20 rounded-full m-8" />
                        <div className="absolute inset-0 border border-blue-400/10 rounded-full m-16" />
                    </div>

                    <AnimatePresence>
                        {found && cargoZone && (
                            <motion.div
                                initial={{ scale: 3, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="absolute w-14 h-14 z-20"
                                style={{ left: `${cargoZone.x}%`, top: `${cargoZone.y}%`, transform: 'translate(-50%, -50%)' }}
                            >
                                <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-40 animate-pulse" />
                                <MapPin className="w-full h-full text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,1)]" />
                                <motion.div
                                    className="absolute inset-[0px] border-2 border-emerald-500 rounded-xl"
                                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {!isSearching && !found && !showTutorial && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-600">
                            <Navigation className="w-16 h-16 opacity-10 animate-pulse" />
                            <span className="text-[10px] uppercase font-black tracking-[0.5em] opacity-40">Ready to Scan</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
