import { useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle2, Upload, PartyPopper, Loader2 } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { courses } from "@/data/courses";
import { toast } from "sonner";
import { isValidEmail, isValidPhone } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  "Choose Your Course",
  "Fill Application Form",
  "Submit Details",
  "Application Review",
  "Confirm Admission",
];

interface FormState {
  studentName: string; dob: string; gender: string; email: string; phone: string;
  parentName: string; parentPhone: string; address: string; course: string;
  school: string; currentClass: string; performance: string; agree: boolean;
}

const initialForm: FormState = {
  studentName: "", dob: "", gender: "", email: "", phone: "",
  parentName: "", parentPhone: "", address: "", course: "",
  school: "", currentClass: "", performance: "", agree: false,
};

export default function Admissions() {
  const location = useLocation() as { state?: { preselectedCourse?: string } };
  const [form, setForm] = useState<FormState>({
    ...initialForm,
    course: location.state?.preselectedCourse || "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [uploads, setUploads] = useState<Record<string, string>>({});
  useReveal();

  const set = (k: keyof FormState, v: string | boolean) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.studentName.trim()) e.studentName = "Student name is required.";
    if (!form.dob) e.dob = "Date of birth is required.";
    if (!form.gender) e.gender = "Please select gender.";
    if (!isValidEmail(form.email)) e.email = "Please enter a valid email address.";
    if (!isValidPhone(form.phone)) e.phone = "Please enter a valid phone number.";
    if (!form.parentName.trim()) e.parentName = "Parent / guardian name is required.";
    if (!isValidPhone(form.parentPhone)) e.parentPhone = "Please enter a valid phone number.";
    if (!form.address.trim()) e.address = "Address is required.";
    if (!form.course) e.course = "Please select a course.";
    if (!form.school.trim()) e.school = "Current school is required.";
    if (!form.currentClass) e.currentClass = "Please select your current class.";
    if (!form.agree) e.agree = "You must agree to the Terms & Conditions.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      try {
        const apps = JSON.parse(localStorage.getItem("mc-applications") || "[]");
        apps.push({ ...form, uploads, date: new Date().toISOString() });
        localStorage.setItem("mc-applications", JSON.stringify(apps));
      } catch {}
      setLoading(false);
      setSuccess(true);
      toast.success("Application Submitted Successfully!");
    }, 1200);
  };

  const fileField = (id: string, label: string) => (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <label
        htmlFor={id}
        className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-slate-300 px-3.5 py-2.5 text-sm text-slate-500 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-400"
      >
        <Upload className="h-4 w-4" />
        {uploads[id] || "Choose file (demo)"}
      </label>
      <input
        id={id}
        type="file"
        className="sr-only"
        onChange={(e) => {
          const name = e.target.files?.[0]?.name;
          if (name) setUploads((u) => ({ ...u, [id]: name }));
        }}
      />
    </div>
  );

  return (
    <>
      <PageHeader
        crumb="Admissions"
        title="Admissions Open 2026–27"
        subtitle="Join Chanakya Science Classes in five simple steps. Fill the application form below and our team will contact you within 48 hours."
      />

      {/* Process steps */}
      <section className="py-12">
        <div className="mc-container">
          <ol className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s} className="reveal mc-card mc-card-hover relative p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-violet-600 font-display text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm font-bold text-slate-900 dark:text-white">{s}</p>
                {i < steps.length - 1 && (
                  <CheckCircle2 className="absolute -right-2 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-brand-500 lg:block" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Application form */}
      <section className="pb-16">
        <div className="mc-container max-w-3xl">
          <div className="reveal mc-card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Admission Application Form</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Fields marked * are required.
            </p>

            <form onSubmit={submit} noValidate className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="studentName">Student Name *</Label>
                <Input id="studentName" value={form.studentName} onChange={(e) => set("studentName", e.target.value)} placeholder="Full name" />
                {errors.studentName && <p className="mc-error">{errors.studentName}</p>}
              </div>
              <div>
                <Label htmlFor="dob">Date of Birth *</Label>
                <Input id="dob" type="date" value={form.dob} onChange={(e) => set("dob", e.target.value)} />
                {errors.dob && <p className="mc-error">{errors.dob}</p>}
              </div>
              <div>
                <Label>Gender *</Label>
                <Select value={form.gender} onValueChange={(v) => set("gender", v)}>
                  <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && <p className="mc-error">{errors.gender}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" />
                {errors.email && <p className="mc-error">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 98765 43210" />
                {errors.phone && <p className="mc-error">{errors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="parentName">Parent / Guardian Name *</Label>
                <Input id="parentName" value={form.parentName} onChange={(e) => set("parentName", e.target.value)} placeholder="Full name" />
                {errors.parentName && <p className="mc-error">{errors.parentName}</p>}
              </div>
              <div>
                <Label htmlFor="parentPhone">Parent Phone Number *</Label>
                <Input id="parentPhone" type="tel" value={form.parentPhone} onChange={(e) => set("parentPhone", e.target.value)} placeholder="+91 98765 43210" />
                {errors.parentPhone && <p className="mc-error">{errors.parentPhone}</p>}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="address">Address *</Label>
                <Textarea id="address" value={form.address} onChange={(e) => set("address", e.target.value)} placeholder="House no., street, city, state, pin code" className="min-h-[80px]" />
                {errors.address && <p className="mc-error">{errors.address}</p>}
              </div>
              <div className="sm:col-span-2">
                <Label>Select Course *</Label>
                <Select value={form.course} onValueChange={(v) => set("course", v)}>
                  <SelectTrigger><SelectValue placeholder="Choose a course" /></SelectTrigger>
                  <SelectContent>
                    {courses.map((c) => (
                      <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.course && <p className="mc-error">{errors.course}</p>}
              </div>
              <div>
                <Label htmlFor="school">Current School *</Label>
                <Input id="school" value={form.school} onChange={(e) => set("school", e.target.value)} placeholder="School name" />
                {errors.school && <p className="mc-error">{errors.school}</p>}
              </div>
              <div>
                <Label>Current Class *</Label>
                <Select value={form.currentClass} onValueChange={(v) => set("currentClass", v)}>
                  <SelectTrigger><SelectValue placeholder="Select class" /></SelectTrigger>
                  <SelectContent>
                    {["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "Dropper", "Graduate"].map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.currentClass && <p className="mc-error">{errors.currentClass}</p>}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="performance">Previous Academic Performance</Label>
                <Textarea id="performance" value={form.performance} onChange={(e) => set("performance", e.target.value)} placeholder="e.g. 85% in Class 10 boards, school topper in Science…" className="min-h-[80px]" />
              </div>

              <div className="grid gap-4 sm:col-span-2 sm:grid-cols-3">
                {fileField("photo", "Student Photo")}
                {fileField("id", "Identity Document")}
                {fileField("marksheet", "Previous Marksheet")}
              </div>

              <div className="sm:col-span-2">
                <label className="flex cursor-pointer items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => set("agree", e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-brand-600"
                  />
                  <span>
                    I agree to the{" "}
                    <a href="/terms-and-conditions" className="font-medium text-brand-600 hover:underline dark:text-brand-400">
                      Terms & Conditions
                    </a>{" "}
                    *
                  </span>
                </label>
                {errors.agree && <p className="mc-error">{errors.agree}</p>}
              </div>

              <div className="sm:col-span-2">
                <Button type="submit" variant="accent" size="lg" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Success dialog */}
      <Dialog open={success} onOpenChange={setSuccess}>
        <DialogContent className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950">
            <PartyPopper className="h-8 w-8 text-emerald-600" />
          </div>
          <DialogHeader className="items-center">
            <DialogTitle className="text-2xl">🎉 Application Submitted Successfully!</DialogTitle>
            <DialogDescription>
              Thank you, {form.studentName.split(" ")[0] || "student"}! Your application for{" "}
              <strong>{form.course}</strong> has been received. Our admissions team will contact you
              within 48 hours at {form.email}.
            </DialogDescription>
          </DialogHeader>
          <Button variant="accent" className="w-full" onClick={() => setSuccess(false)}>
            Done
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
