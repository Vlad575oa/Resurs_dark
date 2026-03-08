"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Volume2, AudioLines, Settings, Play, Pause, Zap, Activity } from "lucide-react";
import { useMetaGame } from "@/context/MetaGameContext";

const ENGINE_TYPES = [
    { id: 'diesel', label: 'Дизель (V8)', type: 'sawtooth', color: 'text-purple-400', bg: 'bg-purple-500/20' },
    { id: 'electric', label: 'Электро (Tesla)', type: 'sine', color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
    { id: 'turbine', label: 'Турбо (Jet)', type: 'triangle', color: 'text-rose-400', bg: 'bg-rose-500/20' },
];

export default function MusicalMotor() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [rpm, setRpm] = useState(1000);
    const [engineIdx, setEngineIdx] = useState(0);
    const [profitPoints, setProfitPoints] = useState<number[]>(Array(20).fill(50));
    const [showSweetSpotMsg, setShowSweetSpotMsg] = useState(false);

    const { addCoins } = useMetaGame();
    const audioCtxRef = useRef<AudioContext | null>(null);
    const oscillatorRef = useRef<OscillatorNode | null>(null);
    const gainRef = useRef<GainNode | null>(null);
    const sweetTimeRef = useRef(0);
    const superModeRef = useRef(false);

    const [superMode, setSuperMode] = useState(false);
    const [rainKey, setRainKey] = useState(0);

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setProfitPoints(prev => {
                    const lastY = prev[prev.length - 1];
                    let nextY = lastY;
                    if (rpm >= 2800 && rpm <= 3500) {
                        nextY -= (1 + Math.random() * 1);
                    } else if (rpm > 4500) {
                        nextY += (Math.random() * 4);
                    } else if (rpm < 2000) {
                        nextY += (Math.random() - 0.5) * 3;
                    } else {
                        nextY -= (Math.random() - 0.2);
                    }
                    nextY = Math.max(10, Math.min(90, nextY));
                    return [...prev.slice(1), nextY];
                });

                if (rpm >= 2800 && rpm <= 3500) {
                    sweetTimeRef.current += 200;
                    if (sweetTimeRef.current >= 3000 && !superModeRef.current) {
                        superModeRef.current = true;
                        setSuperMode(true);
                        setRainKey(k => k + 1);
                    }
                    if (sweetTimeRef.current >= 3000) {
                        if (Math.random() > 0.3) addCoins(20);
                    } else {
                        if (Math.random() > 0.6) addCoins(5);
                    }
                    setShowSweetSpotMsg(true);
                } else {
                    sweetTimeRef.current = 0;
                    if (superModeRef.current) {
                        superModeRef.current = false;
                        setSuperMode(false);
                    }
                    setShowSweetSpotMsg(false);
                }
            }, 200);
            return () => clearInterval(interval);
        }
    }, [isPlaying, rpm, addCoins]);

    const chartPath = profitPoints.map((y, i) => `${i * 5},${y}`).join(' ');

    const startMotor = () => {
        if (!audioCtxRef.current) audioCtxRef.current = new AudioContext();
        const ctx = audioCtxRef.current;

        oscillatorRef.current = ctx.createOscillator();
        gainRef.current = ctx.createGain();

        oscillatorRef.current.type = ENGINE_TYPES[engineIdx].type as OscillatorType;
        oscillatorRef.current.frequency.setValueAtTime(rpm / 20, ctx.currentTime);

        gainRef.current.gain.setValueAtTime(0.05, ctx.currentTime);

        oscillatorRef.current.connect(gainRef.current);
        gainRef.current.connect(ctx.destination);

        oscillatorRef.current.start();
        setIsPlaying(true);
    };

    const stopMotor = () => {
        oscillatorRef.current?.stop();
        oscillatorRef.current?.disconnect();
        setIsPlaying(false);
        sweetTimeRef.current = 0;
        if (superModeRef.current) {
            superModeRef.current = false;
            setSuperMode(false);
        }
        setShowSweetSpotMsg(false);
    };

    const updateRpm = (val: number) => {
        setRpm(val);
        if (oscillatorRef.current && audioCtxRef.current) {
            oscillatorRef.current.frequency.setTargetAtTime(val / (engineIdx === 1 ? 15 : 20), audioCtxRef.current.currentTime, 0.1);
        }
    };

    const switchEngine = () => {
        const wasPlaying = isPlaying;
        if (wasPlaying) stopMotor();
        setEngineIdx(prev => (prev + 1) % ENGINE_TYPES.length);
        // Wait for state update is tricky, but let's assume immediate for now or use effect
    };

    return (
        <div className="relative w-full min-h-[500px] bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-950 rounded-3xl border border-white/10 p-8 overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.1),transparent)] pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 relative z-10 h-full">
                <div className="flex flex-col justify-between">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Music className="w-5 h-5 text-purple-500 animate-pulse" />
                                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-purple-500">Acoustic Diagnostics Unit</span>
                            </div>
                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">Музыкальный мотор</h3>
                            <p className="text-slate-400 text-sm max-w-sm">Слушай ритм своего автопарка. Найди оптимальные обороты (2800-3500) для идеальной эффективности и прибыли.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-3">
                                <div className="flex justify-between items-end">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Engine Speed (RPM)</span>
                                    <span className="text-2xl font-black text-purple-400 font-mono italic">{rpm}</span>
                                </div>
                                <input
                                    type="range"
                                    min="800" max="6000" step="50"
                                    value={rpm}
                                    onChange={(e) => updateRpm(Number(e.target.value))}
                                    className="w-full h-1.5 bg-white/10 rounded-full accent-purple-500 cursor-pointer appearance-none"
                                />
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={isPlaying ? stopMotor : startMotor}
                                    className={`flex-1 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 border ${isPlaying
                                        ? 'bg-purple-600/20 border-purple-500 text-purple-400'
                                        : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'
                                        }`}
                                >
                                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                                    {isPlaying ? 'ГЛУШИТЬ' : 'ЗАПУСК'}
                                </button>
                                <button
                                    onClick={switchEngine}
                                    className="px-6 py-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all text-slate-500 hover:text-white"
                                    title="Сменить тип двигателя"
                                >
                                    <Settings className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={`p-4 ${ENGINE_TYPES[engineIdx].bg} rounded-2xl border border-white/10 flex items-center gap-4 transition-colors`}>
                        <Volume2 className={`w-8 h-8 ${ENGINE_TYPES[engineIdx].color} opacity-40`} />
                        <div className="flex-1 space-y-1">
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{ENGINE_TYPES[engineIdx].label}</span>
                            <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ x: isPlaying ? ["0%", "-100%"] : "0%" }}
                                    transition={{ repeat: Infinity, duration: 10 / rpm * 1000, ease: "linear" }}
                                    className={`w-[200%] h-full bg-gradient-to-r from-transparent via-current to-transparent ${ENGINE_TYPES[engineIdx].color}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`relative bg-black/60 rounded-3xl border ${isPlaying ? (superMode ? 'border-yellow-400 shadow-[0_0_50px_rgba(250,204,21,0.4)]' : 'border-purple-500/40') : 'border-white/5'} flex flex-col items-center justify-center overflow-hidden min-h-[350px] transition-colors duration-500`}>
                    <AnimatePresence>
                        {isPlaying && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.2 }}
                                className="flex flex-col items-center gap-8"
                            >
                                <div className="relative">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.1 + (rpm / 8000), 1],
                                            rotate: [0, 5, -5, 0],
                                            filter: [`blur(0px)`, `blur(${rpm / 2000}px)`, `blur(0px)`]
                                        }}
                                        transition={{ repeat: Infinity, duration: 60 / rpm }}
                                        className={`p-12 rounded-full border-4 shadow-[0_0_80px_rgba(168,85,247,0.3)] transition-colors ${ENGINE_TYPES[engineIdx].color.replace('text-', 'text-opacity-40 border-')} ${ENGINE_TYPES[engineIdx].bg}`}
                                    >
                                        <AudioLines className={`w-24 h-24 ${ENGINE_TYPES[engineIdx].color}`} />
                                    </motion.div>
                                    <motion.div
                                        animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 - (rpm / 4000), ease: "easeOut" }}
                                        className={`absolute inset-0 border-2 rounded-full ${ENGINE_TYPES[engineIdx].color.replace('text-', 'border-')}`}
                                    />
                                </div>
                                <div className="flex gap-2 h-12 items-end">
                                    {[...Array(12)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: isPlaying ? [10, (10 + Math.random() * (rpm / 50)), 10] : 10 }}
                                            transition={{ repeat: Infinity, duration: 0.1 + Math.random() * 0.2 }}
                                            className={`w-1.5 rounded-full ${ENGINE_TYPES[engineIdx].color.replace('text-', 'bg-')}`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {isPlaying && (
                        <div className="absolute bottom-6 left-6 right-6 h-28 bg-white/5 rounded-2xl border border-white/10 p-2 overflow-hidden flex flex-col justify-end">
                            <div className="flex items-center gap-1 absolute top-3 left-4 z-10">
                                <Activity className={`w-3 h-3 ${rpm >= 2800 && rpm <= 3500 ? 'text-emerald-500' : rpm > 4500 ? 'text-red-500' : 'text-amber-500'}`} />
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Профит</span>
                            </div>

                            <svg viewBox="0 0 100 100" className="w-full h-full mt-4" preserveAspectRatio="none">
                                <polyline
                                    points={chartPath}
                                    fill="none"
                                    stroke={rpm >= 2800 && rpm <= 3500 ? "#10b981" : rpm > 4500 ? "#ef4444" : "#f59e0b"}
                                    strokeWidth="3"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    className="transition-colors duration-300 drop-shadow-[0_0_8px_currentColor]"
                                />
                            </svg>

                            <AnimatePresence>
                                {showSweetSpotMsg && !superMode && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute top-3 right-4 bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest border border-emerald-500/50"
                                    >
                                        Оптимальный Режим
                                    </motion.div>
                                )}
                                {superMode && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.2 }}
                                        className="absolute top-3 right-4 bg-yellow-500/20 text-yellow-400 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] border border-yellow-500 shadow-[0_0_20px_rgba(250,204,21,0.5)] animate-pulse"
                                    >
                                        СУПЕР-РЕЖИМ!
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}

                    {/* Super Mode Coin Rain */}
                    <AnimatePresence>
                        {superMode && [...Array(30)].map((_, i) => (
                            <motion.div
                                key={`${rainKey}-coin-${i}`}
                                initial={{ opacity: 0, y: -20, x: (Math.random() - 0.5) * 400 }}
                                animate={{ opacity: [0, 1, 1, 0], y: 400, rotate: Math.random() * 360 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: Math.random() * 2 }}
                                className="absolute top-0 left-1/2 w-5 h-5 bg-yellow-400 rounded-full border-2 border-yellow-200 z-50 shadow-[0_0_15px_rgba(250,204,21,0.8)] pointer-events-none flex items-center justify-center"
                            >
                                <span className="text-[6px] font-black text-yellow-800 tracking-tighter">LC</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {!isPlaying && (
                        <div className="flex flex-col items-center gap-6 opacity-30">
                            <Settings className="w-20 h-20 text-slate-500" />
                            <span className="text-[10px] uppercase font-black tracking-[0.4em] text-slate-500">Wait for ignition</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
