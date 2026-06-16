import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import enscapeLighting from "@/assets/blog-enscape-lighting.png";
import midjourneyConcepts from "@/assets/blog-midjourney-concepts.png";
import nanoBananaPro from "@/assets/blog-nano-banana-pro.png";
import pricingProjects from "@/assets/blog-pricing-projects.png";
import sketchupWorkflow from "@/assets/blog-sketchup-workflow.png";
import textureLibraries from "@/assets/blog-texture-libraries.png";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "المدونة — binaa LAB" },
      {
        name: "description",
        content: "نصائح عملية وتجارب حقيقية وأحدث ما يحدث في عالم الذكاء الاصطناعي و Enscape للتصميم الداخلي.",
      },
      { property: "og:title", content: "المدونة — binaa LAB" },
      { property: "og:description", content: "رؤى وأدوات للمصممين." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    category: "Enscape",
    title: "إضاءة Enscape كالمحترفين",
    description: "تقنيات الإضاءة الواقعية اللي تفرق بين الرندر الهاوي والاحترافي.",
    image: enscapeLighting,
  },
  {
    category: "AI",
    title: "Nano Banana Pro: ثورة في تحرير الرندر",
    description: "نظرة عميقة على أحدث أدوات تحرير الصور بالذكاء الاصطناعي.",
    image: nanoBananaPro,
  },
  {
    category: "AI",
    title: "5 طرق لاستخدام Midjourney في عرض المفاهيم",
    description: "كيف توفّر ساعات من العمل بعرض أفكارك للعميل من أول جلسة.",
    image: midjourneyConcepts,
  },
  {
    category: "أعمال",
    title: "كيف تسعّر مشاريع التصميم الداخلي",
    description: "دليل عملي لتسعير خدماتك بثقة وبدون تردد.",
    image: pricingProjects,
  },
  {
    category: "مصادر",
    title: "أفضل 10 مكتبات خامات مجانية",
    description: "قائمة منقاة لأفضل مصادر الخامات لرندر واقعي.",
    image: textureLibraries,
  },
  {
    category: "Workflow",
    title: "من SketchUp إلى رندر نهائي في 30 دقيقة",
    description: "سير عمل متكامل لتسريع تسليم المشاريع.",
    image: sketchupWorkflow,
  },
];

function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-4xl px-6 pb-12 pt-20 text-center">
          <p className="mb-3 font-bold text-coral">المدونة</p>
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">رؤى وأدوات للمصممين.</h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            نصائح عملية، تجارب حقيقية، وأحدث ما يحدث في عالم الذكاء الاصطناعي و Enscape للتصميم الداخلي.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-28">
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="group cursor-pointer text-right">
                <div className="mb-4 aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="mb-3 inline-block rounded-full bg-coral/10 px-3 py-1 text-xs font-bold text-coral">
                  {post.category}
                </span>
                <h2 className="mb-2 text-xl font-bold leading-snug transition group-hover:text-coral">{post.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{post.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
