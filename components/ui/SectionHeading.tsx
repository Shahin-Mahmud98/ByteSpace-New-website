export default function SectionHeading({ title, text }: { title: React.ReactNode; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-semibold md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-neutral-500">{text}</p>}
    </div>
  );
}
