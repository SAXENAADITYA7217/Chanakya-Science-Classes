import { BarChart3, Trophy } from "lucide-react";
import { performanceData, attendanceHistory } from "@/data/dashboard";
import { DashboardLayout } from "@/pages/dashboard/DashboardLayout";

export default function DashboardResults() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="mc-card p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-brand-600 dark:text-brand-400">Performance</p>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Assessment Summary</h2>
            </div>
            <BarChart3 className="h-8 w-8 text-brand-500" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Average Score", value: "87%" },
              { label: "Best Subject", value: "Algebra" },
              { label: "Rank in Batch", value: "#4" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
                <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mc-card p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-brand-600 dark:text-brand-400">Milestones</p>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Recent Achievements</h2>
            </div>
            <Trophy className="h-8 w-8 text-amber-500" />
          </div>
          <div className="space-y-4">
            {performanceData.map((item) => (
              <div key={item.month} className="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-800">
                <span className="font-medium text-slate-700 dark:text-slate-200">{item.month}</span>
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-32 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-violet-500" style={{ width: `${item.score}%` }} />
                  </div>
                  <span className="w-10 text-right text-sm font-semibold text-slate-900 dark:text-white">{item.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mc-card p-6">
          <p className="text-sm text-brand-600 dark:text-brand-400">Attendance History</p>
          <div className="mt-4 space-y-3">
            {attendanceHistory.map((entry) => (
              <div key={entry.month} className="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-800">
                <span className="font-medium text-slate-700 dark:text-slate-200">{entry.month}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">{entry.attended}/{entry.total} classes attended</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
