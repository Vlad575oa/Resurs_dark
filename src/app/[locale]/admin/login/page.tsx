'use client';

import { useState, FormEvent } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function AdminLoginPage() {
    const router = useRouter();
    const params = useParams();
    const locale = params?.locale || 'ru';
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPw, setShowPw] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await fetch('/api/admin/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });
            if (!res.ok) {
                setError('Неверный пароль. Попробуйте снова.');
            } else {
                router.push(`/${locale}/admin`);
            }
        } catch {
            setError('Ошибка соединения с сервером');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="font-display bg-[#101622] min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
            <style jsx global>{`
                :root {
                    --primary: #556b2f;
                    --background-dark: #101622;
                }
                .font-display {
                    font-family: 'Manrope', sans-serif !important;
                }
                .bg-primary {
                    background-color: var(--primary) !important;
                }
                .text-primary {
                    color: var(--primary) !important;
                }
                .subtle-pattern {
                    background-color: #101622;
                    background-image: radial-gradient(rgba(85, 107, 47, 0.13) 0.5px, transparent 0.5px), 
                                      radial-gradient(rgba(85, 107, 47, 0.13) 0.5px, #101622 0.5px);
                    background-size: 24px 24px;
                    background-position: 0 0, 12px 12px;
                }
            `}</style>

            {/* Background Pattern Layer */}
            <div className="absolute inset-0 subtle-pattern -z-10" />

            <div className="w-full max-w-md relative">
                {/* Main Card Container */}
                <div className="w-full bg-slate-900/80 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden border border-slate-800/50 animate-in fade-in zoom-in duration-500">
                    {/* Header Section */}
                    <div className="p-8 pb-4 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 ring-1 ring-primary/30">
                            <span className="material-symbols-outlined text-primary text-3xl">local_shipping</span>
                        </div>
                        <h1 className="text-3xl font-extrabold text-white tracking-tight">FleetCorp Admin</h1>
                        <p className="mt-2 text-slate-400 text-sm font-medium">Secure access for fleet administrators</p>
                    </div>

                    {/* Form Section */}
                    <div className="px-8 pb-10">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Password Field */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-xs uppercase tracking-widest font-bold text-slate-400 ml-1">Password</label>
                                    <button type="button" className="text-xs font-bold text-primary hover:underline">Forgot password?</button>
                                </div>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock</span>
                                    <input
                                        className="w-full pl-11 pr-12 py-3.5 bg-slate-950/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none transition-all text-slate-100 placeholder:text-slate-600"
                                        placeholder="••••••••"
                                        type={showPw ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                        type="button"
                                        onClick={() => setShowPw(!showPw)}
                                    >
                                        <span className="material-symbols-outlined text-xl">{showPw ? 'visibility_off' : 'visibility'}</span>
                                    </button>
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <p className="text-xs text-red-400 font-medium px-1 animate-in fade-in slide-in-from-top-1">
                                    {error}
                                </p>
                            )}

                            {/* Submit Button */}
                            <button
                                className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/10 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <span>Sign In to Dashboard</span>
                                        <span className="material-symbols-outlined text-lg">login</span>
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Footer Links */}
                        <div className="mt-8 pt-6 border-t border-slate-800/50 text-center">
                            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Authorized Personnel Only</p>
                            <div className="mt-4 flex justify-center gap-4">
                                <a className="text-xs text-slate-400 hover:text-primary transition-colors font-medium" href="#">Privacy Policy</a>
                                <span className="text-slate-300">|</span>
                                <a className="text-xs text-slate-400 hover:text-primary transition-colors font-medium" href="#">System Status</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* External Branding / Copyright */}
                <div className="mt-8 text-center text-slate-500">
                    <p className="text-sm">
                        © 2024 FleetCorp Logistics. All rights reserved.
                    </p>
                    <p className="text-[10px] mt-2 uppercase tracking-tight font-medium">Пароль: 123456</p>
                </div>
            </div>
        </div>
    );
}
