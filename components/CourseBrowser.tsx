"use client";
import { useMemo, useState } from "react";
import { BarChart3, Filter, LayoutGrid, ListFilter, Search } from "lucide-react";
import CourseCard from "./CourseCard";
import { categories, courses } from "@/lib/data";

const SORTS = ["Most relevant", "Title A–Z", "Price: low to high"] as const;
type Sort = (typeof SORTS)[number];

const Chip = ({ icon: Icon, label }: { icon: typeof Filter; label: string }) => (
  <button type="button" className="flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 hover:bg-neutral-50"><Icon size={18} />{label}</button>
);

export default function CourseBrowser({ query = "", showCategories = false }: { query?: string; showCategories?: boolean }) {
  const [sort, setSort] = useState<Sort>("Most relevant");
  const [cat, setCat] = useState("Featured");
  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out = courses.filter((c) => !q || `${c.title} ${c.author}`.toLowerCase().includes(q));
    if (sort === "Title A–Z") out.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "Price: low to high") out.sort((a, b) => a.price - b.price);
    return out;
  }, [query, sort]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3"><Chip icon={Filter} label="Filter" /><Chip icon={BarChart3} label="Level" /><Chip icon={LayoutGrid} label="Category" /></div>
        <label className="flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3">
          <ListFilter size={18} />
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="bg-transparent outline-none" aria-label="Sort courses">
            {SORTS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </label>
      </div>
      {showCategories && (
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.slice(0, 9).map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-5 py-2 ${cat === c ? "bg-lime font-medium" : "bg-neutral-100 hover:bg-neutral-200"}`}>{c}</button>
          ))}
        </div>
      )}
      {list.length === 0 ? (
        <p className="mt-16 text-center text-neutral-500">No courses match &ldquo;{query}&rdquo;.</p>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.map((c) => <CourseCard key={c.slug} course={c} />)}</div>
      )}
    </section>
  );
}
