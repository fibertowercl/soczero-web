import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { contacts, getDictionary } from "@/i18n/dictionaries";
import { PageHeader } from "@/components/Sections";
import ContactForm from "@/components/ContactForm";
import { MailIcon, PhoneIcon, SirenIcon } from "@/components/Icons";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: `${t.nav.contact} | SOCZERO Networks` };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = getDictionary(lang);
  const s = t.services;
  const interests = [
    ...t.solutions.items.map((x) => ({ id: x.id, label: x.name })),
    ...[...s.core.items, ...s.specialized.items, ...s.advanced.items].map((x) => ({ id: x.id, label: x.title })),
    { id: "cve", label: t.intelligence.product.name },
  ];

  return (
    <>
      <PageHeader title={t.contact.title} subtitle={t.contact.subtitle} />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.6fr_1fr]">
        <ContactForm t={t.contact} interests={interests} to="contacto@soczero.com" />
        <aside className="space-y-4">
          <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
            <p className="flex items-center gap-2 font-display text-lg font-semibold text-red-300">
              <SirenIcon className="h-5 w-5" /> {t.contact.incidentTitle}
            </p>
            <p className="mt-1 text-sm text-soft">{t.contact.incidentBody}</p>
          </div>
          <h2 className="pt-2 font-display text-xl font-semibold">{t.contact.offices}</h2>
          {contacts.map((c) => (
            <div key={c.phone} className="rounded-2xl border border-line bg-panel p-5">
              <p className="font-display text-lg font-semibold text-brand">{c.country[lang]}</p>
              <a
                href={`tel:${c.phone.replace(/\s/g, "")}`}
                className="mt-3 flex items-center gap-3 text-soft hover:text-brand"
              >
                <PhoneIcon className="h-4 w-4" /> {c.phone}
              </a>
              <a href={`mailto:${c.email}`} className="mt-2 flex items-center gap-3 text-soft hover:text-brand">
                <MailIcon className="h-4 w-4" /> {c.email}
              </a>
            </div>
          ))}
        </aside>
      </div>
    </>
  );
}
