import { Link } from "@tanstack/react-router";
import { Menu, Sparkles, UserRound } from "lucide-react";
import binaaWordmark from "@/assets/binaa-wordmark.png";
import { AuthDialog } from "@/components/AuthDialog";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useStaticPageTranslations } from "@/i18n/staticTranslations";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { to: "/courses", labelKey: "nav.courses" },
  { to: "/templates", labelKey: "nav.templates" },
  { to: "/blog", labelKey: "nav.blog" },
  { to: "/ai-design", labelKey: "nav.aiDesign", icon: Sparkles },
  { to: "/about", labelKey: "nav.about" },
  { to: "/contact", labelKey: "nav.contact" },
] as const;

export function SiteHeader() {
  const { t, toggleLanguage, direction, language } = useLanguage();
  useStaticPageTranslations(language);

  return (
    <header className="border-b border-border/70 bg-background">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:py-3.5">
        <div className="flex w-full items-center justify-between gap-4 md:hidden">
          <AuthDialog>
            <button
              type="button"
              aria-label={t("common.login")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition hover:border-coral hover:text-coral"
            >
              <UserRound className="h-4 w-4" />
            </button>
          </AuthDialog>

          <Link to="/" aria-label="binaa LAB" className="flex items-center justify-center">
            <img src={binaaWordmark} alt="binaa LAB" className="h-14 w-auto object-contain sm:h-16" />
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label={t("common.openMenu")}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition hover:border-coral hover:text-coral"
              >
                <Menu className="h-4 w-4" />
              </button>
            </SheetTrigger>
            <SheetContent side={direction === "rtl" ? "right" : "left"} className="w-full max-w-none border-0 p-0">
              <div className="flex h-full flex-col bg-background px-6 py-8">
                <SheetHeader className={direction === "rtl" ? "text-right" : "text-left"}>
                  <SheetTitle className="text-2xl font-bold">{t("common.menu")}</SheetTitle>
                  <SheetDescription className="text-sm text-muted-foreground">{t("common.quickNav")}</SheetDescription>
                </SheetHeader>

                <div className="mt-8">
                  {navItems.map((item) => {
                    const Icon = "icon" in item ? item.icon : undefined;
                    const isAi = item.to === "/ai-design";

                    return (
                      <div key={item.to}>
                        <Link
                          to={item.to}
                          activeProps={{ className: "text-foreground" }}
                          className={`flex items-center justify-between py-5 text-2xl font-bold transition ${
                            isAi ? "text-coral" : "text-foreground hover:text-coral"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            {Icon ? <Icon className="h-5 w-5" /> : null}
                            {t(item.labelKey)}
                          </span>
                          <span className="text-sm font-bold text-muted-foreground">↗</span>
                        </Link>
                        <Separator />
                      </div>
                    );
                  })}
                </div>

                <div className="mt-auto pt-8">
                  <button
                    type="button"
                    onClick={toggleLanguage}
                    className="mb-3 flex w-full items-center justify-center rounded-2xl border border-border px-5 py-4 text-base font-bold text-foreground transition hover:border-coral hover:text-coral"
                  >
                    {t("common.languageToggle")}
                  </button>
                  <Link
                    to="/contact"
                    className="turquoise-glow-btn flex w-full items-center justify-center rounded-2xl bg-coral px-5 py-4 text-base font-bold text-white transition hover:bg-coral/90"
                  >
                    {t("common.startProject")}
                  </Link>
                  <p className="mt-4 text-center text-sm text-muted-foreground">{t("common.mobileCtaNote")}</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <Link to="/" aria-label="binaa LAB" className="hidden items-center md:flex">
          <img src={binaaWordmark} alt="binaa LAB" className="h-14 w-auto object-contain" />
        </Link>

        <ul className="hidden items-center gap-8 text-[12px] font-semibold text-muted-foreground md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="transition hover:text-coral"
                activeProps={{ className: "text-coral" }}
              >
                {t(item.labelKey)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-border px-3 py-1.5 text-[12px] font-bold text-muted-foreground transition hover:border-coral hover:text-coral"
          >
            {t("common.languageToggle")}
          </button>
          <AuthDialog>
            <button
              type="button"
              className="text-[12px] font-bold text-muted-foreground transition hover:text-coral"
            >
              {t("common.login")}
            </button>
          </AuthDialog>
        </div>
      </nav>
    </header>
  );
}
