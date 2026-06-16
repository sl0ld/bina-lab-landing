import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, LockKeyhole, Mail, Phone, UserRound } from "lucide-react";
import { type ReactNode } from "react";
import binaaWordmark from "@/assets/binaa-wordmark.png";
import { useLanguage } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "إنشاء حساب جديد - binaa LAB" },
      { name: "description", content: "إنشاء حساب في binaa LAB لمتابعة مشاريع التصميم والدورات والقوالب." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { language, toggleLanguage } = useLanguage();
  const isArabic = language === "ar";

  const copy = isArabic
    ? {
        title: "إنشاء حساب جديد",
        subtitle: "أدخل بياناتك الأساسية للمتابعة",
        name: "اسمك الكامل",
        email: "your@email.com",
        phone: "رقم الجوال",
        continue: "متابعة",
        or: "أو",
        google: "المواصلة باستخدام Google",
        legal: "بالتسجيل في منصة Binaa Lab، فإنك توافق على شروط الاستخدام وسياسة الخصوصية.",
        home: "العودة للرئيسية",
      }
    : {
        title: "Create an account",
        subtitle: "Enter your basic details to continue",
        name: "Full name",
        email: "your@email.com",
        phone: "Mobile number",
        continue: "Continue",
        or: "or",
        google: "Continue with Google",
        legal: "By signing in to Binaa Lab, you agree to the Terms of Use and Privacy Policy.",
        home: "Back home",
      };

  return (
    <main className="flex min-h-screen flex-col bg-[#f5f7f7] px-5 py-8" dir={isArabic ? "rtl" : "ltr"}>
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <Link to="/" aria-label="binaa LAB">
          <img src={binaaWordmark} alt="binaa LAB" className="h-10 w-auto object-contain" />
        </Link>
        <button
          type="button"
          onClick={toggleLanguage}
          className="rounded-full border border-[#d8e0e2] bg-white px-4 py-2 text-sm font-bold text-[#1A1A1A] transition hover:border-[#1A5F5F] hover:text-[#1A5F5F]"
        >
          {isArabic ? "EN" : "AR"}
        </button>
      </header>

      <section className="flex flex-1 items-center justify-center py-12">
        <div className="w-full max-w-[450px] rounded-3xl border border-[#dfe5e7] bg-white p-8 shadow-[0_24px_70px_rgba(26,26,26,0.08)]">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f1f0] text-[#1A5F5F]">
              <LockKeyhole className="h-7 w-7" />
            </div>
            <h1 className="mt-6 text-3xl font-bold text-[#1A1A1A]">{copy.title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{copy.subtitle}</p>
            <div className="mt-5 flex justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#1A5F5F]" />
              <span className="h-2 w-2 rounded-full bg-[#d8dee0]" />
              <span className="h-2 w-2 rounded-full bg-[#d8dee0]" />
            </div>
          </div>

          <form className="mt-8 space-y-4">
            <AuthField icon={<UserRound className="h-5 w-5" />} name="name" placeholder={copy.name} type="text" />
            <AuthField icon={<Mail className="h-5 w-5" />} name="email" placeholder={copy.email} type="email" />
            <AuthField icon={<Phone className="h-5 w-5" />} name="phone" placeholder={copy.phone} type="tel" />

            <button
              type="button"
                className="turquoise-glow-btn flex w-full items-center justify-center gap-2 rounded-lg bg-coral px-5 py-3.5 font-bold text-white transition hover:bg-coral/90"
            >
              {copy.continue}
              <ArrowLeft className="h-4 w-4" />
            </button>
          </form>

          <div className="my-7 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="h-px flex-1 bg-[#dfe5e7]" />
            {copy.or}
            <span className="h-px flex-1 bg-[#dfe5e7]" />
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-between rounded-lg border border-[#d8e0e2] bg-white px-4 py-3 font-semibold text-[#1A1A1A] transition hover:border-[#1A5F5F]"
          >
            <span className="text-[#4285F4]">G</span>
            <span>{copy.google}</span>
            <span />
          </button>

          <p className="mt-7 text-center text-xs leading-6 text-muted-foreground">{copy.legal}</p>

          <Link to="/" className="mt-6 flex justify-center text-sm font-bold text-[#1A5F5F] hover:underline">
            {copy.home}
          </Link>
        </div>
      </section>
    </main>
  );
}

function AuthField({
  icon,
  name,
  placeholder,
  type,
}: {
  icon: ReactNode;
  name: string;
  placeholder: string;
  type: "email" | "tel" | "text";
}) {
  return (
    <label className="flex overflow-hidden rounded-lg border border-[#d8e0e2] bg-white focus-within:border-[#1A5F5F] focus-within:ring-4 focus-within:ring-[#d8eeee]">
      <span className="flex w-12 items-center justify-center border-e border-[#d8e0e2] text-[#667175]">{icon}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="min-h-12 flex-1 bg-transparent px-4 text-base outline-none"
      />
    </label>
  );
}
