import Link from "next/link";
import { asset, type Locale } from "@/i18n/config";
import { BLACKMIRA_URL, type Dictionary } from "@/i18n/dictionaries";
import { ArrowIcon, CheckIcon, DownloadIcon, ExternalIcon, PlayIcon, ShieldIcon, iconMap } from "./Icons";

type H = Dictionary["human"];
type L = H["loop"];

/* ---------- Vistas ilustrativas (datos de demostración) ---------- */

const toneCls: Record<string, string> = {
  critical: "bg-red-400",
  high: "bg-orange-400",
  medium: "bg-yellow-300",
  good: "bg-brand",
  neutral: "bg-soft/40",
};

function Frame({ title, children, note }: { title: string; children: React.ReactNode; note?: string }) {
  return (
    <figure className="rounded-2xl border border-line bg-ink/70 p-5">
      <figcaption className="mb-4 flex items-center justify-between gap-3">
        <span className="text-sm font-semibold">{title}</span>
        <span className="flex shrink-0 gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand/70" />
        </span>
      </figcaption>
      {children}
      {note && <p className="mt-4 text-[11px] italic text-muted">{note}</p>}
    </figure>
  );
}

export function LearningMock({ t }: { t: L["learning"] }) {
  return (
    <Frame title={t.next}>
      <div className="rounded-xl border border-line bg-panel p-4">
        <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-brand/20 via-panel-2 to-ink">
          <PlayIcon className="h-12 w-12 text-brand" />
        </div>
        <p className="mt-4 font-display text-lg font-semibold">{t.course}</p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-line">
          <div className="h-full w-0 rounded-full bg-brand" />
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-muted">
          <span>0% {t.progress}</span>
          <span className="rounded-md bg-brand px-3 py-1 font-semibold text-ink">{t.start}</span>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {t.chips.map((c) => (
          <span key={c} className="rounded-full border border-line px-3 py-1 text-xs text-soft">
            {c}
          </span>
        ))}
      </div>
    </Frame>
  );
}

