import { Link } from "react-router-dom";
import { useLocale } from "../context/LocaleContext";
import { label, ui } from "../i18n/ui";

export function NotFoundPage() {
  const { locale } = useLocale();

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold">{label(locale, ui.details.notFound)}</h1>
      <Link to="/projects" className="mt-4 inline-block text-accent">
        {label(locale, ui.details.back)}
      </Link>
    </section>
  );
}
