"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { BarChart3, BookOpen, Award, Users, Star, Video, Share2, Check } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "./ui/Button";
import { aboutParagraphs, includes, keyPoints, lessons, modules, ratingBreakdown, reviews } from "@/lib/data";

const TABS = ["About", "Lessons", "Reviews"] as const;
const Stars = ({ n }: { n: number }) => (
  <span className="flex gap-1">{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={18} className={i <= n ? "fill-neutral-700 text-neutral-700" : "text-neutral-300"} />)}</span>
);
const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-ink">{children}</span>
);

export default function CourseDetail({ title }: { title: string }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("About");
  const [filter, setFilter] = useState(0); // 0 = all
  const shown = reviews.filter((r) => !filter || r.stars === filter);
  const max = Math.max(...ratingBreakdown);

  return (
    <>
      <div className="bg-grid pb-40 text-white">
        <Navbar />
        <div className="mx-auto max-w-6xl px-6 pt-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold md:text-4xl">{title}: A Comprehensive Guide</h1>
              <p className="mt-2 font-heading font-medium">Unlock the Power of Digital Creation with Expert Guidance</p>
              <p className="mt-5">by <span className="text-lime">purepearl studio</span></p>
            </div>
            <Button className="hidden gap-2 sm:inline-flex"><Share2 size={16} />Share</Button>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Pill><BarChart3 size={16} className="text-brand" />Intermediate</Pill>
            <Pill><Star size={16} className="fill-brand text-brand" />4.8 (172 reviews)</Pill>
            <Pill><Users size={16} className="text-brand" />199 Students</Pill>
          </div>
        </div>
      </div>

      <div className="mx-auto -mt-28 grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_380px]">
        <div>
          <div className="relative overflow-hidden rounded-3xl bg-neutral-200">
            <Image src="/img/video-thumb.jpg" alt="Course preview" width={600} height={400} className="h-72 w-full object-cover md:h-[26rem]" />
            <span className="absolute inset-0 grid place-items-center"><span className="grid h-16 w-16 place-items-center rounded-2xl bg-black/40 text-2xl text-white">▶</span></span>
          </div>

          <div className="mt-12 flex gap-3" role="tablist">
            {TABS.map((t) => (
              <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
                className={`rounded-full px-6 py-2 ${tab === t ? "bg-lime font-medium" : "bg-neutral-100"}`}>{t}</button>
            ))}
          </div>

          {tab === "About" && (
            <div>
              <h2 className="mt-8 text-lg font-semibold">Description</h2>
              <div className="mt-4 space-y-6 text-neutral-600">{aboutParagraphs.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}</div>
              <h3 className="mt-8 text-lg font-semibold">Sneak Peak</h3>
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[1, 2, 3, 4].map((n) => <Image key={n} src={`/img/peek-${n}.jpg`} alt={`Sneak peek ${n}`} width={240} height={180} className="h-28 w-full rounded-2xl object-cover" />)}
              </div>
              <h3 className="mt-8 text-lg font-semibold">Key Points</h3>
              <ul className="mt-4 space-y-3">
                {keyPoints.map((k) => <li key={k} className="flex items-center gap-3 text-neutral-600"><span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-white"><Check size={14} /></span>{k}</li>)}
              </ul>
            </div>
          )}
          {tab === "Lessons" && (
            <div>
              <h2 className="mt-8 text-lg font-semibold">Explore the Modules</h2>
              <p className="mt-3 text-neutral-500">Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>
              <h3 className="mt-6 text-lg font-semibold">Lesson List</h3>
              <ul className="mt-4 space-y-5">
                {modules.map((m) => (
                  <li key={m.title} className="flex gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-lime"><Video /></span>
                    <div><p className="font-medium">{m.title}</p><p className="text-neutral-600">{m.text}</p></div>
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-lg font-semibold">Lesson Content</h3>
              <p className="mt-3 text-neutral-500">Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p>
              <h3 className="mt-8 text-lg font-semibold">Lesson Progress Tracking</h3>
              <p className="mt-3 text-neutral-500">Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
              <div className="mt-5 rounded-2xl border border-neutral-200 p-4">
                <p className="text-sm">Learning Progress</p><p className="font-heading text-4xl font-semibold">55%</p>
                <div className="mt-2 h-2 rounded-full bg-neutral-200"><div className="h-2 w-[55%] rounded-full bg-lime" /></div>
              </div>
            </div>
          )}
          {tab === "Reviews" && (
            <div>
              <h2 className="mt-8 text-lg font-semibold">What Learners Are Saying</h2>
              <p className="mt-3 text-neutral-500">Discover what our learners have to say about their experience with &lsquo;{title}: A Comprehensive Guide.&rsquo; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.</p>
              <div className="mt-6 flex flex-col gap-6 rounded-3xl border border-neutral-200 p-6 sm:flex-row sm:items-center">
                <div className="grid h-28 w-36 shrink-0 place-items-center rounded-xl bg-lime text-center"><div><p className="text-xs">Ratings</p><p className="font-heading text-4xl font-semibold">4.7</p></div></div>
                <div className="w-full space-y-2">
                  {ratingBreakdown.map((c, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="h-2 flex-1 rounded-full bg-neutral-200"><div className="h-2 rounded-full bg-lime" style={{ width: `${(c / max) * 100}%` }} /></div>
                      <Stars n={5 - i} /><span className="w-10 text-right text-sm">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="mt-10 text-lg font-semibold">Individual Reviews:</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {[0, 5, 4, 3, 2, 1].map((n) => (
                  <button key={n} onClick={() => setFilter(n)} className={`flex items-center gap-1 rounded-full px-5 py-2 ${filter === n ? "bg-lime font-medium" : "bg-neutral-100"}`}>
                    {n === 0 ? "All rating" : <><Star size={16} className="fill-neutral-700 text-neutral-700" />{n}</>}
                  </button>
                ))}
              </div>
              <div className="mt-6 space-y-5">
                {shown.length === 0 && <p className="text-neutral-500">No reviews for this rating yet.</p>}
                {shown.map((r) => (
                  <article key={r.name} className="rounded-3xl border border-neutral-200 p-6">
                    <div className="flex items-center gap-3">
                      <Image src={r.image} alt={r.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                      <div><p>{r.name}</p><p className="text-sm text-neutral-500">UI/UX Designer</p></div>
                      <span className="ml-auto text-sm text-neutral-500">a year ago</span>
                    </div>
                    <div className="mt-4"><Stars n={r.stars} /></div>
                    <p className="mt-4 text-neutral-600">{r.text}</p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="h-fit rounded-3xl bg-white p-6 shadow-xl">
          <h2 className="text-lg font-semibold">112 Lessons (24 hours)</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {lessons.map((l, i) => <li key={l.title} className="flex justify-between gap-3"><span>0{i + 1} {l.title}</span><span className="text-brand">{l.time}</span></li>)}
          </ul>
          <p className="mt-3 text-sm text-neutral-500">99 more videos</p>
          <p className="mt-6 text-sm text-neutral-600">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
          <p className="mt-4 font-heading text-3xl font-semibold text-brand">$25<span className="text-sm font-normal text-neutral-500">/lifetime</span></p>
          <Button className="mt-4 w-full">Enroll Now</Button>
          <h3 className="mt-6 font-semibold">This course include</h3>
          <ul className="mt-3 space-y-3 text-sm text-neutral-600">
            {includes.map((x, i) => { const I = [BookOpen, Video, Award, Users][i]; return <li key={x} className="flex items-center gap-3"><I size={16} className="text-brand" />{x}</li>; })}
          </ul>
          <hr className="my-6" />
          <div className="flex items-center gap-3">
            <Image src="/img/creator-sm.jpg" alt="PurePearl Studio" width={52} height={52} className="h-12 w-12 rounded-full object-cover" />
            <div><p className="font-medium">PurePearl Studio</p><p className="text-sm text-neutral-500">Professional Creator</p></div>
          </div>
          <p className="mt-5 text-sm text-neutral-600">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
          <Link href="/creators/purepearl-studio" className="mt-5 inline-block rounded-full border border-neutral-300 px-5 py-2 text-sm hover:bg-neutral-50">See Full Profile</Link>
        </aside>
      </div>
      <div className="mt-20 border-t border-neutral-200"><Footer /></div>
    </>
  );
}
