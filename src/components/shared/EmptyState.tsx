import { SearchX } from "lucide-react";

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="mc-card flex flex-col items-center justify-center gap-3 py-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800">
        <SearchX className="h-7 w-7 text-slate-400" />
      </span>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{message}</p>
    </div>
  );
}
