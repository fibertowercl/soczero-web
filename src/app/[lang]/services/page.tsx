import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { CtaBanner, PageHeader, Process, SectionHeading, ServiceCard } from "@/components/Sections";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: `${t.nav.services} | SOCZERO Networks` };
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = getDictionary(lang);
  const s = t.services;
  const groups = [s.core, s.specialized, s.advanced];

  return (
    <>
      <PageHeader eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />
      {groups.map((g, gi) => (
        <section key={g.title} className={gi % 2 === 1 ? "border-y border-line bg-panel/40" : ""}>
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <SectionHeading align="left" eyebrow={String(gi + 1).padStart(2, "0")} title={g.title} subtitle={g.subtitle} />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {g.items.map((item) => (
                <ServiceCard key={item.id} s={item} lang={lang} t={s} />
              ))}
            </div>
          </div>
        </section>
      ))}
      <Process t={t.process} />
      <CtaBanner lang={lang} t={t.cta} />
    </>
  );
}
