import { useMemo, useState } from "react";
import { Filter, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/badge";
import { galleryCategories, galleryItems } from "@/data/gallery";
import { useReveal } from "@/hooks/useReveal";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  useReveal();

  const visible = useMemo(
    () => (filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter]
  );

  return (
    <>
      <PageHeader crumb="Gallery" title="Campus Memories & Learning Moments" subtitle="See the energy of our classrooms, workshops, competitions, and student achievements." />
      <section className="py-12">
        <div className="mc-container">
          <div className="reveal flex flex-wrap gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-brand-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((item) => (
              <article key={item.id} className="reveal group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${item.gradient}`}>
                  <span className="text-5xl drop-shadow-sm">{item.icon}</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="secondary">{item.category}</Badge>
                    <Filter className="h-4 w-4 text-slate-400" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>

          {visible.length === 0 && (
            <div className="reveal mt-12 rounded-2xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-700">
              <Sparkles className="mx-auto h-8 w-8 text-brand-500" />
              <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">No gallery items available for this filter.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
