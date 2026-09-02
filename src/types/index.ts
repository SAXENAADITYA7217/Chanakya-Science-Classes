export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  classes: string;
  level: CourseLevel;
  duration: string;
  fee: string;
  instructor: string;
  instructorTitle: string;
  image: string;
  icon: string;
  focus: string[];
  modules: CourseModule[];
  learn: string[];
  features: string[];
  rating: number;
  students: number;
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  qualification: string;
  experience: string;
  expertise: string[];
  bio: string;
  initials: string;
  color: string;
}

export interface ResultItem {
  id: string;
  name: string;
  course: string;
  exam: string;
  year: number;
  score: string;
  rank: string;
  achievement: string;
  initials: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  rating: number;
  review: string;
  initials: string;
  color: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  excerpt: string;
  image: string;
  featured: boolean;
  sections: { heading: string; body: string }[];
}

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  gradient: string;
  icon: string;
}

export interface StudyMaterial {
  id: string;
  title: string;
  category: string;
  course: string;
  type: string;
  size: string;
  date: string;
}

export interface NotificationItem {
  id: string;
  icon: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
}

export interface TestQuestion {
  id: number;
  topic: string;
  question: string;
  options: string[];
  answer: number;
}

export interface StudentProfile {
  name: string;
  email: string;
  phone: string;
  studentId: string;
  class: string;
  avatarColor: string;
}
