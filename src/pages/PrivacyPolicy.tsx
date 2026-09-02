import { PageHeader } from "@/components/shared/PageHeader";

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader crumb="Privacy Policy" title="Privacy Policy" subtitle="How we collect, use, and protect the information you share with us." />
      <section className="py-16">
        <div className="mc-container max-w-4xl space-y-6 text-slate-700 dark:text-slate-300">
          <div className="mc-card p-6 sm:p-8">
            <p>We respect your privacy and are committed to keeping your personal information secure. This page explains how we collect, store, and use information on our platform.</p>
            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">Information we collect</h3>
            <p className="mt-2">We may collect information such as your name, contact details, course preferences, academic history, and communication preferences when you contact us or submit an admission form.</p>
            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">How we use it</h3>
            <p className="mt-2">This information is used to communicate with you, process applications, provide academic support, and improve the quality of our coaching services and learning experience.</p>
            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">Data protection</h3>
            <p className="mt-2">We take reasonable steps to secure personal information from unauthorized access, misuse, or disclosure. We do not sell or rent your personal data to third parties.</p>
            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">Contact</h3>
            <p className="mt-2">If you have any questions about this policy, please contact us at info@eklavyaclasses.com.</p>
          </div>
        </div>
      </section>
    </>
  );
}
