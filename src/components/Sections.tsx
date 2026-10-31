import Link from "next/link";
import { asset, type Locale } from "@/i18n/config";
import { technologies, type Dictionary, type IconName, type Pillar, type Service, type ServiceLine, type Solution } from "@/i18n/dictionaries";
import { ArrowIcon, BellIcon, CheckIcon, FileIcon, SearchIcon, iconMap } from "./Icons";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
    </div>
  );
}

/* ---------- Fotografías ---------- */

export type PhotoName =
  | "hero" | "human-training" | "human-phishing" | "human-team" | "process" | "infrastructure"
  | "offensive" | "detection" | "intelligence" | "resilience" | "operations" | "collage";

/** Ruta de una foto en /public/img/photos (versión -sm de 800px para tarjetas). */
export function photo(name: PhotoName, sm = false) {
  return asset(`/img/photos/${name}${sm ? "-sm" : ""}.webp`);
}

/** Foto de cada línea de servicio */
export const lineImage: Record<string, PhotoName> = {
  offensive: "offensive",
  infrastructure: "infrastructure",
  detection: "detection",
  intelligence: "intelligence",
  human: "human-training",
  resilience: "resilience",
};

/** Foto de fondo decorativa con degradado para que el texto se lea. */
export function BgPhoto({ name, position = "object-center", fade = "bg-gradient-to-b from-ink/75 via-ink/60 to-ink" }: { name: PhotoName; position?: string; fade?: string }) {
  return (
    <>
      <img src={photo(name)} alt="" aria-hidden className={`absolute inset-0 h-full w-full object-cover ${position}`} />
      <div className={`absolute inset-0 ${fade}`} aria-hidden />
    </>
  );
}

export function PageHeader({ eyebrow, title, subtitle, image }: { eyebrow?: string; title: string; subtitle: string; image?: PhotoName }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {image ? <BgPhoto name={image} /> : <div className="bg-grid absolute inset-0" />}
      <div className={`relative mx-auto max-w-7xl px-4 text-center sm:px-6 ${image ? "py-24 sm:py-32" : "py-20"}`}>
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>}
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>
      </div>
    </section>
  );
}

/* ---------- Hero ---------- */

const sevCls = {
  critical: "bg-red-500/15 text-red-300 border-red-500/30",
  high: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  medium: "bg-yellow-500/15 text-yellow-200 border-yellow-500/30",
} as const;

