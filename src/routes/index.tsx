import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  Boxes,
  CheckCircle2,
  Instagram,
  Linkedin,
  LogIn,
  MessageCircle,
  Newspaper,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import binaaWordmark from "@/assets/binaa-wordmark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "bina lab landing" },
      {
        name: "description",
        content: "صفحة هبوط لدورة Binaa Lab الشاملة في التصميم الداخلي بالذكاء الاصطناعي للمصممين العرب.",
      },
      { property: "og:title", content: "دورة Binaa Lab الشاملة" },
      {
        property: "og:description",
        content: "أتقن التصميم الداخلي بالذكاء الاصطناعي مع برومبتات وقوالب وسير عمل احترافي.",
      },
    ],
  }),
  component: LandingPage,
});

const featureCards = [
  {
    icon: Sparkles,
    title: "+500 برومبت احترافي",
    text: "مكتبة ضخمة جاهزة لـ Midjourney و DALL-E مصممة خصيصاً للتصميم الداخلي",
  },
  {
    icon: BookOpen,
    title: "11+ ساعة محتوى عملي",
    text: "43 درس تطبيقي يغطي كامل سير العمل من Brief إلى Handover",
  },
  {
    icon: ShieldCheck,
    title: "ضمان استرجاع 7 أيام",
    text: "جرّب الدورة بدون أي مخاطر، وإذا لم تناسبك استرجع أموالك كاملة",
  },
];

const quickLinks = [
  { href: "#lead-form", label: "الدورة", icon: BookOpen },
  { href: "#features", label: "القوالب", icon: Boxes },
  { href: "#lead-form", label: "المدونة", icon: Newspaper },
  { href: "#lead-form", label: "تواصل معنا", icon: Phone },
];

