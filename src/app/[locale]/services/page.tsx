import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import { AiAssistant } from "@/components/ui/AiAssistant";
import { getServerTranslations } from "@/lib/server-intl";
import { ServiceList } from "@/components/sections/services/ServiceList";
import Footer from "@/components/sections/fleetcorp/Footer";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const { t } = await getServerTranslations(locale);

    const services = [
        {
            id: "outsourcing",
            title: t("ServicesPage.services.01.title"),
            subtitle: t("ServicesPage.services.01.subtitle"),
            description: t("ServicesPage.services.01.description"),
            colSpan: "col-span-1 md:col-span-2",
            image: "/images/services/outsourcing.webp",
            imageColor: "bg-[#4A5F3C]"
        },
        {
            id: "rental",
            title: t("ServicesPage.services.02.title"),
            subtitle: t("ServicesPage.services.02.subtitle"),
            description: t("ServicesPage.services.02.description"),
            colSpan: "col-span-1",
            image: "/images/services/rental.webp",
            imageColor: "bg-[#2C2C2C]"
        },
        {
            id: "management",
            title: t("ServicesPage.services.03.title"),
            subtitle: t("ServicesPage.services.03.subtitle"),
            description: t("ServicesPage.services.03.description"),
            colSpan: "col-span-1",
            image: "/images/services/management.webp",
            imageColor: "bg-[#0F766E]"
        },
        {
            id: "consulting",
            title: t("ServicesPage.services.04.title"),
            subtitle: t("ServicesPage.services.04.subtitle"),
            description: t("ServicesPage.services.04.description"),
            colSpan: "col-span-1 md:col-span-2",
            image: "/images/services/consulting.webp",
            imageColor: "bg-[#1C1C1C]"
        }
    ];

    const titles = {
        catalogTitle: t("ServicesPage.catalogTitle"),
        catalogDescription: t("ServicesPage.catalogDescription"),
        edition: t("ServicesPage.edition"),
        company: t("ServicesPage.company"),
        haveTask: t("ServicesPage.haveTask"),
        letsDiscuss: t("ServicesPage.letsDiscuss"),
        contactUs: t("ServicesPage.contactUs"),
    };

    return (
        <main className="min-h-screen bg-[#0a0e1a] text-white selection:bg-primary selection:text-white">
            <HeaderScroll />
            <div className="pt-20">
                <ServiceList services={services} titles={titles} />
            </div>
            <AiAssistant />
            <Footer locale={locale} />
        </main>
    );
}
