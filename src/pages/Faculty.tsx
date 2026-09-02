import { useMemo, useState } from "react";
import { faculty } from "@/data/faculty";
import { PageHeader } from "@/components/shared/PageHeader";
import { FacultyCard } from "@/components/shared/FacultyCard";
import { SearchBar } from "@/components/shared/SearchBar";
import { EmptyState } from "@/components/shared/EmptyState";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useReveal } from "@/hooks/useReveal";

const allExpertise = ["all", ...Array.from(new Set(faculty.flatMap((f) => f.expertise)))];

export default function Faculty() {
  const [query, setQuery] = useState("");
  const [expertise, setExpertise] = useState("all");
  const [experience, setExperience] = useState("all");
  useReveal();

  const filtered = useMemo(() => {
    return faculty.filter((f) => {
      const q = query.trim().toLowerCase();
      const matchQ = !q || f.name.toLowerCase().includes(q) || f.bio.toLowerCase().includes(q) || f.expertise.some((e) => e.toLowerCase().includes(q));
      const matchE = expertise === "all" || f.expertise.includes(expertise);
      const years = parseInt(f.experience);
      const matchExp =
        experience === "all" ||
        (experience === "10" && years >= 10) ||
        (experience === "12" && years >= 12) ||
        (experience === "15" && years >= 15);
      return matchQ && matchE && matchExp;
    });
  }, [query, expertise, experience]);

  return (
    <>
      <PageHeader
        crumb="Faculty"
        title="Meet Our Expert Faculty"
        subtitle="Learn from 50+ qualified mathematics educators — Ph.D.s, IIT alumni, olympiad trainers and board exam specialists."
      />

      <section className="py-12">
        <div className="mc-container">
          <div className="reveal flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <SearchBar value={query} onChange={setQuery} placeholder="Search faculty by name or expertise…" />
            <div className="flex flex-wrap gap-3">
              <Select value={expertise} onValueChange={setExpertise}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Expertise" />
                </SelectTrigger>
                <SelectContent>
                  {allExpertise.map((e) => (
                    <SelectItem key={e} value={e}>
                      {e === "all" ? "All Expertise" : e}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={experience} onValueChange={setExperience}>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Experience</SelectItem>
                  <SelectItem value="10">10+ Years</SelectItem>
                  <SelectItem value="12">12+ Years</SelectItem>
                  <SelectItem value="15">15+ Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((m) => (
              <div key={m.id} className="reveal">
                <FacultyCard member={m} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-6">
              <EmptyState message="No faculty members match your filters." />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
