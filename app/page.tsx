import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import CoursesSection from "@/components/CoursesSection";
import LearningPaths from "@/components/LearningPaths";
import Growth from "@/components/Growth";
import CreatorCta from "@/components/CreatorCta";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <CoursesSection />
      <LearningPaths />
      <Growth />
      <CreatorCta />
      <Testimonials />
      <Footer />
    </main>
  );
}
