import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  CoreServices,
  CtaBanner,
  CveSection,
  Hero,
  Partners,
  Process,
  Reports,
  Solutions,
  Technologies,
} from "@/components/Sections";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = getDictionary(lang);
  return (
    <>
      <Hero lang={lang} t={t.hero} />
      <CoreServices lang={lang} t={t.services} />
      <Solutions lang={lang} t={t.solutions} />
      <Process t={t.process} />
      <Reports lang={lang} t={t.reports} />
      <CveSection lang={lang} t={t.intelligence} />
      <Technologies t={t.tech} />
      <Partners t={t.partners} />
      <CtaBanner lang={lang} t={t.cta} />
    </>
  );
}
