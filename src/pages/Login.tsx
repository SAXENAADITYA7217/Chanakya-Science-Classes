import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail, ArrowRight } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { PageHeader } from "@/components/shared/PageHeader";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("student@chanakyascienceclasses.com");
  const [password, setPassword] = useState("student123");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const ok = await login(email, password);
    setLoading(false);
    if (ok) {
      toast.success("Login successful");
      navigate("/dashboard");
      return;
    }
    toast.error("Invalid credentials. Try student@chanakyascienceclasses.com / student123");
  };

  return (
    <>
      <PageHeader crumb="Student Login" title="Welcome Back" subtitle="Continue your learning journey with personalised progress tracking and study resources." />
      <section className="py-16">
        <div className="mc-container max-w-md">
          <div className="mc-card p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-violet-600 text-white">
                <LockKeyhole className="h-5 w-5" />
              </div>
            </div>
            <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white">Student Login</h2>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div>
                <Label htmlFor="email">Email or Student ID</Label>
                <div className="relative mt-1.5">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-9" placeholder="student@chanakyascienceclasses.com" />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1.5">
                  <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9 pr-10"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <Link to="/forgot-password" className="text-brand-600 hover:underline dark:text-brand-400">Forgot Password?</Link>
              </div>

              <Button type="submit" variant="accent" className="w-full" disabled={loading}>
                {loading ? "Signing in..." : "Login"}
                {!loading && <ArrowRight className="h-4 w-4" />}
              </Button>
            </form>
            <p className="mt-5 text-center text-xs text-slate-500 dark:text-slate-400">
              Demo credentials: student@chanakyascienceclasses.com / student123
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
