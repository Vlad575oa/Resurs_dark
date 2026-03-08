export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-3xl">local_shipping</span>
                            <span className="text-xl font-bold text-slate-900">РесурсТранс</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            «РесурсТранс» — дочерняя компания транспортного холдинга федерального уровня, работает на рынке с 2008 года. Основное направление деятельности компании — оказание услуг по аутсорсингу транспортной функции и организация перевозок различными видами автотранспорта.
                        </p>
                        <div className="flex gap-4">
                            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                                <span className="material-symbols-outlined">public</span>
                            </a>
                            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                                <span className="material-symbols-outlined">send</span>
                            </a>
                            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                                <span className="material-symbols-outlined">share</span>
                            </a>
                        </div>
                    </div>
                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-slate-900 font-bold mb-6">Компания</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a className="text-slate-500 hover:text-primary text-sm transition-colors" href="/about">О нас</a></li>
                            <li><a className="text-slate-500 hover:text-primary text-sm transition-colors" href="/contacts">Контакты</a></li>
                            <li><a className="text-slate-500 hover:text-primary text-sm transition-colors" href="/news">Пресс-центр</a></li>
                            <li><a className="text-slate-500 hover:text-primary text-sm transition-colors" href="/cases">Кейсы</a></li>
                        </ul>
                    </div>
                    {/* Links Column 2 */}
                    <div>
                        <h4 className="text-slate-900 font-bold mb-6">Услуги</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a className="text-slate-500 hover:text-primary text-sm transition-colors" href="/services">Все услуги</a></li>
                            <li><a className="text-slate-500 hover:text-primary text-sm transition-colors" href="/solutions">Решения</a></li>
                            <li><a className="text-slate-500 hover:text-primary text-sm transition-colors" href="/technology">Технологии</a></li>
                            <li><a className="text-slate-500 hover:text-primary text-sm transition-colors" href="/report">Отчётность</a></li>
                        </ul>
                    </div>
                    {/* Contact Column */}
                    <div>
                        <h4 className="text-slate-900 font-bold mb-6">Связаться с нами</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3 text-sm text-slate-500">
                                <span className="material-symbols-outlined text-primary text-xl shrink-0">location_on</span>
                                <span>г. Москва, 2-я Хуторская ул.,<br />д. 38А, стр. 14</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-500">
                                <span className="material-symbols-outlined text-primary text-xl shrink-0">call</span>
                                <span className="flex flex-col">
                                    <span>8 800-500-2625</span>
                                    <span>+7 (495) 646-08-39</span>
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-500">
                                <span className="material-symbols-outlined text-primary text-xl shrink-0">mail</span>
                                <span>info@resourcetrans.ru</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-xs">© 2024 РесурсТранс. Все права защищены.</p>
                    <div className="flex gap-6">
                        <a className="text-slate-400 hover:text-primary text-xs transition-colors" href="/privacy">Политика конфиденциальности</a>
                        <a className="text-slate-400 hover:text-primary text-xs transition-colors" href="/terms">Условия использования</a>
                        <a className="text-slate-400 hover:text-primary text-xs transition-colors" href="/cookies">Настройки Cookie</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
