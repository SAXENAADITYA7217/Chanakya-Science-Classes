import { useReveal } from "@/hooks/useReveal";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  crumb?: string;
}

export function PageHeader({ title, subtitle, crumb }: PageHeaderProps) {
  useReveal();
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-brand-50 via-white to-violet-50 py-14 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="mc-hero-grid absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-10 top-0 select-none font-display text-[10rem] font-bold leading-none text-brand-500/5 dark:text-brand-400/5"
        aria-hidden="true"
      >
        ∫
      </div>
      <div className="mc-container relative">
        {crumb && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            {crumb}
          </p>
        )}
        <h1 className="reveal max-w-3xl text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="reveal mt-4 max-w-2xl text-slate-600 dark:text-slate-400">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
