import { Link } from "react-router-dom";
import { Clock, BarChart3, User, Star, ArrowRight } from "lucide-react";
import type { Course } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="mc-card mc-card-hover group flex flex-col overflow-hidden">
      <div
        className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${course.image}`}
      >
        <span className="font-display text-6xl font-bold text-white/90 drop-shadow-lg">
          {course.icon}
        </span>
        <span className="absolute bottom-3 left-4 rounded-full bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {course.classes}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-slate-900">
          ★ {course.rating}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <Badge variant={course.level === "Beginner" ? "success" : course.level === "Intermediate" ? "warning" : "danger"}>
            {course.level}
          </Badge>
          <span className="text-xs text-slate-500 dark:text-slate-400">{course.students.toLocaleString()} students</span>
        </div>
        <h3 className="mt-3 text-lg font-bold text-slate-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
          {course.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
          {course.tagline}
        </p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {course.focus.slice(0, 3).map((f) => (
            <li key={f}>
              <Badge variant="secondary">{f}</Badge>
            </li>
          ))}
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-brand-500" /> {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <BarChart3 className="h-3.5 w-3.5 text-brand-500" /> {course.level}
          </span>
          <span className="col-span-2 flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-brand-500" /> {course.instructor}
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
          <span className="text-sm font-bold text-slate-900 dark:text-white">{course.fee}</span>
          <Button asChild size="sm" variant="accent">
            <Link to={`/courses/${course.slug}`}>
              View Details <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
