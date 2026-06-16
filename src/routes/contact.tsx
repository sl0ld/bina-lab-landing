import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Instagram, Linkedin, Mail, MessageCircle, Send, Sparkles, Youtube } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import aiCoreImg from "@/assets/instructor.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا — Binaa Lab" },
      {
        name: "description",
        content: "تواصل مع فريق Binaa Lab للأسئلة والدعم التقني والتعاون الإبداعي. نرد عليك خلال 24 ساعة.",
      },
      { property: "og:title", content: "تواصل معنا — Binaa Lab" },
      { property: "og:description", content: "فريق Binaa Lab جاهز لمساعدتك في كل خطوة." },
    ],
  }),
  component: ContactPage,
});

const contactMethods = [
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "support@binaalab.com",
    text: "للطلبات الرسمية، الاستفسارات العامة، والدعم التقني.",
    note: "نرد خلال 24 ساعة عمل",
  },
  {
    icon: MessageCircle,
    title: "واتساب مباشر",
    value: "+966 55 504 6267",
    text: "للأسئلة السريعة والدعم الفوري.",
    note: "متاح من 9 صباحًا - 9 مساءً (توقيت السعودية)",
  },
  {
    icon: Instagram,
    title: "وسائل التواصل الاجتماعي",
    value: "تابعنا للحصول على نصائح يومية",
    text: "برومبتات مجانية، تحديثات المنصة، ومحتوى عملي للمصممين.",
    note: "Instagram: @binaa.lab · X: @binaalab · LinkedIn: Binaa Lab · YouTube: Binaa Lab Channel",
  },
];

