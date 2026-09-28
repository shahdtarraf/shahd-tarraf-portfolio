import { profile } from "../data/profile";
import { useLocale } from "../context/LocaleContext";
import { label, ui } from "../i18n/ui";

export function Footer() {
  const { locale } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <p>{label(locale, ui.footer.built)}</p>
      </div>
    </footer>
  );
}
