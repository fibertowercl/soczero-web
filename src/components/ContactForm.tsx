"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type RequestType = keyof Dictionary["contact"]["requestTypes"];

/**
 * Formulario de solicitud de diagnóstico y cotización.
 * El sitio es estático (GitHub Pages), así que por ahora abre el cliente de
 * correo con la solicitud armada. Cuando exista backend o un servicio de
 * formularios, se reemplaza handleSubmit por un POST.
 */
export default function ContactForm({
  t,
  interests,
  to,
}: {
  t: Dictionary["contact"];
  interests: { id: string; label: string }[];
  to: string;
}) {
  const [type, setType] = useState<RequestType>("evaluation");
  const [interest, setInterest] = useState("");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const qt = q.get("type");
    if (qt && qt in t.requestTypes) setType(qt as RequestType);
    const qi = q.get("interest");
    if (qi) setInterest(qi);
    if (qt === "cve") setInterest("cve");
  }, [t.requestTypes]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return; // honeypot anti-spam
    const typeLabel = t.requestTypes[type];
    const interestLabel = interests.find((i) => i.id === interest)?.label || t.interestNone;
    const subject = `[${typeLabel}] ${f.get("company")}`;
    const body = [
      `${t.requestType}: ${typeLabel}`,
      `${t.interest}: ${interestLabel}`,
      `${t.size}: ${f.get("size")}`,
      "",
      `${t.name}: ${f.get("name")}`,
      `${t.email}: ${f.get("email")}`,
      `${t.phone}: ${f.get("phone") || "-"}`,
      `${t.company}: ${f.get("company")}`,
      "",
      String(f.get("message")),
    ].join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const input =
    "mt-1.5 w-full rounded-lg border border-line bg-ink px-4 py-2.5 text-white placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";
  const label = "block text-sm font-medium text-soft";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-line bg-panel p-6 sm:p-8">
      <fieldset>
        <legend className={label}>{t.requestType}</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {(Object.keys(t.requestTypes) as RequestType[]).map((k) => (
            <label
              key={k}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition ${
                type === k
                  ? k === "incident"
                    ? "border-red-400/60 bg-red-500/10 text-white"
                    : "border-brand/60 bg-brand/10 text-white"
                  : "border-line text-soft hover:border-soft/40"
              }`}
            >
              <input
                type="radio"
                name="type"
                value={k}
                checked={type === k}
                onChange={() => setType(k)}
                className="accent-[#00ffcb]"
              />
              {t.requestTypes[k]}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          {t.interest}
          <select value={interest} onChange={(e) => setInterest(e.target.value)} className={input}>
            <option value="">{t.interestNone}</option>
            {interests.map((i) => (
              <option key={i.id} value={i.id}>
                {i.label}
              </option>
            ))}
          </select>
        </label>
        <label className={label}>
          {t.size} *
          <select name="size" required defaultValue="" className={input}>
            <option value="" disabled>
              —
            </option>
            {t.sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className={label}>
          {t.name} *
          <input name="name" required autoComplete="name" className={input} />
        </label>
        <label className={label}>
          {t.email} *
          <input name="email" type="email" required autoComplete="email" className={input} />
        </label>
        <label className={label}>
          {t.company} *
          <input name="company" required autoComplete="organization" className={input} />
        </label>
        <label className={label}>
          {t.phone}
          <input name="phone" type="tel" autoComplete="tel" className={input} />
        </label>
      </div>

      <label className={label}>
        {t.message} *
        <textarea name="message" required rows={5} placeholder={t.messageHint} className={input} />
      </label>

      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <p className="rounded-lg border border-line bg-ink/60 px-4 py-3 text-xs text-muted">🔒 {t.confidential}</p>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="rounded-lg bg-brand px-6 py-3 font-semibold text-ink transition hover:bg-brand-dim"
        >
          {t.send}
        </button>
        <p className="text-xs text-muted">{t.note}</p>
      </div>
    </form>
  );
}
