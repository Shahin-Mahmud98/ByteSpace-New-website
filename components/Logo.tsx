import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className={`flex items-center gap-2 font-heading text-xl font-bold ${dark ? "text-ink" : "text-white"}`}>
      <span className="grid h-8 w-8 place-items-center rounded-lg rounded-tr-none bg-lime text-brand">▶</span>
      ByteSpace
    </Link>
  );
}
