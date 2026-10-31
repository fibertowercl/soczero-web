import Link from "next/link";
import { asset, type Locale } from "@/i18n/config";
import { contacts, type Dictionary } from "@/i18n/dictionaries";
import { LinkedInIcon } from "./Icons";

export default function Footer({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={asset("/img/logo.png")} alt="SOCZERO Networks" width={171} height={36} className="h-9 w-auto" />
          <p className="mt-4 text-sm text-muted">{t.footer.tagline}</p>
          <a
            href="https://www.linkedin.com/company/soczero-networks/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-soft hover:text-brand"
          >
            <LinkedInIcon className="h-5 w-5" /> LinkedIn
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t.footer.lines}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {t.services.lines.map((l) => (
              <li key={l.id}>
                <Link href={l.page ? `/${lang}/${l.page}/` : `/${lang}/services/#${l.id}`} className="hover:text-brand">
                  {l.name.replace("SOCZERO ", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t.contact.offices}</h3>
          <ul className="mt-4 grid gap-4 text-sm sm:grid-cols-3">
            {contacts.map((c) => (
              <li key={c.phone}>
                <p className="font-medium text-soft">{c.country[lang]}</p>
                <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="mt-1 block text-muted hover:text-brand">
                  {c.phone}
                </a>
                <a href={`mailto:${c.email}`} className="block text-muted hover:text-brand">
                  {c.email}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} SOCZERO Networks. {t.footer.rights}
          </p>
          <a href="https://soczero.com/aviso-de-privacidad/" className="hover:text-brand">
            {t.footer.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
}
