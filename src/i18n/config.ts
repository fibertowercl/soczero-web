export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefija rutas de assets en /public con el basePath (necesario en GitHub Pages). */
export function asset(path: string) {
  return `${basePath}${path}`;
}
