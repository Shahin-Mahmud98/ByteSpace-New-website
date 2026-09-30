import Image from "next/image";

export function ProgressCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl bg-white p-4 shadow-lg ${className}`}>
      <p className="text-sm">Learning Progress</p>
      <p className="mt-1 font-heading text-4xl font-semibold">55%</p>
      <div className="mt-2 h-2 rounded-full bg-neutral-200"><div className="h-2 w-[55%] rounded-full bg-lime" /></div>
    </div>
  );
}

export function TopicCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl bg-white p-4 shadow-lg ${className}`}>
      <p className="font-medium">UI/UX Design</p>
      <p className="text-xs text-neutral-400">200 Courses • 1000+ Students</p>
    </div>
  );
}

export function StudentsCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl bg-white p-4 shadow-lg ${className}`}>
      <p className="font-medium">Happy Students</p>
      <p className="text-xs text-neutral-500">4.5 (240) <span className="text-lime">★</span></p>
      <div className="mt-2 flex items-center gap-1">
        <Image src="/img/avatars.png" alt="Students" width={110} height={32} className="h-8 w-auto" />
        <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-xs font-bold">2K+</span>
      </div>
    </div>
  );
}

export function RevenueCard({ title, sub, value, className = "" }: { title: string; sub: string; value: string; className?: string }) {
  return (
    <div className={`rounded-2xl bg-brand p-4 text-white shadow-lg ${className}`}>
      <p>{title}</p>
      <p className="text-xs opacity-80">{sub}</p>
      <p className="mt-1 font-heading text-2xl font-semibold">{value}</p>
    </div>
  );
}
