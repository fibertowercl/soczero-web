import Link from "next/link";
import { asset, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { serviceKeys } from "./serviceKeys";
import { ArrowIcon, BellIcon, CheckIcon, ShieldIcon, serviceIcons } from "./Icons";

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
    </div>
  );
}

/** Órbitas inspiradas en el ícono del logo */
function Orbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden>
      <div className="glow absolute inset-0" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full animate-spin-slow">
        <circle cx="200" cy="200" r="190" fill="none" stroke="#00ffcb" strokeOpacity=".35" strokeWidth="1.5" />
        <circle cx="390" cy="200" r="9" fill="#00ffcb" />
        <circle cx="62" cy="330" r="7" fill="#00ffcb" fillOpacity=".8" />
      </svg>
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full animate-spin-slower">
        <circle cx="200" cy="200" r="140" fill="none" stroke="#00ffcb" strokeOpacity=".5" strokeWidth="1.5" strokeDasharray="4 8" />
        <circle cx="200" cy="60" r="8" fill="#5ee7ff" />
      </svg>
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <circle cx="200" cy="200" r="92" fill="#0b1119" stroke="#00ffcb" strokeOpacity=".7" strokeWidth="2" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <ShieldIcon className="h-24 w-24 text-brand" />
      </div>
    </div>
  );
}

export function Hero({ lang, t }: { lang: Locale; t: Dictionary["hero"] }) {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            {t.badge}
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t.title1}
            <br />
            <span className="text-gradient">{t.title2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{t.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/contact/`}
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-ink transition hover:bg-brand-dim"
            >
              {t.primary} <ArrowIcon className="h-4 w-4" />
            </Link>
            <Link
              href={`/${lang}/services/`}
              className="rounded-lg border border-line px-5 py-3 font-semibold text-soft transition hover:border-brand hover:text-brand"
            >
              {t.secondary}
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {t.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-brand sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-muted sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Orbit />
      </div>
    </section>
  );
}

export function Intro({ t }: { t: Dictionary["intro"] }) {
  return (
    <section className="border-y border-line bg-panel">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{t.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{t.title}</h2>
          <p className="mt-5 text-lg text-muted">{t.body}</p>
        </div>
        <ul className="grid gap-3 self-center sm:grid-cols-2">
          {t.points.map((p) => (
            <li key={p} className="flex items-center gap-3 rounded-xl border border-line bg-panel-2 px-4 py-4 text-soft">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                <CheckIcon className="h-4 w-4" />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServicesGrid({ lang, t }: { lang: Locale; t: Dictionary["services"] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {serviceKeys.map((k) => {
          const Icon = serviceIcons[k];
          const s = t.items[k];
          return (
            <Link
              key={k}
              href={`/${lang}/services/#${k}`}
              className="group flex flex-col rounded-2xl border border-line bg-panel p-6 transition hover:-translate-y-1 hover:border-brand/60 hover:bg-panel-2"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted">{s.short}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-80 group-hover:opacity-100">
                {t.more} <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export function ProductsTeaser({ lang, t }: { lang: Locale; t: Dictionary["products"] }) {
  const p = t.items[0];
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-panel p-8 sm:p-12">
        <div className="glow absolute -right-32 -top-32 h-96 w-96" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{t.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">{t.title}</h2>
            <p className="mt-4 text-muted">{t.subtitle}</p>
          </div>
          <ProductCard lang={lang} t={t} p={p} />
        </div>
      </div>
    </section>
  );
}

export function ProductCard({
  lang,
  t,
  p,
}: {
  lang: Locale;
  t: Dictionary["products"];
  p: Dictionary["products"]["items"][number];
}) {
  return (
    <div className="rounded-2xl border border-brand/30 bg-ink/60 p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <BellIcon className="h-6 w-6" />
        </span>
        <span className="rounded-full border border-brand/40 px-3 py-1 text-xs font-medium text-brand">{t.soon}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold">{p.name}</h3>
      <p className="mt-2 text-sm text-muted">{p.desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-soft">
        {p.features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-brand" /> {f}
          </li>
        ))}
      </ul>
      <Link
        href={`/${lang}/contact/?service=cve-alerts`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
      >
        {t.notify} <ArrowIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}

export function Partners({ t }: { t: Dictionary["partners"] }) {
  const partners = [
    { name: "Artistcode", url: "https://www.artistcode.net/", logo: "/img/partner-artistcode.png", cls: "h-28" },
    { name: "Inntesec", url: "https://www.inntesec.com/", logo: "/img/partner-inntesec.png", cls: "h-12" },
  ];
  return (
    <section className="border-y border-line bg-panel">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted">{t.title}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-14">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              <img src={asset(p.logo)} alt={p.name} className={`${p.cls} w-auto`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBanner({ lang, t }: { lang: Locale; t: Dictionary["cta"] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-14 text-center text-ink sm:px-16">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{t.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-ink/80">{t.body}</p>
        <Link
          href={`/${lang}/contact/`}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 font-semibold text-white transition hover:bg-panel-2"
        >
          {t.button} <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="bg-grid absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6">
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>
      </div>
    </section>
  );
}
