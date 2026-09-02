import { BellRing } from "lucide-react";
import { initialNotifications } from "@/data/dashboard";
import { DashboardLayout } from "@/pages/dashboard/DashboardLayout";

export default function DashboardNotifications() {
  return (
    <DashboardLayout>
      <div className="mc-card p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-brand-600 dark:text-brand-400">Alerts</p>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Notifications</h2>
          </div>
          <BellRing className="h-8 w-8 text-brand-500" />
        </div>

        <div className="space-y-3">
          {initialNotifications.map((notification) => (
            <div key={notification.id} className={`flex gap-3 rounded-2xl border p-4 ${notification.read ? "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900" : "border-brand-200 bg-brand-50 dark:border-brand-900 dark:bg-brand-950/20"}`}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-xl dark:bg-slate-800">
                {notification.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-slate-900 dark:text-white">{notification.title}</p>
                  {!notification.read && <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />}
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{notification.body}</p>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