export function LandingPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-white)] text-[var(--text-dark)]" dir="rtl">
      <header className="border-b border-[var(--primary-color)]/10 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href={import.meta.env.BASE_URL} aria-label="binaa LAB" className="flex items-center">
            <img src={binaaWordmark} alt="binaa LAB" className="h-14 w-auto object-contain md:h-16" />
          </a>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--primary-color)]/15 bg-white px-4 py-2 text-sm font-bold text-[var(--primary-color)] transition hover:border-[var(--primary-color)] hover:bg-[var(--secondary-color)]"
          >
            <LogIn className="h-4 w-4" />
            دخول
          </a>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[var(--secondary-color)] px-5 pb-8 pt-10 md:pb-10 md:pt-14">
          <div className="absolute left-8 top-16 h-72 w-72 rounded-full bg-[var(--glow-color)]/20 blur-3xl" />
          <div className="relative mx-auto max-w-6xl text-center">
            <span className="inline-flex rounded-lg bg-[var(--primary-color)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_14px_34px_rgba(10,77,92,0.20)]">
              دورة Binaa Lab الشاملة
            </span>

            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.25] tracking-normal md:text-6xl">
              أتقن التصميم الداخلي
              <span className="block text-[var(--primary-color)]">بالذكاء الاصطناعي</span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--text-light)] md:text-lg">
              منصة عربية متخصصة تمكّن مصممي الديكور الداخلي والمهندسين المعماريين من تسخير قوة الذكاء الاصطناعي في كل مرحلة تصميم. من الفكرة الأولى إلى التسليم النهائي، نوفر لك الأدوات، المعرفة، والقوالب التي تختصر الطريق وترفع جودة أعمالك. سجّل الآن وابدأ رحلتك الاحترافية.
            </p>

            <div className="mt-7 flex justify-center">
              <a href="#lead-form" className="btn-primary turquoise-glow-btn inline-flex items-center gap-2 text-sm md:text-base">
                احجز مقعدك الآن
                <ArrowLeft className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-5 py-8 md:py-9">
          <div className="grid gap-4 md:grid-cols-3">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-2xl border border-[var(--primary-color)]/10 bg-white p-5 text-right shadow-[0_16px_45px_rgba(10,77,92,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(10,77,92,0.14)]"
                >
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--glow-color)]/10 text-[var(--primary-color)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="text-xl font-semibold text-[var(--primary-color)]">{card.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-light)]">{card.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="lead-form" className="bg-[var(--secondary-color)] px-5 py-10 md:py-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-semibold text-[var(--primary-color)] md:text-5xl">احضر محاضرتنا المجانية</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[var(--text-light)]">
                سجّل الآن لحضور محاضرة تعريفية مجانية عن Binaa Lab، واكتشف كيف يغيّر الذكاء الاصطناعي طريقة عملك كمصمم داخلي. راح نرسل لك رابط الحضور وتفاصيل المحاضرة على بريدك.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--primary-color)]/10 bg-white p-6 text-right shadow-[0_24px_80px_rgba(10,77,92,0.12)] md:p-8">
              {sent ? (
                <div className="mb-6 rounded-2xl border border-[var(--glow-color)]/30 bg-[var(--glow-color)]/10 p-5 text-[var(--primary-color)]">
                  <CheckCircle2 className="mb-3 h-7 w-7" />
                  <p className="font-bold">تم تسجيلك بنجاح! راح نرسل لك رابط المحاضرة وتفاصيلها على بريدك الإلكتروني قبل الموعد بيوم. نورتنا!</p>
                </div>
              ) : null}

              <form className="space-y-7">
                <div className="rounded-2xl border border-[var(--primary-color)]/10 bg-white p-5 md:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary-color)] text-base font-bold text-white">1</span>
                    <h3 className="text-2xl font-semibold text-[var(--text-dark)]">البيانات الشخصية</h3>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField label="التخصص *" name="specialty" placeholder="مثال: مصمم داخلي، مهندس معماري، طالب تصميم" />
                    <FormField label="الاسم الكامل *" name="full-name" placeholder="مثال: محمد أحمد" />
                    <FormField label="البريد الإلكتروني *" name="email" type="email" placeholder="مثال: name@email.com" />
                    <FormField label="رقم الجوال *" name="phone" type="tel" placeholder="مثال: 05XXXXXXXX" />
                  </div>
                </div>

                <div className="rounded-2xl border border-[var(--primary-color)]/10 bg-white p-5 md:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary-color)] text-base font-bold text-white">2</span>
                    <h3 className="text-2xl font-semibold text-[var(--text-dark)]">معلومات إضافية</h3>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField label="المستوى الحالي" name="level" placeholder="مثال: مبتدئ، متوسط، متقدم" />
                    <FormField label="الهدف من الدورة" name="goal" placeholder="مثال: تطوير مهاراتي، بدء مشروع، رفع جودة أعمالي" />
                    <label className="block">
                      <span className="mb-2 block text-sm font-bold text-[var(--text-dark)]">هل لديك خبرة سابقة في AI؟</span>
                      <select
                        name="ai-experience"
                        className="w-full rounded-lg border border-[#d8e0e2] bg-white px-4 py-3 text-sm text-[var(--text-dark)] outline-none transition focus:border-[var(--glow-color)] focus:ring-2 focus:ring-[var(--glow-color)]/20"
                      >
                        <option>نعم</option>
                        <option>لا</option>
                      </select>
                    </label>
                    <label className="block md:col-span-2">
                      <span className="mb-2 block text-sm font-bold text-[var(--text-dark)]">ملاحظات (اختياري)</span>
                      <textarea
                        name="notes"
                        rows={5}
                        placeholder="أي أسئلة أو متطلبات خاصة"
                        className="w-full resize-none rounded-lg border border-[#d8e0e2] bg-white px-4 py-3 text-sm text-[var(--text-dark)] outline-none transition focus:border-[var(--glow-color)] focus:ring-2 focus:ring-[var(--glow-color)]/20"
                      />
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSent(true)}
                  className="btn-primary turquoise-glow-btn inline-flex w-full items-center justify-center gap-2 text-sm md:w-auto md:text-base"
                >
                  احجز مقعدك الآن
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white px-5 py-12 text-right">
        <div className="mx-auto grid max-w-6xl gap-8 border-t border-[var(--primary-color)]/10 pt-10 md:grid-cols-[1.15fr_0.85fr_0.7fr]">
          <div>
            <img src={binaaWordmark} alt="binaa LAB" className="h-16 w-auto object-contain" />
            <p className="mt-5 max-w-xl leading-8 text-[var(--text-light)]">
              Binaa Lab - مختبر التصميم الداخلي والذكاء الاصطناعي للمصممين العرب. نساعدك على تصميم أذكى، أسرع، وأبدع.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[var(--primary-color)]">روابط سريعة</h3>
            <div className="grid gap-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.label} href={link.href} className="inline-flex items-center gap-2 text-sm font-bold text-[var(--text-light)] transition hover:text-[var(--primary-color)]">
                    <Icon className="h-4 w-4 text-[var(--primary-color)]" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[var(--primary-color)]">تابعنا</h3>
            <div className="flex gap-3">
              <SocialIcon label="Instagram" icon={Instagram} />
              <SocialIcon label="Twitter" icon={MessageCircle} />
              <SocialIcon label="YouTube" icon={Youtube} />
              <SocialIcon label="LinkedIn" icon={Linkedin} />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl border-t border-[var(--primary-color)]/10 pt-5 text-center text-sm text-[var(--text-light)]">
          © 2026 Binaa Lab. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
}

function FormField({
  label,
  name,
  placeholder,
  type = "text",
  full,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  full?: boolean;
}) {
  return (
    <label className={`block ${full ? "md:col-span-2" : ""}`}>
      <span className="mb-2 block text-sm font-bold text-[var(--text-dark)]">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#d8e0e2] bg-white px-4 py-3 text-sm text-[var(--text-dark)] outline-none transition placeholder:text-[#8a9297] focus:border-[var(--glow-color)] focus:ring-2 focus:ring-[var(--glow-color)]/20"
      />
    </label>
  );
}

type IconComponent = typeof Instagram;

function SocialIcon({ label, icon: Icon }: { label: string; icon: IconComponent }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--primary-color)]/12 text-[var(--primary-color)] transition hover:border-[var(--glow-color)] hover:bg-[var(--glow-color)]/10"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}
