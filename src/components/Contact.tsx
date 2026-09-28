import { profile } from "../data/profile";
import { useLocale } from "../context/LocaleContext";
import { label, ui } from "../i18n/ui";

export function Contact() {
  const { locale } = useLocale();
  const links = [
    profile.contact.email
      ? { href: `mailto:${profile.contact.email}`, text: profile.contact.email, name: label(locale, ui.contact.email) }
      : null,
    profile.contact.linkedin
      ? { href: profile.contact.linkedin, text: "linkedin.com/in/shahedtarraf", name: label(locale, ui.contact.linkedin) }
      : null,
    profile.contact.telegram
      ? { href: profile.contact.telegram, text: "t.me/Shahdtarraf44", name: label(locale, ui.contact.telegram) }
      : null,
    { href: profile.contact.github, text: "github.com/shahdtarraf", name: "GitHub" },
  ].filter((item) => item !== null);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <p className="kicker">{label(locale, ui.contact.title)}</p>
      <h2 className="mt-2 font-display text-3xl font-bold">{label(locale, ui.contact.title)}</h2>
      <p className="mt-4 max-w-2xl text-muted">{label(locale, ui.contact.body)}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {links.map((item) => (
          <li key={item.href}>
            <a
              className="block border border-line bg-card px-4 py-3 hover:border-accent"
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
            >
              <span className="block text-xs text-muted">{item.name}</span>
              <span className="font-medium">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
