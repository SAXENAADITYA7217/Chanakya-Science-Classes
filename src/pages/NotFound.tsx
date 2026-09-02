import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mc-container py-20 text-center">
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-12 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">404</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">Page Not Found</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">The page you are looking for may have moved or no longer exists.</p>
        <Button asChild className="mt-8">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </section>
  );
}
