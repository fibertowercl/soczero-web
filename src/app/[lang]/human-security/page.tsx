import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { AwarenessProgram, HumanHero, HumanLoop, HumanOffer, HumanViews } from "@/components/HumanSecurity";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: `${t.human.eyebrow} | ${t.human.title}`, description: t.human.body };
}

export default async function HumanSecurityPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = getDictionary(lang);
  const line = t.services.lines.find((l) => l.id === "human")!;

  return (
    <>
      <HumanHero lang={lang} h={t.human} />
      <HumanOffer h={t.human} items={line.items} />
      <HumanViews h={t.human} />
      <HumanLoop h={t.human} />
      <AwarenessProgram lang={lang} h={t.human} />
    </>
  );
}
