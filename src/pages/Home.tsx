import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Projects from "@/components/features/Projects";
import UpcomingProjects from "@/components/features/UpcomingProjects";
import Gallery from "@/components/features/Gallery";
import Contact from "@/components/features/Contact";
import MapSection from "@/components/features/MapSection";
import WhatsAppButton from "@/components/features/WhatsAppButton";
import CustomCursor from "@/components/features/CustomCursor";
import CinematicSection from "@/components/features/CinematicSection";

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <Hero />
      <CinematicSection direction="left" delay={0}>
        <About />
      </CinematicSection>
      <CinematicSection direction="right" delay={0}>
        <Projects />
      </CinematicSection>
      <CinematicSection direction="left" delay={0}>
        <UpcomingProjects />
      </CinematicSection>
      <CinematicSection direction="right" delay={0}>
        <Gallery />
      </CinematicSection>
      <CinematicSection direction="left" delay={0}>
        <Contact />
      </CinematicSection>
      <CinematicSection direction="right" delay={0}>
        <MapSection />
      </CinematicSection>
      <WhatsAppButton />
    </main>
  );
}
