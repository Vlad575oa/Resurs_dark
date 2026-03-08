import Link from "next/link";

export default function FooterLight() {
    return (
        <footer className="bg-[#05080f] py-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="/" className="text-xl font-black tracking-tighter text-white">
                        RESURS<span className="text-emerald-500 italic">TRANS</span>
                    </Link>
                    <span className="text-sm font-semibold text-slate-500">© 2024 Все права защищены</span>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    <Link className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors" href="#">
                        Политика конфиденциальности
                    </Link>
                    <Link className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors" href="#">
                        Условия использования
                    </Link>
                    <Link className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors" href="#">
                        Контакты
                    </Link>
                </div>
            </div>
        </footer>
    );
}
