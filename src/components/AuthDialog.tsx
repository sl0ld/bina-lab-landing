import { Link } from "@tanstack/react-router";
import { ArrowLeft, LockKeyhole, Mail, Phone, UserRound } from "lucide-react";
import { type ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/LanguageProvider";

type AuthDialogProps = {
  children: ReactNode;
};

export function AuthDialog({ children }: AuthDialogProps) {
  const { language } = useLanguage();
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
        fullPage: "فتح صفحة إنشاء الحساب",
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
        fullPage: "Open account page",
      };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="z-[100] w-[calc(100vw-2rem)] max-w-[440px] overflow-hidden rounded-3xl border-[#dfe5e7] bg-[#f8fafa] p-0 shadow-2xl"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="grid gap-4 p-6 sm:p-8">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f1f0] text-[#1A5F5F]">
              <LockKeyhole className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-[#1A1A1A]">{copy.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{copy.subtitle}</p>

            <div className="mt-5 flex justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#1A5F5F]" />
              <span className="h-2 w-2 rounded-full bg-[#d8dee0]" />
              <span className="h-2 w-2 rounded-full bg-[#d8dee0]" />
            </div>
          </div>

          <form className="mx-auto mt-5 w-full max-w-[370px] space-y-3">
            <AuthField icon={<UserRound className="h-5 w-5" />} name="signup-name" placeholder={copy.name} type="text" />
            <AuthField icon={<Mail className="h-5 w-5" />} name="signup-email" placeholder={copy.email} type="email" />
            <AuthField icon={<Phone className="h-5 w-5" />} name="signup-phone" placeholder={copy.phone} type="tel" />

            <button
              type="button"
        className="turquoise-glow-btn flex w-full items-center justify-center gap-2 rounded-lg bg-coral px-5 py-3.5 font-bold text-white transition hover:bg-coral/90"
            >
              {copy.continue}
              <ArrowLeft className="h-4 w-4" />
            </button>
          </form>

          <div className="mx-auto flex w-full max-w-[370px] items-center gap-4 text-sm text-muted-foreground">
            <span className="h-px flex-1 bg-[#dfe5e7]" />
            {copy.or}
            <span className="h-px flex-1 bg-[#dfe5e7]" />
          </div>

          <button
            type="button"
            className="mx-auto flex w-full max-w-[370px] items-center justify-between rounded-lg border border-[#d8e0e2] bg-white px-4 py-3 font-semibold text-[#1A1A1A] transition hover:border-[#1A5F5F]"
          >
            <span className="text-[#4285F4]">G</span>
            <span>{copy.google}</span>
            <span />
          </button>

          <p className="mx-auto max-w-[370px] text-center text-xs leading-6 text-muted-foreground">{copy.legal}</p>

          <Link
            to="/login"
            className="mx-auto inline-flex items-center gap-2 text-sm font-bold text-[#1A5F5F] hover:underline"
          >
            <UserRound className="h-4 w-4" />
            {copy.fullPage}
          </Link>
        </div>
      </DialogContent>
    </Dialog>
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
