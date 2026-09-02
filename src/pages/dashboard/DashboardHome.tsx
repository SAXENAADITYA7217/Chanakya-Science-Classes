import { BarChart, Bar, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { BookOpen, Bell, FileText, GraduationCap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useReveal } from "@/hooks/useReveal";
import { performanceData, enrolledCourses, subjectPerformance } from "@/data/dashboard";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/pages/dashboard/DashboardLayout";

export default function DashboardHome() {
  const { user } = useAuth();
  useReveal();

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Enrolled Courses", value: "03", icon: GraduationCap, tone: "brand" },
            { label: "Study Materials", value: "12", icon: BookOpen, tone: "violet" },
            { label: "Upcoming Tests", value: "05", icon: FileText, tone: "emerald" },
            { label: "Unseen Alerts", value: "03", icon: Bell, tone: "amber" },
          ].map((stat) => (
            <div key={stat.label} className="reveal mc-card p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                </div>
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.tone === "brand" ? "bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300" : stat.tone === "violet" ? "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300" : stat.tone === "emerald" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" : "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="reveal mc-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Performance Trend</h3>
              <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-300">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">+12% this month</span>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" opacity={0.2} vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} stroke="#94a3b8" />
                  <YAxis domain={[0, 100]} tickLine={false} axisLine={false} stroke="#94a3b8" />
                  <Tooltip />
                  <Bar dataKey="score" radius={[8, 8, 0, 0]} fill="#4f46e5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="reveal mc-card p-5">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Subject Performance</h3>
            <div className="mt-6 space-y-4">
              {subjectPerformance.map((subject) => (
                <div key={subject.subject}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">{subject.subject}</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{subject.score}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-violet-500" style={{ width: `${subject.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal mc-card p-5">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Current Courses</h3>
              <Button asChild variant="link" size="sm" className="px-0">
                <Link to="/dashboard/courses">View all</Link>
              </Button>
            </div>
            <div className="space-y-4">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{course.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{course.instructor}</p>
                    </div>
                    <span className="text-sm font-semibold text-brand-600 dark:text-brand-400">{course.progress}%</span>
                  </div>
                  <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-violet-500" style={{ width: `${course.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal mc-card p-5">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Student Snapshot</h3>
            <div className="mt-6 rounded-xl bg-gradient-to-br from-brand-600 to-violet-600 p-5 text-white">
              <p className="text-sm text-brand-100">Welcome back</p>
              <h4 className="mt-1 text-2xl font-bold">{user?.name ?? "Aarav Sharma"}</h4>
              <p className="mt-2 text-sm text-brand-100">Student ID: {user?.studentId ?? "MC-2026-0142"}</p>
              <p className="mt-1 text-sm text-brand-100">Class: {user?.class ?? "Class 12 — Board + JEE"}</p>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
