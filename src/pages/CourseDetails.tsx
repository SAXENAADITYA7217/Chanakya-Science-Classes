import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Clock, BarChart3, User, Star, Users, CheckCircle2, PlayCircle, FileText,
  ClipboardList, CalendarCheck, MessageCircleQuestion, LineChart, GraduationCap, ArrowLeft,
} from "lucide-react";
import { getCourse } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useReveal } from "@/hooks/useReveal";
import NotFound from "./NotFound";

const featureIcons = [PlayCircle, FileText, ClipboardList, CalendarCheck, MessageCircleQuestion, LineChart];

export default function CourseDetails() {
  const { slug } = useParams();
  const course = slug ? getCourse(slug) : undefined;
  const [applied, setApplied] = useState(false);
  const navigate = useNavigate();
  useReveal();

  if (!course) return <NotFound />;

  const apply = () => {
    setApplied(true);
    navigate("/admissions", { state: { preselectedCourse: course.name } });
  };

  return (
    <>
      {/* Banner */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${course.image} py-16`}>
        <div className="mc-hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="mc-container relative">
          <Link to="/courses" className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </Link>
          <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-white/90 text-slate-900">{course.classes}</Badge>
                <Badge variant={course.level === "Beginner" ? "success" : course.level === "Intermediate" ? "warning" : "danger"} className="bg-white/90">
                  {course.level}
                </Badge>
                <span className="flex items-center gap-1 text-sm font-semibold text-white">
                  <Star className="h-4 w-4 fill-amber-300 text-amber-300" /> {course.rating} ({course.students.toLocaleString()} students)
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{course.name}</h1>
              <p className="mt-3 text-lg text-white/90">{course.tagline}</p>
            </div>
            <div className="mc-card w-full max-w-xs p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Course Fee</p>
              <p className="mt-1 font-display text-3xl font-bold text-slate-900 dark:text-white">{course.fee}</p>
              <Button variant="accent" className="mt-4 w-full" onClick={apply}>
                <GraduationCap className="h-4 w-4" /> Apply for Course
              </Button>
              <p className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">
                {applied ? "Taking you to the application…" : "Limited seats per batch"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mc-container grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Quick facts */}
            <div className="reveal grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { icon: Clock, label: "Duration", value: course.duration },
                { icon: BarChart3, label: "Level", value: course.level },
                { icon: User, label: "Instructor", value: course.instructor },
              ].map((f) => (
                <div key={f.label} className="mc-card flex items-center gap-3 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-slate-800 dark:text-brand-400">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{f.label}</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="reveal mc-card mt-8 p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Course Description</h2>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{course.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {course.focus.map((f) => (
                  <Badge key={f} variant="violet">{f}</Badge>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="reveal mt-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Course Curriculum</h2>
              <Accordion type="single" collapsible className="mt-4">
                {course.modules.map((m, i) => (
                  <AccordionItem key={m.title} value={`m${i}`}>
                    <AccordionTrigger>
                      <span className="font-display">{m.title}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {m.topics.map((t) => (
                          <li key={t} className="flex items-center gap-2.5">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* What you'll learn */}
            <div className="reveal mc-card mt-8 p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">What Students Will Learn</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {course.learn.map((l) => (
                  <li key={l} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="reveal mc-card p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Course Features</h3>
              <ul className="mt-4 space-y-3">
                {course.features.map((f, i) => {
                  const Icon = featureIcons[i % featureIcons.length];
                  return (
                    <li key={f} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-slate-800 dark:text-brand-400">
                        <Icon className="h-4 w-4" />
                      </span>
                      {f}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="reveal mc-card p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Your Instructor</h3>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 font-display text-sm font-bold text-white">
                  {course.instructor.split(" ").slice(-2).map((w) => w[0]).join("")}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{course.instructor}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{course.instructorTitle}</p>
                </div>
              </div>
              <Button asChild variant="outline" className="mt-4 w-full">
                <Link to="/faculty">View All Faculty</Link>
              </Button>
            </div>

            <div className="reveal rounded-2xl bg-gradient-to-br from-brand-600 to-violet-700 p-6 text-white">
              <Users className="h-8 w-8" />
              <h3 className="mt-3 text-lg font-bold">Need Help Choosing?</h3>
              <p className="mt-2 text-sm text-brand-100">
                Talk to our academic counselors to find the right program for your goals.
              </p>
              <Button asChild className="mt-4 w-full bg-white text-brand-700 hover:bg-brand-50">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
