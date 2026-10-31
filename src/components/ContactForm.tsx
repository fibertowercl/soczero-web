"use client";

import { useEffect, useState } from "react";
import type { Dictionary, ServiceKey } from "@/i18n/dictionaries";
import { serviceKeys } from "./serviceKeys";

/**
 * Formulario de contacto. Por ahora el sitio es estático (GitHub Pages), así que
 * abre el cliente de correo con el mensaje armado. Cuando tengamos backend
 * (o un servicio como Formspree), se reemplaza handleSubmit por un POST.
 */
export default function ContactForm({
  t,
  services,
  to,
  productName,
}: {
  t: Dictionary["contact"];
  services: Dictionary["services"]["items"];
  to: string;
  productName: string;
}) {
  const [service, setService] = useState("");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("service");
    if (q) setService(q);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return; // honeypot anti-spam
    const svcLabel =
      service === "cve-alerts"
        ? productName
        : services[service as ServiceKey]?.title || t.serviceOther;
    const subject = `[soczeronetworks.com] ${svcLabel} - ${f.get("company")}`;
    const body = [
      `${t.name}: ${f.get("name")}`,
      `${t.email}: ${f.get("email")}`,
      `${t.phone}: ${f.get("phone") || "-"}`,
      `${t.company}: ${f.get("company")}`,
      `${t.service}: ${svcLabel}`,
      "",
      String(f.get("message")),
    ].join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const input =
    "mt-1.5 w-full rounded-lg border border-line bg-ink px-4 py-2.5 text-white placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";
  const label = "block text-sm font-medium text-soft";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-line bg-panel p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          {t.name} *
          <input name="name" required autoComplete="name" className={input} />
        </label>
        <label className={label}>
          {t.email} *
          <input name="email" type="email" required autoComplete="email" className={input} />
        </label>
        <label className={label}>
          {t.phone}
          <input name="phone" type="tel" autoComplete="tel" className={input} />
        </label>
        <label className={label}>
          {t.company} *
          <input name="company" required autoComplete="organization" className={input} />
        </label>
      </div>
      <label className={label}>
        {t.service}
        <select value={service} onChange={(e) => setService(e.target.value)} className={input}>
          <option value="">{t.serviceOther}</option>
          {serviceKeys.map((k) => (
            <option key={k} value={k}>
              {services[k].title}
            </option>
          ))}
          <option value="cve-alerts">{productName}</option>
        </select>
      </label>
      <label className={label}>
        {t.message} *
        <textarea name="message" required rows={5} className={input} />
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <button
        type="submit"
        className="w-full rounded-lg bg-brand px-6 py-3 font-semibold text-ink transition hover:bg-brand-dim sm:w-auto"
      >
        {t.send}
      </button>
      <p className="text-xs text-muted">{t.note}</p>
    </form>
  );
}
