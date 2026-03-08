"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();

  // Robust locale detection
  const pathParts = pathname.split('/');
  const locale = ['en', 'hi', 'ru'].includes(pathParts[1]) ? pathParts[1] : 'ru';

  const languages = [
    { code: 'ru', flag: 'ru', label: 'Русский' },
    { code: 'en', flag: 'gb', label: 'English' },
    { code: 'hi', flag: 'in', label: 'हिन्दी' }
  ];

  const currentLang = languages.find(l => l.code === locale) || languages[0];

  const navLinks = [
    { href: `/${locale}`, label: locale === 'en' ? 'Home' : locale === 'hi' ? 'मुख्य' : 'Главная' },
    { href: `/${locale}/cases`, label: locale === 'en' ? 'Cases' : locale === 'hi' ? 'मामले' : 'Кейсы' },
    { href: `/${locale}/services`, label: locale === 'en' ? 'Services' : locale === 'hi' ? 'सेवाएं' : 'Услуги' },
    { href: `/${locale}/about`, label: locale === 'en' ? 'About' : locale === 'hi' ? 'बारे में' : 'О нас' },
    { href: `/${locale}/news`, label: locale === 'en' ? 'News' : locale === 'hi' ? 'समाचार' : 'Новости' },
    { href: `/${locale}/contacts`, label: locale === 'en' ? 'Contacts' : locale === 'hi' ? 'संपर्क' : 'Контакты' },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isLangOpen && !(e.target as Element).closest('.lang-switcher')) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLangOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${isScrolled || isMenuOpen
          ? "bg-background-dark/95 shadow-lg py-2"
          : "bg-background-dark/80 py-4"
          } border-b border-white/5 backdrop-blur-md z-50 px-4 md:px-10 lg:px-20`}
      >
        <div className="relative flex items-center justify-between md:justify-center h-12">
          {/* Logo */}
          <div className="md:absolute md:left-0 flex items-center gap-3 text-white">
            <div className="flex items-center justify-center size-9 rounded bg-gradient-to-br from-primary to-blue-700 text-white shadow-[0_0_15px_rgba(37,106,244,0.3)]">
              <span className="material-symbols-outlined text-xl">local_shipping</span>
            </div>
            <h2 className="text-white text-lg font-bold tracking-tight">Fleet Corp</h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname === link.href + "/";
              return (
                <Link
                  key={link.href}
                  className={`${isActive
                    ? "text-white border-b-2 border-primary pb-1"
                    : "text-slate-400 hover:text-white"
                    } text-base font-bold transition-all duration-300 whitespace-nowrap`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-6 absolute right-0">
            {/* Integrated Language Switcher Dropdown */}
            <div className="relative lang-switcher">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <img
                  src={`https://flagcdn.com/w40/${currentLang.flag}.png`}
                  alt={currentLang.label}
                  className="size-4 object-cover rounded-sm shadow-sm"
                />
                <span className="text-[10px] font-black tracking-widest text-slate-300 group-hover:text-white uppercase">
                  {currentLang.code}
                </span>
                <span className={`material-symbols-outlined text-xs text-slate-500 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-36 bg-[#0c1017] border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 z-[60]">
                  <div className="p-1">
                    {languages.map((l) => (
                      <Link
                        key={l.code}
                        href={pathname.startsWith(`/${locale}`) ? pathname.replace(`/${locale}`, `/${l.code}`) : `/${l.code}${pathname}`}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${locale === l.code
                          ? 'bg-primary/20 text-primary border border-primary/20'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                          }`}
                        prefetch={false}
                        onClick={() => {
                          document.cookie = `NEXT_LOCALE=${l.code}; path=/; max-age=31536000`;
                          setIsLangOpen(false);
                        }}
                      >
                        <img
                          src={`https://flagcdn.com/w40/${l.flag}.png`}
                          alt={l.label}
                          className="size-4 object-cover rounded-sm"
                        />
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-widest leading-none">{l.code}</span>
                          <span className="text-[8px] text-slate-500 font-bold mt-1">{l.label}</span>
                        </div>
                        {locale === l.code && (
                          <span className="material-symbols-outlined text-xs ml-auto">check</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="bg-primary hover:bg-blue-600 text-white text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-lg transition-all shadow-[0_4px_15px_rgba(37,106,244,0.3)] hover:scale-105 active:scale-95">
              {(locale as string) === 'ru' ? 'Оставить заявку' : (locale as string) === 'hi' ? 'अनुरोध भेजें' : 'Submit Request'}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background-dark/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-6 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname === link.href + "/";
              return (
                <Link
                  key={link.href}
                  className={`${isActive
                    ? "text-white border-b border-primary"
                    : "text-slate-300 hover:text-white"
                    } text-xl font-bold transition-colors pb-4`}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Language Switcher */}
          <div className="mt-auto pt-10 border-t border-white/5">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">{locale === 'ru' ? 'Выберите язык' : locale === 'hi' ? 'भाषा चुनें' : 'Choose Language'}</p>
            <div className="grid grid-cols-3 gap-3">
              {languages.map((l) => (
                <Link
                  key={l.code}
                  href={pathname.startsWith(`/${locale}`) ? pathname.replace(`/${locale}`, `/${l.code}`) : `/${l.code}${pathname}`}
                  className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all ${locale === l.code
                      ? 'bg-primary/10 border-primary shadow-lg shadow-primary/10 text-white'
                      : 'bg-white/5 border-white/10 text-slate-400'
                    }`}
                  onClick={() => {
                    document.cookie = `NEXT_LOCALE=${l.code}; path=/; max-age=31536000`;
                    setIsMenuOpen(false);
                  }}
                >
                  <img
                    src={`https://flagcdn.com/w80/${l.flag}.png`}
                    alt={l.label}
                    className="w-8 h-5 object-cover rounded shadow-sm"
                  />
                  <span className="text-[10px] font-black uppercase tracking-widest">{l.code}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
