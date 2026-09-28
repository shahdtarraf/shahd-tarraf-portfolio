import { skills } from "../data/skills";
import { useLocale } from "../context/LocaleContext";
import { label, ui } from "../i18n/ui";
import { tx } from "../lib/text";

export function Skills() {
  const { locale } = useLocale();

  return (
    <section id="skills" className="border-y border-line bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="kicker">{label(locale, ui.skills.title)}</p>
        <p className="mt-2 max-w-2xl text-muted">{label(locale, ui.skills.subtitle)}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <article key={group.id} className="border border-line p-5">
              <h3 className="font-display text-lg font-semibold">{tx(group.title, locale)}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-line px-2 py-1 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
