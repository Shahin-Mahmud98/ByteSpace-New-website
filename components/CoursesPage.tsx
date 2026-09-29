"use client";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CourseBrowser from "./CourseBrowser";

export default function CoursesPage() {
  const [q, setQ] = useState("");
  return (
    <>
      <div className="bg-grid pb-16 text-center text-white">
        <Navbar />
        <h1 className="mt-10 text-4xl font-semibold">Find Your Next Course</h1>
        <div className="mx-auto mt-8 flex max-w-2xl items-center gap-3 px-6">
          <label className="flex flex-1 items-center gap-3 rounded-full bg-white px-5 py-3 text-neutral-500">
            <Search size={18} /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" className="w-full bg-transparent text-ink outline-none" />
          </label>
          <span className="flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-medium text-ink">Courses <ChevronDown size={16} /></span>
        </div>
      </div>
      <CourseBrowser query={q} showCategories />
      <div className="mt-10 border-t border-neutral-200"><Footer /></div>
    </>
  );
}
