import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { BookOpen, Home, Bell, LogOut, UserRound, FileCheck, ClipboardList, Presentation, BarChart3, Files, ShieldCheck } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/dashboard", label: "Overview", icon: Home },
  { to: "/dashboard/courses", label: "My Courses", icon: BookOpen },
  { to: "/dashboard/material", label: "Study Material", icon: Files },
  { to: "/dashboard/tests", label: "Tests", icon: ClipboardList },
  { to: "/dashboard/results", label: "Results", icon: BarChart3 },
  { to: "/dashboard/attendance", label: "Attendance", icon: Presentation },
  { to: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { to: "/dashboard/profile", label: "Profile", icon: UserRound },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <div className="mc-container py-8">
        <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Student Portal</p>
            <h1 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">Welcome, {user?.name ?? "Aarav Sharma"}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm">
              <Link to="/">Visit Site</Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4" /> Logout
            </Button>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[260px_1fr]">
          <aside className="mc-card p-3">
            <div className="mb-4 flex items-center gap-3 rounded-xl bg-gradient-to-r from-brand-600 to-violet-600 p-4 text-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-lg font-bold">
                {user?.name?.split(" ").map((n) => n[0]).slice(0, 2).join("") || "AS"}
              </div>
              <div>
                <p className="text-sm text-brand-100">Student</p>
                <p className="font-semibold">{user?.studentId ?? "MC-2026-0142"}</p>
              </div>
            </div>
            <nav className="space-y-1">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/dashboard"}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    )
                  }
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </NavLink>
              ))}
            </nav>
          </aside>

          <main>{children || <Outlet />}</main>
        </div>
      </div>
    </div>
  );
}
