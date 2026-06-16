import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "سياسة الخصوصية — binaa LAB" },
      {
        name: "description",
        content: "تعرف على كيفية تعامل binaa LAB مع البيانات والمعلومات الشخصية.",
      },
      { property: "og:title", content: "سياسة الخصوصية — binaa LAB" },
      {
        property: "og:description",
        content: "سياسة الخصوصية الخاصة بمنصة binaa LAB.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-coral" />
          Privacy Policy
        </div>
        <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">سياسة الخصوصية</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          هذه الصفحة توضح بشكل مختصر كيف نتعامل مع بياناتك عندما تتصفح الموقع أو
          تتواصل معنا أو تسجل في أي خدمة.
        </p>

        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          <div className="rounded-3xl border border-border bg-card p-7">
            <h2 className="text-2xl font-black text-foreground mb-3">1. البيانات التي نجمعها</h2>
            <p>
              قد نجمع الاسم، البريد الإلكتروني، رقم الهاتف، ورسائلك عند تعبئة نموذج
              التواصل أو الاشتراك.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-7">
            <h2 className="text-2xl font-black text-foreground mb-3">2. كيف نستخدمها</h2>
            <p>
              نستخدم البيانات للرد على الاستفسارات، إدارة الاشتراكات، وتحسين جودة
              المحتوى والخدمات.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-7">
            <h2 className="text-2xl font-black text-foreground mb-3">3. الحماية والمشاركة</h2>
            <p>
              نحرص على حماية البيانات وعدم مشاركتها إلا عند الحاجة لتقديم الخدمة أو
              الامتثال للأنظمة.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-7">
            <h2 className="text-2xl font-black text-foreground mb-3">4. تواصل معنا</h2>
            <p>
              إذا عندك أي سؤال حول الخصوصية، تقدر تتواصل معنا من صفحة التواصل.
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
