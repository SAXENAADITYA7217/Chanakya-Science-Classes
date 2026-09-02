import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock3, User2 } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { blogPosts } from "@/data/blog";
import { useReveal } from "@/hooks/useReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
  useReveal();

  return (
    <>
      <PageHeader crumb="Blog" title="Insights, Strategies & Study Tips" subtitle="Explore proven guidance, learning techniques, and exam strategies to improve your mathematics journey." />
      <section className="py-16">
        <div className="mc-container grid gap-8 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="reveal mc-card mc-card-hover overflow-hidden">
              <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${post.image}`}>
                <span className="font-display text-5xl font-bold text-white/90">∑</span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{post.readingTime}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1"><User2 className="h-3.5 w-3.5" /> {post.author}</span>
                  <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                </div>
                <Button asChild variant="link" className="mt-5 px-0 text-brand-600 dark:text-brand-400">
                  <Link to={`/blog/${post.slug}`}>
                    Read article <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
