import { NavigationClient } from "./Navigation/NavigationClient";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const NAV_ITEMS = [
    { name: "Услуги", href: "/#services" },
    { name: "Решения", href: "/#solutions" },
    { name: "О нас", href: "/about" },
    { name: "Кейсы", href: "/#cases" },
    { name: "FAQ", href: "/#faq" },
    { name: "Новости", href: "/news" },
    { name: "Контакты", href: "/contacts" },
];

export const Navigation = () => {
    return (
        <div className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <header className="flex items-center justify-between h-20">
                    {/* Logo - Server Rendered */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="h-10 w-10 flex items-center justify-center bg-primary-main/10 text-primary-main rounded-lg group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-2xl">local_shipping</span>
                        </div>
                        <h2 className="text-navy text-xl font-bold tracking-tight">РесурсТранс</h2>
                    </Link>

                    {/* Desktop Navigation - Server Rendered for Speed Index */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-slate-600 hover:text-primary-main text-sm font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA & Mobile Toggle Shell */}
                    <div className="flex items-center gap-4">
                        <Button className="hidden sm:flex bg-primary-main hover:bg-primary-dark text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            Оставить заявку
                        </Button>

                        <NavigationClient items={NAV_ITEMS} />
                    </div>
                </header>
            </div>
        </div>
    );
};
