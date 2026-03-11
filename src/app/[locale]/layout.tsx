import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display, Manrope } from "next/font/google";
import dynamic from "next/dynamic";
import "../globals.css";

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

// Lazy load ChatBot - reduces initial hydration cost by ~150ms
const ChatBot = dynamic(
  () => import("@/components/ui/ChatBot"),
  {
    loading: () => null // No placeholder needed
  }
);

// Lazy load CookieConsent for GDPR compliance
const CookieConsent = dynamic(
  () => import("@/components/ui/CookieConsent"),
  {
    loading: () => null
  }
);

import TelegramFab from "@/components/ui/TelegramFab";

export const metadata: Metadata = {
  metadataBase: new URL('https://resurs-logistics.ru'),
  title: {
    default: "РесурсЛогистика | Управление автопарком и аутсорсинг логистики",
    template: "%s | РесурсЛогистика"
  },
  description: "Полный аутсорсинг транспортной функции: контроль, эффективность, снижение затрат и прозрачность процессов.",
  keywords: ["логистика", "аутсорсинг", "управление автопарком", "транспорт", "fleet management"],
  authors: [{ name: "ResursLogistics" }],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://resurs-logistics.ru',
    siteName: 'РесурсЛогистика',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'РесурсЛогистика - Управление автопарком'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'РесурсЛогистика | Управление автопарком',
    description: 'Полный аутсорсинг транспортной функции.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'РесурсЛогистика',
  url: 'https://resurs-logistics.ru',
  logo: 'https://resurs-logistics.ru/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+7-800-123-45-67',
    contactType: 'customer service',
    areaServed: 'RU',
    availableLanguage: ['Russian', 'English']
  },
  sameAs: [
    'https://t.me/resurslogistics'
  ]
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <head>
        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

        {/* Critical CSS Inlining - Static content only, no user input */}
        <style dangerouslySetInnerHTML={{
          __html: `
            --background: #F0EDE9;
            --foreground: #2D2E30;
            --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
            --primary: #f57a00;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --background: #101622;
              --foreground: #F0EDE9;
            }
          }
          body {
            background: var(--background);
            color: var(--foreground);
            font-family: var(--font-display), sans-serif;
            -webkit-font-smoothing: antialiased;
          }
          .hero-canvas {
            background: linear-gradient(135deg, #f8f7f5 0%, #f2ede7 25%, #ece5dc 50%, #f8f7f5 75%, #f4f0ea 100%);
            background-size: 350% 350%;
            animation: hero-canvas 22s ease-in-out infinite;
          }
          @keyframes hero-canvas {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}} />

      </head>
      <body
        className={`${interTight.variable} ${playfair.variable} ${manrope.variable} font-display antialiased selection:bg-primary selection:text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ChatBot />
        <CookieConsent />
      </body>
    </html>
  );
}
