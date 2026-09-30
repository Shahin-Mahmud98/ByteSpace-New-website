import Logo from "./Logo";
import CourseCard from "./CourseCard";
import { StudentsCard } from "./StatCards";
import { courses } from "@/lib/data";

export default function AuthLayout({ heading, text, children }: { heading: string; text: string; children: React.ReactNode }) {
  return (
    <main className="bg-grid min-h-screen px-6 py-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <section className="text-white">
          <Logo />
          <h2 className="mt-12 text-xl font-semibold">{heading}</h2>
          <p className="mt-4 max-w-md opacity-90">{text}</p>
          <div className="relative mt-12 hidden max-w-sm lg:block">
            <CourseCard course={courses[2]} />
            <StudentsCard className="absolute -bottom-10 -right-16 !bg-lime" />
          </div>
        </section>
        {children}
      </div>
    </main>
  );
}
