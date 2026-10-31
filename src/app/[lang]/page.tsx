import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { CtaBanner, Hero, Intro, Partners, ProductsTeaser, ServicesGrid } from "@/components/Sections";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = getDictionary(lang);
  return (
    <>
      <Hero lang={lang} t={t.hero} />
      <Intro t={t.intro} />
      <ServicesGrid lang={lang} t={t.services} />
      <ProductsTeaser lang={lang} t={t.products} />
      <Partners t={t.partners} />
      <CtaBanner lang={lang} t={t.cta} />
    </>
  );
}
