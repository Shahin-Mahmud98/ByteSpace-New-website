import Image from "next/image";
import Link from "next/link";
import { BarChart3, Star } from "lucide-react";

export type Course = { title: string; image: string; author: string; slug: string; category?: string; rating: number; level: string; price: number };

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-white/60 px-3 py-1 text-xs text-neutral-600 backdrop-blur">{children}</span>
);

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="relative rounded-3xl border border-neutral-200 bg-white p-3">
      <div className="relative overflow-hidden rounded-2xl">
        <Image src={course.image} alt={course.title} width={340} height={190} className="h-48 w-full object-cover" />
        <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-2">
          <Chip>17 Lessons</Chip><Chip>2 hours 16 mins</Chip><Chip>59 Comments</Chip>
        </div>
      </div>
      <div className="px-1 pb-2 pt-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-lg font-semibold"><Link href={`/courses/${course.slug}`} className="after:absolute after:inset-0">{course.title}</Link></h3>
          <span className="flex shrink-0 items-center gap-1 text-neutral-500">{course.rating} <Star size={16} className="fill-neutral-300 text-neutral-300" /></span>
        </div>
        <p className="text-xs text-neutral-500">by <span className="text-brand">{course.author}</span></p>
        <div className="mt-4 flex items-center gap-3">
          <span className="flex items-center gap-1 rounded-full bg-neutral-100 px-3 py-2 text-xs"><BarChart3 size={14} />{course.level}</span>
          <Image src="/img/avatars.png" alt="Enrolled students" width={110} height={32} className="h-8 w-auto" />
        </div>
        <p className="mt-4 font-heading text-lg font-semibold text-brand">${course.price}<span className="text-xs font-normal text-neutral-500">/lifetime</span></p>
      </div>
    </article>
  );
}
