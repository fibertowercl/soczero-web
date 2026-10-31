import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { PATCHRADAR_URL, type Dictionary } from "@/i18n/dictionaries";
import { ArrowIcon, CheckIcon, ExternalIcon, MailIcon, RadarIcon, SparkIcon, iconMap } from "./Icons";
import { BgPhoto, sevCls, type Severity } from "./Sections";

type T = Dictionary["intelligence"];
type M = T["mock"];

/* ---------- Marca ---------- */

export function PatchRadarMark({ t, className = "" }: { t: T; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/40 bg-brand/10 text-brand">
        <RadarIcon className="h-6 w-6" />
      </span>
      <div>
        <p className="font-display text-xl font-bold leading-none">PatchRadar</p>
        <p className="mt-1 text-xs text-muted">{t.tagline}</p>
      </div>
    </div>
  );
}

/* ---------- Vistas ilustrativas ---------- */

function Window({ title, children, note }: { title: string; children: React.ReactNode; note?: string }) {
  return (
    <figure className="rounded-2xl border border-line bg-ink/80 p-5 shadow-2xl shadow-black/40 backdrop-blur">
      <figcaption className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-semibold">
          <RadarIcon className="h-4 w-4 text-brand" /> {title}
        </span>
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand/70" />
        </span>
      </figcaption>
      <div className="mt-4">{children}</div>
      {note && <p className="mt-3 text-[11px] italic text-muted">{note}</p>}
    </figure>
  );
}

const statText: Record<Severity, string> = {
  critical: "text-red-300",
  high: "text-orange-300",
  medium: "text-yellow-200",
  low: "text-sky-300",
};

