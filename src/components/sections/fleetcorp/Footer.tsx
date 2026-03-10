import Link from "next/link";
import TelegramConfirmLink from "@/components/ui/TelegramConfirmLink";

export default function Footer({ locale, dict }: { locale: string, dict: any }) {
  const footerDict = dict.FooterNav || dict;

  return (
    <footer className="bg-[#0b0d10] border-t border-[#282e39] pt-16 pb-8 px-6 md:px-10 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-sm">
          {/* Brand & Address */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 text-primary">
                <span className="material-symbols-outlined text-2xl">local_shipping</span>
              </div>
              <h2 className="text-white text-lg font-bold">РесурсЛогистика</h2>
            </div>
            <div className="text-slate-400 space-y-3">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-sm mt-1">location_on</span>
                <span>{locale === 'en' ? '125047, 5 Lesnaya St, Bldg S, Moscow, Russia' : locale === 'hi' ? '125047, 5 Lesnaya St, Bldg S, Moscow, Russia' : '125047, г. Москва, ул. Лесная, д. 5, стр. С'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">call</span>
                <a href="tel:88001234567" className="hover:text-primary transition-colors">8 800 123-45-67</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 fill-current text-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.944 0C5.346 0 0 5.347 0 11.944c0 6.596 5.346 11.944 11.944 11.944 6.596 0 11.944-5.348 11.944-11.944C23.888 5.347 18.54 0 11.944 0zm5.556 8.333l-1.852 8.334c-.134.596-.48.741-.98.46l-2.825-2.083-1.362 1.312c-.15.15-.278.278-.57.278l.202-2.868 5.221-4.717c.227-.2-.05-.312-.352-.11l-6.453 4.06-2.778-.868c-.604-.19-.617-.604.126-.894l10.852-4.187c.5-.185.938.114.77.981z" />
                </svg>
                <TelegramConfirmLink
                  url="https://t.me/resurslogistics"
                  label="Telegram Channel"
                  dict={footerDict}
                />
              </div>
              <div className="pt-4 border-t border-white/5 space-y-1 text-[11px] uppercase tracking-wider opacity-60">
                <div>{locale === 'en' ? 'ResursLogistics LLC' : locale === 'hi' ? 'ResursLogistics LLC' : 'ООО «РесурсЛогистика»'}</div>
                <div>{locale === 'en' ? 'INN: 7712345678' : 'ИНН: 7712345678'}</div>
                <div>{locale === 'en' ? 'OGRN: 1127746001234' : 'ОГРН: 1127746001234'}</div>
              </div>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-white font-bold mb-6">{footerDict?.company?.title || (locale === 'en' ? 'Company' : 'Компания')}</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              {footerDict?.company?.links?.map((link: any) => (
                <li key={link.href}><a className="hover:text-primary transition-colors" href={`/${locale}${link.href}`}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-white font-bold mb-6">{footerDict?.resources?.title || (locale === 'en' ? 'Resources' : 'Ресурсы')}</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              {footerDict?.resources?.links?.map((link: any) => (
                <li key={link.href}><a className="hover:text-primary transition-colors" href={`/${locale}${link.href}`}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Map / Presence */}
          <Link
            href={`/${locale}/contacts`}
            className="relative h-48 rounded-lg overflow-hidden bg-[#161b22] border border-[#282e39] group block cursor-pointer"
          >
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <span className="bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full text-xs text-white font-bold border border-primary/50 shadow-[0_0_20px_rgba(37,106,244,0.3)] transition-all group-hover:scale-110">
                {footerDict?.presence || (locale === 'en' ? 'Interactive Map' : 'Интерактивная карта')}
              </span>
            </div>
            <img
              alt="Global Presence Map"
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800"
            />
          </Link>
        </div>

        <div className="border-t border-[#282e39] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>{footerDict?.copyright || (locale === 'en' ? '© 2026 ResursLogistics' : '© 2026 РесурсЛогистика')}</p>
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href={`/${locale}/privacy`}>{footerDict?.legal?.privacy || 'Privacy'}</a>
            <a className="hover:text-white transition-colors" href={`/${locale}/terms`}>{footerDict?.legal?.terms || 'Terms'}</a>
            <a className="hover:text-white transition-colors" href={`/${locale}/cookies`}>{footerDict?.legal?.cookies || 'Cookies'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
