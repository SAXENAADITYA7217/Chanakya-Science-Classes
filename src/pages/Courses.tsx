import { useMemo, useState } from "react";
import { courses } from "@/data/courses";
import { PageHeader } from "@/components/shared/PageHeader";
import { CourseCard } from "@/components/shared/CourseCard";
import { SearchBar } from "@/components/shared/SearchBar";
import { EmptyState } from "@/components/shared/EmptyState";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useReveal } from "@/hooks/useReveal";

export default function Courses() {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("all");
  const [type, setType] = useState("all");
  useReveal();

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        c.focus.some((f) => f.toLowerCase().includes(q));
      const matchLevel = level === "all" || c.level === level;
      const matchType =
        type === "all" ||
        (type === "school" && c.classes.includes("Classes")) ||
        (type === "competitive" && (c.name.includes("JEE") || c.name.includes("Competitive") || c.name.includes("Olympiad")));
      return matchQ && matchLevel && matchType;
    });
  }, [query, level, type]);

  return (
    <>
      <PageHeader
        crumb="Courses"
        title="Our Multi-Subject Courses"
        subtitle="Structured programs for classes 6–12, board exams, IIT-JEE, NEET, Olympiads, and competitive preparation across all major subjects."
      />

      <section className="py-12">
        <div className="mc-container">
          <div className="reveal flex flex-col gap-3 sm:flex-row sm:items-center">
            <SearchBar value={query} onChange={setQuery} placeholder="Search courses, topics…" />
            <div className="flex flex-wrap gap-3">
              <Select value={level} onValueChange={setLevel}>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="school">School / Board</SelectItem>
                  <SelectItem value="competitive">Competitive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <p className="reveal mt-6 text-sm text-slate-500 dark:text-slate-400">
            Showing {filtered.length} of {courses.length} courses
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <div key={c.id} className="reveal">
                <CourseCard course={c} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-6">
              <EmptyState message="No courses match your search. Try different keywords or filters." />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
