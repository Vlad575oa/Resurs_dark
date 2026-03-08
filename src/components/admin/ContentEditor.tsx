'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import {
    Save, RefreshCw, ChevronDown, ChevronRight,
    Plus, Trash2, AlertCircle, CheckCircle2, Loader2,
    Home, Briefcase, Wrench, Users, Newspaper, Phone, HelpCircle
} from 'lucide-react';

// ─── deep setter ─────────────────────────────────────────────────────────────
function setDeep(obj: any, path: (string | number)[], value: any): any {
    if (path.length === 0) return value;
    const [head, ...tail] = path;
    if (Array.isArray(obj)) {
        const arr = [...obj];
        arr[head as number] = setDeep(arr[head as number], tail, value);
        return arr;
    }
    return { ...obj, [head]: setDeep(obj[head as string], tail, value) };
}

// ─── Field components ─────────────────────────────────────────────────────────

function StringField({ label, value, path, onChange }: {
    label: string; value: string;
    path: (string | number)[];
    onChange: (p: (string | number)[], v: string) => void;
}) {
    const isLong = value.length > 80 || value.includes('\n');
    return (
        <div className="space-y-1.5">
            <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-slate-300">{label}</label>
            {isLong ? (
                <textarea
                    value={value}
                    onChange={e => onChange(path, e.target.value)}
                    rows={3}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-700 resize-y focus:outline-none focus:ring-2 focus:ring-[#2564f4]/35 focus:border-[#2564f4]/40 transition-all font-mono"
                />
            ) : (
                <input
                    type="text"
                    value={value}
                    onChange={e => onChange(path, e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-[#2564f4]/35 focus:border-[#2564f4]/40 transition-all"
                />
            )}
        </div>
    );
}

function ObjectBlock({ label, value, path, onChange, onDelete }: {
    label: string; value: Record<string, any>;
    path: (string | number)[];
    onChange: (p: (string | number)[], v: any) => void;
    onDelete?: () => void;
}) {
    const [open, setOpen] = useState(true);
    return (
        <div className="border border-white/[0.07] rounded-xl overflow-hidden">
            <div
                role="button"
                tabIndex={0}
                onClick={() => setOpen(v => !v)}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(v => !v); } }}
                className="w-full flex items-center justify-between px-4 py-3 bg-white/[0.02] hover:bg-white/[0.04] transition-colors text-left cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-white/20"
            >
                <div className="flex items-center gap-2">
                    {open ? <ChevronDown className="size-3 text-slate-600" /> : <ChevronRight className="size-3 text-slate-600" />}
                    <span className="text-[10px] font-black uppercase tracking-[0.15em] text-white">{label}</span>
                    <span className="text-[9px] text-white bg-white/5 px-1.5 py-0.5 rounded font-mono">object</span>
                </div>
                {onDelete && (
                    <button type="button" onClick={e => { e.stopPropagation(); onDelete(); }}
                        className="text-slate-700 hover:text-red-400 transition-colors p-1 rounded hover:bg-red-500/10 active:scale-95">
                        <Trash2 className="size-3.5" />
                    </button>
                )}
            </div>
            {open && (
                <div className="p-4 space-y-4 bg-[#0d1117]/30">
                    {renderFields(value, path, onChange)}
                </div>
            )}
        </div>
    );
}

function ArrayBlock({ label, value, path, onChange }: {
    label: string; value: any[];
    path: (string | number)[];
    onChange: (p: (string | number)[], v: any) => void;
}) {
    const addItem = () => {
        const template = value.length > 0
            ? Object.fromEntries(Object.keys(value[0]).map(k => [k, '']))
            : { value: '' };
        onChange(path, [...value, template]);
    };
    const removeItem = (idx: number) => onChange(path, value.filter((_, i) => i !== idx));

    return (
        <div className="space-y-2.5">
            <div className="flex items-center justify-between">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-300 flex items-center gap-2">
                    {label}
                    <span className="text-[9px] bg-[#2564f4]/10 text-[#2564f4]/70 border border-[#2564f4]/20 px-1.5 py-0.5 rounded font-mono normal-case tracking-normal">array · {value.length}</span>
                </label>
                <button type="button" onClick={addItem}
                    className="flex items-center gap-1 text-[10px] font-bold text-[#2564f4] hover:text-white bg-[#2564f4]/10 hover:bg-[#2564f4]/20 border border-[#2564f4]/20 px-2.5 py-1 rounded-lg transition-all">
                    <Plus className="size-3" /> Добавить
                </button>
            </div>
            <div className="space-y-2">
                {value.map((item, idx) => (
                    typeof item === 'string' ? (
                        <div key={idx} className="flex items-center gap-2">
                            <input value={item} onChange={e => onChange([...path, idx], e.target.value)}
                                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#2564f4]/35 focus:border-[#2564f4]/40 transition-all" />
                            <button type="button" onClick={() => removeItem(idx)}
                                className="text-slate-700 hover:text-red-400 transition-colors p-1.5 rounded-lg hover:bg-red-500/10">
                                <Trash2 className="size-4" />
                            </button>
                        </div>
                    ) : (
                        <ObjectBlock key={idx} label={`Элемент ${idx + 1}`} value={item}
                            path={[...path, idx]} onChange={onChange} onDelete={() => removeItem(idx)} />
                    )
                ))}
                {value.length === 0 && (
                    <p className="text-[11px] text-slate-400 italic px-1">Пусто — нажмите «Добавить»</p>
                )}
            </div>
        </div>
    );
}

function renderFields(data: any, path: (string | number)[], onChange: (path: (string | number)[], value: any) => void): React.ReactNode {
    if (!data || typeof data !== 'object') return null;
    return Object.entries(data).map(([key, value]) => {
        const currentPath = [...path, key];
        if (typeof value === 'string' || typeof value === 'number')
            return <StringField key={key} label={key} value={String(value)} path={currentPath} onChange={onChange} />;
        if (Array.isArray(value))
            return <ArrayBlock key={key} label={key} value={value} path={currentPath} onChange={onChange} />;
        if (typeof value === 'object' && value !== null)
            return <ObjectBlock key={key} label={key} value={value} path={currentPath} onChange={onChange} />;
        return null;
    });
}

// ─── Page meta ────────────────────────────────────────────────────────────────
const PAGE_META: Record<string, { label: string; icon: React.ElementType; color: string }> = {
    home: { label: 'Главная', icon: Home, color: '#2564f4' },
    cases: { label: 'Кейсы', icon: Briefcase, color: '#8b5cf6' },
    services: { label: 'Услуги', icon: Wrench, color: '#06b6d4' },
    about: { label: 'О нас', icon: Users, color: '#22c55e' },
    news: { label: 'Новости', icon: Newspaper, color: '#ff8c00' },
    contacts: { label: 'Контакты', icon: Phone, color: '#f43f5e' },
};

export default function ContentEditor({ section }: { section: string }) {
    const params = useParams();
    const urlLocale = (params?.locale as string) || 'ru';
    const [data, setData] = useState<any>(null);
    const [locale, setLocale] = useState(urlLocale);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [syncing, setSyncing] = useState(false);
    const [status, setStatus] = useState<'idle' | 'saved' | 'error' | 'synced'>('idle');
    const [error, setError] = useState('');

    const meta = PAGE_META[section] || { label: section, icon: HelpCircle, color: '#2564f4' };
    const Icon = meta.icon;

    const fetchData = useCallback(async () => {
        setLoading(true); setError('');
        try {
            const res = await fetch(`/api/admin/content?section=${section}&locale=${locale}`);
            if (!res.ok) throw new Error('Раздел не найден');
            const json = await res.json();
            setData(json.data);
        } catch (e: any) { setError(e.message); }
        finally { setLoading(false); }
    }, [section, locale]);

    useEffect(() => { fetchData(); }, [fetchData]);

    const handleChange = useCallback((path: (string | number)[], value: any) => {
        setData((prev: any) => setDeep(prev, path, value));
        setStatus('idle');
    }, []);

    const handleSave = async () => {
        setSaving(true); setStatus('idle');
        try {
            const res = await fetch('/api/admin/content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ section, data, locale }),
            });
            if (!res.ok) throw new Error();
            setStatus('saved');
            setTimeout(() => setStatus('idle'), 3000);
        } catch { setStatus('error'); }
        finally { setSaving(false); }
    };

    const handleSync = async () => {
        setSyncing(true); setStatus('idle');
        try {
            const res = await fetch('/api/admin/git/sync', { method: 'POST' });
            if (!res.ok) throw new Error();
            setStatus('synced');
            setTimeout(() => setStatus('idle'), 3000);
        } catch { setStatus('error'); }
        finally { setSyncing(false); }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="relative size-12 flex-shrink-0">
                        <div className="absolute inset-0 rounded-xl blur-[8px] opacity-40" style={{ background: meta.color }} />
                        <div className="relative size-12 rounded-xl flex items-center justify-center" style={{ background: `${meta.color}18`, border: `1px solid ${meta.color}30` }}>
                            <Icon className="size-6" style={{ color: meta.color }} />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-black text-white tracking-tight">{meta.label}</h1>
                        <p className="text-xs text-slate-300 mt-0.5">Редактор контента · <span className="uppercase font-mono text-primary font-bold">{locale}</span></p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {/* Locale Switcher */}
                    <div className="flex bg-white/[0.03] border border-white/[0.07] rounded-xl p-1 mr-2">
                        {['ru', 'en', 'hi'].map(l => (
                            <button
                                key={l}
                                onClick={() => setLocale(l)}
                                className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${locale === l
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'text-slate-500 hover:text-slate-300'
                                    }`}
                            >
                                {l}
                            </button>
                        ))}
                    </div>

                    <button onClick={fetchData}
                        className="text-slate-500 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.07] p-2.5 rounded-xl transition-all" title="Обновить">
                        <RefreshCw className={`size-4 ${loading ? 'animate-spin' : ''}`} />
                    </button>

                    <button onClick={handleSync} disabled={syncing || loading}
                        className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-all disabled:opacity-50"
                    >
                        {syncing ? <Loader2 className="size-4 animate-spin" /> : <RefreshCw className="size-4" />}
                        {syncing ? 'Syncing...' : 'GitHub'}
                    </button>

                    <button onClick={handleSave} disabled={saving || loading}
                        className="flex items-center gap-2 text-[#080b12] font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all shadow-[0_4px_20px_rgba(255,140,0,0.3)] hover:shadow-[0_4px_35px_rgba(255,140,0,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ background: saving || loading ? '#555' : '#ff8c00' }}>
                        {saving ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />}
                        {saving ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </div>

            {/* Status */}
            {status === 'saved' && (
                <div className="flex items-center gap-2.5 px-4 py-3 bg-green-500/8 border border-green-500/20 rounded-xl text-sm text-green-400 animate-in fade-in">
                    <CheckCircle2 className="size-4 flex-shrink-0" /> Данные успешно сохранены!
                </div>
            )}
            {status === 'synced' && (
                <div className="flex items-center gap-2.5 px-4 py-3 bg-blue-500/8 border border-blue-500/20 rounded-xl text-sm text-blue-400 animate-in fade-in">
                    <CheckCircle2 className="size-4 flex-shrink-0" /> Синхронизация с GitHub завершена!
                </div>
            )}
            {status === 'error' && (
                <div className="flex items-center gap-2.5 px-4 py-3 bg-red-500/8 border border-red-500/20 rounded-xl text-sm text-red-400 animate-in fade-in">
                    <AlertCircle className="size-4 flex-shrink-0" /> Ошибка сохранения. Попробуйте снова.
                </div>
            )}

            {/* Content */}
            {loading ? (
                <div className="flex flex-col items-center justify-center py-24 text-slate-600">
                    <Loader2 className="size-8 animate-spin mb-3" style={{ color: meta.color }} />
                    <p className="text-sm">Загрузка данных...</p>
                </div>
            ) : error ? (
                <div className="flex flex-col items-center justify-center py-24 text-slate-600">
                    <AlertCircle className="size-8 mb-3 text-red-500/50" />
                    <p className="text-sm text-red-400">{error}</p>
                    <button onClick={fetchData} className="mt-4 text-xs text-[#2564f4] hover:underline">Попробовать снова</button>
                </div>
            ) : data ? (
                <div className="bg-[#161b22]/70 backdrop-blur-md border border-white/[0.07] rounded-2xl p-6 space-y-5">
                    {renderFields(data, [], handleChange)}
                </div>
            ) : null}

            {!loading && !error && (
                <p className="text-[11px] text-slate-400 text-center">
                    Изменения сохранятся в <code className="text-slate-300">/src/data/content/{section}.json</code>
                </p>
            )}
        </div>
    );
}
