import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocale } from "../context/LocaleContext";
import { useTheme } from "../context/ThemeContext";
import { label, ui } from "../i18n/ui";

const links = [
  { to: "/", hash: "#about", key: "about" as const },
  { to: "/projects", key: "projects" as const },
  { to: "/", hash: "#skills", key: "skills" as const },
  { to: "/", hash: "#github", key: "github" as const },
  { to: "/", hash: "#contact", key: "contact" as const },
];

export function Navbar() {
  const { locale, setLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <a
        href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-[#111827]"
      >
        {label(locale, ui.skip)}
      </a>
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3"
        aria-label="Primary"
      >
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center bg-[#111827] text-sm text-white dark:bg-accent dark:text-[#111827]">
            ST
          </span>
          Shahd Tarraf
        </Link>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
        <div className="hidden items-center gap-5 text-sm md:flex">
          {links.map((item) =>
            item.hash ? (
              <a key={item.key} href={`/${item.hash}`} className="text-muted hover:text-accent">
                {label(locale, ui.nav[item.key])}
              </a>
            ) : (
              <NavLink
                key={item.key}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "text-accent" : "text-muted hover:text-accent"
                }
              >
                {label(locale, ui.nav[item.key])}
              </NavLink>
            ),
          )}
          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "ar" : "en")}
            className="border border-line px-2 py-1 text-xs uppercase tracking-wide"
            aria-label={locale === "en" ? "Switch to Arabic" : "Switch to English"}
          >
            {locale === "en" ? "العربية" : "EN"}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="border border-line px-2 py-1 text-xs"
            aria-label={theme === "dark" ? label(locale, ui.theme.light) : label(locale, ui.theme.dark)}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </div>
      </nav>
      {open ? (
        <div id="mobile-menu" className="border-t border-line px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {links.map((item) =>
              item.hash ? (
                <a
                  key={item.key}
                  href={`/${item.hash}`}
                  onClick={() => setOpen(false)}
                >
                  {label(locale, ui.nav[item.key])}
                </a>
              ) : (
                <NavLink key={item.key} to={item.to} onClick={() => setOpen(false)}>
                  {label(locale, ui.nav[item.key])}
                </NavLink>
              ),
            )}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setLocale(locale === "en" ? "ar" : "en")}
                className="border border-line px-3 py-2"
              >
                {locale === "en" ? "العربية" : "English"}
              </button>
              <button type="button" onClick={toggleTheme} className="border border-line px-3 py-2">
                {theme === "dark" ? label(locale, ui.theme.light) : label(locale, ui.theme.dark)}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
