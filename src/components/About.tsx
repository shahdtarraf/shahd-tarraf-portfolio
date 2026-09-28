import { profile } from "../data/profile";
import { useLocale } from "../context/LocaleContext";
import { label, ui } from "../i18n/ui";
import { tx } from "../lib/text";

export function About() {
  const { locale } = useLocale();

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <p className="kicker">{label(locale, ui.about.title)}</p>
      <h2 className="mt-2 font-display text-3xl font-bold">{profile.fullName}</h2>
      <p className="mt-4 max-w-3xl leading-7 text-muted">{tx(profile.about, locale)}</p>
      <dl className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="border border-line bg-card p-5">
          <dt className="text-xs uppercase tracking-wide text-muted">{label(locale, ui.about.education)}</dt>
          <dd className="mt-2 font-medium">
            {tx(profile.education.status, locale)} — {tx(profile.education.faculty, locale)}
          </dd>
        </div>
        <div className="border border-line bg-card p-5">
          <dt className="text-xs uppercase tracking-wide text-muted">{label(locale, ui.about.specialization)}</dt>
          <dd className="mt-2 font-medium">{tx(profile.education.specialization, locale)}</dd>
        </div>
        <div className="border border-line bg-card p-5">
          <dt className="text-xs uppercase tracking-wide text-muted">{label(locale, ui.about.location)}</dt>
          <dd className="mt-2 font-medium">{tx(profile.location, locale)}</dd>
        </div>
      </dl>
    </section>
  );
}
