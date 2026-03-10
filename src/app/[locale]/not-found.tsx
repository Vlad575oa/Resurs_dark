import Link from 'next/link';
import HeaderScroll from '@/components/sections/fleetcorp/HeaderScroll';
import Footer from '@/components/sections/fleetcorp/Footer';
import { getServerTranslations } from '@/lib/server-intl';

export default async function NotFound() {
  // Since not-found doesn't get params, we assume default or use a cookie-based approach if needed.
  // In Next.js App Router with i18n, common practice is a root not-found or localized error boundaries.
  const locale = 'ru' as string; 
  const { messages } = await getServerTranslations(locale);

  return (
    <div className="bg-background-dark min-h-screen flex flex-col items-center justify-center text-white p-6 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/10 to-transparent blur-[100px] opacity-50"></div>
      
      <div className="relative z-10 text-center space-y-8 max-w-2xl px-6">
        <div className="space-y-2">
          <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 select-none">
            404
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-glow"></div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white">
            {locale === 'en' ? 'Page Not Found' : 'Страница не найдена'}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            {locale === 'en' 
              ? 'The path you requested does not exist or has been moved. Use the buttons below to return home.' 
              : 'Запрошенный путь не существует или был перемещен. Воспользуйтесь кнопками ниже, чтобы вернуться на главную.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link 
            href={`/${locale}`}
            className="px-8 py-4 bg-primary rounded-xl font-bold text-white hover:bg-blue-600 transition-all shadow-glow active:scale-95"
          >
            {locale === 'en' ? 'Back Home' : 'Вернуться на главную'}
          </Link>
          <Link 
            href={`/${locale}/contacts`}
            className="px-8 py-4 border border-white/20 rounded-xl font-bold text-white hover:bg-white/5 transition-all active:scale-95"
          >
            {locale === 'en' ? 'Contact Support' : 'Связаться с нами'}
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] opacity-30"></div>
    </div>
  );
}
