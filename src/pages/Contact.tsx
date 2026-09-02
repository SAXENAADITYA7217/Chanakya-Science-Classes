import { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { isValidEmail } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  useReveal();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim() || !isValidEmail(form.email)) {
      toast.error("Please provide your name, valid email, and message.");
      return;
    }
    try {
      const messages = JSON.parse(localStorage.getItem("mc-contact-messages") || "[]");
      messages.push({ ...form, date: new Date().toISOString() });
      localStorage.setItem("mc-contact-messages", JSON.stringify(messages));
    } catch {}
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    toast.success("Your message has been sent.");
  };

  return (
    <>
      <PageHeader crumb="Contact" title="Let's Talk Mathematics" subtitle="Whether you want to know more about a course, admission process, or doubt-solving support, we’re here to help." />
      <section className="py-16">
        <div className="mc-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal space-y-6">
            <div className="mc-card p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Reach Us</h3>
              <ul className="mt-5 space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-brand-500" /> 24, Green Park Extension, New Delhi, India</li>
                <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-brand-500" /> +91 98765 43210</li>
                <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-brand-500" /> info@mathematicclasses.com</li>
              </ul>
            </div>
            <div className="mc-card p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Office Hours</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Monday to Saturday: 9:00 AM – 7:00 PM</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Sunday: 10:00 AM – 2:00 PM</p>
            </div>
          </div>

          <div className="reveal mc-card p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Send us a message</h3>
            {sent && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                <CheckCircle2 className="h-4 w-4" /> Your message has been submitted successfully.
              </div>
            )}
            <form onSubmit={submit} className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="min-h-[120px]" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" variant="accent" className="w-full">
                  <Send className="h-4 w-4" /> Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
