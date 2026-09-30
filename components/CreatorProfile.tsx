"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "./ui/Button";
import CourseBrowser from "./CourseBrowser";

export default function CreatorProfile() {
  const [following, setFollowing] = useState(false);
  return (
    <>
      <div className="bg-grid pb-16 text-white">
        <Navbar />
        <div className="mx-auto max-w-6xl px-6 pt-8">
          <div className="flex items-center gap-5">
            <Image src="/img/creator.jpg" alt="PurePearl Studio" width={104} height={104} className="h-24 w-24 rounded-3xl object-cover" />
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-semibold md:text-5xl">PurePearl Studio</h1>
                <span className="rounded-full bg-lime px-5 py-1 text-ink">Creator</span>
              </div>
              <p className="mt-2 text-lg">Passionate UI/UX, Web designer</p>
            </div>
          </div>
          <p className="mt-10 max-w-6xl leading-8">
            Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!<br />
            Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
          </p>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-3 text-lg">
              <span className="rounded-full bg-white px-6 py-3 text-ink"><span className="text-brand">3</span> Products</span>
              <span className="rounded-full bg-white px-6 py-3 text-ink"><span className="text-brand">{following ? 13 : 12}</span> Followers</span>
            </div>
            <Button onClick={() => setFollowing(!following)} aria-pressed={following}>{following ? "Following" : "Follow"}</Button>
          </div>
        </div>
      </div>
      <CourseBrowser />
      <div className="mt-10 border-t border-neutral-200"><Footer /></div>
    </>
  );
}
