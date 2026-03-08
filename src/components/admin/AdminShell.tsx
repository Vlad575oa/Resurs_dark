'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import {
    LayoutGrid, Home, Briefcase, Wrench, Users, Newspaper,
    Phone, Image, LogOut, ChevronRight, Menu, X, Zap,
    Globe, Settings, ExternalLink
} from 'lucide-react';

const contentSections = [
    { slug: 'home', label: 'Главная', icon: Home, color: 'text-blue-400' },
    { slug: 'cases', label: 'Кейсы', icon: Briefcase, color: 'text-violet-400' },
    { slug: 'services', label: 'Услуги', icon: Wrench, color: 'text-cyan-400' },
    { slug: 'about', label: 'О нас', icon: Users, color: 'text-green-400' },
    { slug: 'news', label: 'Новости', icon: Newspaper, color: 'text-orange-400' },
    { slug: 'contacts', label: 'Контакты', icon: Phone, color: 'text-rose-400' },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();
    const locale = params?.locale || 'ru';
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    async function handleLogout() {
        await fetch('/api/admin/auth', { method: 'DELETE' });
        router.push(`/${locale}/admin/login`);
    }

    const isActive = (href: string) => pathname === href;
    const adminRoot = `/${locale}/admin`;

    const sidebar = (
        <aside className="flex flex-col h-full w-64">
            {/* Logo */}
            <div className="px-5 py-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className="relative size-10 flex-shrink-0">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2564f4] to-[#6025f4] blur-[8px] opacity-60" />
                        <div className="relative size-10 rounded-xl bg-gradient-to-br from-[#2564f4] to-[#6025f4] flex items-center justify-center">
                            <Zap className="size-5 text-white" fill="white" />
                        </div>
                    </div>
                    <div>
                        <p className="text-white font-black text-base tracking-tight leading-none">ResursCMS</p>
                        <p className="text-slate-400 text-[10px] mt-0.5 font-medium">Панель управления v1.0</p>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-7">
                {/* Dashboard */}
                <div>
                    <Link
                        href={adminRoot}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 group ${isActive(adminRoot)
                            ? 'bg-[#2564f4]/15 text-white border border-[#2564f4]/25'
                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <LayoutGrid className={`size-4 flex-shrink-0 transition-colors ${isActive(adminRoot) ? 'text-[#2564f4]' : 'text-slate-500 group-hover:text-white'}`} />
                        Дашборд
                        {isActive(adminRoot) && <ChevronRight className="size-3 ml-auto text-[#2564f4]/60" />}
                    </Link>
                </div>

                {/* Content pages */}
                <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 px-3 mb-3">
                        Контент страниц
                    </p>
                    <ul className="space-y-1">
                        {contentSections.map(s => {
                            const href = `${adminRoot}/content/${s.slug}`;
                            const active = isActive(href);
                            const Icon = s.icon;
                            return (
                                <li key={s.slug}>
                                    <Link
                                        href={href}
                                        onClick={() => setSidebarOpen(false)}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${active
                                            ? 'bg-[#161b22] text-white border border-white/10'
                                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        <Icon className={`size-4 flex-shrink-0 ${active ? s.color : 'text-slate-600 group-hover:text-slate-400'} transition-colors`} />
                                        <span className={active ? 'text-white' : ''}>{s.label}</span>
                                        {active && <span className={`ml-auto size-1.5 rounded-full ${s.color.replace('text-', 'bg-')}`} />}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Media */}
                <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 px-3 mb-3">
                        Медиатека
                    </p>
                    <Link
                        href={`${adminRoot}/media`}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${isActive(`${adminRoot}/media`)
                            ? 'bg-[#161b22] text-white border border-white/10'
                            : 'text-slate-500 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <Image className={`size-4 flex-shrink-0 ${isActive(`${adminRoot}/media`) ? 'text-violet-400' : 'text-slate-600 group-hover:text-slate-400'} transition-colors`} />
                        <span>Медиа-хранилище</span>
                    </Link>
                </div>
            </nav>

            {/* Bottom — preview link + logout */}
            <div className="p-3 space-y-1 border-t border-white/5">
                <Link
                    href={`/${locale}`}
                    target="_blank"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-all group"
                >
                    <ExternalLink className="size-3.5 group-hover:text-[#2564f4] transition-colors" />
                    Открыть сайт
                </Link>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:text-red-400 hover:bg-red-500/5 transition-all duration-200 group"
                >
                    <LogOut className="size-4 flex-shrink-0 group-hover:text-red-400 transition-colors" />
                    <span>Выйти</span>
                </button>
            </div>
        </aside>
    );

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-[#080b12] flex text-white font-sans">
            {/* Ambient background */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-0 left-56 w-[600px] h-[400px] bg-[#2564f4]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-900/10 rounded-full blur-[80px]" />
                {/* Subtle grid */}
                <div className="absolute inset-0 opacity-[0.025]"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:flex flex-shrink-0 bg-[#0d1117]/90 backdrop-blur-xl border-r border-white/[0.06] relative z-10 h-screen sticky top-0">
                {sidebar}
            </div>

            {/* Mobile Drawer */}
            {sidebarOpen && (
                <div className="md:hidden fixed inset-0 z-50 flex">
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
                    <div className="relative bg-[#0d1117] border-r border-white/10 flex flex-col animate-in slide-in-from-left duration-300 shadow-2xl">
                        <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors">
                            <X className="size-5" />
                        </button>
                        {sidebar}
                    </div>
                </div>
            )}

            {/* Main */}
            <div className="flex-1 flex flex-col min-h-screen relative z-10">
                {/* Top bar */}
                <header className="flex items-center justify-between px-6 py-3.5 border-b border-white/[0.06] bg-[#0d1117]/60 backdrop-blur-xl sticky top-0 z-20">
                    <div className="flex items-center gap-3">
                        <button
                            className="md:hidden text-slate-500 hover:text-white transition-colors"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <Menu className="size-5" />
                        </button>
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-1.5 text-sm">
                            <span className="text-slate-400">Admin</span>
                            <ChevronRight className="size-3 text-slate-600" />
                            <span className="text-white font-medium">
                                {contentSections.find(s => pathname.includes(s.slug))?.label
                                    || (pathname === '/admin/media' ? 'Медиатека' : 'Дашборд')}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/15">
                            <div className="size-1.5 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">Онлайн</span>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 p-6 lg:p-8 animate-in fade-in duration-300">
                    {children}
                </main>
            </div>
        </div>
    );
}
