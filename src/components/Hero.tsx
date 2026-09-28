import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { useLocale } from "../context/LocaleContext";
import { label, ui } from "../i18n/ui";
import { tx } from "../lib/text";

export function Hero() {
  const { locale } = useLocale();

  return (
    <section className="grid-bg border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.4fr_0.8fr] md:items-center md:py-24">
        <div>
          <p className="kicker mb-4">
            {label(locale, ui.hero.kicker)}
          </p>
          <h1 className="font-display text-4xl leading-tight font-bold md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-muted md:text-xl">{tx(profile.title, locale)}</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
            {tx(profile.hero, locale)}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="bg-accent px-5 py-3 text-sm font-semibold text-[#111827] hover:bg-accent-dark"
            >
              {label(locale, ui.hero.viewProjects)}
            </Link>
            <a
              href={profile.github.url}
              className="border border-ink px-5 py-3 text-sm font-semibold hover:border-accent hover:text-accent dark:border-white"
              rel="noreferrer"
              target="_blank"
            >
              {label(locale, ui.hero.github)}
            </a>
            <a href="#contact" className="px-5 py-3 text-sm font-semibold text-muted hover:text-accent">
              {label(locale, ui.hero.contact)}
            </a>
          </div>
        </div>
        <div className="justify-self-center">
          <img
            src={profile.github.avatar}
            alt={`${profile.fullName} GitHub avatar`}
            width={280}
            height={280}
            className="h-56 w-56 border border-line object-cover md:h-72 md:w-72"
          />
          <p className="mt-3 text-center text-xs text-muted">{profile.fullName}</p>
        </div>
      </div>
    </section>
  );
}
