"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Truck,
    ChevronDown,
    Info,
    TrendingDown,
    Briefcase,
    Fuel,
    Settings2,
    PieChart,
    ArrowRight,
    UserPlus,
    FileUp,
    Database,
    Users,
    CreditCard
} from "lucide-react";

// Types
type VehiclePreset = {
    id: string;
    name: string;
    example: string;
    fuelConsumption: number; // l/100km
    maintenanceCost: number; // rub/km
    depreciation: number;    // rub/month
    insurance: number;       // rub/year
    icon: string;
};

const PRESETS: VehiclePreset[] = [
    {
        id: "passenger",
        name: "Легковые",
        example: "Solaris / Rio / Granta",
        fuelConsumption: 8,
        maintenanceCost: 2.5,
        depreciation: 12000,
        insurance: 25000,
        icon: "directions_car"
    },
    {
        id: "lcv",
        name: "Малый LCV",
        example: "Largus / Citroen Berlingo",
        fuelConsumption: 9,
        maintenanceCost: 3,
        depreciation: 18000,
        insurance: 30000,
        icon: "local_shipping"
    },
    {
        id: "light",
        name: "Малотоннажный",
        example: "Газель (до 1.5 т)",
        fuelConsumption: 14,
        maintenanceCost: 4.5,
        depreciation: 25000,
        insurance: 40000,
        icon: "local_shipping"
    },
    {
        id: "medium",
        name: "Средний",
        example: "Kamaz / Valdai (5–10 т)",
        fuelConsumption: 24,
        maintenanceCost: 8,
        depreciation: 50000,
        insurance: 85000,
        icon: "truck"
    },
    {
        id: "heavy",
        name: "Большегруз",
        example: "Scania / MAN (20 т)",
        fuelConsumption: 34,
        maintenanceCost: 14,
        depreciation: 90000,
        insurance: 160000,
        icon: "conveyor"
    },
    {
        id: "grain",
        name: "Зерновозы",
        example: "Камаз Нефаз / Тонар",
        fuelConsumption: 38,
        maintenanceCost: 16,
        depreciation: 100000,
        insurance: 180000,
        icon: "agriculture"
    },
    {
        id: "bus",
        name: "Автобусы",
        example: "ПАЗ / ЛиАЗ / Нефаз",
        fuelConsumption: 28,
        maintenanceCost: 12,
        depreciation: 60000,
        insurance: 100000,
        icon: "directions_bus"
    },
    {
        id: "special",
        name: "Спецтехника",
        example: "Экскаватор / Кран / АГП",
        fuelConsumption: 45,
        maintenanceCost: 22,
        depreciation: 120000,
        insurance: 50000,
        icon: "settings"
    }
];

