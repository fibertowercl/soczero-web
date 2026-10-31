import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHeader, ProductCard } from "@/components/Sections";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: `${t.nav.products} | SOCZERO Networks` };
}

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = getDictionary(lang);

  return (
    <>
      <PageHeader title={t.products.title} subtitle={t.products.subtitle} />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        {t.products.items.map((p) => (
          <ProductCard key={p.name} lang={lang} t={t.products} p={p} />
        ))}
      </div>
    </>
  );
}
