import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { href?: string };

export default function Button({ href, className = "", children, ...rest }: Props) {
  const cls = `inline-flex items-center justify-center rounded-full bg-lime px-6 py-3 font-medium text-ink transition hover:brightness-95 disabled:opacity-60 ${className}`;
  return href ? (
    <Link href={href} className={cls}>{children}</Link>
  ) : (
    <button className={cls} {...rest}>{children}</button>
  );
}
