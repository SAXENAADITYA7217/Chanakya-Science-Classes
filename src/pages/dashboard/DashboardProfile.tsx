import { useState } from "react";
import { Save } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DashboardLayout } from "@/pages/dashboard/DashboardLayout";

export default function DashboardProfile() {
  const { user, updateProfile } = useAuth();
  const [form, setForm] = useState({
    name: user?.name ?? "Aarav Sharma",
    email: user?.email ?? "student@mathematicclasses.com",
    phone: user?.phone ?? "+91 98765 43210",
    className: user?.class ?? "Class 12 — Board + JEE",
  });

  const save = () => {
    updateProfile({
      name: form.name,
      email: form.email,
      phone: form.phone,
      class: form.className,
    });
  };

  return (
    <DashboardLayout>
      <div className="mc-card p-6">
        <div className="mb-6">
          <p className="text-sm text-brand-600 dark:text-brand-400">Profile</p>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Edit Student Details</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} />
          </div>
          <div>
            <Label htmlFor="class">Current Class</Label>
            <Input id="class" value={form.className} onChange={(e) => setForm((p) => ({ ...p, className: e.target.value }))} />
          </div>
        </div>

        <div className="mt-6">
          <Button variant="accent" onClick={save}>
            <Save className="h-4 w-4" /> Save Changes
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
