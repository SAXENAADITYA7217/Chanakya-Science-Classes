import { BookOpenCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { enrolledCourses } from "@/data/dashboard";
import { DashboardLayout } from "@/pages/dashboard/DashboardLayout";

export default function DashboardCourses() {
  useReveal();

  return (
    <DashboardLayout>
      <div className="mc-card p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-brand-600 dark:text-brand-400">My Courses</p>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Current Learning Path</h2>
          </div>
          <BookOpenCheck className="h-8 w-8 text-brand-500" />
        </div>

        <div className="space-y-5">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="reveal rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">{course.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{course.instructor}</p>
                </div>
                <Link to="/dashboard" className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                  Continue <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-violet-500" style={{ width: `${course.progress}%` }} />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>{course.completedModules}/{course.totalModules} modules completed</span>
                <span>{course.progress}% complete</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
