import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="bg-grid grid min-h-screen place-items-center px-6 text-center text-white">
      <div>
        <h1 className="text-4xl font-semibold md:text-6xl">The page you are looking for doesn&apos;t exist</h1>
        <p className="mt-6 text-sm">Try to use a correct url or go back to homepage to start again</p>
        <Button href="/" className="mt-8">Back to Home</Button>
      </div>
    </main>
  );
}