export function DashboardMock({ m }: { m: M }) {
  return (
    <Window title={m.dashTitle} note={m.disclaimer}>
      <div className="grid grid-cols-4 gap-2">
        {m.stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-line bg-panel px-2 py-2.5 text-center">
            <p className={`font-display text-xl font-bold ${statText[s.level as Severity]}`}>{s.value}</p>
            <p className="text-[11px] text-muted">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-1.5 overflow-hidden" aria-hidden>
        {m.filters.map((f, i) => (
          <span
            key={f}
            className={`whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[11px] ${
              i === 0 ? "border-brand/50 bg-brand/10 text-brand" : "border-line text-muted"
            }`}
          >
            {f}
          </span>
        ))}
      </div>
      <ul className="mt-3 space-y-2">
        {m.rows.map((r) => (
          <li key={r.title} className="flex items-center gap-3 rounded-lg border border-line bg-panel/60 px-3 py-2">
            <span className={`w-14 shrink-0 rounded border px-1 py-0.5 text-center text-[10px] font-semibold ${sevCls[r.level as Severity]}`}>
              {r.sev}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] text-soft">{r.title}</span>
              <span className="block text-[11px] text-muted">
                {r.id ? <span className="font-mono">{r.id}</span> : <span className="text-brand">{m.newsOnly}</span>} · {r.src} {m.sources}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Window>
  );
}

export function DetailMock({ m }: { m: M }) {
  const r = m.rows[0];
  return (
    <Window title={r.id} note={m.disclaimer}>
      <div className="flex items-center gap-2">
        <span className={`rounded border px-1.5 py-0.5 text-[11px] font-semibold ${sevCls[r.level as Severity]}`}>{r.sev}</span>
        <span className="text-sm text-soft">{r.title}</span>
      </div>
      <div className="mt-4 rounded-xl border border-brand/30 bg-brand/5 p-4">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
          <SparkIcon className="h-4 w-4" /> {m.detail.summary}
        </p>
        <p className="mt-2 text-sm text-soft">{m.detail.summaryText}</p>
      </div>
      <div className="mt-3 rounded-xl border border-line bg-panel p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">{m.detail.remediation}</p>
        <ol className="mt-2 space-y-1.5 text-sm text-soft">
          {m.detail.steps.map((s, i) => (
            <li key={s} className="flex gap-2">
              <span className="font-semibold text-brand">{i + 1}.</span> {s}
            </li>
          ))}
        </ol>
      </div>
    </Window>
  );
}

export function EmailMock({ m }: { m: M }) {
  return (
    <Window title={m.email.subject} note={m.disclaimer}>
      <div className="flex items-center gap-3 border-b border-line pb-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
          <MailIcon className="h-4 w-4" />
        </span>
        <p className="font-display text-lg font-semibold">{m.email.line}</p>
      </div>
      <ul className="mt-3 space-y-2">
        {m.rows.slice(0, 3).map((r) => (
          <li key={r.title} className="flex items-center gap-2 text-sm">
            <span className={`h-2 w-2 shrink-0 rounded-full ${r.level === "critical" ? "bg-red-400" : "bg-orange-400"}`} />
            <span className="truncate text-soft">{r.title}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 flex items-center gap-2 rounded-lg bg-panel px-3 py-2 text-xs text-muted">
        <SparkIcon className="h-4 w-4 text-brand" /> {m.email.ai}
      </p>
    </Window>
  );
}

/* ---------- Secciones ---------- */

function Ctas({ lang, t, className = "" }: { lang: Locale; t: T; className?: string }) {
  return (
    <div className={`mt-8 flex flex-wrap gap-3 ${className}`}>
      <Link
        href={`/${lang}/contact/?type=cve`}
        className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-ink transition hover:bg-brand-dim"
      >
        {t.cta} <ArrowIcon className="h-4 w-4" />
      </Link>
      {PATCHRADAR_URL && (
        <a
          href={PATCHRADAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-semibold text-soft transition hover:border-brand hover:text-brand"
        >
          PatchRadar <ExternalIcon className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function Status({ t }: { t: T }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-brand/40 px-3 py-1 text-xs font-medium text-brand">
      <span className="h-2 w-2 rounded-full bg-brand" /> {t.status}
    </p>
  );
}

/** Sección para la portada */
export function PatchRadarTeaser({ lang, t }: { lang: Locale; t: T }) {
  return (
    <section className="relative overflow-hidden">
      <div className="glow absolute -right-40 top-10 h-[30rem] w-[30rem]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div className="lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{t.eyebrow}</p>
          <PatchRadarMark t={t} className="mt-5" />
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">{t.teaser.title}</h2>
          <p className="mt-5 text-lg text-muted">{t.teaser.body}</p>
          <div className="mt-6">
            <Status t={t} />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/contact/?type=cve`}
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-ink transition hover:bg-brand-dim"
            >
              {t.cta} <ArrowIcon className="h-4 w-4" />
            </Link>
            <Link
              href={`/${lang}/intelligence/`}
              className="rounded-lg border border-line px-5 py-3 font-semibold text-soft transition hover:border-brand hover:text-brand"
            >
              {t.more}
            </Link>
          </div>
        </div>
        <DashboardMock m={t.mock} />
      </div>
    </section>
  );
}

export function PatchRadarHero({ lang, t }: { lang: Locale; t: T }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <BgPhoto name="intelligence" fade="bg-gradient-to-r from-ink via-ink/85 to-ink/50 max-lg:bg-ink/85" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{t.eyebrow}</p>
          <PatchRadarMark t={t} className="mt-5" />
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{t.title}</h1>
          <p className="mt-6 text-lg text-muted">{t.body}</p>
          <div className="mt-6">
            <Status t={t} />
          </div>
          <Ctas lang={lang} t={t} />
        </div>
        <DashboardMock m={t.mock} />
      </div>
    </section>
  );
}

export function PatchRadarCapabilities({ t }: { t: T }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <h2 className="font-display text-3xl font-bold tracking-tight">{t.capabilities.title}</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.capabilities.items.map((c) => {
          const Icon = iconMap[c.icon];
          return (
            <article key={c.title} className="rounded-2xl border border-line bg-panel p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted">{c.desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function PatchRadarHow({ t }: { t: T }) {
  const h = t.how;
  return (
    <section className="border-y border-line bg-panel/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{h.title}</h2>
          <p className="mt-4 text-lg text-muted">{h.subtitle}</p>
        </div>
        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-brand/30 lg:block" aria-hidden />
          {h.steps.map((s, i) => (
            <li key={s.title} className="relative text-center">
              <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-brand/50 bg-ink font-display text-lg font-bold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-muted">{s.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-brand/30 bg-brand/5 p-6">
          <p className="font-display text-lg font-semibold">
            <span className="mr-2">📰</span>
            {h.early.title}
          </p>
          <p className="mt-2 text-soft">{h.early.desc}</p>
        </div>
      </div>
    </section>
  );
}

export function PatchRadarViews({ t }: { t: T }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-2">
        <DetailMock m={t.mock} />
        <EmailMock m={t.mock} />
      </div>
      <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted">⚠️ {t.aiNote}</p>
    </section>
  );
}

export function PatchRadarSources({ t }: { t: T }) {
  const s = t.sources;
  return (
    <section className="border-y border-line bg-panel/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight">{s.title}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {s.groups.map((g) => (
            <div key={g.name} className="rounded-2xl border border-line bg-panel p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                {g.name} · {g.items.length}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="rounded-lg border border-line bg-ink/60 px-3 py-1.5 text-sm text-soft">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted">{s.note}</p>
      </div>
    </section>
  );
}

export function PatchRadarScope({ lang, t }: { lang: Locale; t: T }) {
  const s = t.scope;
  const r = t.roadmap;
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <h2 className="font-display text-3xl font-bold tracking-tight">{s.title}</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-brand/40 bg-panel p-6">
          <p className="font-display text-lg font-semibold text-brand">{s.is.title}</p>
          <ul className="mt-4 space-y-2 text-soft">
            {s.is.items.map((i) => (
              <li key={i} className="flex gap-2">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand" /> {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-line bg-panel p-6">
          <p className="font-display text-lg font-semibold text-soft">{s.isNot.title}</p>
          <ul className="mt-4 space-y-2 text-muted">
            {s.isNot.items.map((i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-0.5 w-4 shrink-0 text-center">✕</span> {i}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-4 text-sm text-soft">
            {s.cross}{" "}
            <Link href={`/${lang}/services/#offensive`} className="font-semibold text-brand hover:underline">
              {s.crossLink} →
            </Link>
          </p>
        </div>
      </div>
      <div className="mt-5 rounded-2xl border border-dashed border-line p-6">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <p className="font-display text-lg font-semibold">{r.title}</p>
          <p className="text-sm text-muted">{r.subtitle}</p>
        </div>
        <ul className="mt-4 grid gap-2 text-sm text-soft sm:grid-cols-2">
          {r.items.map((i) => (
            <li key={i} className="flex gap-2">
              <span className="text-muted">○</span> {i}
            </li>
          ))}
        </ul>
      </div>
      <Ctas lang={lang} t={t} className="mt-12 justify-center" />
    </section>
  );
}
