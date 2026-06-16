import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft, Brain, FlaskConical, Globe2, Handshake, Target, Users, Wrench } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import aiCoreImg from "@/assets/about-ai-future.png";
import aiArchCoreImg from "@/assets/about-ai-arch-core.png";
import beforeAfterImg from "@/assets/about-before-after.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "عن بناء لاب — مختبر التصميم الداخلي بالذكاء الاصطناعي" },
      {
        name: "description",
        content:
          "Binaa Lab منصة عربية تقنية تمكّن مصممي الديكور الداخلي والمهندسين المعماريين من تسخير الذكاء الاصطناعي في كل مراحل التصميم.",
      },
      { property: "og:title", content: "عن بناء لاب — مختبر التصميم الداخلي بالذكاء الاصطناعي" },
      { property: "og:description", content: "أدوات، معرفة، وقوالب تختصر الطريق وترفع جودة أعمال المصمم العربي." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  ["+500", "برومبت احترافي"],
  ["+11", "ساعة محتوى عملي"],
  ["+43", "درس تطبيقي"],
  ["100%", "محتوى عربي"],
];

const offers = [
  {
    icon: Brain,
    title: "تقنية بلا تعقيد",
    text: "أدوات AI مبسطة خصيصاً للمصمم، وليس للمبرمج. واجهات واضحة، شروحات عملية، ونتائج فورية.",
  },
  {
    icon: Globe2,
    title: "محتوى عربي أصيل",
    text: "شروح وأمثلة تناسب السوق والثقافة العربية. لا ترجمة حرفية، بل فهم عميق لاحتياجات المصمم العربي.",
  },
  {
    icon: Wrench,
    title: "تطبيق فوري",
    text: "لا نظريات مملة. فقط خطوات عملية تطبقها في مشروعك القادم من أول درس.",
  },
  {
    icon: Users,
    title: "مجتمع ودعم",
    text: "لست وحدك. انضم لمجتمع من المصممين المحترفين، تبادل الخبرات، واحصل على دعم فني مباشر.",
  },
];

const transformations = [
  ["ساعات طويلة في الرندر التقليدي", "رندر فوري بالـ AI في دقائق"],
  ["صعوبة في تخيل التصميم النهائي", "تصور دقيق ومسبق لكل تفصيلة"],
  ["عروض تقديمية تقليدية مملة", "عروض مبهرة تغلق الصفقات من أول لقاء"],
  ["برومبتات عشوائية بلا نتائج", "مكتبة +500 برومبت احترافي جاهز"],
  ["تعلم ذاتي مبعثر", "مسار تعليمي واضح ومنظم"],
];

const audiences = [
  {
    title: "مصممو الديكور الداخلي",
    text: "الذين يريدون رفع جودة أعمالهم، تسريع سير العمل، وإبهار عملائهم بتقنيات حديثة.",
  },
  {
    title: "المهندسون المعماريون",
    text: "الذين يبحثون عن أدوات AI متقدمة لتحويل مخططاتهم إلى تصورات واقعية بسرعة واحترافية.",
  },
  {
    title: "طلاب التصميم",
    text: "الراغبون في دخول سوق العمل بقوة، بمحفظة أعمال تفتح لهم أبواب الفرص.",
  },
];

