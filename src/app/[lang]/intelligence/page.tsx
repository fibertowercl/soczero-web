import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { CveSection, PageHeader, SectionHeading } from "@/components/Sections";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: `${t.nav.intelligence} | SOCZERO Networks` };
}

export default async function IntelligencePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = getDictionary(lang).intelligence;

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <CveSection lang={lang} t={t} heading={false} />
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <SectionHeading align="left" title={t.posts.title} subtitle={t.posts.subtitle} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {t.posts.topics.map((p) => (
            <article key={p.title} className="rounded-2xl border border-line bg-panel p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">{p.tag}</span>
                <span className="text-xs text-muted">{t.posts.soon}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
