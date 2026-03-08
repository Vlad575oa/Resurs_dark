"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when resizing to desktop
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
      <header className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 w-full max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 text-primary flex items-center justify-center border border-primary/30 rounded-full bg-primary/10">
            <span className="material-symbols-outlined text-[20px]">shield</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-base font-bold tracking-[0.2em] leading-none">GUARDIAN</h2>
            <span className="text-primary/60 text-[10px] font-mono tracking-widest leading-none mt-1">TRANSPORT // 2026</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full glass-panel">
          <Link className="px-5 py-2 text-xs font-bold tracking-wider text-white hover:text-primary transition-colors" href="/">
            Сайт 1
          </Link>
          <Link className="px-5 py-2 text-xs font-bold tracking-wider text-white hover:text-primary transition-colors" href="/guardian">
            Сайт 2
          </Link>
          <Link className="px-5 py-2 text-xs font-bold tracking-wider text-white hover:text-primary transition-colors" href="/enterprise">
            Калькулятор
          </Link>
          <Link className="px-5 py-2 text-xs font-bold tracking-wider text-white hover:text-primary transition-colors" href="/showcase">
            Выбор стиля
          </Link>
          <Link className="px-5 py-2 text-xs font-bold tracking-wider text-white hover:text-primary transition-colors" href="/interactive">
            Интерактив
          </Link>
          <Link className="px-3 py-2 text-white hover:text-orange-400 transition-colors relative group" href="/legal-audit" title="Законодательство">
            <span className="material-symbols-outlined !text-[18px]">gavel</span>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Законодательство</span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-primary/80">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            SYS.ONLINE
          </div>
          <button className="hidden md:flex items-center justify-center rounded-full h-10 px-6 border border-white/10 bg-white/5 text-white text-xs font-bold tracking-wider hover:bg-white/10 transition-all">
            LOGIN
          </button>
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white z-50 transition-colors hover:bg-white/10"
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
        <div className="fixed inset-0 z-40 bg-background-dark/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-6 border-b border-primary/20">
          <div className="flex items-center gap-2 text-[10px] font-mono text-primary/80 mb-8 self-center">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            SYS.ONLINE
          </div>
          <nav className="flex flex-col gap-6">
            <Link
              className="text-white hover:text-primary text-xl font-bold tracking-wider transition-colors border-b border-white/10 pb-4 text-center"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Сайт 1
            </Link>
            <Link
              className="text-white hover:text-primary text-xl font-bold tracking-wider transition-colors border-b border-white/10 pb-4 text-center"
              href="/guardian"
              onClick={() => setIsMenuOpen(false)}
            >
              Сайт 2
            </Link>
            <Link
              className="text-white hover:text-primary text-xl font-bold tracking-wider transition-colors border-b border-white/10 pb-4 text-center"
              href="/enterprise"
              onClick={() => setIsMenuOpen(false)}
            >
              Калькулятор
            </Link>
            <Link
              className="text-white hover:text-primary text-xl font-bold tracking-wider transition-colors border-b border-white/10 pb-4 text-center"
              href="/showcase"
              onClick={() => setIsMenuOpen(false)}
            >
              Выбор стиля
            </Link>
            <Link
              className="text-white hover:text-primary text-xl font-bold tracking-wider transition-colors border-b border-white/10 pb-4 text-center"
              href="/interactive"
              onClick={() => setIsMenuOpen(false)}
            >
              Интерактив
            </Link>
            <Link
              className="text-orange-400 hover:text-orange-300 text-xl font-bold tracking-wider transition-colors border-b border-white/10 pb-4 text-center flex items-center justify-center gap-2"
              href="/legal-audit"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="material-symbols-outlined !text-[24px]">gavel</span>
              Законодательство
            </Link>
          </nav>

          <button className="mt-8 mx-auto flex items-center justify-center rounded-full h-12 w-full max-w-[200px] border border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 transition-all font-bold tracking-widest text-sm">
            LOGIN
          </button>
        </div>
      )}
    </>
  );
}
