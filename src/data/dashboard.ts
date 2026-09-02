import type { StudyMaterial, NotificationItem, TestQuestion } from "@/types";

export const studyMaterials: StudyMaterial[] = [
  { id: "m1", title: "Physics — Motion Chapter Notes", category: "Science Notes", course: "Physics for Boards & JEE", type: "PDF", size: "4.2 MB", date: "2026-08-20" },
  { id: "m2", title: "Chemistry Formula Master Sheet", category: "Formula Sheets", course: "Chemistry Mastery", type: "PDF", size: "1.1 MB", date: "2026-08-18" },
  { id: "m3", title: "Biology — Human Physiology Practice Set", category: "Practice Questions", course: "NEET Biology", type: "PDF", size: "2.8 MB", date: "2026-08-15" },
  { id: "m4", title: "Computer Science — Python Fundamentals", category: "Assignments", course: "Computer Science", type: "PDF", size: "890 KB", date: "2026-08-12" },
  { id: "m5", title: "CBSE Class 12 — Science Solved Paper", category: "Previous Year Papers", course: "Board Science Preparation", type: "PDF", size: "3.5 MB", date: "2026-08-10" },
  { id: "m6", title: "English Grammar Crash Revision Notes", category: "Language Notes", course: "English & Communication", type: "PDF", size: "2.4 MB", date: "2026-08-05" },
  { id: "m7", title: "Social Science Timeline Map Pack", category: "Study Notes", course: "Social Science Mastery", type: "PDF", size: "5.1 MB", date: "2026-08-01" },
  { id: "m8", title: "JEE Main 2026 — Physics Mock Paper", category: "Previous Year Papers", course: "Physics for Boards & JEE", type: "PDF", size: "1.9 MB", date: "2026-07-28" },
  { id: "m9", title: "Hindi Writing & Grammar Formula Sheet", category: "Formula Sheets", course: "Hindi Core & Literature", type: "PDF", size: "760 KB", date: "2026-07-25" },
  { id: "m10", title: "Chemistry Reaction Practice Set", category: "Assignments", course: "Chemistry Mastery", type: "PDF", size: "1.3 MB", date: "2026-07-20" },
  { id: "m11", title: "Math & Logical Reasoning Shortcut Book", category: "Formula Sheets", course: "Foundation Science & Maths", type: "PDF", size: "2.2 MB", date: "2026-07-15" },
  { id: "m12", title: "Biology Diagram Practice Pack", category: "Practice Questions", course: "NEET Biology", type: "PDF", size: "1.7 MB", date: "2026-07-10" },
];

export const materialCategories = [
  "All",
  "Science Notes",
  "Formula Sheets",
  "Practice Questions",
  "Assignments",
  "Previous Year Papers",
];

export const initialNotifications: NotificationItem[] = [
  { id: "n1", icon: "📚", title: "New Study Material Available", body: "Physics — Motion Chapter Notes has been added to your Physics for Boards & JEE course.", time: "2 hours ago", read: false },
  { id: "n2", icon: "📝", title: "Science Test Tomorrow", body: "Full-syllabus mock test on Chemistry and Biology tomorrow at 10:00 AM. Revise your core concepts!", time: "5 hours ago", read: false },
  { id: "n3", icon: "📢", title: "New Announcement", body: "Doubt-solving session with Dr. Rahul Sharma scheduled this Sunday, 4:00 PM – 6:00 PM (Online).", time: "1 day ago", read: false },
  { id: "n4", icon: "📅", title: "Assignment Deadline", body: "Coordinate Geometry Assignment #4 is due on 5th September. Submit before 11:59 PM to avoid late penalty.", time: "2 days ago", read: true },
  { id: "n5", icon: "🏆", title: "Result Published", body: "Your Trigonometry Weekly Test result is now available. You scored 42/50 — great improvement!", time: "3 days ago", read: true },
  { id: "n6", icon: "🎓", title: "JEE Strategy Seminar", body: "Free seminar for JEE aspirants: 'Last 6 Months Roadmap' by Dr. Vikram Mehta. Register from the dashboard.", time: "4 days ago", read: true },
];

