import { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { isValidEmail } from "@/lib/utils";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSent(true);
    toast.success("Password reset link sent.");
  };

  return (
    <>
      <PageHeader crumb="Reset Password" title="Forgot Your Password?" subtitle="We’ll send a reset link to the email address associated with your student account." />
      <section className="py-16">
        <div className="mc-container max-w-md">
          <div className="mc-card p-6 sm:p-8">
            {!sent ? (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative mt-1.5">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-9" placeholder="you@example.com" />
                  </div>
                </div>
                <Button type="submit" variant="accent" className="w-full">Send Reset Link</Button>
              </form>
            ) : (
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Check your inbox</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">A password reset link has been sent to {email}.</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/login"><ArrowLeft className="h-4 w-4" /> Back to login</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
