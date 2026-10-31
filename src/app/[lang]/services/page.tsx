import type { Metadata } from "next";
import Link from "next/link";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { CtaBanner, PageHeader, Process, ServiceCard, lineHref } from "@/components/Sections";
import { ArrowIcon, iconMap } from "@/components/Icons";

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
  const pillarName = Object.fromEntries(t.pillars.items.map((p) => [p.id, p.title]));

  return (
    <>
      <PageHeader eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

      {/* Índice de líneas */}
      <nav className="sticky top-16 z-40 border-b border-line bg-ink/90 backdrop-blur">
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {s.lines.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="block whitespace-nowrap rounded-full border border-line px-3 py-1.5 text-xs text-soft hover:border-brand hover:text-brand"
              >
                {l.name.replace("SOCZERO ", "")}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {s.lines.map((l, i) => {
        const Icon = iconMap[l.icon];
        return (
          <section key={l.id} id={l.id} className={`scroll-mt-32 ${i % 2 === 1 ? "border-y border-line bg-panel/40" : ""}`}>
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                      {String(i + 1).padStart(2, "0")} · {pillarName[l.pillar]}
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{l.name}</h2>
                    <p className="mt-2 text-muted">{l.tagline}</p>
                  </div>
                </div>
                {l.page && (
                  <Link
                    href={lineHref(lang, l)}
                    className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand hover:underline"
                  >
                    {s.explore} <ArrowIcon className="h-4 w-4" />
                  </Link>
                )}
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {l.items.map((item) => (
                  <ServiceCard key={item.id} s={item} lang={lang} t={s} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
      <Process t={t.process} />
      <CtaBanner lang={lang} t={t.cta} />
    </>
  );
}
