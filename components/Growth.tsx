import Image from "next/image";
import { Check } from "lucide-react";
import { creatorPerks, stats } from "@/lib/data";

export default function Growth() {
  return (
    <section id="creators" className="bg-soft py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-semibold md:text-5xl">Your Path to Professional Growth Starts Here!</h2>
          <p className="mt-8 max-w-md text-neutral-600">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>
          <dl className="mt-10 flex gap-10">
            {stats.map((s) => (
              <div key={s.label}><dt className="font-heading text-4xl text-brand">{s.value}</dt><dd className="text-neutral-600">{s.label}</dd></div>
            ))}
          </dl>
        </div>
        <Image src="/img/growth-1.jpg" alt="Learner with course card and progress" width={606} height={510} className="mx-auto w-full max-w-lg mix-blend-multiply" />
        <Image src="/img/growth-2.jpg" alt="Creator dashboard with revenue cards" width={510} height={505} className="order-last mx-auto w-full max-w-md mix-blend-multiply lg:order-none" />
        <div>
          <h2 className="text-4xl font-semibold md:text-5xl">Create &amp; Manage Courses Easily.</h2>
          <p className="mt-8 text-neutral-600"><b>ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
          <ul className="mt-8 space-y-4">
            {creatorPerks.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-white"><Check size={14} /></span>{p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
