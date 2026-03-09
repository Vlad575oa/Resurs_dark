import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import { getServerTranslations } from "@/lib/server-intl";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return {
        title: locale === 'en' ? "Case Studies | РесурсЛогистика" : "Кейсы и проекты | РесурсЛогистика",
        description: locale === 'en'
            ? "Real-world implementation results and efficiency gains with РесурсЛогистика system."
            : "Результаты реальных внедрений и примеры повышения эффективности с помощью системы РесурсЛогистика.",
        alternates: {
            canonical: `/${locale}/cases`,
        }
    };
}

const CasesHero = dynamic(() => import("@/components/sections/fleettech/CasesHero"));
const CaseStudies = dynamic(() => import("@/components/sections/fleettech/CaseStudies"));
const Footer = dynamic(() => import("@/components/sections/fleetcorp/Footer"));

const EnterpriseHero = dynamic(() => import("@/components/sections/fleetcorp/EnterpriseHero"));
const EnterpriseAdvantages = dynamic(() => import("@/components/sections/fleetcorp/EnterpriseAdvantages"));
const WorkflowStages = dynamic(() => import("@/components/sections/fleetcorp/WorkflowStages"));
const EnterpriseImpactCTA = dynamic(() => import("@/components/sections/fleetcorp/EnterpriseImpactCTA"));

export default async function CasesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const { messages } = await getServerTranslations(locale);
    const dict = (messages as any).Cases;

    return (
        <div className="bg-background-dark min-h-screen flex flex-col">
            <HeaderScroll locale={locale} dict={messages} />
            <main className="flex-grow">
                <CasesHero locale={locale} dict={dict.casesHero} />
                <CaseStudies locale={locale} dict={dict.caseStudies} />
                <div className="border-t border-slate-800 my-20"></div>
                <EnterpriseHero locale={locale} />
                <EnterpriseAdvantages locale={locale} />
                <WorkflowStages locale={locale} />
                <EnterpriseImpactCTA locale={locale} />
            </main>
            <Footer locale={locale} dict={messages} />
        </div>
    );
}
