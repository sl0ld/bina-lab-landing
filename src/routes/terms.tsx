import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "شروط الاستخدام — binaa LAB" },
      {
        name: "description",
        content: "شروط الاستخدام الخاصة بمنصة binaa LAB والخدمات التعليمية والرقمية.",
      },
      { property: "og:title", content: "شروط الاستخدام — binaa LAB" },
      {
        property: "og:description",
        content: "اقرأ شروط الاستخدام الخاصة بمنصة binaa LAB.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
          <FileText className="h-4 w-4 text-coral" />
          Terms
        </div>
        <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">شروط الاستخدام</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          باستخدامك للموقع أو أي خدمة تابعة لـ binaa LAB فأنت توافق على هذه الشروط
          العامة المختصرة.
        </p>

        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          <div className="rounded-3xl border border-border bg-card p-7">
            <h2 className="text-2xl font-black text-foreground mb-3">1. استخدام المحتوى</h2>
            <p>
              جميع المواد التعليمية والمحتوى المرئي مخصص للاستخدام الشخصي أو المهني
              المرتبط بالخدمة، ولا يجوز إعادة نشره بدون إذن.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-7">
            <h2 className="text-2xl font-black text-foreground mb-3">2. الحسابات والمدفوعات</h2>
            <p>
              عند إطلاق التسجيل أو الدفع، تكون مسؤولًا عن صحة بياناتك والالتزام
              بالخطط أو الشروط الخاصة بكل منتج.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-7">
            <h2 className="text-2xl font-black text-foreground mb-3">3. السلوك المقبول</h2>
            <p>
              نحتفظ بالحق في إيقاف أي استخدام يسبب إساءة أو تعطيلًا للخدمة أو
              انتهاكًا لحقوق الآخرين.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-7">
            <h2 className="text-2xl font-black text-foreground mb-3">4. التحديثات</h2>
            <p>
              قد يتم تحديث هذه الشروط من وقت لآخر، وسيكون المحتوى الأحدث هو المرجع
              المعتمد على الموقع.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            to="/contact"
              className="turquoise-glow-btn inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-sm font-bold text-white transition hover:bg-coral/90"
          >
            <ArrowLeft className="h-4 w-4" />
            تواصل معنا
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
