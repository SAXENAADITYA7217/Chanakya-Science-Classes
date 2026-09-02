import { Toaster } from "sonner";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Courses from "@/pages/Courses";
import CourseDetails from "@/pages/CourseDetails";
import Faculty from "@/pages/Faculty";
import Admissions from "@/pages/Admissions";
import Results from "@/pages/Results";
import Testimonials from "@/pages/Testimonials";
import Gallery from "@/pages/Gallery";
import Blog from "@/pages/Blog";
import BlogDetails from "@/pages/BlogDetails";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import ForgotPassword from "@/pages/ForgotPassword";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import NotFound from "@/pages/NotFound";
import DashboardHome from "@/pages/dashboard/DashboardHome";
import DashboardCourses from "@/pages/dashboard/DashboardCourses";
import DashboardMaterial from "@/pages/dashboard/DashboardMaterial";
import DashboardTests from "@/pages/dashboard/DashboardTests";
import DashboardResults from "@/pages/dashboard/DashboardResults";
import DashboardAttendance from "@/pages/dashboard/DashboardAttendance";
import DashboardNotifications from "@/pages/dashboard/DashboardNotifications";
import DashboardProfile from "@/pages/dashboard/DashboardProfile";

function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetails />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/results" element={<Results />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/courses" element={<DashboardCourses />} />
            <Route path="/dashboard/material" element={<DashboardMaterial />} />
            <Route path="/dashboard/tests" element={<DashboardTests />} />
            <Route path="/dashboard/results" element={<DashboardResults />} />
            <Route path="/dashboard/attendance" element={<DashboardAttendance />} />
            <Route path="/dashboard/notifications" element={<DashboardNotifications />} />
            <Route path="/dashboard/profile" element={<DashboardProfile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Toaster richColors position="top-right" />
      </AuthProvider>
    </BrowserRouter>
  );
}
