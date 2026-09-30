import AuthLayout from "@/components/AuthLayout";
import AuthForm from "@/components/AuthForm";

export const metadata = { title: "ByteSpace – Signup" };

export default function Page() {
  return (
    <AuthLayout heading="Sign up and come in" text="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost">
      <AuthForm mode="signup" />
    </AuthLayout>
  );
}
