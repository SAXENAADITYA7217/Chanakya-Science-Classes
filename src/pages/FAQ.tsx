import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { useReveal } from "@/hooks/useReveal";

const faqs = [
  { q: "How do I enroll in a course?", a: "Visit the admissions page, choose your preferred course, fill the application form, and our team will contact you within 48 hours for confirmation and onboarding." },
  { q: "Do you offer free demo classes?", a: "Yes. We offer a free trial or demo session for most courses so students can understand the teaching style, faculty approach, and class environment before enrolling." },
  { q: "Are classes available online and offline?", a: "We offer both online live classes and in-person batches depending on the course and location. Students can choose the mode that suits them best." },
  { q: "What is your batch size?", a: "Our batches are intentionally small to ensure individual attention. Average batch size stays between 12–20 students to maintain quality interaction." },
  { q: "Do you provide study material?", a: "Yes. Every enrolled student gets notes, formula sheets, chapter tests, previous-year papers, and recorded classes depending on the course." },
  { q: "Can students prepare for both boards and competitive exams together?", a: "Absolutely. Our board and JEE programs are designed to cover both school requirements and advanced competitive preparation without compromising conceptual clarity." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  useReveal();

  return (
    <>
      <PageHeader crumb="FAQ" title="Frequently Asked Questions" subtitle="Everything you need to know before joining the AKP Tuition Center learning community." />
      <section className="py-16">
        <div className="mc-container max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.q} className="reveal mc-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-slate-900 dark:text-white">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open && <p className="border-t border-slate-200 px-5 py-4 text-slate-600 dark:border-slate-800 dark:text-slate-300">{faq.a}</p>}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
