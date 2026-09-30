"use client";
import { useMemo, useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import CourseCard from "./CourseCard";
import { categories, courses } from "@/lib/data";

export default function CoursesSection() {
  const [active, setActive] = useState("Featured");
  // Demo data is static, so every category shows the same list; swap for an API call here.
  const visible = useMemo(() => courses, [active]);
  return (
    <section id="courses" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        title={<>Discover Your Passion,<br />Build Your Skills</>}
        text="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />
      <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button key={c} onClick={() => setActive(c)}
            className={`rounded-full px-5 py-2 text-sm transition ${active === c ? "bg-lime font-medium" : "bg-neutral-100 hover:bg-neutral-200"}`}>
            {c}
          </button>
        ))}
        <button className="px-2 text-sm text-brand">+ More</button>
      </div>
      {visible.length === 0 ? (
        <p className="mt-12 text-center text-neutral-500">No courses found.</p>
      ) : (
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((c) => <CourseCard key={c.title} course={c} />)}
        </div>
      )}
    </section>
  );
}
