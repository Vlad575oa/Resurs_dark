import Link from "next/link";

export default function CTASection({ locale }: { locale: string }) {
  return (
    <section className="py-20 px-6 bg-background-dark relative border-t border-border-dark/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          {locale === 'en' ? 'Ready to scale your fleet operations?' : 'Готовы масштабировать управление автопарком?'}
        </h2>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          {locale === 'en' ? 'Partner with the industry leader in corporate fleet management. Get a customized plan that fits your global needs.' : 'Станьте партнером лидера отрасли в управлении автопарками. Получите индивидуальный план под ваши задачи.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-bold transition-all shadow-xl shadow-blue-500/20 w-full sm:w-auto">
            {locale === 'en' ? 'Schedule Consultation' : 'Назначить консультацию'}
          </button>
          <Link href={`/${locale}/cases`} className="bg-transparent hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-lg text-base font-bold transition-all w-full sm:w-auto flex items-center justify-center">
            {locale === 'en' ? 'View Case Studies' : 'Смотреть кейсы'}
          </Link>
        </div>
      </div>
    </section>
  );
}
