import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { useLocale } from "../context/LocaleContext";
import { label, ui } from "../i18n/ui";

export function GitHubSection() {
  const { locale } = useLocale();

  return (
    <section id="github" className="border-y border-line bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="kicker">
          {label(locale, ui.github.title)}
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold">
          {`github.com/${profile.github.username}`}
        </h2>
        <dl className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="border border-line p-4">
            <dt className="text-xs uppercase text-muted">{label(locale, ui.github.repos)}</dt>
            <dd className="mt-1 font-display text-3xl">{profile.github.publicRepos}</dd>
          </div>
          <div className="border border-line p-4">
            <dt className="text-xs uppercase text-muted">{label(locale, ui.projects.count)}</dt>
            <dd className="mt-1 font-display text-3xl">{projects.length}</dd>
          </div>
          <div className="border border-line p-4">
            <dt className="text-xs uppercase text-muted">{label(locale, ui.github.languages)}</dt>
            <dd className="mt-2 text-sm">{profile.github.primaryLanguages.join(" · ")}</dd>
          </div>
        </dl>
        <p className="mt-4 max-w-2xl text-sm text-muted">{label(locale, ui.github.contributions)}</p>
        <a
          href={profile.github.url}
          className="mt-6 inline-flex bg-[#111827] px-5 py-3 text-sm font-semibold text-white hover:bg-accent hover:text-[#111827] dark:bg-accent dark:text-[#111827]"
          target="_blank"
          rel="noreferrer"
        >
          {label(locale, ui.github.button)}
        </a>
      </div>
    </section>
  );
}
