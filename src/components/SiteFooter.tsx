import { Link } from "@tanstack/react-router";
import binaaWordmark from "@/assets/binaa-wordmark.png";
import { useLanguage } from "@/i18n/LanguageProvider";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 text-[12px] md:grid-cols-4">
        <div>
          <Link to="/" className="mb-4 inline-block">
            <img src={binaaWordmark} alt="binaa LAB" className="h-7 w-auto object-contain" />
          </Link>
          <p className="max-w-[220px] leading-6 text-muted-foreground">{t("footer.description")}</p>
        </div>

        <div>
          <h4 className="mb-3 font-bold">{t("footer.menu")}</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/courses" className="hover:text-coral">
                {t("nav.courses")}
              </Link>
            </li>
            <li>
              <Link to="/templates" className="hover:text-coral">
                {t("nav.templates")}
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-coral">
                {t("nav.blog")}
              </Link>
            </li>
            <li>
              <Link to="/ai-design" className="hover:text-coral">
                {t("nav.aiDesign")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-bold">{t("footer.courses")}</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/courses" className="hover:text-coral">
                {t("footer.aiCourse")}
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-coral">
                {t("footer.enscapeCourse")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-bold">{t("footer.policies")}</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/terms" className="hover:text-coral">
                {t("footer.terms")}
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-coral">
                {t("footer.privacy")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-coral">
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-[11px] text-muted-foreground">
        {t("footer.rights")}
      </div>
    </footer>
  );
}
