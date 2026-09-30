"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { firebaseSignOut } from "@/lib/socialAuth";

type SessionUser = { name: string };
import { Menu, ShoppingBag, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<SessionUser | null>(null);
  useEffect(() => onAuthStateChanged(auth, (u) => setUser(u ? { name: u.displayName ?? u.email?.split("@")[0] ?? "Learner" } : null)), []);
  const logout = () => firebaseSignOut();
  return (
    <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-white">
      <Logo />
      <nav className="hidden gap-8 md:flex">
        {navLinks.map((l) => (
          <Link key={l.label} href={l.href} className="hover:text-lime">{l.label}</Link>
        ))}
      </nav>
      <div className="hidden items-center gap-6 md:flex">
        {user ? (
          <>
            <span>Hi, {user.name.split(" ")[0]}</span>
            <button onClick={logout}>Log out</button>
          </>
        ) : (
          <>
            <Link href="/login">Sign In</Link>
            <Link href="/signup">Join Us</Link>
          </>
        )}
        <ShoppingBag size={20} />
      </div>
      <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div className="absolute inset-x-4 top-20 flex flex-col gap-4 rounded-2xl bg-white p-6 text-ink shadow-xl md:hidden">
          {[...navLinks, { label: "Sign In", href: "/login" }, { label: "Join Us", href: "/signup" }].map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
