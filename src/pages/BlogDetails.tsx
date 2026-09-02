import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock3, User2 } from "lucide-react";
import { blogPosts, getPost } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useReveal } from "@/hooks/useReveal";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = getPost(slug || "");
  useReveal();

  if (!post) {
    return (
      <section className="mc-container py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Article not found</h1>
        <Button asChild className="mt-6">
          <Link to="/blog">Return to blog</Link>
        </Button>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="mc-container max-w-4xl">
        <Button asChild variant="outline" className="reveal mb-8">
          <Link to="/blog"><ArrowLeft className="h-4 w-4" /> Back to blog</Link>
        </Button>

        <article className="reveal mc-card overflow-hidden">
          <div className={`flex h-72 items-center justify-center bg-gradient-to-br ${post.image}`}>
            <span className="font-display text-7xl font-bold text-white/90">∫</span>
          </div>
          <div className="p-6 sm:p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{post.category}</Badge>
              <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400"><CalendarDays className="h-4 w-4" /> {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400"><Clock3 className="h-4 w-4" /> {post.readingTime}</span>
            </div>

            <h1 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{post.title}</h1>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <User2 className="h-4 w-4" /> By {post.author}
            </p>

            <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{section.heading}</h2>
                  <p className="mt-3 text-base leading-8">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
