"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-border-dark bg-white/80 dark:bg-background-dark/90 backdrop-blur-md">
        <div className="px-6 md:px-10 lg:px-40 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 text-slate-900 dark:text-white">
            <div className="size-8 text-primary">
              <span className="material-symbols-outlined !text-[32px]">local_shipping</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">FleetTech</h2>
          </div>
          <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <div className="flex items-center gap-8">
              <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="/">Сайт 1</Link>
              <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="/guardian">Сайт 2</Link>
              <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="/enterprise">Калькулятор</Link>
              <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="/showcase">Выбор стиля</Link>
              <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="/interactive">Интерактив</Link>
              <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-semibold transition-colors" href="/cases">Кейсы</Link>
              <Link className="text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors relative group" href="/legal-audit" title="Законодательство">
                <span className="material-symbols-outlined !text-[20px]">gavel</span>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Законодательство</span>
              </Link>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white text-sm font-bold h-10 px-6 rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-primary/25">
              <span className="material-symbols-outlined !text-[20px]">login</span>
              <span>Вход в систему</span>
            </button>
          </nav>
          <button
            className="md:hidden text-slate-900 dark:text-white p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-6 border-b border-slate-200 dark:border-white/10">
          <nav className="flex flex-col gap-6">
            <Link
              className="text-slate-800 dark:text-slate-200 hover:text-primary text-xl font-bold transition-colors border-b border-slate-200 dark:border-white/10 pb-4 text-center"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Сайт 1
            </Link>
            <Link
              className="text-slate-800 dark:text-slate-200 hover:text-primary text-xl font-bold transition-colors border-b border-slate-200 dark:border-white/10 pb-4 text-center"
              href="/guardian"
              onClick={() => setIsMenuOpen(false)}
            >
              Сайт 2
            </Link>
            <Link
              className="text-slate-800 dark:text-slate-200 hover:text-primary text-xl font-bold transition-colors border-b border-slate-200 dark:border-white/10 pb-4 text-center"
              href="/enterprise"
              onClick={() => setIsMenuOpen(false)}
            >
              Калькулятор
            </Link>
            <Link
              className="text-slate-800 dark:text-slate-200 hover:text-primary text-xl font-bold transition-colors border-b border-slate-200 dark:border-white/10 pb-4 text-center"
              href="/showcase"
              onClick={() => setIsMenuOpen(false)}
            >
              Выбор стиля
            </Link>
            <Link
              className="text-slate-800 dark:text-slate-200 hover:text-primary text-xl font-bold transition-colors border-b border-slate-200 dark:border-white/10 pb-4 text-center"
              href="/interactive"
              onClick={() => setIsMenuOpen(false)}
            >
              Интерактив
            </Link>
            <Link
              className="text-slate-800 dark:text-slate-200 hover:text-primary text-xl font-bold transition-colors border-b border-slate-200 dark:border-white/10 pb-4 text-center"
              href="/cases"
              onClick={() => setIsMenuOpen(false)}
            >
              Кейсы
            </Link>
            <Link
              className="text-orange-500 hover:text-orange-400 text-xl font-bold transition-colors border-b border-slate-200 dark:border-white/10 pb-4 text-center flex items-center justify-center gap-2"
              href="/legal-audit"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="material-symbols-outlined !text-[24px]">gavel</span>
              Законодательство
            </Link>
          </nav>

          <button className="mt-8 mx-auto w-full max-w-[200px] bg-primary hover:bg-primary/90 text-white text-base font-bold h-12 rounded-lg transition-all flex justify-center items-center gap-2 shadow-lg shadow-primary/25">
            <span className="material-symbols-outlined !text-[20px]">login</span>
            <span>Вход в систему</span>
          </button>
        </div>
      )}
    </>
  );
}
