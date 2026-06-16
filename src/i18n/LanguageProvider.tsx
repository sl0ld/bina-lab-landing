import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { ar } from "./ar";
import { en } from "./en";

export type Language = "ar" | "en";

const dictionaries = { ar, en };

type Dictionary = typeof ar;
type TranslationKey = string;

type LanguageContextValue = {
  language: Language;
  direction: "rtl" | "ltr";
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
  list: <T = string>(key: TranslationKey) => T[];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getNestedValue(source: unknown, key: string) {
  return key.split(".").reduce<unknown>((current, part) => {
    if (current && typeof current === "object" && part in current) {
      return (current as Record<string, unknown>)[part];
    }

    return undefined;
  }, source);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar");
  const [hydrated, setHydrated] = useState(false);
  const dictionary = dictionaries[language] as Dictionary;
  const direction = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const languageVersion = window.localStorage.getItem("binaa-language-version");
    if (languageVersion !== "2") {
      window.localStorage.setItem("binaa-language", "ar");
      window.localStorage.setItem("binaa-language-version", "2");
      setHydrated(true);
      return;
    }

    const saved = window.localStorage.getItem("binaa-language");
    if (saved === "en") setLanguageState("en");
    setHydrated(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.body.dir = direction;
    if (!hydrated) return;
    window.localStorage.setItem("binaa-language", language);
    window.localStorage.setItem("binaa-language-version", "2");
  }, [direction, hydrated, language]);

  const value = useMemo<LanguageContextValue>(() => {
    const setLanguage = (nextLanguage: Language) => setLanguageState(nextLanguage);
    const toggleLanguage = () => setLanguageState((current) => (current === "ar" ? "en" : "ar"));

    const t = (key: TranslationKey) => {
      const value = getNestedValue(dictionary, key);
      return typeof value === "string" ? value : key;
    };

    const list = <T,>(key: TranslationKey) => {
      const value = getNestedValue(dictionary, key);
      return Array.isArray(value) ? (value as T[]) : [];
    };

    return { language, direction, setLanguage, toggleLanguage, t, list };
  }, [dictionary, direction, language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
