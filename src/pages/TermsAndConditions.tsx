import { PageHeader } from "@/components/shared/PageHeader";

export default function TermsAndConditions() {
  return (
    <>
      <PageHeader crumb="Terms & Conditions" title="Terms & Conditions" subtitle="Please read these terms carefully before enrolling in a course or using our ecosystem." />
      <section className="py-16">
        <div className="mc-container max-w-4xl space-y-6 text-slate-700 dark:text-slate-300">
          <div className="mc-card p-6 sm:p-8">
            <p>By accessing the website and using our services, you agree to the following terms and conditions. These terms are subject to change and should be reviewed periodically.</p>
            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">Enrollment</h3>
            <p className="mt-2">Course enrollment is subject to availability and completion of the required admission process. Fees, schedules, and batches may vary depending on the selected program.</p>
            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">Academic conduct</h3>
            <p className="mt-2">Students are expected to attend classes regularly, complete assigned tasks, and maintain a respectful learning environment. We reserve the right to discontinue access in cases of repeated misconduct or non-compliance.</p>
            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">Content usage</h3>
            <p className="mt-2">Study material, lecture recordings, and educational resources provided by the institute are intended for personal learning use only and may not be reproduced or redistributed without permission.</p>
            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">Liability</h3>
            <p className="mt-2">We strive to provide a high-quality educational experience, but academic outcomes depend on student effort, consistency, and preparation. We are not liable for outcomes beyond the provision of instructional support.</p>
          </div>
        </div>
      </section>
    </>
  );
}
