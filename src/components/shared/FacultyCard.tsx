import { GraduationCap, Briefcase } from "lucide-react";
import type { FacultyMember } from "@/types";
import { Badge } from "@/components/ui/badge";

export function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <article className="mc-card mc-card-hover flex flex-col p-6 text-center">
      <div
        className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${member.color} font-display text-2xl font-bold text-white shadow-lg`}
      >
        {member.initials}
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
      <p className="text-sm font-medium text-brand-600 dark:text-brand-400">{member.title}</p>
      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{member.qualification}</p>
      <div className="mt-3 flex flex-wrap justify-center gap-1.5">
        {member.expertise.map((e) => (
          <Badge key={e} variant="secondary">
            {e}
          </Badge>
        ))}
      </div>
      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {member.bio}
      </p>
      <div className="mt-4 flex items-center justify-center gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <Briefcase className="h-3.5 w-3.5 text-brand-500" /> {member.experience}
        </span>
        <span className="flex items-center gap-1.5">
          <GraduationCap className="h-3.5 w-3.5 text-brand-500" /> Expert Faculty
        </span>
      </div>
    </article>
  );
}