const values = [
  {
    icon: FlaskConical,
    title: "الابتكار المستمر",
    text: "عالم الـ AI يتطور يومياً، ونحن نتطور معه. تحديثات دورية لأدواتنا وقوالبنا وبرومبتاتنا.",
  },
  {
    icon: Target,
    title: "الجودة قبل الكمية",
    text: "كل أداة، كل برومبت، كل درس يمر بمراحل اختبار دقيقة قبل أن يصل إليك.",
  },
  {
    icon: Handshake,
    title: "تمكين المصمم العربي",
    text: "نؤمن بأن المصمم العربي يستحق نفس الأدوات والفرص المتاحة عالمياً، بل وأكثر.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#2d2d2d]" dir="rtl">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden px-6 py-16 md:py-24">
          <div className="absolute left-10 top-24 h-64 w-64 rounded-full bg-[#00d4ff]/15 blur-3xl" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_0.92fr]">
            <div className="text-right">
              <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                Binaa Lab
                <span className="mt-3 block text-3xl leading-tight text-[#0a4d5c] md:text-5xl">
                  مختبر التصميم الداخلي بالذكاء الاصطناعي
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-9 text-[#5f6468]">
                منصة عربية تقنية متخصصة تمكّن مصممي الديكور الداخلي والمهندسين المعماريين من تسخير قوة الذكاء الاصطناعي في كل مرحلة من مراحل التصميم. من الفكرة الأولى إلى التسليم النهائي، نوفر لك الأدوات، المعرفة، والقوالب التي تختصر الطريق وترفع جودة أعمالك.
              </p>
              <a
                href="#platform"
                className="turquoise-glow-btn mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a4d5c] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#083f4b]"
              >
                استكشف المنصة
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>

            <div className="relative order-first md:order-last">
              <div className="absolute inset-6 rounded-full bg-[#00d4ff]/25 blur-3xl" />
              <img
                src={aiCoreImg}
                alt="AI Design Core"
                className="relative aspect-[4/5] w-full rounded-3xl bg-[#052f39] object-contain shadow-[0_30px_90px_rgba(10,77,92,0.28)]"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#073844] px-6 py-10 text-white">
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([number, label]) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-bold text-white drop-shadow-[0_0_18px_rgba(0,212,255,0.45)] md:text-5xl">{number}</div>
                <div className="mt-2 text-sm font-semibold text-white/72">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="platform" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">لماذا Binaa Lab؟</h2>
          <p className="text-lg leading-9 text-[#5f6468]">
            انطلقت Binaa Lab من حاجة حقيقية في السوق العربي. رأينا المصممين المبدعين يكافحون مع البرامج المعقدة، والساعات الطويلة في الرندر، وصعوبة مواكبة ثورة الذكاء الاصطناعي. لذلك، بنينا هذا المختبر لنختصر عليك الطريق. هنا، ندمج خبرتنا في التصميم الداخلي مع قوة التقنية لنمنحك أدوات تتفوق بها على المنافسين وتبهر عملاءك.
          </p>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold text-[#0a4d5c]">ما نقدمه</p>
              <h2 className="mt-2 text-4xl font-bold md:text-5xl">أدوات عملية لمرحلة التصميم كاملة</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {offers.map((offer) => {
                const Icon = offer.icon;

                return (
                  <article key={offer.title} className="rounded-2xl border border-[#0a4d5c]/10 bg-white p-6 text-right shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(10,77,92,0.12)]">
                    <Icon className="mb-5 h-9 w-9 text-[#00a9c7]" />
                    <h3 className="mb-3 text-xl font-bold">{offer.title}</h3>
                    <p className="text-sm leading-7 text-[#5f6468]">{offer.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-4xl font-bold md:text-5xl">كيف يغير Binaa Lab طريقة عملك؟</h2>
            <div className="mb-8 overflow-hidden rounded-3xl border border-[#00d4ff]/20 bg-[#052f39] shadow-[0_26px_70px_rgba(10,77,92,0.18)]">
              <img
                src={beforeAfterImg}
                alt="قبل وبعد استخدام Binaa Lab في التصميم الداخلي"
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="grid overflow-hidden rounded-3xl border border-border md:grid-cols-2">
              <div className="bg-[#073844] p-7 text-white md:p-10">
                <h3 className="mb-6 text-2xl font-bold">بعد Binaa Lab</h3>
                <div className="space-y-4">
                  {transformations.map(([, after]) => (
                    <div key={after} className="rounded-xl border border-[#00d4ff]/20 bg-white/8 p-4 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,212,255,0.08)]">{after}</div>
                  ))}
                </div>
              </div>
              <div className="bg-[#f7f7f4] p-7 md:p-10">
                <h3 className="mb-6 text-2xl font-bold">قبل Binaa Lab</h3>
                <div className="space-y-4">
                  {transformations.map(([before]) => (
                    <div key={before} className="rounded-xl bg-white p-4 text-sm font-semibold text-[#5f6468] shadow-sm">{before}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-4xl font-bold md:text-5xl">صُممت خصيصاً لـ:</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {audiences.map((audience) => (
                <article key={audience.title} className="rounded-2xl border border-[#0a4d5c]/10 bg-white p-7 text-right shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(10,77,92,0.12)]">
                  <h3 className="mb-3 text-2xl font-bold text-[#0a4d5c]">{audience.title}</h3>
                  <p className="leading-8 text-[#5f6468]">{audience.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f3f7f7] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-4xl font-bold md:text-5xl">ما نؤمن به في Binaa Lab</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article key={value.title} className="rounded-2xl bg-white p-7 text-right shadow-sm">
                    <Icon className="mb-5 h-9 w-9 text-[#00a9c7]" />
                    <h3 className="mb-3 text-2xl font-bold">{value.title}</h3>
                    <p className="leading-8 text-[#5f6468]">{value.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#052f39] px-6 py-20 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.85fr_1.15fr]">
            <div className="relative">
              <div className="absolute inset-8 rounded-full bg-[#00d4ff]/25 blur-3xl" />
              <img src={aiArchCoreImg} alt="Binaa Lab AI Design Core" className="relative aspect-[4/5] w-full rounded-3xl bg-[#052f39] object-contain shadow-[0_30px_90px_rgba(0,0,0,0.35)]" />
            </div>
            <div className="text-right">
              <h2 className="text-4xl font-bold leading-tight md:text-6xl">Binaa Lab.. محرك التصميم الذكي</h2>
              <div className="mt-7 space-y-5 text-lg leading-9 text-white/72">
                <p>هذا هو جوهر ما نقدمه. تقنية متطورة، أدوات احترافية، ورؤية واضحة لتمكين المصمم العربي.</p>
                <p>لا نبيعك دورة فقط، بل نمنحك نظام عمل كامل يختصر الطريق، يرفع جودة أعمالك، ويضعك في مقدمة المصممين الذين يستخدمون الذكاء الاصطناعي بذكاء.</p>
                <p>المستقبل ليس قادم.. المستقبل هنا. والسؤال الوحيد: هل أنت مستعد؟</p>
              </div>
              <Link
                to="/contact"
                className="turquoise-glow-btn mt-8 inline-flex items-center gap-2 rounded-full bg-[#00d4ff] px-8 py-3.5 text-sm font-bold text-[#052f39] transition hover:-translate-y-0.5 hover:bg-white"
              >
                ابدأ رحلتك مع Binaa Lab الآن
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
