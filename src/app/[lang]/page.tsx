import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  CtaBanner,
  CveSection,
  Hero,
  Partners,
  Pillars,
  Process,
  Reports,
  ServiceLines,
  Solutions,
} from "@/components/Sections";
import { HumanTeaser } from "@/components/HumanSecurity";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = getDictionary(lang);
  return (
    <>
      <Hero lang={lang} t={t.hero} />
      <Pillars t={t.pillars} />
      <ServiceLines lang={lang} t={t.services} pillars={t.pillars} />
      <HumanTeaser lang={lang} h={t.human} />
      <Solutions lang={lang} t={t.solutions} />
      <Process t={t.process} />
      <Reports lang={lang} t={t.reports} />
      <CveSection lang={lang} t={t.intelligence} />
      <Partners t={t.partners} />
      <CtaBanner lang={lang} t={t.cta} />
    </>
  );
}
