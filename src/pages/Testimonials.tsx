import { Star, Quote } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { testimonials } from "@/data/results";
import { useReveal } from "@/hooks/useReveal";

export default function Testimonials() {
  useReveal();

  return (
    <>
      <PageHeader crumb="Testimonials" title="Student Success Stories" subtitle="A few words from students who transformed their confidence, marks, and future through mathematics." />
      <section className="py-16">
        <div className="mc-container grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <figure key={item.id} className="reveal mc-card mc-card-hover p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${item.color} font-display text-sm font-bold text-white`}>
                    {item.initials}
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{item.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.course}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < item.rating ? "fill-current" : "text-slate-300 dark:text-slate-600"}`} />
                  ))}
                </div>
              </div>

              <Quote className="mt-5 h-6 w-6 text-brand-500/40" />
              <blockquote className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                “{item.review}”
              </blockquote>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
