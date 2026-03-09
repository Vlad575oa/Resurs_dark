import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { getServerTranslations } from "@/lib/server-intl";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: "ResursLogistics | Advanced Fleet Management & Outsourcing",
    hi: "ResursLogistics | उन्नत बेड़े प्रबंधन और आउटसोर्सिंग",
    ru: "РесурсЛогистика | Управление автопарком и аутсорсинг логистики"
  };

  const descriptions: Record<string, string> = {
    en: "Enterprise-grade fleet management solutions, strategic logistics outsourcing, and AI-driven monitoring for global industry leaders.",
    hi: "उद्यम-स्तर के बेड़े प्रबंधन समाधान, रणनीतिक रसद आउटसोर्सिंग, और वैश्विक उद्योग जगत के नेताओं के लिए एआई-संचालित निगरानी।",
    ru: "РесурсЛогистика | Управление автопарком и аутсорсинг логистики."
  };

  return {
    title: titles[locale] || titles.ru,
    description: descriptions[locale] || descriptions.ru,
    alternates: {
      canonical: `/${locale}`,
    }
  };
}

// Lazy load below-fold components (Performance Rule #5)
const Hero = dynamic(
  () => import("@/components/sections/fleetcorp/Hero"),
  { loading: () => <div className="h-[800px] bg-background-dark" /> }
);

const Footer = dynamic(
  () => import("@/components/sections/fleetcorp/Footer"),
  { loading: () => <div className="h-[100px] bg-[#05080f]" /> }
);

const TrustedBy = dynamic(
  () => import("@/components/sections/fleetcorp/TrustedBy"),
  { loading: () => <div className="h-[100px] bg-[#0f1116]" /> }
);

const IndustriesGrid = dynamic(
  () => import("@/components/sections/fleetcorp/IndustriesGrid"),
  { loading: () => <div className="h-[600px] bg-background-dark" /> }
);

const ChallengesDark = dynamic(
  () => import("@/components/sections/fleetcorp/ChallengesDark"),
  { loading: () => <div className="h-[600px] bg-[#1a1d23]" /> }
);

const ServiceGrid = dynamic(
  () => import("@/components/sections/fleetcorp/ServiceGrid"),
  { loading: () => <div className="h-[800px] bg-background-dark" /> }
);

const NumbersScaleGlobal = dynamic(
  () => import("@/components/sections/fleetcorp/NumbersScaleGlobal"),
  { loading: () => <div className="h-[400px] bg-[#0b0e14]" /> }
);

const CTASection = dynamic(
  () => import("@/components/sections/fleetcorp/CTASection"),
  { loading: () => <div className="h-[300px] bg-background-dark" /> }
);

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { messages } = await getServerTranslations(locale);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-slate-100 overflow-x-hidden">
      <HeaderScroll locale={locale} dict={messages} />
      <Hero dict={messages.Hero} />
      <TrustedBy dict={messages.TrustedBy} />
      <IndustriesGrid dict={messages.Industries} locale={locale} />
      <ChallengesDark dict={messages.ChallengesSection} locale={locale} />
      <ServiceGrid dict={messages.FleetServices} locale={locale} />
      <NumbersScaleGlobal dict={messages.StatsSection} locale={locale} />
      <CTASection dict={messages.CTASection} locale={locale} />
      <Footer locale={locale} dict={messages} />
    </div>
  );
}
