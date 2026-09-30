import Button from "./ui/Button";

export default function CreatorCta() {
  return (
    <section className="bg-grid relative overflow-hidden py-24 text-center text-white">
      <div className="absolute -left-10 top-10 h-32 w-56 -rotate-12 rounded-full bg-lime" aria-hidden />
      <div className="absolute -right-10 bottom-4 h-32 w-56 rotate-12 rounded-full bg-lime" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold md:text-5xl">Unlock Your Potential as a Creator with ByteSpace</h2>
        <p className="mt-8 opacity-90">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Button href="/signup" className="mt-10">Join as Creator</Button>
      </div>
    </section>
  );
}
