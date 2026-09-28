import { profile } from "../data/profile";
import { useLocale } from "../context/LocaleContext";
import { label, ui } from "../i18n/ui";
import { tx } from "../lib/text";

export function Experience() {
  const { locale } = useLocale();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <p className="kicker">
        {label(locale, ui.about.education)}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold">{tx(profile.education.faculty, locale)}</h2>
      <p className="mt-3 text-muted">
        {tx(profile.education.status, locale)} · {tx(profile.education.specialization, locale)}
      </p>
      <p className="mt-4 max-w-2xl text-sm text-muted">{label(locale, ui.about.note)}</p>
    </section>
  );
}
