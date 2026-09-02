import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Linkedin, Twitter, MapPin, Phone, Mail, Heart } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { isValidEmail } from "@/lib/utils";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/courses", label: "Courses" },
  { to: "/faculty", label: "Faculty" },
  { to: "/results", label: "Results" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const popularCourses = [
  { to: "/courses/foundation-science-maths", label: "Foundation Science & Maths" },
  { to: "/courses/physics-board-jee", label: "Physics for Boards & JEE" },
  { to: "/courses/chemistry-mastery", label: "Chemistry Mastery" },
  { to: "/courses/neet-biology", label: "NEET Biology" },
  { to: "/courses/computer-science-coding", label: "Computer Science" },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter / X", href: "https://x.com" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    try {
      const subs = JSON.parse(localStorage.getItem("mc-newsletter") || "[]");
      subs.push({ email, date: new Date().toISOString() });
      localStorage.setItem("mc-newsletter", JSON.stringify(subs));
    } catch {}
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mc-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Mathematica Classes helps students excel across Mathematics, Science, English,
            Computer Science, and other core subjects with expert coaching and structured mentoring.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:border-brand-500 hover:bg-brand-600 hover:text-white dark:border-slate-700 dark:text-slate-400"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Popular Courses
          </h4>
          <ul className="mt-4 space-y-2.5">
            {popularCourses.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Contact Information
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" /> Delhi, India
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" /> +91 XXXXX XXXXX
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <a href="mailto:info@mathematicaclasses.com" className="hover:text-brand-600 dark:hover:text-brand-400">
                info@mathematicaclasses.com
              </a>
            </li>
          </ul>
          <form onSubmit={subscribe} className="mt-5">
            <label htmlFor="footer-newsletter" className="mc-label">
              Newsletter
            </label>
            <div className="flex gap-2">
              <Input
                id="footer-newsletter"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" size="sm" className="shrink-0">
                Subscribe
              </Button>
            </div>
            {error && <p className="mc-error">{error}</p>}
          </form>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6 dark:border-slate-800">
        <div className="mc-container flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:text-left">
          <p>
            © 2026{" "}
            <span className="bg-gradient-to-r from-brand-600 to-violet-600 bg-clip-text font-bold text-transparent">
              AshnaAI
            </span>
            . All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-brand-600 dark:hover:text-brand-400">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-brand-600 dark:hover:text-brand-400">
              Terms & Conditions
            </Link>
          </div>
          <p className="flex items-center gap-1">
            Website Developed with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> by{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-brand-600 bg-clip-text font-bold text-transparent">
              Priyanshu
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