const quickFaqs = [
  ["كيف أحصل على الدورة بعد الدفع؟", "فورًا! ستصلك رسالة بريد إلكتروني تحتوي على بيانات الدخول للمنصة خلال 5 دقائق من إتمام الدفع."],
  ["هل الدورة مناسبة للمبتدئين؟", "نعم 100%! صُممت الدورة لتأخذك من الصفر إلى الاحتراف، مع شروحات واضحة وأمثلة عملية."],
  ["هل يمكنني استرجاع المبلغ؟", "نعم، نوفر ضمان استرجاع كامل خلال 7 أيام من الشراء بدون أي أسئلة."],
  ["كيف يعمل الدعم الفني؟", "عبر البريد الإلكتروني، الواتساب، ومجتمعنا الخاص على Discord. نرد عادة خلال ساعات قليلة."],
  ["هل المحتوى متاح مدى الحياة؟", "نعم! بمجرد اشتراكك، تحصل على وصول دائم لجميع الدروس والتحديثات المستقبلية."],
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#2d2d2d]" dir="rtl">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden px-6 py-16 md:py-24">
          <div className="absolute left-16 top-20 h-72 w-72 rounded-full bg-[#00d4ff]/15 blur-3xl" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_0.9fr]">
            <div className="text-right">
              <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                تواصل معنا
                <span className="mt-3 block text-3xl text-[#0a4d5c] md:text-5xl">نحن هنا لمساعدتك في كل خطوة</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-9 text-[#5f6468]">
                سواء كان لديك سؤال عن الدورة، تحتاج دعمًا تقنيًا، أو ترغب في التعاون لمشروع إبداعي — فريق Binaa Lab جاهز للرد عليك خلال 24 ساعة. نحب نسمع منك!
              </p>
              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#0a4d5c]/15 bg-white px-4 py-2 text-sm font-bold text-[#0a4d5c] shadow-sm">
                <Sparkles className="h-4 w-4 text-[#00a9c7]" />
                انضم لـ +500 مصمم تواصلوا معنا
              </div>
            </div>

            <div className="relative order-first md:order-last">
              <div className="absolute inset-8 rounded-full bg-[#00d4ff]/25 blur-3xl" />
              <img
                src={aiCoreImg}
                alt="Binaa Lab AI Design Core"
                className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-[0_30px_90px_rgba(10,77,92,0.26)]"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <article key={method.title} className="rounded-2xl border border-[#0a4d5c]/10 bg-white p-6 text-right shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(10,77,92,0.12)]">
                  <Icon className="mb-5 h-9 w-9 text-[#00a9c7]" />
                  <h2 className="mb-2 text-xl font-bold">{method.title}</h2>
                  <p className="mb-3 font-bold text-[#0a4d5c]">{method.value}</p>
                  <p className="text-sm leading-7 text-[#5f6468]">{method.text}</p>
                  <p className="mt-4 border-t border-border pt-4 text-xs font-bold leading-6 text-[#0a4d5c]">{method.note}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-[#073844] p-8 text-right text-white md:p-10">
            <Mail className="mb-6 h-10 w-10 text-[#00d4ff]" />
            <h2 className="text-3xl font-bold md:text-4xl">أرسل لنا رسالة</h2>
            <p className="mt-4 leading-8 text-white/70">
              اكتب تفاصيل طلبك وسنوجهه للفريق المناسب. نرد عادة خلال يوم عمل واحد، ونحرص أن يكون الرد واضح ومفيد من أول مرة.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-white p-6 text-right shadow-sm md:p-8">
            {sent ? (
              <div className="mb-6 rounded-2xl border border-[#00a9c7]/25 bg-[#00d4ff]/10 p-5 text-[#0a4d5c]">
                <CheckCircle2 className="mb-3 h-7 w-7" />
                <p className="font-bold">تم استلام رسالتك بنجاح! سنتواصل معك خلال 24 ساعة. شكرًا لثقتك في Binaa Lab.</p>
              </div>
            ) : null}
            <form className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input name="contact-name" type="text" placeholder="الاسم الكامل *" className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-[#00a9c7] focus:ring-2 focus:ring-[#00d4ff]/20" />
                <input name="contact-email" type="email" placeholder="البريد الإلكتروني *" className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-[#00a9c7] focus:ring-2 focus:ring-[#00d4ff]/20" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input name="contact-phone" type="tel" placeholder="رقم الهاتف (اختياري)" className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-[#00a9c7] focus:ring-2 focus:ring-[#00d4ff]/20" />
                <select name="contact-topic" className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-[#00a9c7] focus:ring-2 focus:ring-[#00d4ff]/20">
                  <option>استفسار عن الدورة</option>
                  <option>دعم تقني</option>
                  <option>طلب تعاون/شراكة</option>
                  <option>اقتراح أو ملاحظة</option>
                  <option>أخرى</option>
                </select>
              </div>
              <textarea name="contact-message" placeholder="رسالتك *" rows={7} className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-[#00a9c7] focus:ring-2 focus:ring-[#00d4ff]/20" />
              <label className="flex items-center gap-2 text-sm text-[#5f6468]">
                <input type="checkbox" className="h-4 w-4 accent-[#0a4d5c]" />
                <span>أوافق على سياسة الخصوصية</span>
              </label>
              <button type="button" onClick={() => setSent(true)} className="turquoise-glow-btn inline-flex w-fit items-center gap-2 rounded-full bg-[#0a4d5c] px-8 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#083f4b]">
                إرسال الرسالة
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-20">
          <h2 className="mb-10 text-center text-4xl font-bold md:text-5xl">أسئلة تُطرح كثيرًا</h2>
          <div className="space-y-4">
            {quickFaqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-border bg-white p-5 text-right shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold">
                  {question}
                  <span className="text-[#0a4d5c] transition group-open:rotate-90">›</span>
                </summary>
                <p className="mt-3 leading-7 text-[#5f6468]">{answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#0a4d5c] transition hover:text-[#00a9c7]">
              عرض جميع الأسئلة الشائعة
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl rounded-3xl bg-[#0a4d5c] p-8 text-white shadow-[0_30px_80px_rgba(10,77,92,0.22)] md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="text-right">
                <h2 className="text-3xl font-bold md:text-5xl">انضم لنشرتنا البريدية</h2>
                <p className="mt-4 leading-8 text-white/72">
                  احصل على نصائح أسبوعية، برومبتات مجانية، وخصومات حصرية مباشرة في بريدك.
                </p>
                <p className="mt-4 font-bold text-[#00d4ff]">هدية فورية: احصل على 10 برومبتات احترافية مجانية فور اشتراكك!</p>
              </div>
              <form className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
                <input name="newsletter-name" type="text" placeholder="اسمك" className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/55 focus:border-[#00d4ff]" />
                <input name="newsletter-email" type="email" placeholder="بريدك الإلكتروني" className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/55 focus:border-[#00d4ff]" />
                <button type="button" className="turquoise-glow-btn rounded-xl bg-[#00d4ff] px-7 py-3 text-sm font-bold text-[#0a4d5c] transition hover:bg-white">
                  اشترك الآن
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
