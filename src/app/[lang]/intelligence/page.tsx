import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { CtaBanner, SectionHeading } from "@/components/Sections";
import {
  PatchRadarCapabilities,
  PatchRadarHero,
  PatchRadarHow,
  PatchRadarScope,
  PatchRadarSources,
  PatchRadarViews,
} from "@/components/PatchRadar";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang).intelligence;
  return { title: `PatchRadar | ${t.eyebrow}`, description: t.body };
}

export default async function IntelligencePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const d = getDictionary(lang);
  const t = d.intelligence;

  return (
    <>
      <PatchRadarHero lang={lang} t={t} />
      <PatchRadarCapabilities t={t} />
      <PatchRadarHow t={t} />
      <PatchRadarViews t={t} />
      <PatchRadarSources t={t} />
      <PatchRadarScope lang={lang} t={t} />
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
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
      <CtaBanner lang={lang} t={d.cta} />
    </>
  );
}
