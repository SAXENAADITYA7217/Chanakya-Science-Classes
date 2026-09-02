import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { StudentProfile } from "@/types";

interface AuthContextValue {
  user: StudentProfile | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (patch: Partial<StudentProfile>) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const DEFAULT_USER: StudentProfile = {
  name: "Aarav Sharma",
  email: "student@mathematicclasses.com",
  phone: "+91 98765 43210",
  studentId: "MC-2026-0142",
  class: "Class 12 — Board + JEE",
  avatarColor: "from-blue-500 to-indigo-600",
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<StudentProfile | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("mc-user");
      if (raw) setUser(JSON.parse(raw));
    } catch {}
  }, []);

  const persist = (u: StudentProfile | null) => {
    setUser(u);
    try {
      if (u) localStorage.setItem("mc-user", JSON.stringify(u));
      else localStorage.removeItem("mc-user");
    } catch {}
  };

  const login = async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 900));
    const ok =
      (email.trim().toLowerCase() === "student@mathematicclasses.com" ||
        email.trim().toUpperCase() === "MC-2026-0142") &&
      password === "student123";
    if (ok) {
      let profile = DEFAULT_USER;
      try {
        const raw = localStorage.getItem("mc-profile");
        if (raw) profile = { ...DEFAULT_USER, ...JSON.parse(raw) };
      } catch {}
      persist(profile);
    }
    return ok;
  };

  const logout = () => persist(null);

  const updateProfile = (patch: Partial<StudentProfile>) => {
    if (!user) return;
    const updated = { ...user, ...patch };
    persist(updated);
    try {
      localStorage.setItem("mc-profile", JSON.stringify(updated));
    } catch {}
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
