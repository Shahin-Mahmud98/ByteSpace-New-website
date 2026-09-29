"use client";
import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "./Navbar";
import Button from "./ui/Button";
import { ProgressCard, StudentsCard, TopicCard } from "./StatCards";

export default function Hero() {
  const [query, setQuery] = useState("");
  return (
    <section className="bg-grid relative overflow-hidden">
      <Navbar />
      <div className="mx-auto max-w-4xl px-6 pt-10 text-center text-white">
        <h1 className="text-4xl font-semibold leading-tight md:text-7xl">Get Access to Hundreds Courses Available</h1>
        <p className="mt-8 text-lg opacity-90">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
        <form
          onSubmit={(e) => { e.preventDefault(); document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" }); }}
          className="mx-auto mt-10 flex max-w-xl items-center gap-3"
        >
          <label className="flex flex-1 items-center gap-3 rounded-full bg-white px-5 py-3 text-neutral-500">
            <Search size={18} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Course, topic, creator"
              className="w-full bg-transparent text-ink outline-none" />
          </label>
          <Button type="submit">Search</Button>
        </form>
      </div>
      <div className="relative mx-auto mt-10 max-w-3xl">
        <Image src="/img/hero-person.png" alt="Smiling student with laptop" width={965} height={405} priority className="w-full" />
        <TopicCard className="absolute left-2 top-[18%] hidden md:block" />
        <ProgressCard className="absolute right-2 top-[22%] hidden w-52 md:block" />
        <StudentsCard className="absolute bottom-[8%] left-0 hidden md:block" />
      </div>
    </section>
  );
}
