import Image from "next/image";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <h2 className="text-4xl font-semibold md:text-5xl">Discover What Our Community Is Saying</h2>
          <p className="text-neutral-600">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
        </div>
        <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-white p-6">
              <Image src={t.image} alt={t.name} width={68} height={68} className="h-16 w-16 rounded-full object-cover" />
              <figcaption className="mt-4"><p className="font-heading font-semibold">{t.name}</p><p className="text-brand">{t.role}</p></figcaption>
              <blockquote className="mt-4 text-neutral-600">&ldquo;{t.quote}&rdquo;</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
