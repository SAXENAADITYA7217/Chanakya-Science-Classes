import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { isValidEmail } from "@/lib/utils";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    try {
      const subs = JSON.parse(localStorage.getItem("mc-newsletter") || "[]");
      subs.push({ email, date: new Date().toISOString() });
      localStorage.setItem("mc-newsletter", JSON.stringify(subs));
    } catch {}
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-700 via-brand-600 to-violet-700 py-16">
      <div
        className="pointer-events-none absolute left-8 top-6 select-none font-display text-8xl text-white/10"
        aria-hidden="true"
      >
        ∑
      </div>
      <div
        className="pointer-events-none absolute bottom-4 right-10 select-none font-display text-8xl text-white/10"
        aria-hidden="true"
      >
        π
      </div>
      <div className="mc-container relative mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Stay Updated With Mathematics</h2>
        <p className="mt-3 text-brand-100">
          Get study tips, mathematics tricks, exam updates, and educational resources directly in
          your inbox.
        </p>
        <form onSubmit={subscribe} className="mx-auto mt-6 flex max-w-md gap-2">
          <div className="relative flex-1 text-left">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-white/30 bg-white/95 pl-9 text-slate-900 placeholder:text-slate-500"
              aria-label="Email address"
            />
            {error && <p className="mc-error text-white/90">{error}</p>}
          </div>
          <Button type="submit" className="shrink-0 bg-white text-brand-700 hover:bg-brand-50">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
