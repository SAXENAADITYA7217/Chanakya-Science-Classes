import { Link } from "react-router-dom";
import {
  GraduationCap, Lightbulb, ClipboardCheck, HeartHandshake, BookOpen, MessageCircleQuestion,
  ArrowRight, Trophy, Users, Award, CalendarCheck, Quote, Star,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useCounter } from "@/hooks/useCounter";
import { courses } from "@/data/courses";
import { testimonials } from "@/data/results";
import { CourseCard } from "@/components/shared/CourseCard";
import { NewsletterSection } from "@/components/shared/NewsletterSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const features = [
  { icon: GraduationCap, title: "Expert Subject Faculty", body: "Learn from qualified educators across Mathematics, Science, English, Social Science, and Computer Science." },
  { icon: Lightbulb, title: "Concept-Based Learning", body: "Master fundamentals in every subject with clear explanations, examples, and practical understanding." },
  { icon: ClipboardCheck, title: "Regular Practice Tests", body: "Assess progress with chapter tests, mock exams, and performance reviews for every stream." },
  { icon: HeartHandshake, title: "Personalized Guidance", body: "Receive mentoring tailored to your class, goals, board exams, NEET, JEE, and competitive preparation." },
  { icon: BookOpen, title: "Rich Study Material", body: "Access notes, worksheets, MCQ banks, revision sheets, and sample papers across all subjects." },
  { icon: MessageCircleQuestion, title: "Doubt Solving Sessions", body: "Resolve problems with expert faculty in focused doubt-clearing classes and one-on-one mentoring." },
];

function Stat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, value } = useCounter(target);
  return (
    <div className="reveal text-center">
      <p className="font-display text-4xl font-bold text-brand-600 dark:text-brand-400 sm:text-5xl">
        <span ref={ref}>{value.toLocaleString()}</span>
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">{label}</p>
    </div>
  );
}

