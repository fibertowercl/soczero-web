import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { contacts, getDictionary } from "@/i18n/dictionaries";
import { PageHeader } from "@/components/Sections";
import ContactForm from "@/components/ContactForm";
import { MailIcon, PhoneIcon } from "@/components/Icons";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: `${t.contact.title} | SOCZERO Networks` };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = getDictionary(lang);

  return (
    <>
      <PageHeader title={t.contact.title} subtitle={t.contact.subtitle} />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.5fr_1fr]">
        <ContactForm
          t={t.contact}
          services={t.services.items}
          to="contacto@soczero.com"
          productName={t.products.items[0].name}
        />
        <aside className="space-y-4">
          <h2 className="font-display text-xl font-semibold">{t.contact.offices}</h2>
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