export function SimMock({ t }: { t: L["sims"] }) {
  const total = t.results.reduce((a, r) => a + r.value, 0) || 1;
  return (
    <Frame title={t.caption}>
      <div className="flex h-3 overflow-hidden rounded-full bg-line">
        {t.results.map((r) =>
          r.value ? <div key={r.label} className={toneCls[r.tone]} style={{ width: `${(r.value / total) * 100}%` }} /> : null,
        )}
      </div>
      <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {t.results.map((r) => (
          <li key={r.label} className="rounded-lg border border-line bg-panel px-3 py-2.5">
            <p className="flex items-center gap-2 text-xs text-muted">
              <span className={`h-2 w-2 rounded-full ${toneCls[r.tone]}`} /> {r.label}
            </p>
            <p className="mt-1 font-display text-2xl font-bold">{r.value}</p>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function RiskMock({ t }: { t: L["risk"] }) {
  return (
    <Frame title={t.caption}>
      <ul className="space-y-4">
        {t.areas.map((a) => (
          <li key={a.label}>
            <div className="flex justify-between text-sm">
              <span className="text-soft">{a.label}</span>
              <span className="font-semibold">{a.value}%</span>
            </div>
            <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-line">
              <div
                className={`h-full rounded-full ${a.value >= 60 ? "bg-red-400" : a.value >= 40 ? "bg-orange-400" : "bg-brand"}`}
                style={{ width: `${a.value}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function EvidenceMock({ t }: { t: L["evidence"] }) {
  return (
    <Frame title={t.title}>
      <ul className="space-y-2.5">
        {t.items.map((i) => (
          <li key={i} className="flex items-center justify-between gap-3 rounded-lg border border-line bg-panel px-3 py-3">
            <div className="flex min-w-0 items-center gap-3">
              <ShieldIcon className="h-5 w-5 shrink-0 text-brand" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{i}</p>
                <p className="text-xs text-brand">✓ {t.done}</p>
              </div>
            </div>
            <span className="flex shrink-0 items-center gap-1 rounded-md border border-line px-2 py-1 text-xs text-soft">
              <DownloadIcon className="h-3.5 w-3.5" /> PDF
            </span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

/** Vista de organización: resumen general */
export function OrgDashboardMock({ h }: { h: H }) {
  const r = h.loop.risk;
  return (
    <Frame title={h.views.org.tab} note={h.demoNote}>
      <div className="grid grid-cols-3 gap-2">
        {h.loop.sims.results
          .filter((x) => ["neutral", "high", "critical"].includes(x.tone))
          .map((x) => (
            <div key={x.label} className="rounded-lg border border-line bg-panel p-3">
              <p className="font-display text-2xl font-bold">{x.value}</p>
              <p className="flex items-center gap-1.5 text-[11px] text-muted">
                <span className={`h-1.5 w-1.5 rounded-full ${toneCls[x.tone]}`} />
                {x.label}
              </p>
            </div>
          ))}
      </div>
      <ul className="mt-4 space-y-3">
        {r.areas.map((a) => (
          <li key={a.label}>
            <div className="flex justify-between text-xs">
              <span className="text-soft">{a.label}</span>
              <span>{a.value}%</span>
            </div>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-line">
              <div className="h-full rounded-full bg-brand/80" style={{ width: `${a.value}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

/* ---------- Secciones ---------- */

function BlackMiraBadge({ h, className = "" }: { h: H; className?: string }) {
  return (
    <a
      href={BLACKMIRA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 text-xs text-muted hover:text-soft ${className}`}
    >
      <span>{h.platform}</span>
      <img src={asset("/img/blackmira-logo.png")} alt="BlackMira" width={152} height={25} className="h-5 w-auto opacity-90 group-hover:opacity-100" />
      <ExternalIcon className="h-3.5 w-3.5" />
    </a>
  );
}

/** Sección para la portada */
export function HumanTeaser({ lang, h }: { lang: Locale; h: H }) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-panel/40">
      <div className="glow absolute -left-40 top-10 h-[30rem] w-[30rem]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{h.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{h.teaser.title}</h2>
          <p className="mt-5 text-lg text-muted">{h.teaser.body}</p>
          <p className="mt-6 font-display text-xl font-semibold text-gradient">{h.teaser.motto}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/contact/?type=demo&interest=awareness-program`}
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-ink transition hover:bg-brand-dim"
            >
              {h.demo} <ArrowIcon className="h-4 w-4" />
            </Link>
            <Link
              href={`/${lang}/human-security/`}
              className="rounded-lg border border-line px-5 py-3 font-semibold text-soft transition hover:border-brand hover:text-brand"
            >
              {h.teaser.more}
            </Link>
          </div>
          <BlackMiraBadge h={h} className="mt-8" />
        </div>
        <div className="grid gap-4">
          <SimMock t={h.loop.sims} />
          <RiskMock t={h.loop.risk} />
        </div>
      </div>
    </section>
  );
}

export function HumanHero({ lang, h }: { lang: Locale; h: H }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="bg-grid absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{h.eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{h.title}</h1>
          <p className="mt-6 text-lg text-muted">{h.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/contact/?type=demo&interest=awareness-program`}
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-ink transition hover:bg-brand-dim"
            >
              {h.demo} <ArrowIcon className="h-4 w-4" />
            </Link>
            <a
              href={BLACKMIRA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-semibold text-soft transition hover:border-brand hover:text-brand"
            >
              {h.visit} <ExternalIcon className="h-4 w-4" />
            </a>
          </div>
          <BlackMiraBadge h={h} className="mt-8" />
        </div>
        <OrgDashboardMock h={h} />
      </div>
    </section>
  );
}

export function HumanOffer({ h, items }: { h: H; items: Dictionary["services"]["lines"][number]["items"] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <h2 className="font-display text-3xl font-bold tracking-tight">{h.offer.title}</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s) => {
          const Icon = iconMap[s.icon];
          return (
            <article key={s.id} className="rounded-2xl border border-line bg-panel p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function HumanViews({ h }: { h: H }) {
  const v = h.views;
  return (
    <section className="border-y border-line bg-panel/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{v.title}</h2>
          <p className="mt-4 text-lg text-muted">{v.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[v.org, v.person].map((x) => (
            <article key={x.tab} className="rounded-2xl border border-line bg-panel p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">{x.tab}</p>
              <h3 className="mt-2 font-display text-2xl font-bold">{x.title}</h3>
              <p className="mt-3 text-muted">{x.desc}</p>
              <ul className="mt-5 space-y-2 text-sm text-soft">
                {x.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HumanLoop({ h }: { h: H }) {
  const l = h.loop;
  const blocks = [
    { b: l.learning, mock: <LearningMock t={l.learning} /> },
    { b: l.sims, mock: <SimMock t={l.sims} /> },
    { b: l.risk, mock: <RiskMock t={l.risk} /> },
    { b: l.evidence, mock: <EvidenceMock t={l.evidence} /> },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{l.title}</h2>
        <p className="mt-4 text-lg text-muted">{l.subtitle}</p>
      </div>
      <div className="mt-16 space-y-16">
        {blocks.map(({ b, mock }, i) => (
          <div key={b.tag} className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-2">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                {String(i + 1).padStart(2, "0")} · {b.tag}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{b.title}</h3>
              <p className="mt-3 text-lg text-muted">{b.desc}</p>
            </div>
            <div>{mock}</div>
          </div>
        ))}
      </div>
      <p className="mt-12 text-center text-xs italic text-muted">{h.demoNote}</p>
    </section>
  );
}

export function AwarenessProgram({ lang, h }: { lang: Locale; h: H }) {
  const p = h.program;
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-brand/40 bg-panel p-6 sm:p-12">
        <div className="glow absolute -right-40 -top-40 h-[28rem] w-[28rem]" />
        <div className="relative grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{p.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">{p.title}</h2>
            <p className="mt-4 text-muted">{p.subtitle}</p>
            <Link
              href={`/${lang}/contact/?type=quote&interest=awareness-program`}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-ink transition hover:bg-brand-dim"
            >
              {p.cta} <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {p.steps.map((s, i) => (
              <li key={s} className="flex gap-3 rounded-xl border border-line bg-ink/60 p-4">
                <span className="font-display text-lg font-bold text-brand">{i + 1}</span>
                <span className="text-sm text-soft">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
