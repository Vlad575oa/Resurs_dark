import dynamic from "next/dynamic";
import { getServerTranslations } from "@/lib/server-intl";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";

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
      <HeaderScroll />
      <Hero dict={messages.Hero} />
      <TrustedBy locale={locale} />
      <IndustriesGrid locale={locale} />
      <ChallengesDark locale={locale} />
      <ServiceGrid locale={locale} />
      <NumbersScaleGlobal locale={locale} />
      <CTASection locale={locale} />
      <Footer locale={locale} />
    </div>
  );
}
