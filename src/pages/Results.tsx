import { PageHeader } from "@/components/shared/PageHeader";
import { results } from "@/data/results";
import { Badge } from "@/components/ui/badge";
import { useReveal } from "@/hooks/useReveal";

export default function Results() {
  useReveal();

  return (
    <>
      <PageHeader crumb="Results" title="Academic Excellence" subtitle="A glimpse of the outstanding achievements of our students across board exams, olympiads, and competitive examinations." />
      <section className="py-16">
        <div className="mc-container grid gap-6 lg:grid-cols-2">
          {results.map((item) => (
            <article key={item.id} className="reveal mc-card mc-card-hover p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${item.color} font-display text-sm font-bold text-white`}>
                    {item.initials}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.course}</p>
                  </div>
                </div>
                <Badge variant="success">{item.year}</Badge>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-brand-50 p-3 dark:bg-brand-950/40">
                  <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Exam</p>
                  <p className="mt-1 font-bold text-slate-900 dark:text-white">{item.exam}</p>
                </div>
                <div className="rounded-xl bg-violet-50 p-3 dark:bg-violet-950/40">
                  <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Score</p>
                  <p className="mt-1 font-bold text-slate-900 dark:text-white">{item.score}</p>
                </div>
                <div className="rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/40">
                  <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Rank</p>
                  <p className="mt-1 font-bold text-slate-900 dark:text-white">{item.rank}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-white">Achievement:</span> {item.achievement}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
