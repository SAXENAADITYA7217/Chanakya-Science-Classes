import { useState } from "react";
import { CheckCircle2, Clock3 } from "lucide-react";
import { testQuestions } from "@/data/dashboard";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/pages/dashboard/DashboardLayout";

export default function DashboardTests() {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = testQuestions.reduce((total, q) => {
    const choice = selected[q.id];
    if (typeof choice === "number" && choice === q.answer) return total + 1;
    return total;
  }, 0);

  return (
    <DashboardLayout>
      <div className="mc-card p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-brand-600 dark:text-brand-400">Assessment</p>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Weekly Mathematics Test</h2>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-brand-50 px-3 py-2 text-sm text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            <Clock3 className="h-4 w-4" /> 10 questions
          </div>
        </div>

        <div className="space-y-6">
          {testQuestions.map((question, index) => (
            <div key={question.id} className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
              <p className="text-sm text-brand-600 dark:text-brand-400">Q{index + 1} • {question.topic}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{question.question}</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {question.options.map((option, optIndex) => {
                  const active = selected[question.id] === optIndex;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelected((prev) => ({ ...prev, [question.id]: optIndex }))}
                      className={`rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                        active
                          ? "border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-400 dark:bg-brand-950 dark:text-brand-300"
                          : "border-slate-200 bg-white text-slate-700 hover:border-brand-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-600 dark:text-slate-400">
            {submitted ? `Score: ${score}/${testQuestions.length}` : "Answer all questions to submit your test."}
          </div>
          <Button variant="accent" onClick={() => setSubmitted(true)}>
            <CheckCircle2 className="h-4 w-4" /> Submit Test
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
