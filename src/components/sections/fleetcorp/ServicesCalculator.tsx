"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calculator,
    Car,
    Truck,
    Bus,
    ChevronRight,
    TrendingUp,
    Fuel,
    Settings2,
    Users,
    PieChart
} from "lucide-react";

type VehicleType = 'cars' | 'trucks' | 'buses';

const vehiclePresets = {
    cars: {
        icon: Car,
        label: "Легковые",
        defaultConsumption: 9,
        defaultMaintenancePerKm: 2,
        baseEfficiency: 0.15
    },
    trucks: {
        icon: Truck,
        label: "Грузовые",
        defaultConsumption: 32,
        defaultMaintenancePerKm: 12,
        baseEfficiency: 0.22
    },
    buses: {
        icon: Bus,
        label: "Автобусы",
        defaultConsumption: 25,
        defaultMaintenancePerKm: 8,
        baseEfficiency: 0.18
    }
};

export const ServicesCalculator = () => {
    const [vehicleType, setVehicleType] = useState<VehicleType>('trucks');
    const [count, setCount] = useState(50);
    const [mileage, setMileage] = useState(5000);
    const [fuelPrice, setFuelPrice] = useState(65);
    const [efficiency, setEfficiency] = useState(20);

    const results = useMemo(() => {
        const preset = vehiclePresets[vehicleType];

        // Annual fuel cost
        const annualFuel = (count * mileage * 12 * (preset.defaultConsumption / 100)) * fuelPrice;

        // Annual maintenance cost (rough estimate)
        const annualMaintenace = count * mileage * 12 * preset.defaultMaintenancePerKm;

        const totalCurrentCosts = annualFuel + annualMaintenace;
        const potentialSaving = totalCurrentCosts * (efficiency / 100);

        return {
            fuel: Math.round(annualFuel * (efficiency / 100)),
            maintenance: Math.round(annualMaintenace * (efficiency / 100)),
            total: Math.round(potentialSaving),
            annualFuel,
            annualMaintenace
        };
    }, [vehicleType, count, mileage, fuelPrice, efficiency]);

    const chartData = useMemo(() => {
        if (results.total === 0) return [];
        return [
            { label: "Экономия ГСМ", value: (results.fuel / results.total) * 100, color: "#3b82f6" },
            { label: "Экономия на ТО", value: (results.maintenance / results.total) * 100, color: "#10b981" },
        ];
    }, [results]);

    const formatCurrency = (val: number) => {
        if (val >= 1000000) return `₽ ${(val / 1000000).toFixed(1)} млн`;
        return `₽ ${val.toLocaleString('ru-RU')}`;
    };

    return (
        <section className="py-24 relative overflow-hidden bg-background-dark">
            {/* Decorative background blur */}
            <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6"
                    >
                        <Calculator className="w-3.5 h-3.5" />
                        ROI Calculator
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                    >
                        Рассчитайте эффект <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-primary">от цифровизации</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                    {/* Controls */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-7 space-y-6 lg:space-y-8 glass-panel border border-white/5 p-5 sm:p-8 lg:p-12 rounded-[2rem] lg:rounded-[3rem] shadow-xl"
                    >
                        {/* Vehicle Type Toggle */}
                        <div className="space-y-4">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Тип автотранспорта</label>
                            <div className="flex flex-wrap gap-3 p-1 glass-panel border border-white/5 rounded-2xl">
                                {(Object.keys(vehiclePresets) as VehicleType[]).map((type) => {
                                    const preset = vehiclePresets[type];
                                    const Icon = preset.icon;
                                    const isActive = vehicleType === type;
                                    return (
                                        <button
                                            key={type}
                                            onClick={() => setVehicleType(type)}
                                            className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl transition-all duration-300 ${isActive
                                                ? 'bg-primary text-background-dark font-bold shadow-lg shadow-primary/20 scale-[1.02]'
                                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            <Icon className={`w-5 h-5 ${isActive ? 'text-background-dark' : 'text-primary'}`} />
                                            <span className="text-sm">{preset.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Sliders */}
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 pt-2 lg:pt-4">
                            {/* Count */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Users className="w-4 h-4 text-primary" />
                                        <span className="text-sm font-bold">Парк машин</span>
                                    </div>
                                    <span className="text-xl font-mono font-bold text-white">{count} ТС</span>
                                </div>
                                <input
                                    type="range"
                                    min="5"
                                    max="500"
                                    step="5"
                                    value={count}
                                    onChange={(e) => setCount(Number(e.target.value))}
                                    className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                                />
                            </div>

                            {/* Mileage */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <TrendingUp className="w-4 h-4 text-primary" />
                                        <span className="text-sm font-bold">Пробег/мес</span>
                                    </div>
                                    <span className="text-xl font-mono font-bold text-white">{mileage.toLocaleString()} км</span>
                                </div>
                                <input
                                    type="range"
                                    min="1000"
                                    max="15000"
                                    step="500"
                                    value={mileage}
                                    onChange={(e) => setMileage(Number(e.target.value))}
                                    className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                                />
                            </div>

                            {/* Fuel Price */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Fuel className="w-4 h-4 text-primary" />
                                        <span className="text-sm font-bold">Цена топлива</span>
                                    </div>
                                    <span className="text-xl font-mono font-bold text-white">{fuelPrice} ₽/л</span>
                                </div>
                                <input
                                    type="range"
                                    min="50"
                                    max="80"
                                    step="1"
                                    value={fuelPrice}
                                    onChange={(e) => setFuelPrice(Number(e.target.value))}
                                    className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                                />
                            </div>

                            {/* Efficiency */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Settings2 className="w-4 h-4 text-primary" />
                                        <span className="text-sm font-bold">Оптимизация</span>
                                    </div>
                                    <span className="text-xl font-mono font-bold text-primary">{efficiency}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="5"
                                    max="40"
                                    step="1"
                                    value={efficiency}
                                    onChange={(e) => setEfficiency(Number(e.target.value))}
                                    className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Result Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5 relative group"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700" />

                        <div className="h-full glass-panel border border-primary/20 bg-gradient-to-br from-primary/5 to-background-dark/80 rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-8 lg:p-12 flex flex-col justify-between relative z-10 shadow-2xl">
                            <div>
                                <h3 className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                                    <div className="size-2 rounded-full bg-primary animate-pulse" /> Эффект за один год
                                </h3>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={results.total}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="mb-8"
                                    >
                                        <div className="flex flex-col sm:flex-row items-baseline gap-2 mb-2">
                                            <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter">
                                                {formatCurrency(results.total).replace('₽ ', '')}
                                            </span>
                                            <span className="text-xl sm:text-2xl text-primary font-bold">₽</span>
                                        </div>
                                        <p className="text-primary font-bold text-sm">чистая общая экономия*</p>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Donut Chart */}
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 py-6 border-y border-white/5 mb-6">
                                    <div className="relative size-20 sm:size-24 shrink-0">
                                        <svg viewBox="0 0 36 36" className="size-full -rotate-90 drop-shadow-xl">
                                            {chartData.reduce((acc: { offset: number; elements: React.ReactNode[] }, slice, i) => {
                                                const dash = `${slice.value} ${100 - slice.value}`;
                                                acc.elements.push(
                                                    <circle
                                                        key={i}
                                                        cx="18" cy="18" r="15.915"
                                                        fill="transparent" stroke={slice.color}
                                                        strokeWidth="4" strokeDasharray={dash}
                                                        strokeDashoffset={-acc.offset}
                                                        className="transition-all duration-1000 ease-out hover:stroke-[5px] hover:brightness-110 cursor-pointer"
                                                    />
                                                );
                                                acc.offset += slice.value;
                                                return acc;
                                            }, { offset: 0, elements: [] }).elements}
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <PieChart className="w-4 h-4 text-slate-500" />
                                        </div>
                                    </div>
                                    <div className="space-y-3 w-full sm:w-auto">
                                        {chartData.map((d, i) => (
                                            <div key={i} className="flex justify-between sm:justify-start items-center gap-3 group/legend">
                                                <div className="flex items-center gap-2">
                                                    <div className="size-2 rounded-full ring-2 ring-black/20 group-hover/legend:scale-125 transition-transform" style={{ backgroundColor: d.color }}></div>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover/legend:text-white transition-colors">{d.label}</span>
                                                </div>
                                                <span className="text-xs text-white font-black">{Math.round(d.value)}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/5">
                                        <span className="text-slate-400 text-xs sm:text-sm font-medium">На топливе</span>
                                        <span className="text-white font-mono font-bold text-sm sm:text-base">{formatCurrency(results.fuel)}</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/5">
                                        <span className="text-slate-400 text-xs sm:text-sm font-medium">На обслуживании</span>
                                        <span className="text-white font-mono font-bold text-sm sm:text-base">{formatCurrency(results.maintenance)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 space-y-6">
                                <button className="w-full bg-primary hover:bg-white text-background-dark py-5 px-8 rounded-2xl font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20 group">
                                    Рассчитать детально
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <p className="text-[10px] text-slate-500 leading-relaxed text-center px-4 italic">
                                    * Расчет является ориентировочным. Точные цифры зависят от возраста парка, региона работ и состояния бизнес-процессов.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
