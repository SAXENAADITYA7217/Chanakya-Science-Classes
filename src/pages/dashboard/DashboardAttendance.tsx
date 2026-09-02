import { CalendarCheck2 } from "lucide-react";
import { attendanceData } from "@/data/dashboard";
import { DashboardLayout } from "@/pages/dashboard/DashboardLayout";

export default function DashboardAttendance() {
  return (
    <DashboardLayout>
      <div className="mc-card p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-brand-600 dark:text-brand-400">Attendance</p>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Monthly Attendance</h2>
          </div>
          <CalendarCheck2 className="h-8 w-8 text-brand-500" />
        </div>

        <div className="grid grid-cols-7 gap-2">
          {attendanceData.map((day) => (
            <div
              key={day.day}
              className={`flex h-12 items-center justify-center rounded-xl text-xs font-semibold ${
                day.status === "present"
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                  : "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
              }`}
            >
              {day.day}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