export const FleetCalculator = () => {
    const [activePreset, setActivePreset] = useState<VehiclePreset>(PRESETS[1]);
    const [vehicleCount, setVehicleCount] = useState(10);
    const [dailyMileage, setDailyMileage] = useState(200);
    const [operatingDays, setOperatingDays] = useState(22);
    const [driverSalary, setDriverSalary] = useState(90000);
    const [fuelPrice, setFuelPrice] = useState(65);

    const [isDetailedOpen, setIsDetailedOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'base' | 'finance' | 'hr'>('base');
    const [isUploading, setIsUploading] = useState(false);

    // Advanced Metrics state
    const [includeVat, setIncludeVat] = useState(true);
    const [includeAdmin, setIncludeAdmin] = useState(true);

    // New Toggles for deeper control
    const [includeRecruitment, setIncludeRecruitment] = useState(true);
    const [includeMedical, setIncludeMedical] = useState(true);
    const [includeRisk, setIncludeRisk] = useState(true);
    const [includeInsurance, setIncludeInsurance] = useState(true);

    const [recruitmentCost, setRecruitmentCost] = useState(25000); // Cost to hire/replace driver
    const [medicalCheckCost, setMedicalCheckCost] = useState(1200); // Per driver/month
    const [finesRisk, setFinesRisk] = useState(3000); // Estimated fines/penalties per truck/month

    // New editable parameters for hidden costs
    const [taxRatePercent, setTaxRatePercent] = useState(43);
    const [adminCostPercent, setAdminCostPercent] = useState(8);
    const [fuelLossRiskPercent, setFuelLossRiskPercent] = useState(5);
    const [vatRatePercent, setVatRatePercent] = useState(20);

    // Custom Overrides
    const [customFuel, setCustomFuel] = useState<number | null>(null);
    const [customMaintenance, setCustomMaintenance] = useState<number | null>(null);
    const [customAmortization, setCustomAmortization] = useState<number | null>(null);
    const [customInsuranceMonthly, setCustomInsuranceMonthly] = useState<number | null>(null);

    // Derived Values
    const fuelRate = customFuel ?? activePreset.fuelConsumption;
    const maintenanceRate = customMaintenance ?? activePreset.maintenanceCost;
    const currentAmortization = customAmortization ?? activePreset.depreciation;
    const currentInsuranceMonthly = customInsuranceMonthly ?? Math.round(activePreset.insurance / 12);

    const calculations = useMemo(() => {
        const monthlyMileage = dailyMileage * operatingDays;
        const fuelCost = (monthlyMileage / 100) * fuelRate * fuelPrice * vehicleCount;
        const maintenanceCost = monthlyMileage * maintenanceRate * vehicleCount;
        const basePayroll = (driverSalary * (1 + (taxRatePercent / 100))) * vehicleCount;

        // Detailed Amortization & Insurance
        const baseDepreciation = currentAmortization * vehicleCount;
        const insuranceMonthlyTotal = includeInsurance ? currentInsuranceMonthly * vehicleCount : 0;

        // HR & Compliance
        const recruitmentExpense = includeRecruitment ? (recruitmentCost / 12 * 0.2) * vehicleCount : 0;
        const medicalExpense = includeMedical ? medicalCheckCost * vehicleCount : 0;
        const hrOverhead = recruitmentExpense + medicalExpense;

        // Risks & Admin
        const adminCost = includeAdmin ? (basePayroll + fuelCost) * (adminCostPercent / 100) : 0;
        const incidentalRisk = includeRisk ? (finesRisk + (fuelCost * (fuelLossRiskPercent / 100))) * vehicleCount : 0;

        const subTotal = fuelCost + maintenanceCost + basePayroll + baseDepreciation + insuranceMonthlyTotal + hrOverhead + adminCost + incidentalRisk;

        const vatBaseLocal = fuelCost + maintenanceCost + insuranceMonthlyTotal + adminCost;
        const vatBenefitLocal = includeVat ? vatBaseLocal * (vatRatePercent / 100) : 0;

        const total = subTotal;
        const savings = total * 0.12 + vatBenefitLocal; // 12% operational + VAT

        return {
            monthlyMileage,
            fuelCost,
            maintenanceCost,
            payrollCost: basePayroll,
            amortization: baseDepreciation + insuranceMonthlyTotal,
            adminCost: adminCost + hrOverhead,
            riskFactor: incidentalRisk,
            total,
            savings,
            benefitVat: vatBenefitLocal
        };
    }, [vehicleCount, dailyMileage, operatingDays, driverSalary, fuelPrice, fuelRate, maintenanceRate, currentAmortization, currentInsuranceMonthly, activePreset, taxRatePercent, includeVat, includeAdmin, includeRecruitment, includeMedical, includeRisk, includeInsurance, recruitmentCost, medicalCheckCost, finesRisk, adminCostPercent, fuelLossRiskPercent, vatRatePercent]);

    const handleFileUpload = () => {
        setIsUploading(true);
        setTimeout(() => {
            setIsUploading(false);
            setVehicleCount(42);
            setDailyMileage(380);
            alert("Данные из Excel успешно импортированы! Параметры парка обновлены.");
        }, 2000);
    };

    // Chart Percentages
    const chartData = useMemo(() => {
        const { total, fuelCost, maintenanceCost, payrollCost, amortization, adminCost, riskFactor } = calculations;
        return [
            { label: "Топливо + Риски", value: ((fuelCost + riskFactor) / total) * 100, color: "#3b82f6" },
            { label: "ЗП и Налоги", value: (payrollCost / total) * 100, color: "#10b981" },
            { label: "ТО и Владение", value: ((maintenanceCost + amortization) / total) * 100, color: "#f59e0b" },
            { label: "Админ + HR", value: (adminCost / total) * 100, color: "#6366f1" }
        ];
    }, [calculations]);

    return (
        <section className="w-full pt-20 md:pt-24 pb-8 bg-background-dark/50 backdrop-blur-sm border-y border-white/5">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="text-center mb-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter"
                    >
                        Калькулятор <span className="text-primary italic">эффективности</span>
                    </motion.h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm">
                        Рассчитайте реальную стоимость владения парком и узнайте, сколько вы сэкономите при переходе на профессиональный аутсорсинг.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Inputs */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Block 1: Presets */}
                        <div className="glass-panel p-5 md:p-6 rounded-3xl border border-white/5 shadow-lg">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                                    <Truck className="w-4 h-4" /> Выберите тип транспорта
                                </h3>
                                <button
                                    onClick={handleFileUpload}
                                    disabled={isUploading}
                                    className="w-full sm:w-auto justify-center flex items-center gap-2 px-4 py-3 sm:py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-slate-300 hover:bg-white/10 hover:text-white transition-all disabled:opacity-50"
                                >
                                    {isUploading ? (
                                        <div className="size-3 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <FileUp className="size-3" />
                                    )}
                                    {isUploading ? "Загрузка..." : "Загрузить Excel (.xlsx)"}
                                </button>
                            </div>
                            <div className="flex gap-3 overflow-x-auto px-4 py-8 -mx-4 mb-2 snap-x custom-scrollbar">
                                {PRESETS.map((p) => (
                                    <button
                                        key={p.id}
                                        onClick={() => {
                                            setActivePreset(p);
                                            setCustomFuel(null);
                                            setCustomMaintenance(null);
                                            setCustomAmortization(null);
                                            setCustomInsuranceMonthly(null);
                                        }}
                                        className={`min-w-[140px] md:min-w-[160px] p-4 rounded-2xl border transition-all duration-300 text-left flex flex-col items-center md:items-start group snap-center ${activePreset.id === p.id
                                            ? "bg-gradient-to-br from-primary/30 to-primary/5 border-primary shadow-[0_0_20px_rgba(37,106,244,0.3)] scale-105 z-10"
                                            : "bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10"
                                            }`}
                                    >
                                        <span className={`material-symbols-outlined text-2xl md:text-3xl mb-2 block transition-colors shrink-0 ${activePreset.id === p.id ? 'text-white' : 'text-primary group-hover:text-white'}`}>
                                            {p.icon === 'truck' ? 'local_shipping' : p.icon === 'conveyor' ? 'forklift' : p.icon}
                                        </span>
                                        <h4 className="text-white font-bold text-xs mb-1 text-center md:text-left break-words w-full sm:leading-tight line-clamp-2">{p.name}</h4>
                                        <p className="text-slate-500 text-[9px] leading-tight font-medium uppercase text-center md:text-left break-words w-full line-clamp-2 opacity-80">{p.example}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Block 2: Sliders */}
                        <div className="glass-panel p-5 md:p-6 rounded-3xl border border-white/5 space-y-6 shadow-lg">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                                <Settings2 className="w-4 h-4" /> Основные настройки
                            </h3>

                            <div className="space-y-5">
                                {/* Count */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-medium text-slate-300">Парк (машин)</label>
                                        <span className="text-white font-black text-lg">{vehicleCount} ед.</span>
                                    </div>
                                    <input
                                        type="range" min="1" max="100" step="1"
                                        value={vehicleCount} onChange={(e) => setVehicleCount(Number(e.target.value))}
                                        className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                                    />
                                </div>

                                {/* Daily Mileage */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-medium text-slate-300">Суточный пробег (км)</label>
                                        <span className="text-white font-black text-lg">{dailyMileage} км/день</span>
                                    </div>
                                    <input
                                        type="range" min="50" max="1000" step="10"
                                        value={dailyMileage} onChange={(e) => setDailyMileage(Number(e.target.value))}
                                        className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                                    />
                                </div>

                                {/* Salary */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-medium text-slate-300">Зарплата водителя (net)</label>
                                        <span className="text-white font-black text-lg">{driverSalary.toLocaleString()} ₽</span>
                                    </div>
                                    <input
                                        type="range" min="40000" max="250000" step="5000"
                                        value={driverSalary} onChange={(e) => setDriverSalary(Number(e.target.value))}
                                        className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary hover:accent-white transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Block 3: Detailed */}
                        <div className="glass-panel overflow-hidden rounded-3xl border border-white/5 shadow-lg">
                            <button
                                onClick={() => setIsDetailedOpen(!isDetailedOpen)}
                                className="w-full p-5 md:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-white/5 transition-colors group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors shrink-0">
                                        <Settings2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider text-left">Детальная финансовая модель</span>
                                </div>
                                <div className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full border transition-colors w-full sm:w-auto text-center ${isDetailedOpen ? 'bg-primary/20 text-primary border-primary/30' : 'bg-white/5 text-slate-400 border-white/10 group-hover:bg-white/10'}`}>
                                    {isDetailedOpen ? 'Скрыть параметры' : 'Настроить точно'}
                                </div>
                            </button>

                            <AnimatePresence>
                                {isDetailedOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="border-t border-white/5 bg-white/[0.02]"
                                    >
                                        <div className="p-5 md:p-6 grid sm:grid-cols-2 gap-6">
                                            {/* Tabs Header */}
                                            <div className="col-span-full flex gap-2 p-1 bg-white/5 rounded-2xl mb-4">
                                                {[
                                                    { id: 'base', label: 'Основные', icon: Fuel },
                                                    { id: 'finance', label: 'Финансы', icon: CreditCard },
                                                    { id: 'hr', label: 'HR и Риски', icon: Users }
                                                ].map(tab => (
                                                    <button
                                                        key={tab.id}
                                                        onClick={() => setActiveTab(tab.id as any)}
                                                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${activeTab === tab.id ? 'bg-primary text-background-dark shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-white'}`}
                                                    >
                                                        <tab.icon className="size-3" />
                                                        <span className="hidden sm:inline">{tab.label}</span>
                                                    </button>
                                                ))}
                                            </div>

                                            {activeTab === 'base' && (
                                                <>
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Расход топлива (л/100 км)</label>
                                                        <input
                                                            type="number"
                                                            value={customFuel ?? activePreset.fuelConsumption}
                                                            onChange={(e) => setCustomFuel(Number(e.target.value))}
                                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold"
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Цена литра ГСМ (₽)</label>
                                                        <input
                                                            type="number"
                                                            value={fuelPrice}
                                                            onChange={(e) => setFuelPrice(Number(e.target.value))}
                                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold"
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">ТО и ремонт (₽ на 1 км)</label>
                                                        <input
                                                            type="number"
                                                            value={customMaintenance ?? activePreset.maintenanceCost}
                                                            onChange={(e) => setCustomMaintenance(Number(e.target.value))}
                                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold"
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Амортизация (₽/мес/авто)</label>
                                                        <input
                                                            type="number"
                                                            value={currentAmortization}
                                                            onChange={(e) => setCustomAmortization(Number(e.target.value))}
                                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold"
                                                        />
                                                    </div>
                                                    <div className="col-span-full mt-2">
                                                        <input
                                                            type="range" min="0" max={activePreset.depreciation * 3} step="1000"
                                                            value={currentAmortization} onChange={(e) => setCustomAmortization(Number(e.target.value))}
                                                            className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                                                        />
                                                    </div>
                                                </>
                                            )}

                                            {activeTab === 'finance' && (
                                                <>
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Налоги на ФОТ (%)</label>
                                                        <input
                                                            type="number"
                                                            value={taxRatePercent}
                                                            onChange={(e) => setTaxRatePercent(Number(e.target.value))}
                                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold"
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Страховка (всё вкл/мес, ₽)</label>
                                                        <input
                                                            type="number"
                                                            value={currentInsuranceMonthly}
                                                            onChange={(e) => setCustomInsuranceMonthly(Number(e.target.value))}
                                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold"
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Ставка НДС (%)</label>
                                                        <input
                                                            type="number"
                                                            value={vatRatePercent}
                                                            onChange={(e) => setVatRatePercent(Number(e.target.value))}
                                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold"
                                                        />
                                                    </div>

                                                    <div className="col-span-full grid grid-cols-2 gap-4 mt-2 border-t border-white/5 pt-4">
                                                        <label className="flex items-center gap-3 cursor-pointer group">
                                                            <div
                                                                onClick={() => setIncludeInsurance(!includeInsurance)}
                                                                className={`size-4 rounded border flex items-center justify-center transition-colors shrink-0 ${includeInsurance ? 'bg-primary border-primary' : 'bg-white/5 border-white/10'}`}
                                                            >
                                                                {includeInsurance && <div className="size-1 bg-white rounded-[1px]" />}
                                                            </div>
                                                            <span className="text-[10px] font-bold text-white uppercase tracking-wider">Учитывать страховку</span>
                                                        </label>

                                                        <label className="flex items-center gap-3 cursor-pointer group">
                                                            <div
                                                                onClick={() => setIncludeVat(!includeVat)}
                                                                className={`size-4 rounded border flex items-center justify-center transition-colors shrink-0 ${includeVat ? 'bg-primary border-primary' : 'bg-white/5 border-white/10'}`}
                                                            >
                                                                {includeVat && <div className="size-1 bg-white rounded-[1px]" />}
                                                            </div>
                                                            <span className="text-[10px] font-bold text-white uppercase tracking-wider">Возврат НДС</span>
                                                        </label>
                                                    </div>
                                                </>
                                            )}

                                            {activeTab === 'hr' && (
                                                <>
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Найм водителя (₽)</label>
                                                        <input
                                                            type="number"
                                                            value={recruitmentCost}
                                                            onChange={(e) => setRecruitmentCost(Number(e.target.value))}
                                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white font-bold text-sm"
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Медосмотры (₽/мес)</label>
                                                        <input
                                                            type="number"
                                                            value={medicalCheckCost}
                                                            onChange={(e) => setMedicalCheckCost(Number(e.target.value))}
                                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white font-bold text-sm"
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Штрафы (₽/мес/авто)</label>
                                                        <input
                                                            type="number"
                                                            value={finesRisk}
                                                            onChange={(e) => setFinesRisk(Number(e.target.value))}
                                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white font-bold text-sm"
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Потеря ГСМ (%)</label>
                                                        <input
                                                            type="number"
                                                            value={fuelLossRiskPercent}
                                                            onChange={(e) => setFuelLossRiskPercent(Number(e.target.value))}
                                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white font-bold text-sm"
                                                        />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">Админ. накладные (%)</label>
                                                        <input
                                                            type="number"
                                                            value={adminCostPercent}
                                                            onChange={(e) => setAdminCostPercent(Number(e.target.value))}
                                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white font-bold text-sm"
                                                        />
                                                    </div>

                                                    <div className="col-span-full grid grid-cols-2 lg:grid-cols-4 gap-4 mt-2 border-t border-white/5 pt-4">
                                                        <label className="flex items-center gap-2 cursor-pointer group">
                                                            <div
                                                                onClick={() => setIncludeRecruitment(!includeRecruitment)}
                                                                className={`size-4 rounded border flex items-center justify-center transition-colors shrink-0 ${includeRecruitment ? 'bg-primary border-primary' : 'bg-white/5 border-white/10'}`}
                                                            >
                                                                {includeRecruitment && <div className="size-1 bg-white rounded-[1px]" />}
                                                            </div>
                                                            <span className="text-[9px] font-bold text-white uppercase tracking-wider">Найм</span>
                                                        </label>

                                                        <label className="flex items-center gap-2 cursor-pointer group">
                                                            <div
                                                                onClick={() => setIncludeMedical(!includeMedical)}
                                                                className={`size-4 rounded border flex items-center justify-center transition-colors shrink-0 ${includeMedical ? 'bg-primary border-primary' : 'bg-white/5 border-white/10'}`}
                                                            >
                                                                {includeMedical && <div className="size-1 bg-white rounded-[1px]" />}
                                                            </div>
                                                            <span className="text-[9px] font-bold text-white uppercase tracking-wider">Медик</span>
                                                        </label>

                                                        <label className="flex items-center gap-2 cursor-pointer group">
                                                            <div
                                                                onClick={() => setIncludeRisk(!includeRisk)}
                                                                className={`size-4 rounded border flex items-center justify-center transition-colors shrink-0 ${includeRisk ? 'bg-primary border-primary' : 'bg-white/5 border-white/10'}`}
                                                            >
                                                                {includeRisk && <div className="size-1 bg-white rounded-[1px]" />}
                                                            </div>
                                                            <span className="text-[9px] font-bold text-white uppercase tracking-wider">Риски</span>
                                                        </label>

                                                        <label className="flex items-center gap-2 cursor-pointer group">
                                                            <div
                                                                onClick={() => setIncludeAdmin(!includeAdmin)}
                                                                className={`size-4 rounded border flex items-center justify-center transition-colors shrink-0 ${includeAdmin ? 'bg-primary border-primary' : 'bg-white/5 border-white/10'}`}
                                                            >
                                                                {includeAdmin && <div className="size-1 bg-white rounded-[1px]" />}
                                                            </div>
                                                            <span className="text-[9px] font-bold text-white uppercase tracking-wider">Админ</span>
                                                        </label>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right: Results */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-28 space-y-4">
                            <div className="glass-panel p-5 md:p-8 rounded-3xl md:rounded-[2rem] bg-gradient-to-br from-primary/10 via-background-dark/80 to-[#1e2a4a] border border-primary/20 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-colors duration-700"></div>

                                <div className="relative z-10">
                                    <h3 className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-2 flex items-center gap-2">
                                        <div className="size-2 rounded-full bg-red-500 animate-pulse" /> Итого затрат в месяц
                                    </h3>
                                    <div className="flex items-baseline gap-2 mb-6">
                                        <motion.span
                                            key={calculations.total}
                                            initial={{ opacity: 0.5, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter"
                                        >
                                            {Math.round(calculations.total).toLocaleString()}
                                        </motion.span>
                                        <span className="text-xl sm:text-2xl text-primary font-bold">₽</span>
                                    </div>

                                    {/* Donut Chart Visualization (SVG) */}
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 py-4 border-y border-white/5">
                                        <div className="relative size-24 shrink-0">
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
                                                <PieChart className="w-5 h-5 text-slate-500" />
                                            </div>
                                        </div>
                                        <div className="space-y-2.5">
                                            {chartData.map((d, i) => (
                                                <div key={i} className="flex items-center gap-2 group/legend">
                                                    <div className="size-2 rounded-full ring-2 ring-black/20 group-hover/legend:scale-125 transition-transform" style={{ backgroundColor: d.color }}></div>
                                                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest group-hover/legend:text-white transition-colors">{d.label}</span>
                                                    <span className="text-[10px] text-white ml-auto font-black">{Math.round(d.value)}%</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Savings Banner */}
                                    <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 mb-6 overflow-hidden relative shadow-lg shadow-primary/10">
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="flex flex-col gap-3 relative z-10">
                                            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                                                <div>
                                                    <p className="text-white text-[10px] sm:text-[11px] uppercase tracking-widest font-black mb-0.5">
                                                        Экономия с ResursTrans
                                                    </p>
                                                    <p className="text-primary text-2xl sm:text-3xl font-black drop-shadow-md">
                                                        − {Math.round(calculations.savings).toLocaleString()} ₽
                                                    </p>
                                                </div>
                                                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-2 sm:mt-0">
                                                    <TrendingDown className="w-5 h-5 text-primary" />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5 pt-3 border-t border-white/10">
                                                <div className="flex justify-between text-[9px] uppercase font-bold tracking-widest text-slate-300">
                                                    <span>Оптимизация (OPEX)</span>
                                                    <span className="text-white">+ {Math.round(calculations.total * 0.12).toLocaleString()} ₽</span>
                                                </div>
                                                {includeVat && (
                                                    <div className="flex justify-between text-[9px] uppercase font-bold tracking-widest text-emerald-400">
                                                        <span>Возмещенный НДС (20%)</span>
                                                        <span>+ {Math.round(calculations.benefitVat).toLocaleString()} ₽</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Form */}
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <input type="text" placeholder="Имя" className="bg-background-dark/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-600 font-medium" />
                                            <input type="tel" placeholder="+7 (999)..." className="bg-background-dark/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-600 font-medium" />
                                        </div>
                                        <button className="w-full h-12 bg-primary hover:bg-white focus:ring-4 focus:ring-primary/20 hover:scale-[1.02] text-background-dark font-black rounded-xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20 group">
                                            <span className="text-[13px] uppercase tracking-wider">Получить аудит парка</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Support Info */}
                            <div className="flex items-center justify-center gap-3 px-4 text-slate-500 opacity-60 hover:opacity-100 transition-opacity">
                                <Info className="w-4 h-4 text-primary/80 shrink-0" />
                                <p className="text-[10px] leading-tight font-medium text-center">
                                    Модель базируется на отраслевых стандартах. Итоговые показатели закрепим в SLA.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
