"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Facebook } from "lucide-react";
import { emailLogin, emailSignUp, friendlyAuthError, signInWithProvider, type Provider } from "@/lib/socialAuth";
import Button from "./ui/Button";

type Mode = "login" | "signup";
type Errors = Partial<Record<"name" | "email" | "password" | "form", string>>;

function validate(mode: Mode, v: { name: string; email: string; password: string }): Errors {
  const e: Errors = {};
  if (mode === "signup" && v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/\S+@\S+\.\S+/.test(v.email)) e.email = "Enter a valid email address.";
  if (v.password.length < 8) e.password = "Password must be at least 8 characters.";
  return e;
}

export default function AuthForm({ mode }: { mode: Mode }) {
  const isSignup = mode === "signup";
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const router = useRouter();

  async function social(provider: Provider) {
    setErrors({});
    setLoading(true);
    try {
      await signInWithProvider(provider);
      router.push("/");
    } catch (e) {
      const msg = friendlyAuthError(e);
      if (msg) setErrors({ form: msg });
    } finally {
      setLoading(false);
    }
  }

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [k]: e.target.value });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(mode, values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    setSuccess("");
    try {
      if (isSignup) await emailSignUp(values.name, values.email, values.password);
      else await emailLogin(values.email, values.password);
      setSuccess(isSignup ? "Account created! Redirecting…" : "Logged in! Redirecting…");
      router.push("/");
    } catch (e) {
      setErrors({ form: friendlyAuthError(e) ?? undefined });
    } finally {
      setLoading(false);
    }
  }

  const field = (id: "name" | "email" | "password", label: string, type: string, placeholder: string) => (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">{label}</label>
      <input id={id} type={type} value={values[id]} onChange={set(id)} placeholder={placeholder}
        className="w-full rounded-xl border border-neutral-200 px-5 py-4 outline-none focus:border-brand" />
      {errors[id] && <p className="mt-1 text-sm text-red-600">{errors[id]}</p>}
    </div>
  );

  return (
    <div className="rounded-3xl bg-white p-8 md:p-12">
      <p className="text-brand">{isSignup ? "Create an Account" : "Sign In"}</p>
      <h1 className="mt-2 text-4xl font-semibold md:text-5xl">{isSignup ? "Welcome to ByteSpace" : "Welcome Back"}</h1>
      <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
        {isSignup && field("name", "Full Name", "text", "Jamie Davis")}
        {field("email", "Email", "email", "designer@example.com")}
        {field("password", "Password", "password", "********")}
        {errors.form && <p role="alert" className="text-sm text-red-600">{errors.form}</p>}
        {success && <p role="status" className="text-sm text-green-700">{success}</p>}
        <div className="flex justify-end"><Button type="submit" disabled={loading}>{loading ? "Please wait…" : isSignup ? "Continue" : "Sign In"}</Button></div>
      </form>
      <div className="mt-10">
        <div className="flex items-center gap-4 text-neutral-500"><hr className="flex-1" />or<hr className="flex-1" /></div>
        <div className="mt-6 flex justify-center gap-4">
          <button type="button" disabled={loading} aria-label="Continue with Facebook" onClick={() => social("facebook")}
            className="grid h-14 w-14 place-items-center rounded-2xl border border-neutral-200 hover:bg-neutral-50 disabled:opacity-60"><Facebook className="fill-ink" /></button>
          <button type="button" disabled={loading} aria-label="Continue with Google" onClick={() => social("google")}
            className="grid h-14 w-14 place-items-center rounded-2xl border border-neutral-200 font-heading text-2xl font-bold hover:bg-neutral-50 disabled:opacity-60">G</button>
        </div>
      </div>
      <p className="mt-10 text-center text-neutral-600">
        {isSignup ? "Already have an account? " : "New user? "}
        <Link href={isSignup ? "/login" : "/signup"} className="text-brand">{isSignup ? "Login" : "Create an account"}</Link>
      </p>
    </div>
  );
}
