import type { Metadata } from "next";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import { AiAssistant } from "@/components/ui/AiAssistant";
import { getServerTranslations } from "@/lib/server-intl";
import { ServiceList } from "@/components/sections/services/ServiceList";
import Footer from "@/components/sections/fleetcorp/Footer";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return {
        title: locale === 'en' ? "Services | РесурсЛогистика" : "Услуги | РесурсЛогистика",
        description: locale === 'en'
            ? "Comprehensive fleet management and logistics outsourcing solutions."
            : "Комплексные решения по управлению автопарком и аутсорсингу логистики.",
        alternates: {
            canonical: `/${locale}/services`,
        }
    };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const { messages } = await getServerTranslations(locale);
    const dict = (messages as any).ServicesPage;

    const services = dict.servicesList.map((s: any) => ({
        ...s,
        colSpan: s.id === "outsourcing" || s.id === "consulting" ? "col-span-1 md:col-span-2" : "col-span-1",
    }));

    const titles = {
        catalogTitle: dict.catalogTitle,
        catalogDescription: dict.catalogDescription,
        edition: dict.edition,
        company: dict.company,
        haveTask: dict.haveTask,
        letsDiscuss: dict.letsDiscuss,
        contactUs: dict.contactUs,
    };

    return (
        <main className="min-h-screen bg-[#0a0e1a] text-white selection:bg-primary selection:text-white flex flex-col">
            <HeaderScroll locale={locale} dict={messages} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Logistics Outsourcing & Fleet Management",
                        "provider": {
                            "@type": "Organization",
                            "name": "ResursLogistics"
                        },
                        "areaServed": "RU",
                        "description": "Enterprise-grade fleet management solutions and strategic logistics outsourcing."
                    })
                }}
            />
            <div className="pt-20 flex-grow">
                <ServiceList services={services} titles={titles} locale={locale} />
            </div>
            <AiAssistant />
            <Footer locale={locale} dict={messages} />
        </main>
    );
}
