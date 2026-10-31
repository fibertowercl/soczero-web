"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { asset, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Header({ lang, t }: { lang: Locale; t: Dictionary["nav"] }) {
  const pathname = usePathname() || `/${lang}/`;
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${lang}/`, label: t.home },
    { href: `/${lang}/services/`, label: t.services },
    { href: `/${lang}/solutions/`, label: t.solutions },
    { href: `/${lang}/intelligence/`, label: t.intelligence },
    { href: `/${lang}/about/`, label: t.about },
    { href: `/${lang}/contact/`, label: t.contact },
  ];

  const norm = (p: string) => (p.endsWith("/") ? p : `${p}/`);
  const current = norm(pathname);
  const otherLang: Locale = lang === "es" ? "en" : "es";
  const switchHref = current.replace(new RegExp(`^/${lang}/`), `/${otherLang}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${lang}/`} className="flex items-center" aria-label="SOCZERO Networks">
          <img src={asset("/img/logo.png")} alt="SOCZERO Networks" width={171} height={36} className="h-8 w-auto sm:h-9" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors hover:text-brand ${
                current === l.href ? "text-brand" : "text-soft"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={switchHref}
            className="rounded-md border border-line px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-soft hover:border-brand hover:text-brand"
            hrefLang={otherLang}
          >
            {otherLang}
          </Link>
          <Link
            href={`/${lang}/contact/?type=evaluation`}
            className="whitespace-nowrap rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-ink transition hover:bg-brand-dim"
          >
            {t.cta}
          </Link>
        </div>

        <button
          className="rounded-md p-2 text-soft lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-ink px-4 pb-6 pt-2 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-base ${current === l.href ? "text-brand" : "text-soft"}`}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-3">
            <Link
              href={switchHref}
              onClick={() => setOpen(false)}
              className="rounded-md border border-line px-3 py-2 text-xs font-semibold uppercase text-soft"
            >
              {otherLang}
            </Link>
            <Link
              href={`/${lang}/contact/`}
              onClick={() => setOpen(false)}
              className="flex-1 rounded-lg bg-brand px-4 py-2 text-center text-sm font-semibold text-ink"
            >
              {t.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