/** Vista previa de hallazgos de un informe: muestra lo que el cliente recibe. */
function ReportPreview({ lang }: { lang: Locale }) {
  const es = lang === "es";
  const rows = [
    { lvl: "critical" as const, sev: es ? "Crítica" : "Critical", t: es ? "OpenSSH expuesto con versión vulnerable" : "Exposed OpenSSH with vulnerable version" },
    { lvl: "high" as const, sev: es ? "Alta" : "High", t: es ? "MFA no aplicado a cuentas administrativas" : "MFA not enforced on admin accounts" },
    { lvl: "medium" as const, sev: es ? "Media" : "Medium", t: es ? "TLS 1.0 habilitado en sitio público" : "TLS 1.0 enabled on public site" },
  ];
  const foot = es ? ["Evidencia", "Riesgo", "Corrección"] : ["Evidence", "Risk", "Remediation"];
  return (
    <div className="relative" aria-hidden>
      <div className="glow absolute -inset-10" />
      <div className="relative rounded-2xl border border-line bg-panel/90 p-5 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center justify-between border-b border-line pb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
              <SearchIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Security Assessment</p>
              <p className="text-xs text-muted">srv-web-01 · 10.0.4.12</p>
            </div>
          </div>
          <span className="rounded-full border border-brand/40 px-2.5 py-0.5 text-[11px] font-medium text-brand">Demo</span>
        </div>
        <ul className="mt-4 space-y-2.5">
          {rows.map((r) => (
            <li key={r.t} className="flex items-center gap-3 rounded-lg border border-line bg-ink/60 px-3 py-2.5">
              <span className={`w-16 shrink-0 rounded border px-1.5 py-0.5 text-center text-[11px] font-semibold ${sevCls[r.lvl]}`}>
                {r.sev}
              </span>
              <span className="truncate text-sm text-soft">{r.t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {foot.map((k, i) => (
            <div key={k} className="rounded-lg bg-panel-2 px-2 py-2">
              <p className="font-display text-sm font-bold text-brand">{i === 1 ? "CVSS" : "✓"}</p>
              <p className="text-[11px] text-muted">{k}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero({ lang, t }: { lang: Locale; t: Dictionary["hero"] }) {
  return (
    <section className="relative overflow-hidden">
      <BgPhoto
        name="hero"
        position="object-[70%_center]"
        fade="bg-gradient-to-r from-ink via-ink/85 to-ink/40 max-lg:bg-ink/80"
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">{t.eyebrow}</p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl xl:text-[3.25rem]">
            {t.lines.map((l, i) => (
              <span key={l} className={`block ${i === t.lines.length - 1 ? "text-gradient" : ""}`}>
                {l}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{t.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/contact/?type=evaluation`}
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
          <ul className="mt-10 flex flex-col gap-3 border-t border-line pt-8 text-sm text-soft sm:flex-row sm:flex-wrap sm:gap-x-8">
            {t.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-brand" /> {h}
              </li>
            ))}
          </ul>
        </div>
        <ReportPreview lang={lang} />
      </div>
    </section>
  );
}

/* ---------- Servicios ---------- */

export function ServiceCard({
  s,
  lang,
  t,
  compact = false,
}: {
  s: Service;
  lang: Locale;
  t: Dictionary["services"];
  compact?: boolean;
}) {
  const Icon = iconMap[s.icon];
  return (
    <article
      id={compact ? undefined : s.id}
      className="flex h-full scroll-mt-24 flex-col rounded-2xl border border-line bg-panel p-6 transition hover:border-brand/50"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
      <p className="mt-2 text-sm text-muted">{s.desc}</p>
      {s.note && !compact && <p className="mt-3 text-xs italic text-soft/80">{s.note}</p>}
      <div className="mt-5 flex-1" />
      <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
          <FileIcon className="h-4 w-4" /> {t.deliverable}
        </p>
        <p className="mt-1.5 text-sm text-soft">{s.deliverable}</p>
      </div>
      {!compact && (
        <Link
          href={`/${lang}/contact/?type=quote&interest=${s.id}`}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
        >
          {t.quote} <ArrowIcon className="h-4 w-4" />
        </Link>
      )}
    </article>
  );
}

const pillarIcon: Record<Pillar, IconName> = { tech: "shield", people: "users", threats: "radar" };

/** Tecnología · Personas · Amenazas */
export function Pillars({ t }: { t: Dictionary["pillars"] }) {
  return (
    <section className="border-y border-line bg-panel">
      <div className="mx-auto grid max-w-7xl gap-px px-4 sm:px-6 md:grid-cols-3">
        {t.items.map((p) => {
          const Icon = iconMap[pillarIcon[p.id]];
          return (
            <div key={p.id} className="flex items-start gap-4 py-8 md:px-6 md:first:pl-0">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand/40 text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-xl font-bold">{p.title}</p>
                <p className="mt-1 text-sm text-muted">{p.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function lineHref(lang: Locale, l: ServiceLine) {
  return l.page ? `/${lang}/${l.page}/` : `/${lang}/services/#${l.id}`;
}

export function ServiceLines({ lang, t, pillars }: { lang: Locale; t: Dictionary["services"]; pillars: Dictionary["pillars"] }) {
  const pillarName = Object.fromEntries(pillars.items.map((p) => [p.id, p.title])) as Record<Pillar, string>;
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.lines.map((l) => {
          const Icon = iconMap[l.icon];
          return (
            <Link
              key={l.id}
              href={lineHref(lang, l)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-panel transition hover:-translate-y-1 hover:border-brand/60"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={photo(lineImage[l.id], true)}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" aria-hidden />
              </div>
              <div className="relative -mt-6 flex flex-1 flex-col px-6 pb-6">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-line px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-muted">
                  {pillarName[l.pillar]}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">
                <span className="text-muted">SOCZERO</span> {l.name.replace("SOCZERO ", "")}
              </h3>
              <p className="mt-2 text-sm text-muted">{l.tagline}</p>
              <ul className="mt-4 flex-1 space-y-1.5 text-sm text-soft">
                {l.items.map((s) => (
                  <li key={s.id} className="flex gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {s.title}
                  </li>
                ))}
              </ul>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                {t.explore} <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <Link
          href={`/${lang}/services/`}
          className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-semibold text-soft transition hover:border-brand hover:text-brand"
        >
          {t.viewAll} <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/* ---------- Soluciones / paquetes ---------- */

export function SolutionCard({ s, lang, t }: { s: Solution; lang: Locale; t: Dictionary["solutions"] }) {
  return (
    <article
      id={s.id}
      className={`relative flex scroll-mt-24 flex-col rounded-2xl border p-6 ${
        s.featured ? "border-brand/60 bg-panel-2 shadow-[0_0_40px_-12px_rgba(0,255,203,0.35)]" : "border-line bg-panel"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-brand">{s.audience}</p>
      <h3 className="mt-2 font-display text-xl font-bold">{s.name}</h3>
      <p className="mt-2 text-sm text-muted">{s.desc}</p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-soft">{t.includes}</p>
      <ul className="mt-3 flex-1 space-y-2 text-sm text-soft">
        {s.includes.map((i) => (
          <li key={i} className="flex gap-2">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {i}
          </li>
        ))}
      </ul>
      <Link
        href={`/${lang}/contact/?type=quote&interest=${s.id}`}
        className={`mt-6 rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition ${
          s.featured ? "bg-brand text-ink hover:bg-brand-dim" : "border border-line text-soft hover:border-brand hover:text-brand"
        }`}
      >
        {t.quote}
      </Link>
    </article>
  );
}

export function Solutions({ lang, t, heading = true }: { lang: Locale; t: Dictionary["solutions"]; heading?: boolean }) {
  return (
    <section className={heading ? "border-y border-line bg-panel/40" : ""}>
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        {heading && <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />}
        <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ${heading ? "mt-14" : ""}`}>
          {t.items.map((s) => (
            <SolutionCard key={s.id} s={s} lang={lang} t={t} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          <Link href={`/${lang}/contact/?type=quote`} className="hover:text-brand">
            {t.custom} <span className="text-brand">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}

/* ---------- Proceso ---------- */

export function Process({ t }: { t: Dictionary["process"] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <div className="relative mt-12 overflow-hidden rounded-3xl border border-line">
        <img src={photo("process")} alt="" loading="lazy" className="h-56 w-full object-cover sm:h-72 lg:h-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" aria-hidden />
      </div>
      <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
        <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-brand/30 md:block" aria-hidden />
        {t.steps.map((s, i) => (
          <li key={s.title} className="relative text-center">
            <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-brand/50 bg-ink font-display text-lg font-bold text-brand">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mx-auto mt-2 max-w-xs text-sm text-muted">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- Informes de ejemplo ---------- */

export function Reports({ lang, t }: { lang: Locale; t: Dictionary["reports"] }) {
  return (
    <section className="border-y border-line bg-panel/40">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.items.map((r) => (
            <article key={r.title} className="rounded-2xl border border-line bg-panel p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <FileIcon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">{r.title}</h3>
              </div>
              <ol className="mt-5 space-y-2 border-l border-line pl-4 text-sm text-soft">
                {r.sections.map((s, i) => (
                  <li key={s}>
                    <span className="mr-2 font-mono text-xs text-muted">{i + 1}.</span>
                    {s}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            href={`/${lang}/contact/?type=report`}
            className="inline-flex items-center gap-2 rounded-lg border border-brand/60 px-5 py-3 font-semibold text-brand transition hover:bg-brand/10"
          >
            {t.cta} <ArrowIcon className="h-4 w-4" />
          </Link>
          <p className="text-xs text-muted">{t.note}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Tecnologías ---------- */

export function Technologies({ t }: { t: Dictionary["tech"] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
        {technologies.map((tech) => (
          <li key={tech} className="rounded-full border border-line bg-panel px-4 py-2 font-mono text-sm text-soft">
            {tech}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-xs text-muted">{t.note}</p>
    </section>
  );
}

/* ---------- CVE Intelligence ---------- */

export function CvePanel({ p }: { p: Dictionary["intelligence"]["product"]["panel"] }) {
  return (
    <figure className="rounded-2xl border border-line bg-ink/70 p-5">
      <figcaption className="flex items-center justify-between">
        <span className="text-sm font-semibold">{p.title}</span>
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand/70" />
        </span>
      </figcaption>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {p.stats.map((s, i) => (
          <div key={s.label} className="rounded-xl border border-line bg-panel p-3">
            <p className={`font-display text-2xl font-bold ${i === 1 ? "text-red-300" : "text-brand"}`}>{s.value}</p>
            <p className="text-xs text-muted">{s.label}</p>
          </div>
        ))}
      </div>
      <table className="mt-4 w-full text-left text-sm">
        <thead>
          <tr className="text-xs uppercase tracking-wider text-muted">
            {p.cols.map((c) => (
              <th key={c} className="pb-2 font-medium">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {p.rows.map((r) => (
            <tr key={r.asset} className="border-t border-line">
              <td className="py-2.5 pr-2 text-soft">{r.asset}</td>
              <td className="py-2.5 pr-2">
                <span className={`rounded border px-1.5 py-0.5 text-xs font-semibold ${sevCls[r.level as keyof typeof sevCls]}`}>
                  {r.risk}
                </span>
              </td>
              <td className="py-2.5 text-muted">{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-[11px] italic text-muted">{p.disclaimer}</p>
    </figure>
  );
}

export function CveSection({ lang, t, heading = true }: { lang: Locale; t: Dictionary["intelligence"]; heading?: boolean }) {
  const p = t.product;
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-panel p-6 sm:p-12">
        <div className="glow absolute -right-40 -top-40 h-[28rem] w-[28rem]" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            {heading && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{t.eyebrow}</p>}
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <h2 className="font-display text-3xl font-bold tracking-tight">{p.name}</h2>
              <span className="rounded-full border border-brand/40 px-3 py-1 text-xs font-medium text-brand">{p.badge}</span>
            </div>
            <p className="mt-4 text-muted">{p.desc}</p>
            <ul className="mt-6 space-y-2.5 text-sm text-soft">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <BellIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {f}
                </li>
              ))}
            </ul>
            <Link
              href={`/${lang}/contact/?type=cve`}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-ink transition hover:bg-brand-dim"
            >
              {p.cta} <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <CvePanel p={p.panel} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Partners y CTA ---------- */

export function Partners({ t }: { t: Dictionary["partners"] }) {
  const partners = [
    { name: "Artistcode", url: "https://www.artistcode.net/", logo: "/img/partner-artistcode.png", cls: "h-28" },
    { name: "Inntesec", url: "https://www.inntesec.com/", logo: "/img/partner-inntesec.png", cls: "h-12" },
  ];
  return (
    <section className="border-y border-line bg-panel">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted">{t.title}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-14">
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
          href={`/${lang}/contact/?type=evaluation`}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 font-semibold text-white transition hover:bg-panel-2"
        >
          {t.button} <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
