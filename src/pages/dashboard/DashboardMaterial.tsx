import { Download, Search, FileText } from "lucide-react";
import { studyMaterials, materialCategories } from "@/data/dashboard";
import { useReveal } from "@/hooks/useReveal";
import { DashboardLayout } from "@/pages/dashboard/DashboardLayout";

export default function DashboardMaterial() {
  useReveal();

  return (
    <DashboardLayout>
      <div className="mc-card p-6">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-brand-600 dark:text-brand-400">Study Material</p>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Download & Revise</h2>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
            <Search className="h-4 w-4" />
            Search material
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {materialCategories.map((category) => (
            <button key={category} type="button" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {studyMaterials.map((material) => (
            <div key={material.id} className="reveal flex flex-col gap-3 rounded-2xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-300">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{material.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{material.category} • {material.course}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span>{material.type}</span>
                <span>{material.size}</span>
                <button type="button" className="inline-flex items-center gap-1 rounded-lg bg-brand-600 px-3 py-2 text-white hover:bg-brand-700">
                  <Download className="h-4 w-4" /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
