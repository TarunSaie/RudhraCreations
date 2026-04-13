import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Projects from "@/components/features/Projects";
import UpcomingProjects from "@/components/features/UpcomingProjects";
import Gallery from "@/components/features/Gallery";
import Contact from "@/components/features/Contact";
import MapSection from "@/components/features/MapSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <UpcomingProjects />
      <Gallery />
      <Contact />
      <MapSection />
    </main>
  );
}
