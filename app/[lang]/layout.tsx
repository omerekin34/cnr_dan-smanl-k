import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { Navbar } from "@/components/navbar";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { getDictionary } from "@/lib/get-dictionary";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#06110d",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL("https://cnrdanismanlik.com.tr"),
    title: {
      default: dict.meta.title,
      template: "%s | ÇNR Group Danışmanlık",
    },
    description: dict.meta.description,
    openGraph: {
      siteName: "ÇNR Group Danışmanlık",
      locale: lang === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale: Locale = lang;
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full overflow-x-clip bg-navy-950 font-sans text-navy-900">
        <MotionProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-950"
          >
            {dict.nav.skip}
          </a>
          <Navbar lang={locale} content={dict.nav} />
          <main id="main">{children}</main>
          <Footer lang={locale} footer={dict.footer} nav={dict.nav} contact={dict.contact.info} />
          <WhatsAppWidget lang={locale} />
        </MotionProvider>
      </body>
    </html>
  );
}
