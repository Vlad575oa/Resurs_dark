'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const decline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isMounted || !isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#0d1117]/95 backdrop-blur-xl border-t border-white/10 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/20 rounded-lg hidden sm:block">
                            <svg className="size-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm md:text-base mb-1">
                                Мы используем файлы cookie
                            </h3>
                            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                                Мы используем файлы cookie для улучшения работы сайта, анализа трафика и обеспечения безопасности. 
                                Продолжая использовать сайт, вы соглашаетесь с нашей{' '}
                                <a href="/cookies" className="text-primary hover:underline font-medium">
                                    Политикой cookie
                                </a>{' '}
                                и{' '}
                                <a href="/privacy" className="text-primary hover:underline font-medium">
                                    Политикой конфиденциальности
                                </a>.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center gap-2 flex-shrink-0 w-full md:w-auto">
                    <button
                        onClick={decline}
                        className="flex-1 md:flex-none px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 text-xs font-bold uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all"
                    >
                        Отклонить
                    </button>
                    <button
                        onClick={accept}
                        className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                    >
                        Принять
                    </button>
                    <button
                        onClick={accept}
                        className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                        aria-label="Close"
                    >
                        <X className="size-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
