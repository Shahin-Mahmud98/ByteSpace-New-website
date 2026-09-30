import { Globe2, Sun, Zap, Atom, CircleDot } from "lucide-react";

const logos = [Globe2, Sun, Zap, Atom, CircleDot];

export default function LogoStrip() {
  return (
    <section className="bg-neutral-100 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-around gap-6 px-6 text-neutral-400">
        {logos.map((Icon, i) => (
          <span key={i} className="flex items-center gap-2 font-heading text-2xl font-semibold"><Icon size={30} /> Logoipsum</span>
        ))}
      </div>
    </section>
  );
}
