import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";

export const metadata: Metadata = {
    title: "FleetTech - Intelligent Fleet Management Cases",
    description: "Real-world implementation results and efficiency gains with FleetTech system.",
};

const CasesHero = dynamic(() => import("@/components/sections/fleettech/CasesHero"));
const CaseStudies = dynamic(() => import("@/components/sections/fleettech/CaseStudies"));
const Footer = dynamic(() => import("@/components/sections/fleetcorp/Footer"));

const EnterpriseHero = dynamic(() => import("@/components/sections/fleetcorp/EnterpriseHero"));
const EnterpriseAdvantages = dynamic(() => import("@/components/sections/fleetcorp/EnterpriseAdvantages"));
const WorkflowStages = dynamic(() => import("@/components/sections/fleetcorp/WorkflowStages"));
const EnterpriseImpactCTA = dynamic(() => import("@/components/sections/fleetcorp/EnterpriseImpactCTA"));

export default async function CasesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    return (
        <div className="bg-background-dark min-h-screen flex flex-col">
            <HeaderScroll />
            <main className="flex-grow">
                <CasesHero locale={locale} />
                <CaseStudies locale={locale} />
                <div className="border-t border-slate-800 my-20"></div>
                <EnterpriseHero locale={locale} />
                <EnterpriseAdvantages locale={locale} />
                <WorkflowStages locale={locale} />
                <EnterpriseImpactCTA locale={locale} />
            </main>
            <Footer locale={locale} />
        </div>
    );
}
