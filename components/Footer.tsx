"use client";
import { useState } from "react";
import Logo from "./Logo";
import Button from "./ui/Button";
import { footerColumns } from "@/lib/data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <footer className="mx-auto max-w-6xl px-6 pt-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Logo dark />
          <p className="mt-3 text-sm">Stay Up to date with our latest features and releases by joining our newsletter.</p>
          <form onSubmit={(e) => { e.preventDefault(); if (/\S+@\S+\.\S+/.test(email)) setDone(true); }} className="mt-8 flex gap-3">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"
              className="w-full max-w-xs rounded-full border border-neutral-300 px-5 py-3 outline-none focus:border-brand" />
            <Button type="submit">Search</Button>
          </form>
          {done && <p className="mt-3 text-sm text-brand">Thanks for subscribing!</p>}
          <p className="mt-6 max-w-sm text-xs">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
        </div>
        <div className="grid grid-cols-3 gap-6 text-sm">
          {footerColumns.map((col, i) => (
            <ul key={i} className="space-y-4">{col.map((l) => <li key={l}><a href="#" className="hover:text-brand">{l}</a></li>)}</ul>
          ))}
        </div>
      </div>
      <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-neutral-200 py-8 text-xs">
        <p>@ 2023 ByteSpace. All rights reserved.</p>
        <div className="flex gap-6"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookies Settings</a></div>
      </div>
    </footer>
  );
}
