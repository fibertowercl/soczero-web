import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Space_Grotesk } from "next/font/google";
import "../globals.css";
import { asset, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: t.meta.title,
    description: t.meta.description,
    icons: {
      icon: [{ url: asset("/img/favicon-32.png"), sizes: "32x32" }, { url: asset("/img/icon.png") }],
      apple: asset("/img/apple-icon.png"),
    },
    openGraph: { title: t.meta.title, description: t.meta.description, siteName: "SOCZERO Networks" },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html lang={lang} className={`${inter.variable} ${grotesk.variable}`}>
      <body className="min-h-screen font-sans">
        <Header lang={lang} t={t.nav} />
        <main>{children}</main>
        <Footer lang={lang} t={t} />
      </body>
    </html>
  );
}
