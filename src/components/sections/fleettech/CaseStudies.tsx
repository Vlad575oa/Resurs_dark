import Link from "next/link";

export default function CaseStudies({ locale }: { locale: string }) {
  const cases = [
    {
      slug: "retailer-logistics",
      category: locale === 'en' ? "Logistics" : "Логистика",
      title: locale === 'en' ? "Major Retailer" : "Крупный ритейлер",
      desc: locale === 'en' ? "Delivery route optimization for a fleet of 500+ trucks nationwide." : "Оптимизация маршрутов доставки для парка из 500+ грузовых автомобилей по всей стране.",
      metric: "-27%",
      metricLabel: locale === 'en' ? "Expenses" : "Расходы",
      outcome: locale === 'en' ? "Reduction in fuel costs" : "Снижение затрат на ГСМ",
      icon: "local_shipping",
      color: "orange",
    },
    {
      slug: "construction-monitoring",
      category: locale === 'en' ? "Construction" : "Строительство",
      title: locale === 'en' ? "BuildMechTrans" : "СтройМехТранс",
      desc: locale === 'en' ? "Implementation of machine sensors and idle time monitoring on construction sites." : "Внедрение датчиков работы механизмов и контроль простоя спецтехники на объектах.",
      metric: "-35%",
      metricLabel: locale === 'en' ? "Idle Time" : "Простои",
      outcome: locale === 'en' ? "Reduction in engine idling" : "Сокращение холостого хода",
      icon: "construction",
      color: "blue",
    },
    {
      slug: "fmcg-distribution",
      category: locale === 'en' ? "Distribution" : "Дистрибьюция",
      title: locale === 'en' ? "FMCG Partner" : "FMCG Партнер",
      desc: locale === 'en' ? "Route planning automation and delivery timeline tracking." : "Автоматизация планирования маршрутов и контроль своевременности доставки товара.",
      metric: "100%",
      metricLabel: locale === 'en' ? "Compliance" : "Соблюдение",
      outcome: locale === 'en' ? "Delivery schedule accuracy" : "Точность графика доставки",
      icon: "inventory_2",
      color: "purple",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-10 lg:px-40 bg-[#0c1017] border-t border-[#1e2430]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
              Результаты внедрения
            </h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              Реальные показатели эффективности наших клиентов после интеграции системы FleetTech.
            </p>
          </div>
          <Link href="/cases/detail" className="group flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:text-blue-400 transition-colors">
            Смотреть все кейсы
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_right_alt
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item) => (
            <Link
              key={item.title}
              href={`/cases/${item.slug}`}
              className="group relative bg-[#151a23] border border-[#282e39] rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-full bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-500`}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="pt-6 border-t border-[#282e39]">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white tracking-tighter">
                    {item.metric}
                  </span>
                  <span className="text-sm font-bold text-slate-500 uppercase">
                    {item.metricLabel}
                  </span>
                </div>
                <p className="text-sm text-green-400 mt-2 font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    {item.metric === "100%" ? "verified" : "trending_down"}
                  </span>
                  {item.outcome}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-[#151a23] rounded-2xl p-8 md:p-12 relative overflow-hidden border border-[#282e39] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold text-white mb-2">Готовы оптимизировать свой бизнес?</h3>
            <p className="text-slate-400">
              Получите персональный расчет окупаемости системы для вашего автопарка уже сегодня.
            </p>
          </div>
          <div className="relative z-10 flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-white text-[#111318] hover:bg-slate-200 text-sm font-bold h-12 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
              Рассчитать экономию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
