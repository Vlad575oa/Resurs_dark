"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, ChevronUp, ChevronDown, CheckCircle, AlertCircle, Zap, Flame, Package, Truck, Boxes, Container, RotateCcw, Shield } from "lucide-react";
import { useMetaGame } from "@/context/MetaGameContext";

const CARGO_TYPES = [
    { id: 'box', icon: Box, label: 'Паллета', color: 'text-amber-400', weight: 'heavy', fragile: false },
    { id: 'package', icon: Package, label: 'Хрупкое', color: 'text-blue-400', weight: 'light', fragile: true },
    { id: 'truck', icon: Truck, label: 'Движок', color: 'text-emerald-400', weight: 'heavy', fragile: false },
    { id: 'boxes', icon: Boxes, label: 'Группа', color: 'text-indigo-400', weight: 'light', fragile: false },
    { id: 'container', icon: Container, label: 'Модуль', color: 'text-red-400', weight: 'heavy', fragile: false },
];

export default function AngryLoader() {
    const [forkPos, setForkPos] = useState(50);
    const [hasCargo, setHasCargo] = useState(false);
    const [cargoType, setCargoType] = useState(0);
    const [status, setStatus] = useState<'idle' | 'success' | 'fail'>('idle');
    const [messages, setMessages] = useState<string[]>([]);
    const [shake, setShake] = useState(false);
    const [combo, setCombo] = useState(0);
    const [reputation, setReputation] = useState(100);
    const [perfectDrop, setPerfectDrop] = useState<{ show: boolean, mult: number }>({ show: false, mult: 1 });
    const [burstKey, setBurstKey] = useState(0);

    const { addCoins } = useMetaGame();

    const moveFork = (delta: number) => {
        setForkPos(prev => Math.min(Math.max(prev + delta, 0), 100));
        setStatus('idle');
    };

    const nextCargo = () => {
        if (!hasCargo) {
            setCargoType(prev => (prev + 1) % CARGO_TYPES.length);
        }
    };

    const handleAction = () => {
        if (!hasCargo) {
            if (forkPos > 85) {
                setHasCargo(true);
                setShake(true);
                setTimeout(() => setShake(false), 200);
                addMessage(`${CARGO_TYPES[cargoType].label.toUpperCase()} ЗАХВАЧЕН!`);
            } else {
                addMessage("ПРОМАХ! СЛИШКОМ НИЗКО!");
                setShake(true);
                setTimeout(() => setShake(false), 100);
            }
        } else {
            const cargo = CARGO_TYPES[cargoType];

            if (forkPos < 15) {
                if (cargo.fragile && forkPos > 5) {
                    setHasCargo(false);
                    setStatus('fail');
                    setCombo(0);
                    setReputation(prev => Math.max(0, prev - 25));
                    addMessage("КАТАСТРОФА! ХРУПКИЙ ГРУЗ РАЗБИТ!");
                    setShake(true);
                    setTimeout(() => setShake(false), 500);
                } else {
                    setHasCargo(false);
                    setStatus('success');
                    setCombo(c => {
                        const newCombo = c + 1;
                        addCoins(10 * newCombo);
                        if (cargo.fragile || newCombo > 1) {
                            setPerfectDrop({ show: true, mult: newCombo });
                            setBurstKey(k => k + 1);
                            setTimeout(() => setPerfectDrop({ show: false, mult: 1 }), 2000);
                        }
                        return newCombo;
                    });
                    addMessage(`ИДЕАЛЬНАЯ ПОДАЧА! КОМБО: x${combo + 1}`);

                    if (cargo.weight === 'heavy') {
                        setShake(true);
                        setTimeout(() => setShake(false), 300);
                    }
                }
            } else {
                setHasCargo(false);
                setStatus('fail');
                setCombo(0);
                setReputation(prev => Math.max(0, prev - 15));
                addMessage("КАТАСТРОФА! УРОНИЛ ГРУЗ ИЗДАЛЕКА!");
                setShake(true);
                setTimeout(() => setShake(false), 500);
            }
        }
    };

    const addMessage = (msg: string) => {
        setMessages(prev => [msg, ...prev].slice(0, 3));
    };

    const SelectedCargoIcon = CARGO_TYPES[cargoType].icon;

    return (
        <motion.div
            animate={shake ? { x: [-5, 5, -5, 5, 0] } : {}}
            className="relative w-full min-h-[500px] bg-gradient-to-br from-red-950 via-slate-900 to-amber-900 rounded-3xl border border-red-500/20 p-8 overflow-hidden group"
        >
            {/* Background heat waves */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ y: [0, -1000] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-full h-[200%] bg-gradient-to-t from-transparent via-red-500/10 to-transparent"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-8 h-full relative z-10">
                <div className="space-y-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Flame className="w-5 h-5 text-red-500 animate-pulse" />
                            <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Hardcore Edition</span>
                        </div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Яростный грузчик</h3>
                        <p className="text-amber-200/50 text-xs font-bold mt-1">Опускайте хрупкое бережно, остальное — с силой!</p>

                        <div className="mt-4 bg-black/40 p-3 rounded-xl border border-white/5">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1"><Shield className="w-3 h-3 text-emerald-500" /> Репутация компании</span>
                                <span className="text-xs font-bold text-white shadow-sm">{reputation}%</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden shadow-inner">
                                <div className={`h-full transition-all duration-500 ${reputation > 60 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : reputation > 30 ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]'}`} style={{ width: `${reputation}%` }} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <button
                                onClick={() => moveFork(10)}
                                className="flex-1 bg-white/5 hover:bg-red-500/20 p-4 rounded-xl border border-white/10 flex flex-col items-center gap-2 transition-all active:scale-95 group"
                            >
                                <ChevronUp className="w-6 h-6 text-red-400 group-hover:animate-bounce" />
                                <span className="text-[10px] font-black uppercase text-slate-500">МАКС. ВВЕРХ</span>
                            </button>
                            <button
                                onClick={() => moveFork(-10)}
                                className="flex-1 bg-white/5 hover:bg-amber-500/20 p-4 rounded-xl border border-white/10 flex flex-col items-center gap-2 transition-all active:scale-95 group"
                            >
                                <ChevronDown className="w-6 h-6 text-amber-400 group-hover:animate-bounce" />
                                <span className="text-[10px] font-black uppercase text-slate-500">МАКС. ВНИЗ</span>
                            </button>
                            <button
                                onClick={nextCargo}
                                disabled={hasCargo}
                                className={`flex-1 bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center gap-2 transition-all ${hasCargo ? 'opacity-20 grayscale' : 'hover:bg-white/10 active:scale-95'}`}
                            >
                                <RotateCcw className="w-6 h-6 text-indigo-400" />
                                <span className="text-[10px] font-black uppercase text-slate-500">СМЕНИТЬ</span>
                            </button>
                        </div>
                        <button
                            onClick={handleAction}
                            className={`w-full py-5 rounded-xl font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 ${hasCargo
                                ? 'bg-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:bg-red-500'
                                : 'bg-amber-600 text-white shadow-[0_0_30px_rgba(217,119,6,0.4)] hover:bg-amber-500'
                                }`}
                        >
                            <Zap className={`w-5 h-5 ${hasCargo ? 'animate-spin' : ''}`} />
                            {hasCargo ? 'ШВЫРНУТЬ В ЗОНУ' : 'ХВАТАЙ ПАЛЛЕТУ'}
                        </button>
                    </div>

                    <AnimatePresence>
                        {perfectDrop.show && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.2 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-emerald-500/90 text-white px-8 py-4 rounded-3xl border border-emerald-300 shadow-[0_0_50px_rgba(16,185,129,0.8)] text-center pointer-events-none backdrop-blur-sm"
                            >
                                <div className="text-2xl font-black uppercase tracking-widest leading-tight">Идеальная<br />Погрузка!</div>
                                <div className="text-lg font-bold text-emerald-200 mt-2">+{10 * perfectDrop.mult} LC</div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="space-y-2">
                        {messages.map((m, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1 - i * 0.3, x: 0 }}
                                className={`text-[11px] font-black uppercase tracking-widest ${m.includes('ИДЕАЛЬНАЯ') ? 'text-emerald-400' : m.includes('КАТАСТРОФА') ? 'text-red-500' : 'text-amber-400'
                                    }`}
                            >
                                {m}
                            </motion.p>
                        ))}
                    </div>
                </div>

                <div className="relative flex-1 bg-black/40 rounded-2xl border border-white/5 min-h-[300px] overflow-hidden shadow-inner">
                    {/* Shelves */}
                    <div className="absolute right-4 top-4 bottom-4 w-24 flex flex-col justify-between py-4 border-l-2 border-dashed border-white/10">
                        <div className="h-3 w-full bg-slate-800 rounded flex items-end justify-center">
                            {!hasCargo && status !== 'fail' && (
                                <SelectedCargoIcon className={`w-8 h-8 ${CARGO_TYPES[cargoType].color} mb-1 animate-pulse`} />
                            )}
                        </div>
                        <div className="h-3 w-full bg-slate-800 rounded" />
                        <div className="h-3 w-full bg-slate-800 rounded" />
                        <div className="h-6 w-full bg-red-500/20 border border-red-500/30 rounded flex items-center justify-center relative group">
                            <div className="absolute inset-0 bg-red-500/10 blur-sm group-hover:blur-md transition-all" />
                            <span className="text-[10px] font-black text-red-500 uppercase relative z-10">DROP ZONE</span>
                        </div>
                    </div>

                    {/* Mast */}
                    <div className="absolute left-24 top-4 bottom-4 w-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-full border border-white/5" />

                    {/* Fork */}
                    <motion.div
                        className="absolute left-24 w-40 h-3 bg-gradient-to-r from-slate-200 to-slate-400 rounded-r-lg z-20 shadow-xl"
                        style={{ bottom: `calc(1rem + ${forkPos * 0.8}%)` }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        {/* Hydraulics effect */}
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-1 bg-red-500/40 blur-sm animate-pulse" />

                        {/* Fork tines */}
                        <div className="absolute -bottom-3 right-0 w-3 h-6 bg-slate-500 rounded-b-sm" />

                        {/* Cargo if picked up */}
                        {hasCargo && (
                            <motion.div layoutId="cargo" className="absolute -top-12 left-6">
                                <SelectedCargoIcon className={`w-12 h-12 ${CARGO_TYPES[cargoType].color} drop-shadow-[0_0_15px_currentColor]`} />
                                <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.5 }} className="absolute inset-0 border-2 border-white/50 rounded-lg" />
                            </motion.div>
                        )}
                    </motion.div>

                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 2 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-emerald-500/20 flex flex-col items-center justify-center gap-4 z-50 backdrop-blur-sm"
                            >
                                <CheckCircle className="w-24 h-24 text-emerald-500 animate-bounce" />
                                <span className="text-3xl font-black text-emerald-400 uppercase tracking-[0.5em] italic">SAVED!</span>
                            </motion.div>
                        )}
                        {status === 'fail' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-red-600/40 flex flex-col items-center justify-center gap-4 z-50 backdrop-blur-md"
                            >
                                <AlertCircle className="w-24 h-24 text-white animate-pulse" />
                                <span className="text-3xl font-black text-white uppercase tracking-[0.5em] italic">CRASHED!</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Multi-Coin Burst */}
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={`${burstKey}-coin-${i}`}
                            initial={{ opacity: 0, scale: 0, y: 0, x: 0 }}
                            animate={burstKey > 0 ? {
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.5, 0.5],
                                y: [0, Math.random() * -200 - 50],
                                x: [0, (Math.random() - 0.5) * 200],
                                rotate: Math.random() * 360,
                            } : {}}
                            transition={{ duration: 1, ease: "easeOut", delay: i * 0.05 }}
                            className="absolute bottom-10 left-1/2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-yellow-200 shadow-[0_0_15px_rgba(250,204,21,0.8)] flex items-center justify-center pointer-events-none z-50 text-[10px] text-yellow-800 font-bold"
                            style={{ translateX: "-50%" }}
                        >
                            LC
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Selection indicator */}
            <div className="absolute bottom-4 right-8 flex gap-4 opacity-50 z-20">
                {CARGO_TYPES.map((type, i) => (
                    <type.icon key={type.id} className={`w-4 h-4 transition-all ${cargoType === i ? 'text-white scale-125 opacity-100' : 'text-slate-600'}`} />
                ))}
            </div>

            {/* Industrial UI accents */}
            <div className="absolute top-4 right-4 flex gap-4 opacity-50">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                <div className="w-8 h-1 bg-slate-700" />
            </div>
            <div className="absolute bottom-4 left-4 font-mono text-[8px] text-slate-600 uppercase tracking-tighter">
                Sys.v04_overdrive_active // temp_critical
            </div>
        </motion.div>
    );
}
