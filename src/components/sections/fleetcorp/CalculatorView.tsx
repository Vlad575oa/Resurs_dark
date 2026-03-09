"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calculator,
    Ship,
    Truck,
    Car,
    Bus,
    Users,
    TrendingDown,
    ShieldCheck,
    BarChart3,
    ArrowRight,
    Download,
    Receipt,
    Settings,
    ChevronDown,
    Building2,
    CheckCircle2,
    Info
} from "lucide-react";

interface Props {
    dict: any;
    locale: string;
}

type VehicleType = 'light' | 'van' | 'truck' | 'special';

const vehicleDefaults = {
    light: { icon: Car, fuel: 9, maint: 3500, label: "Passenger" },
    van: { icon: Truck, fuel: 14, maint: 6000, label: "Light Commercial" },
    truck: { icon: Ship, fuel: 32, maint: 15000, label: "Heavy Truck" },
    special: { icon: Settings, fuel: 45, maint: 25000, label: "Specialized" }
};

export default function CalculatorView({ dict, locale }: Props) {
    const calc = dict.AuditCalculator;

    // State
    const [fleetType, setFleetType] = useState<VehicleType>('truck');
    const [fleetSize, setFleetSize] = useState(25);
    const [driversPerVeh, setDriversPerVeh] = useState(1.5);
    const [salary, setSalary] = useState(85000);
    const [mileage, setMileage] = useState(5000);
    const [fuelPrice, setFuelPrice] = useState(65);
    const [includeVat, setIncludeVat] = useState(true);

    // Derived Logic
    const results = useMemo(() => {
        const typeData = vehicleDefaults[fleetType];

        // Personnel Costs (Monthly per vehicle)
        const grossSalary = salary / 0.87; // Assuming net to gross (13% tax)
        const socialTaxes = grossSalary * 0.302;
        const totalPersonnelPerVeh = (grossSalary + socialTaxes) * driversPerVeh;

        // Operation Costs (Monthly per vehicle)
        const fuelCost = (mileage / 100) * typeData.fuel * fuelPrice;
        const maintenance = typeData.maint;
        const insurance = 2500; // Average
        const overhead = (totalPersonnelPerVeh + fuelCost + maintenance) * 0.10; // 10% management

        const monthlyPerVeh = totalPersonnelPerVeh + fuelCost + maintenance + insurance + overhead;
        const annualCurrent = monthlyPerVeh * fleetSize * 12;

        // Outsourcing estimate (Typically 15-20% more efficient via scale)
        const outsourcedMonthly = monthlyPerVeh * 0.82;
        const annualOutsourced = outsourcedMonthly * fleetSize * 12;

        const savings = annualCurrent - annualOutsourced;
        const efficiency = 18; // Fixed assumption for simple view

        // VAT calculation (20%)
        const vatBenefit = includeVat ? (annualCurrent * (20 / 120)) : 0;

        return {
            current: Math.round(annualCurrent),
            outsourced: Math.round(annualOutsourced),
            savings: Math.round(savings),
            efficiency,
            vatBenefit: Math.round(vatBenefit)
        };
    }, [fleetType, fleetSize, driversPerVeh, salary, mileage, fuelPrice, includeVat]);

    const formatPrice = (val: number) => {
        return new Intl.NumberFormat(locale === 'ru' ? 'ru-RU' : 'en-US', {
            style: 'currency',
            currency: 'RUB',
            maximumFractionDigits: 0
        }).format(val);
    };

    return (
        <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Inputs */}
            <div className="lg:col-span-8 space-y-8">

                {/* Section 1: Fleet */}
                <div className="glass-panel p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Truck size={120} />
                    </div>

                    <div className="flex items-center gap-3 mb-8">
                        <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                            <BarChart3 size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-tight">{calc.fleet.title}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Fleet Size */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">{calc.fleet.count}</label>
                                <span className="text-2xl font-black text-white">{fleetSize} <span className="text-xs text-primary">ТС</span></span>
                            </div>
                            <input
                                type="range" min="1" max="500" step="1"
                                value={fleetSize} onChange={(e) => setFleetSize(Number(e.target.value))}
                                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                            />
                        </div>

                        {/* Vehicle Type Selection */}
                        <div className="space-y-4">
                            <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">{calc.fleet.type}</label>
                            <div className="grid grid-cols-2 gap-2">
                                {(Object.keys(vehicleDefaults) as VehicleType[]).map((type) => {
                                    const Icon = vehicleDefaults[type].icon;
                                    const isActive = fleetType === type;
                                    return (
                                        <button
                                            key={type}
                                            onClick={() => setFleetType(type)}
                                            className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${isActive
                                                    ? 'bg-primary/20 border-primary text-white'
                                                    : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/20'
                                                }`}
                                        >
                                            <Icon size={16} />
                                            <span className="text-xs font-bold uppercase tracking-tight">
                                                {calc.fleet.types[type]}
                                            </span>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Personnel */}
                <div className="glass-panel p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="size-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500">
                            <Users size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-tight">{calc.personnel.title}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Drivers count */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">{calc.personnel.driversPerVeh}</label>
                                <span className="text-2xl font-black text-white">{driversPerVeh} <span className="text-xs text-orange-500">чел</span></span>
                            </div>
                            <input
                                type="range" min="1" max="4" step="0.1"
                                value={driversPerVeh} onChange={(e) => setDriversPerVeh(Number(e.target.value))}
                                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-orange-500"
                            />
                        </div>

                        {/* Salary */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">{calc.personnel.salary}</label>
                                <span className="text-2xl font-black text-white">{Math.round(salary / 1000)}k <span className="text-xs text-orange-500">₽</span></span>
                            </div>
                            <input
                                type="range" min="40000" max="250000" step="5000"
                                value={salary} onChange={(e) => setSalary(Number(e.target.value))}
                                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-orange-500"
                            />
                            <p className="text-[10px] text-slate-500 italic mt-2">
                                + {calc.personnel.taxes}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 3: Costs */}
                <div className="glass-panel p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="size-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-500">
                            <Receipt size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-tight">{calc.costs.title}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Mileage */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">{dict.Calculator.mileage}</label>
                                <span className="text-2xl font-black text-white">{mileage.toLocaleString()} <span className="text-xs text-teal-500">км</span></span>
                            </div>
                            <input
                                type="range" min="500" max="15000" step="500"
                                value={mileage} onChange={(e) => setMileage(Number(e.target.value))}
                                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-teal-500"
                            />
                        </div>

                        {/* VAT Toggle */}
                        <div className="flex flex-col justify-center">
                            <button
                                onClick={() => setIncludeVat(!includeVat)}
                                className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${includeVat
                                        ? 'bg-teal-500/10 border-teal-500/50 text-white'
                                        : 'bg-white/5 border-white/5 text-slate-500'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <ShieldCheck size={20} className={includeVat ? 'text-teal-400' : 'text-slate-600'} />
                                    <span className="text-sm font-bold uppercase tracking-wider">{calc.costs.vat}</span>
                                </div>
                                <div className={`size-6 rounded-full border-2 flex items-center justify-center transition-colors ${includeVat ? 'border-teal-400 bg-teal-400' : 'border-white/20'
                                    }`}>
                                    {includeVat && <CheckCircle2 size={14} className="text-background-dark" />}
                                </div>
                            </button>
                            <p className="text-[10px] text-slate-500 mt-3 flex items-center gap-1">
                                <Info size={10} /> {includeVat ? calc.costs.withVat : calc.costs.withoutVat}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Results */}
            <div className="lg:col-span-4 sticky top-32 space-y-6">
                <div className="glass-panel p-8 rounded-[3rem] border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary/30" />

                    <div className="mb-10 text-center">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 block">
                            {calc.results.title}
                        </span>
                        <div className="text-4xl font-black text-white tracking-tighter mb-2">
                            {results.efficiency}%
                        </div>
                        <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">
                            {calc.results.efficiency}
                        </p>
                    </div>

                    <div className="space-y-6 mb-10">
                        <div className="flex justify-between items-center group/item">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{calc.results.savings}</span>
                            <span className="text-xl font-black text-primary transition-transform group-hover/item:scale-105">
                                + {formatPrice(results.savings)}
                            </span>
                        </div>
                        <div className="h-px bg-white/5 w-full" />

                        <div className="space-y-4">
                            <div className="flex justify-between items-center opacity-60">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{calc.results.currentTotal}</span>
                                <span className="text-sm font-mono text-slate-300">{formatPrice(results.current)}</span>
                            </div>
                            <div className="flex justify-between items-center transition-all bg-white/5 p-3 rounded-xl border border-white/5">
                                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{calc.results.outsourcedTotal}</span>
                                <span className="text-sm font-mono text-white font-bold">{formatPrice(results.outsourced)}</span>
                            </div>
                            {includeVat && (
                                <div className="flex justify-between items-center p-3 rounded-xl bg-teal-500/5 border border-teal-500/20">
                                    <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">{calc.results.taxBenefit}</span>
                                    <span className="text-sm font-mono text-teal-200">{formatPrice(results.vatBenefit)}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full bg-primary hover:bg-white text-background-dark py-5 px-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 group shadow-xl shadow-primary/20">
                            {calc.results.consult}
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button className="w-full bg-white/5 hover:bg-white/10 text-white py-5 px-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 border border-white/10">
                            <Download size={16} />
                            {calc.results.download}
                        </button>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5">
                        <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-2xl border border-white/5 group-hover:border-primary/20 transition-colors">
                            <ShieldCheck size={20} className="text-primary shrink-0" />
                            <p className="text-[9px] text-slate-500 leading-relaxed italic">
                                * {dict.Calculator.calculate.split(' ')[0]} {dict.Calculator.calculate.split(' ')[1]} {dict.Calculator.calculate.split(' ')[2]} ...
                                Предоставленный расчет является предварительным техническим аудитом и требует верификации на основе ваших данных.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-[2rem] bg-orange-500/5 border border-orange-500/10 flex items-start gap-4">
                    <TrendingDown className="text-orange-500 mt-1 shrink-0" />
                    <div>
                        <h4 className="text-xs font-bold text-orange-400 uppercase tracking-[0.2em] mb-2">Insight</h4>
                        <p className="text-[10px] text-slate-400 leading-relaxed">
                            Оптимизация налогов и ФОТ через аутсорсинг позволяет снизить прямые затраты на управление персоналом на 12-18% в первый квартал внедрения.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
