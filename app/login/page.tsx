import AuthLayout from "@/components/AuthLayout";
import AuthForm from "@/components/AuthForm";

export const metadata = { title: "ByteSpace – Login" };

export default function Page() {
  return (
    <AuthLayout heading="Sign in with ease" text="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.">
      <AuthForm mode="login" />
    </AuthLayout>
  );
}
