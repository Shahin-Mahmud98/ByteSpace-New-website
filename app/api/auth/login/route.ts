import { NextResponse } from "next/server";

// Demo endpoint: validates input server-side. Replace with a real auth backend.
export async function POST(req: Request) {
  const { name, email, password } = await req.json().catch(() => ({}));
  if (typeof email !== "string" || !/\S+@\S+\.\S+/.test(email) || typeof password !== "string" || password.length < 8) {
    return NextResponse.json({ message: "Invalid email or password." }, { status: 400 });
  }
  const display = typeof name === "string" && name.trim() ? name.trim() : email.split("@")[0];
  return NextResponse.json({ message: "Success! Redirecting…", user: { name: display, email } });
}
