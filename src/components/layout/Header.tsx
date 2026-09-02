import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GraduationCap, LogIn, Menu } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/courses", label: "Courses" },
  { to: "/faculty", label: "Faculty" },
  { to: "/results", label: "Results" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
      isActive
        ? "text-brand-600 dark:text-brand-400"
        : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
    );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mc-container flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm">
            <Link to="/login">
              <LogIn className="h-4 w-4" /> Student Login
            </Link>
          </Button>
          <Button asChild variant="accent" size="sm">
            <Link to="/admissions">
              <GraduationCap className="h-4 w-4" /> Apply Now
            </Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Logo />
              <nav className="mt-4 flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((l) => (
                  <SheetClose asChild key={l.to}>
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      className={({ isActive }) =>
                        cn(
                          "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-brand-50 text-brand-700 dark:bg-slate-800 dark:text-brand-400"
                            : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        )
                      }
                    >
                      {l.label}
                    </NavLink>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2 pt-6">
                <SheetClose asChild>
                  <Button asChild variant="outline">
                    <Link to="/login">
                      <LogIn className="h-4 w-4" /> Student Login
                    </Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild variant="accent">
                    <Link to="/admissions">
                      <GraduationCap className="h-4 w-4" /> Apply Now
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {/* Active-route underline */}
      <div className="sr-only">Current page: {location.pathname}</div>
    </header>
  );
}