export default function Home() {
  useReveal();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-violet-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="mc-hero-grid absolute inset-0" aria-hidden="true" />
        {/* Floating math symbols */}
        <span className="pointer-events-none absolute left-[8%] top-24 animate-float-slow select-none font-display text-6xl text-brand-500/15 dark:text-brand-400/10" aria-hidden="true">π</span>
        <span className="pointer-events-none absolute right-[12%] top-40 animate-float-slow select-none font-display text-5xl text-violet-500/15 dark:text-violet-400/10 [animation-delay:1.5s]" aria-hidden="true">∑</span>
        <span className="pointer-events-none absolute bottom-24 left-[15%] animate-float-slow select-none font-display text-5xl text-cyan-500/15 dark:text-cyan-400/10 [animation-delay:3s]" aria-hidden="true">√</span>
        <span className="pointer-events-none absolute bottom-40 right-[8%] animate-float-slow select-none font-display text-6xl text-brand-500/10 dark:text-brand-400/10 [animation-delay:2s]" aria-hidden="true">∫</span>

        <div className="mc-container relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <Badge variant="default" className="reveal mb-5 px-4 py-1.5 text-sm">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> Rated 4.9/5 by 10,000+ students
            </Badge>
            <h1 className="reveal text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Master Every Subject{" "}
              <span className="bg-gradient-to-r from-brand-600 to-violet-600 bg-clip-text text-transparent dark:from-brand-400 dark:to-violet-400">
                With Confidence
              </span>
            </h1>
            <p className="reveal mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-400">
              AKP Tuition Center offers expert coaching in Mathematics, Science, Physics, Chemistry,
              Biology, English, Hindi, Social Science, and Computer Science for classes 6–12 and competitive exams.
            </p>
            <div className="reveal mt-8 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="lg">
                <Link to="/courses">
                  Explore Courses <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/admissions">
                  <GraduationCap className="h-4 w-4" /> Apply Now
                </Link>
              </Button>
            </div>
            <div className="reveal mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2"><Trophy className="h-4 w-4 text-amber-500" /> 500+ Top Achievers</span>
              <span className="flex items-center gap-2"><Users className="h-4 w-4 text-brand-500" /> 40+ Expert Teachers</span>
              <span className="flex items-center gap-2"><CalendarCheck className="h-4 w-4 text-emerald-500" /> 10+ Years of Excellence</span>
            </div>
          </div>

          {/* Hero visual card */}
          <div className="reveal relative mx-auto w-full max-w-md">
            <div className="mc-card relative z-10 p-6 shadow-xl shadow-blue-500/10">
              <div className="flex items-center justify-between">
                <p className="font-display text-sm font-bold text-slate-900 dark:text-white">y = mx + c</p>
                <Badge variant="accent">Live Class</Badge>
              </div>
              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                <div className="flex h-36 items-end justify-between gap-2">
                  {[35, 55, 42, 70, 58, 85, 92].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-brand-600 to-violet-500 transition-all hover:opacity-80" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">Weekly Test Performance</p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-brand-50 p-3 text-center dark:bg-slate-800">
                  <p className="font-display text-2xl font-bold text-brand-600 dark:text-brand-400">98%</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Topper Score</p>
                </div>
                <div className="rounded-xl bg-violet-50 p-3 text-center dark:bg-slate-800">
                  <p className="font-display text-2xl font-bold text-violet-600 dark:text-violet-400">AIR 245</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">JEE Advanced</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-200 p-3 dark:border-slate-700">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 font-display text-sm font-bold text-white">RS</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Dr. Rahul Sharma</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Teaching Calculus — Limits & Continuity</p>
                </div>
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 -z-0 h-full w-full rounded-xl bg-gradient-to-br from-brand-600/15 to-violet-600/15" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-slate-200 bg-white py-14 dark:border-slate-800 dark:bg-slate-950">
        <div className="mc-container grid grid-cols-2 gap-8 lg:grid-cols-4">
          <Stat target={10000} suffix="+" label="Students Trained" />
          <Stat target={500} suffix="+" label="Top Achievers" />
          <Stat target={50} suffix="+" label="Expert Mathematics Teachers" />
          <Stat target={10} suffix="+" label="Years of Excellence" />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20">
        <div className="mc-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">Why Choose Us</p>
            <h2 className="reveal mc-section-title mt-2 text-slate-900 dark:text-white">
              Why Choose AKP Tuition Center
            </h2>
            <p className="reveal mc-subtitle">
              All the academic support a student needs across subjects, classes, and exam goals — under one roof.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="reveal mc-card mc-card-hover p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-violet-600 text-white shadow-md shadow-blue-500/20">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section className="bg-slate-100/60 py-20 dark:bg-slate-900/40">
        <div className="mc-container">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="reveal text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">Popular Courses</p>
              <h2 className="reveal mc-section-title mt-2 text-slate-900 dark:text-white">
                Courses Across Subjects & Career Goals
              </h2>
            </div>
            <Button asChild variant="outline" className="reveal shrink-0">
              <Link to="/courses">
                View All Courses <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 6).map((c) => (
              <div key={c.id} className="reveal">
                <CourseCard course={c} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="py-20">
        <div className="mc-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="reveal text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">Testimonials</p>
            <h2 className="reveal mc-section-title mt-2 text-slate-900 dark:text-white">
              What Our Students Say
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <figure key={t.id} className="reveal mc-card mc-card-hover relative p-6">
                <Quote className="absolute right-5 top-5 h-8 w-8 text-brand-500/15" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-300 dark:text-slate-600"}`} />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  "{t.review}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white`}>
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.course}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/testimonials">
                Read All Testimonials <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mc-container pb-20">
        <div className="reveal relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-700 to-violet-700 px-8 py-14 text-center shadow-xl shadow-blue-500/20">
          <span className="pointer-events-none absolute left-6 top-4 select-none font-display text-7xl text-white/10" aria-hidden="true">x²</span>
          <span className="pointer-events-none absolute bottom-4 right-8 select-none font-display text-7xl text-white/10" aria-hidden="true">∫</span>
          <h2 className="relative text-3xl font-bold text-white sm:text-4xl">
            Ready to Master Every Subject?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-brand-100">
            Join 10,000+ students building their future with structured, expert-led coaching across school and competitive exams.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-brand-700 hover:bg-brand-50">
              <Link to="/admissions">
                <GraduationCap className="h-4 w-4" /> Apply Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:border-white hover:bg-white/10 hover:text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
