import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)} aria-label="Eklavya Classes — Home">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-violet-600 font-display text-xl font-bold text-white shadow-md shadow-blue-500/25">
        EC
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-md bg-cyan-400 text-[7px] font-bold text-slate-900">
          TC
        </span>
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block font-display text-base font-bold text-slate-900 dark:text-white">
            Eklavya Classes
          </span>
          <span className="block text-[10px] font-medium tracking-wide text-brand-600 dark:text-brand-400">
            Master Every Subject. Build Your Future.
          </span>
        </span>
      )}
    </Link>
  );
}
