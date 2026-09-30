import { notFound } from "next/navigation";
import CourseDetail from "@/components/CourseDetail";
import { courses } from "@/lib/data";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) notFound();
  return <CourseDetail title={course.title} />;
}
