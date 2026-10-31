import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { contacts, getDictionary } from "@/i18n/dictionaries";
import { CtaBanner, PageHeader, Process, SectionHeading, Technologies } from "@/components/Sections";
import { CheckIcon } from "@/components/Icons";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: `${t.nav.about} | SOCZERO Networks` };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = getDictionary(lang);
  const a = t.about;

  return (
    <>
      <PageHeader title={a.title} subtitle={a.subtitle} image="infrastructure" />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading align="left" title={a.mission.title} />
          <p className="mt-5 text-lg text-muted">{a.mission.body}</p>
          <h3 className="mt-10 font-display text-xl font-semibold">{a.coverage.title}</h3>
          <p className="mt-3 text-muted">{a.coverage.body}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {contacts.map((c) => (
              <span key={c.phone} className="rounded-full border border-line bg-panel px-4 py-1.5 text-sm text-soft">
                {c.country[lang]}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold">{a.principles.title}</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {a.principles.items.map((p) => (
              <li key={p.title} className="rounded-2xl border border-line bg-panel p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <p className="mt-3 font-semibold">{p.title}</p>
                <p className="mt-1 text-sm text-muted">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="border-y border-line bg-panel/40">
        <Process t={t.process} />
      </div>
      <Technologies t={t.tech} />
      <CtaBanner lang={lang} t={t.cta} />
    </>
  );
}
