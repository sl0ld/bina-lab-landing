import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import aiClientPitchDeck from "@/assets/template-ai-client-pitch-deck.png";
import aiDesignerBundle from "@/assets/template-ai-designer-bundle.png";
import aiRenderingWorkflow from "@/assets/template-ai-rendering-workflow.png";
import masterPromptLibrary from "@/assets/template-master-prompt-library.png";
import smartMoodboardSystem from "@/assets/template-smart-moodboard-system.png";

export const Route = createFileRoute("/templates")({
  head: () => ({
    meta: [
      { title: "القوالب - binaa LAB" },
      {
        name: "description",
        content: "أدوات وقوالب AI جاهزة لمصممي الديكور والمعماريين لتسريع الرندر والعروض وسير العمل.",
      },
      { property: "og:title", content: "قوالب AI لمصممي الديكور والمعماريين - binaa LAB" },
      { property: "og:description", content: "قوالب وبرومبتات وأنظمة عمل AI جاهزة للاستخدام اليومي." },
    ],
  }),
  component: TemplatesPage,
});

const templates = [
  {
    title: "مكتبة البرومبتات الاحترافية (Master Prompt Library)",
    description: "+500 برومبت جاهز لـ Midjourney و DALL-E مصممة خصيصاً للتصميم الداخلي: إضاءة، خامات، وأساليب.",
    button: "احصل عليها الآن",
    image: masterPromptLibrary,
    category: "برومبتات",
    details: ["+500 برومبت", "Midjourney و DALL-E", "إضاءة وخامات وأساليب"],
    badges: ["جاهزة للاستخدام", "تحديثات دورية", "للتصميم الداخلي"],
  },
  {
    title: "نظام ريندر المشاريع بالـ AI (AI Rendering Workflow)",
    description: "دليل خطوة بخطوة + قوالب لتحويل اسكتشاتك اليدوية إلى ريندرات واقعية باستخدام AI.",
    button: "احصل عليه الآن",
    image: aiRenderingWorkflow,
    category: "رندر",
    details: ["دليل خطوة بخطوة", "تحويل الاسكتشات", "رندرات واقعية"],
    badges: ["Workflow عملي", "قوالب مرفقة", "مناسب للمشاريع"],
  },
  {
    title: "قالب عروض العملاء المدعوم بالـ AI (AI Client Pitch Deck)",
    description: "قالب عرض تقديمي يدمج صور الـ AI مع شرح مراحل العمل لإبهار العميل وإغلاق الصفقة.",
    button: "احصل عليه الآن",
    image: aiClientPitchDeck,
    category: "عروض العملاء",
    details: ["عرض تقديمي", "صور AI", "إغلاق الصفقة"],
    badges: ["قابل للتعديل", "احترافي", "مناسب للعملاء"],
  },
  {
    title: "مولد لوحات المزاج الذكية (Smart Moodboard System)",
    description: "نظام لإنشاء Moodboards متناسقة الألوان والخامات باستخدام أدوات AI في دقائق.",
    button: "احصل عليه الآن",
    image: smartMoodboardSystem,
    category: "Moodboards",
    details: ["ألوان وخامات", "تنسيق سريع", "نتائج في دقائق"],
    badges: ["لوحات مزاج", "نظام ذكي", "سهل التطبيق"],
  },
  {
    title: "الحزمة الشاملة لمصمم الـ AI (The AI Designer Bundle)",
    description: "احصل على جميع الأدوات السابقة + تحديثات شهرية للبرومبتات + مجتمع خاص.",
    button: "احصل على الحزمة",
    image: aiDesignerBundle,
    category: "حزمة شاملة",
    details: ["كل الأدوات السابقة", "تحديثات شهرية", "مجتمع خاص"],
    badges: ["الأفضل قيمة", "كل القوالب", "دعم وتحديثات"],
    featured: true,
  },
];

function TemplatesPage() {
  const featured = templates.find((template) => template.featured);
  const regularTemplates = templates.filter((template) => !template.featured);

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-5xl px-6 pb-14 pt-20 text-center">
          <span className="mb-5 inline-block text-xs uppercase tracking-[0.3em] text-muted-foreground">
            مكتبة القوالب
          </span>
          <h1 className="text-5xl font-bold leading-[1.05] md:text-7xl">
            قوالب لمصممي الديكور
            <br />
            <span className="text-coral">والمعماريين.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            أدوات جاهزة تساعدك تشتغل أسرع، تكتب برومبتات أفضل، وتقدم عروض ورندر احترافي للعملاء باستخدام الذكاء الاصطناعي.
          </p>
        </section>

        {featured ? <FeaturedTemplate template={featured} /> : null}

        <section className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
            <h2 className="text-2xl font-bold md:text-3xl">استكشف القوالب</h2>
            <span className="text-sm text-muted-foreground">{regularTemplates.length} قوالب</span>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularTemplates.map((template) => (
              <TemplateCard key={template.title} template={template} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="rounded-3xl bg-foreground p-12 text-center text-background md:p-16">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">جاهز تسرّع شغلك؟</h2>
            <p className="mx-auto mb-8 max-w-xl text-background/70">
              اختر القالب المناسب أو احصل على الحزمة الشاملة وابدأ بتطبيق سير عمل احترافي مباشرة.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-full bg-background px-8 py-3.5 font-bold text-foreground transition hover:opacity-90"
            >
              تواصل معنا
            </Link>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}

type Template = (typeof templates)[number];

function FeaturedTemplate({ template }: { template: Template }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="grid items-center overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2">
        <div className="order-1 aspect-[4/3] overflow-hidden md:order-2 md:h-full md:aspect-auto">
          <img src={template.image} alt={template.title} className="h-full w-full object-cover" />
        </div>
        <div className="order-2 p-10 text-right md:order-1">
          <span className="mb-4 inline-block text-xs font-bold tracking-widest text-coral">الحزمة الأفضل</span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{template.title}</h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">{template.description}</p>
          <div className="mb-6 flex flex-wrap justify-end gap-2">
            {template.badges.map((badge) => (
              <span key={badge} className="rounded-full border border-border px-3 py-1 text-xs">
                {badge}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-end border-t border-border pt-5">
            <Link
              to="/contact"
                    className="turquoise-glow-btn inline-block rounded-full bg-coral px-7 py-3 text-sm font-bold text-white transition hover:bg-coral/90"
            >
              {template.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TemplateCard({ template }: { template: Template }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:border-foreground">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={template.image} alt={template.title} loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-background/90 px-3 py-1.5 text-xs font-bold backdrop-blur">
            {template.category}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-7 text-right">
        <h3 className="mb-2 text-xl font-bold">{template.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{template.description}</p>
        <div className="mb-5 space-y-1.5 text-sm text-muted-foreground">
          {template.details.map((detail) => (
            <div key={detail} className="flex justify-end gap-2 leading-6">
              <span>{detail}</span>
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
            </div>
          ))}
        </div>
        <div className="mb-5 flex flex-wrap justify-end gap-2">
          {template.badges.map((badge) => (
            <span key={badge} className="rounded-full bg-coral-soft/45 px-3 py-1 text-xs font-bold text-coral">
              {badge}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-end border-t border-border pt-4">
          <Link to="/contact" className="text-sm font-bold transition hover:text-coral">
            {template.button} ←
          </Link>
        </div>
      </div>
    </article>
  );
}
