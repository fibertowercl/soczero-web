import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { CtaBanner, PageHeader, Reports, Solutions } from "@/components/Sections";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: `${t.nav.solutions} | SOCZERO Networks` };
}

export default async function SolutionsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = getDictionary(lang);

  return (
    <>
      <PageHeader eyebrow={t.solutions.eyebrow} title={t.solutions.title} subtitle={t.solutions.subtitle} />
      <Solutions lang={lang} t={t.solutions} heading={false} />
      <Reports lang={lang} t={t.reports} />
      <CtaBanner lang={lang} t={t.cta} />
    </>
  );
}
