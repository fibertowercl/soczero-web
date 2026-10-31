import type { Metadata } from "next";
import Link from "next/link";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { CtaBanner, PageHeader } from "@/components/Sections";
import { serviceKeys } from "@/components/serviceKeys";
import { ArrowIcon, CheckIcon, serviceIcons } from "@/components/Icons";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: `${t.servicesPage.title} | SOCZERO Networks` };
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = getDictionary(lang);

  return (
    <>
      <PageHeader title={t.servicesPage.title} subtitle={t.servicesPage.subtitle} />
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-20 sm:px-6">
        {serviceKeys.map((k, i) => {
          const s = t.services.items[k];
          const Icon = serviceIcons[k];
          return (
            <article
              key={k}
              id={k}
              className="scroll-mt-24 grid gap-8 rounded-2xl border border-line bg-panel p-6 sm:p-10 lg:grid-cols-[1fr_1fr]"
            >
              <div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold sm:text-3xl">{s.title}</h2>
                <p className="mt-4 text-muted">{s.long}</p>
                <Link
                  href={`/${lang}/contact/?service=${k}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
                >
                  {t.servicesPage.cta} <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
              <ul className="space-y-3 self-center">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3 rounded-xl border border-line bg-panel-2 px-4 py-3 text-soft">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
      <CtaBanner lang={lang} t={t.cta} />
    </>
  );
}
