import SectionHeading from "./ui/SectionHeading";
import { learningPaths } from "@/lib/data";

export default function LearningPaths() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <SectionHeading
        title="Explore Diverse Learning Paths at Bytespace"
        text="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />
      <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
        {learningPaths.map(({ label, icon: Icon }) => (
          <div key={label} className="flex flex-col items-center gap-4 rounded-3xl border border-neutral-200 px-4 py-8">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-lime"><Icon size={26} /></span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
