"use client";
import { useMemo, useState } from "react";
import { BarChart3, Filter, LayoutGrid, ListFilter, Search } from "lucide-react";
import CourseCard from "./CourseCard";
import { categories, courses } from "@/lib/data";

const LEVELS = ["All levels", "Beginner", "Intermediate", "Advanced"];
const CATS = ["All categories", ...Array.from(new Set(courses.map((c) => c.category)))];

const SORTS = ["Most relevant", "Title A–Z", "Price: low to high"] as const;
type Sort = (typeof SORTS)[number];

const Select = ({ icon: Icon, value, onChange, options, label }: { icon: typeof Filter; value: string; onChange: (v: string) => void; options: string[]; label: string }) => (
  <label className="flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3">
    <Icon size={18} />
    <select value={value} onChange={(e) => onChange(e.target.value)} aria-label={label} className="bg-transparent outline-none">
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
  </label>
);

export default function CourseBrowser({ query = "", showCategories = false }: { query?: string; showCategories?: boolean }) {
  const [sort, setSort] = useState<Sort>("Most relevant");
  const [cat, setCat] = useState("Featured");
  const [level, setLevel] = useState(LEVELS[0]);
  const [category, setCategory] = useState(CATS[0]);
  const reset = () => { setLevel(LEVELS[0]); setCategory(CATS[0]); setSort(SORTS[0]); setCat("Featured"); };
  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out = courses.filter((c) => (!q || `${c.title} ${c.author}`.toLowerCase().includes(q)) && (level === LEVELS[0] || c.level === level) && (category === CATS[0] || c.category === category));
    if (sort === "Title A–Z") out.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "Price: low to high") out.sort((a, b) => a.price - b.price);
    return out;
  }, [query, sort, level, category]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={reset} className="flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 hover:bg-neutral-50"><Filter size={18} />Reset</button>
          <Select icon={BarChart3} value={level} onChange={setLevel} options={LEVELS} label="Filter by level" />
          <Select icon={LayoutGrid} value={category} onChange={setCategory} options={CATS} label="Filter by category" />
        </div>
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
        <p className="mt-16 text-center text-neutral-500">No courses match your search or filters.</p>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.map((c) => <CourseCard key={c.slug} course={c} />)}</div>
      )}
    </section>
  );
}
