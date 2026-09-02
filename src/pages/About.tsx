import { Link } from "react-router-dom";
import { Target, Eye, HeartHandshake, ArrowRight, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";

const values = [
  { icon: Target, title: "Our Mission", body: "To make every student fall in love with mathematics by teaching concepts, not shortcuts to memorization — building thinkers who excel in academics and life." },
  { icon: Eye, title: "Our Vision", body: "To be India's most trusted mathematics learning platform where every student, regardless of starting ability, can achieve excellence through structured guidance." },
  { icon: HeartHandshake, title: "Our Values", body: "Concept clarity first. Honest feedback always. Personal attention for every student. And the belief that mathematical ability is built, not born." },
];

export default function About() {
  useReveal();
  return (
    <>
      <PageHeader
        crumb="About Us"
        title="About AKP Tuition Center"
        subtitle="AKP Tuition Center is a modern educational institute providing expert teaching, personalized guidance, study materials, regular tests, and academic support across multiple subjects."
      />

      <section className="py-16">
        <div className="mc-container grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="mc-card grid grid-cols-2 gap-4 p-6">
              {["π", "∑", "√", "∫", "x²", "Δ"].map((s, i) => (
                <div key={s} className="flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-violet-50 font-display text-4xl font-bold text-brand-600 dark:from-slate-800 dark:to-slate-800 dark:text-brand-400">
                  {s}
                </div>
              ))}
            </div>
            <div className="absolute -right-3 -top-3 h-full w-full rounded-xl border-2 border-brand-500/20" aria-hidden="true" />
          </div>
          <div>
            <h2 className="reveal mc-section-title text-slate-900 dark:text-white">
              A Decade of Building Mathematical Confidence
            </h2>
            <p className="reveal mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              Founded over 10 years ago in Delhi, AKP Tuition Center began with a simple observation:
              students learn best when concepts are taught clearly and supported with personal
              mentoring. We built an institute around expert teaching, practice, and guidance.
            </p>
            <p className="reveal mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              Today, with 50+ expert teachers and 10,000+ trained students, we coach everything from
              class 6 foundations to IIT-JEE, Olympiads and government exams — with the same
              obsession: every student must understand, not memorize.
            </p>
            <div className="reveal mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { n: "10,000+", l: "Students" },
                { n: "500+", l: "Achievers" },
                { n: "10+", l: "Years" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-brand-50 p-4 dark:bg-slate-800">
                  <p className="font-display text-2xl font-bold text-brand-600 dark:text-brand-400">{s.n}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100/60 py-16 dark:bg-slate-900/40">
        <div className="mc-container grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="reveal mc-card mc-card-hover p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-violet-600 text-white">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mc-container text-center">
          <h2 className="reveal mc-section-title text-slate-900 dark:text-white">
            Begin Your Mathematics Journey
          </h2>
          <p className="reveal mc-subtitle mx-auto max-w-xl">
            Explore our courses and find the program built for your class, your exam, and your goals.
          </p>
          <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
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
        </div>
      </section>
    </>
  );
}
