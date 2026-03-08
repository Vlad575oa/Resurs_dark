export default function Footer({ locale }: { locale: string }) {
  return (
    <footer className="bg-[#0b0d10] border-t border-[#282e39] pt-16 pb-8 px-6 md:px-10 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Address */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 text-primary">
                <span className="material-symbols-outlined text-2xl">local_shipping</span>
              </div>
              <h2 className="text-white text-lg font-bold">FleetCorp</h2>
            </div>
            <div className="text-slate-400 text-sm space-y-2">
              <p>123 Logistics Way,<br />Tech Park, NY 10001</p>
              <p>USA</p>
            </div>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-[#161b22] border border-[#282e39] flex items-center justify-center text-slate-400 hover:text-white hover:border-primary transition-all" href="#">
                <span className="material-symbols-outlined text-sm">alternate_email</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-[#161b22] border border-[#282e39] flex items-center justify-center text-slate-400 hover:text-white hover:border-primary transition-all" href="#">
                <span className="material-symbols-outlined text-sm">call</span>
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-white font-bold mb-6">{locale === 'en' ? 'Company' : 'Компания'}</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a className="hover:text-primary transition-colors" href={`/${locale}/about`}>{locale === 'en' ? 'About' : 'О нас'}</a></li>
              <li><a className="hover:text-primary transition-colors" href={`/${locale}/news`}>{locale === 'en' ? 'News' : 'Новости'}</a></li>
              <li><a className="hover:text-primary transition-colors" href={`/${locale}/contacts`}>{locale === 'en' ? 'Contacts' : 'Контакты'}</a></li>
              <li><a className="hover:text-primary transition-colors" href={`/${locale}/services`}>{locale === 'en' ? 'Services' : 'Услуги'}</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-white font-bold mb-6">{locale === 'en' ? 'Resources' : 'Ресурсы'}</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a className="hover:text-primary transition-colors" href={`/${locale}/cases`}>{locale === 'en' ? 'Cases' : 'Кейсы'}</a></li>
            </ul>
          </div>

          {/* Map / Presence */}
          <div className="relative h-48 rounded-lg overflow-hidden bg-[#161b22] border border-[#282e39] group">
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-bold border border-white/10">{locale === 'en' ? 'Global Presence' : 'Глобальное присутствие'}</span>
            </div>
            <img
              alt="Global Presence Map"
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity grayscale hover:grayscale-0"
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800"
            />
          </div>
        </div>

        <div className="border-t border-[#282e39] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>{locale === 'en' ? '© 2026 FleetCorp Management. All rights reserved.' : '© 2026 FleetCorp Management. Все права защищены.'}</p>
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href={`/${locale}/privacy`}>{locale === 'en' ? 'Privacy Policy' : 'Политика конфиденциальности'}</a>
            <a className="hover:text-white transition-colors" href={`/${locale}/terms`}>{locale === 'en' ? 'Terms of Use' : 'Условия использования'}</a>
            <a className="hover:text-white transition-colors" href={`/${locale}/cookies`}>{locale === 'en' ? 'Cookie Settings' : 'Cookie'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