export const testQuestions: TestQuestion[] = [
  { id: 1, topic: "Calculus", question: "If f(x) = x³ − 3x² + 2x, then f′(x) at x = 1 equals:", options: ["0", "1", "−1", "2"], answer: 2 },
  { id: 2, topic: "Algebra", question: "The sum of the roots of the equation x² − 7x + 12 = 0 is:", options: ["7", "12", "−7", "5"], answer: 0 },
  { id: 3, topic: "Trigonometry", question: "The value of sin 30° + cos 60° is:", options: ["1", "√3/2", "1/2", "2"], answer: 0 },
  { id: 4, topic: "Coordinate Geometry", question: "The distance between points (3, 4) and (0, 0) is:", options: ["5", "7", "4", "3"], answer: 0 },
  { id: 5, topic: "Calculus", question: "∫ 2x dx equals:", options: ["x² + C", "2x² + C", "x²/2 + C", "2 + C"], answer: 0 },
  { id: 6, topic: "Probability", question: "The probability of getting a sum of 7 when two dice are rolled is:", options: ["1/6", "1/9", "5/36", "1/12"], answer: 0 },
  { id: 7, topic: "Algebra", question: "If A is a 2×2 matrix with det(A) = 5, then det(2A) equals:", options: ["10", "20", "5", "40"], answer: 1 },
  { id: 8, topic: "Trigonometry", question: "The general solution of sin θ = 0 is:", options: ["θ = nπ", "θ = 2nπ", "θ = nπ/2", "θ = (2n+1)π"], answer: 0 },
  { id: 9, topic: "Vectors", question: "If a = (1, 2, 3) and b = (2, 4, 6), then a and b are:", options: ["Parallel", "Perpendicular", "Equal", "Anti-parallel"], answer: 0 },
  { id: 10, topic: "Calculus", question: "The derivative of ln(x) with respect to x is:", options: ["1/x", "x", "ln(x²)", "e^x"], answer: 0 },
];

export const enrolledCourses = [
  { id: "physics-board-jee", name: "Physics for Boards & JEE", instructor: "Dr. Rahul Sharma", progress: 68, totalModules: 5, completedModules: 3 },
  { id: "chemistry-mastery", name: "Chemistry Mastery", instructor: "Prof. Anita Verma", progress: 42, totalModules: 5, completedModules: 2 },
  { id: "neet-biology", name: "NEET Biology", instructor: "Mr. Arjun Patel", progress: 25, totalModules: 5, completedModules: 1 },
];

export const performanceData = [
  { month: "Apr", score: 62 },
  { month: "May", score: 68 },
  { month: "Jun", score: 71 },
  { month: "Jul", score: 78 },
  { month: "Aug", score: 83 },
  { month: "Sep", score: 87 },
];

export const subjectPerformance = [
  { subject: "Calculus", score: 88 },
  { subject: "Algebra", score: 91 },
  { subject: "Trigonometry", score: 76 },
  { subject: "Coordinate Geo", score: 82 },
  { subject: "Probability", score: 85 },
];

export const attendanceData = [
  { day: 1, status: "present" }, { day: 2, status: "present" }, { day: 3, status: "present" },
  { day: 4, status: "absent" }, { day: 5, status: "present" }, { day: 6, status: "present" },
  { day: 7, status: "present" }, { day: 8, status: "present" }, { day: 9, status: "present" },
  { day: 10, status: "present" }, { day: 11, status: "present" }, { day: 12, status: "present" },
  { day: 13, status: "present" }, { day: 14, status: "present" }, { day: 15, status: "present" },
  { day: 16, status: "present" }, { day: 17, status: "present" }, { day: 18, status: "present" },
  { day: 19, status: "present" }, { day: 20, status: "present" }, { day: 21, status: "present" },
  { day: 22, status: "present" }, { day: 23, status: "present" }, { day: 24, status: "present" },
  { day: 25, status: "present" }, { day: 26, status: "present" }, { day: 27, status: "present" },
  { day: 28, status: "present" }, { day: 29, status: "present" }, { day: 30, status: "present" },
  { day: 31, status: "present" },
];

export const attendanceHistory = [
  { month: "June 2026", total: 24, attended: 22 },
  { month: "July 2026", total: 26, attended: 24 },
  { month: "August 2026", total: 27, attended: 25 },
];
