'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
    Zap, Home, Briefcase, Wrench, Users, Newspaper, Phone,
    Image, ArrowRight, HardDrive, CheckCircle, Activity
} from 'lucide-react';

const pages = [
    { slug: 'home', label: 'Главная', icon: Home, color: '#2564f4', glow: 'rgba(37,100,244,0.15)' },
    { slug: 'cases', label: 'Кейсы', icon: Briefcase, color: '#8b5cf6', glow: 'rgba(139,92,246,0.15)' },
    { slug: 'services', label: 'Услуги', icon: Wrench, color: '#06b6d4', glow: 'rgba(6,182,212,0.15)' },
    { slug: 'about', label: 'О нас', icon: Users, color: '#22c55e', glow: 'rgba(34,197,94,0.15)' },
    { slug: 'news', label: 'Новости', icon: Newspaper, color: '#ff8c00', glow: 'rgba(255,140,0,0.15)' },
    { slug: 'contacts', label: 'Контакты', icon: Phone, color: '#f43f5e', glow: 'rgba(244,63,94,0.15)' },
];

export default function AdminDashboard() {
    const params = useParams();
    const locale = params?.locale || 'ru';
    const adminRoot = `/${locale}/admin`;
    const [mediaCount, setMediaCount] = useState<number | null>(null);
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        fetch('/api/admin/media').then(r => r.json()).then(d => setMediaCount(d.media?.length ?? 0));
        const update = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }));
            setDate(now.toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }));
        };
        update();
        const iv = setInterval(update, 1000);
        return () => clearInterval(iv);
    }, []);

    return (
        <div className="max-w-6xl mx-auto space-y-10">

            {/* Hero header */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#161b22]/70 backdrop-blur-md px-8 py-8">
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#2564f4]/10 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute right-6 bottom-0 opacity-5 pointer-events-none">
                    <Zap className="size-40 text-[#2564f4]" fill="currentColor" />
                </div>
                <div className="relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2564f4]/30 bg-[#2564f4]/10 text-[#2564f4] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                        <span className="size-1.5 rounded-full bg-[#2564f4] animate-pulse" />
                        ResursCMS · Активен
                    </div>
                    <h1 className="text-3xl font-black text-white mb-1 tracking-tight">
                        Панель управления
                    </h1>
                    <p className="text-white text-sm max-w-md">
                        Редактируйте контент страниц, управляйте медиафайлами и отслеживайте состояние сайта
                    </p>
                </div>
                {/* Time */}
                {time && (
                    <div className="absolute right-8 top-8 text-right hidden md:block">
                        <p className="text-2xl font-black text-white tabular-nums">{time}</p>
                        <p className="text-[11px] text-white capitalize mt-0.5">{date}</p>
                    </div>
                )}
            </div>

            {/* Status strip */}
            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: 'Страниц в CMS', value: String(pages.length), icon: HardDrive, color: '#2564f4' },
                    { label: 'Медиафайлов', value: mediaCount !== null ? String(mediaCount) : '—', icon: Image, color: '#8b5cf6' },
                    { label: 'Статус системы', value: 'OK', icon: CheckCircle, color: '#22c55e' },
                ].map(s => {
                    const Icon = s.icon;
                    return (
                        <div key={s.label} className="flex items-center gap-4 bg-[#161b22]/70 backdrop-blur-md border border-white/[0.07] rounded-2xl px-5 py-4">
                            <div className="size-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
                                <Icon className="size-5" style={{ color: s.color }} />
                            </div>
                            <div>
                                <p className="text-xl font-black text-white">{s.value}</p>
                                <p className="text-[11px] text-slate-300">{s.label}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pages grid */}
            <div>
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-base font-black text-white tracking-tight">Страницы сайта</h2>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{pages.length} разделов</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pages.map(p => {
                        const Icon = p.icon;
                        return (
                            <Link
                                key={p.slug}
                                href={`${adminRoot}/content/${p.slug}`}
                                className="group relative overflow-hidden flex items-center gap-4 p-5 bg-[#161b22]/70 backdrop-blur-md border border-white/[0.07] rounded-2xl hover:border-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                                style={{ '--hover-glow': p.glow } as React.CSSProperties}
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                                    style={{ background: `radial-gradient(ellipse at 0% 50%, ${p.glow} 0%, transparent 60%)` }} />
                                {/* Big bg icon */}
                                <div className="absolute -right-3 -bottom-3 opacity-[0.04] pointer-events-none">
                                    <Icon className="size-24" />
                                </div>
                                <div className="relative size-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${p.color}18`, border: `1px solid ${p.color}30` }}>
                                    <Icon className="size-5" style={{ color: p.color }} />
                                </div>
                                <div className="flex-1 min-w-0 relative">
                                    <p className="font-bold text-white text-sm">{p.label}</p>
                                    <p className="text-[11px] text-slate-300 mt-0.5">{p.slug}.json</p>
                                </div>
                                <ArrowRight className="size-4 text-slate-600 group-hover:text-white group-hover:translate-x-0.5 transition-all flex-shrink-0 relative" />
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Media shortcut */}
            <Link
                href={`${adminRoot}/media`}
                className="group flex items-center gap-5 p-6 bg-[#161b22]/70 backdrop-blur-md border border-white/[0.07] rounded-2xl hover:border-violet-500/30 transition-all duration-300 relative overflow-hidden"
            >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(139,92,246,0.08) 0%, transparent 60%)' }} />
                <div className="absolute -right-5 -bottom-5 opacity-[0.04] pointer-events-none">
                    <Image className="size-32" />
                </div>
                <div className="relative size-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                    <Image className="size-6 text-violet-400" />
                </div>
                <div className="flex-1 relative">
                    <p className="font-bold text-white">Медиа-хранилище</p>
                    <p className="text-[12px] text-white mt-0.5">Загружайте изображения и файлы — {mediaCount !== null ? `${mediaCount} файлов` : 'загрузка...'}</p>
                </div>
                <div className="flex items-center gap-2 relative">
                    <span className="text-xs font-bold text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity">Открыть</span>
                    <ArrowRight className="size-5 text-slate-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
                </div>
            </Link>

            {/* Info */}
            <div className="flex items-center gap-3 text-[11px] text-white border border-white/5 rounded-xl px-5 py-3 bg-white/[0.01]">
                <Activity className="size-3.5 text-white flex-shrink-0" />
                <span>Контент сохраняется в <code className="text-white">/src/data/content/*.json</code> · Медиа в <code className="text-white">/public/uploads/</code></span>
            </div>
        </div>
    );
}
