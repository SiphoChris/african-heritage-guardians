import Navbar from '@/components/NavBar'
import InfiniteLoop from "@/components/InfiniteLoop";
import AboutSection from "@/components/sections/AboutSection";
import AcknowledgementSection from "@/components/sections/AcknowledgementSection";
import GallerySection from "@/components/sections/GallerySection";
import HeroSection from "@/components/sections/HeroSection";
import MiscSection from "@/components/sections/MiscSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import RoleSection from "@/components/sections/RoleSection";
import StorySection from "@/components/sections/StorySection";
import WhySection from "@/components/sections/WhySection";
import Footer from "@/components/sections/Footer"

export const metadata = {
  title: 'African Heritage Guardians',
  description: "African Heritage Guardians is a pioneering cultural tech organization dedicated to preserving, promoting, and digitalizing Africa's indigenous languages, cultures, and heritage. We believe that our stories, our voices, and our histories deserve a place in the digital world — not just for documentation, but for meaningful innovation and cultural pride.",
}

export default function Home() {
  return (
     <>
        <Navbar />
      <main className="px-36 space-y-12 lg:space-y-16 pt:20 md:pt-28">
        <HeroSection />
        <StorySection />
        <InfiniteLoop />
        <AboutSection />
        <ProjectsSection />
        <WhySection />
        <RoleSection />
        <GallerySection />
        <AcknowledgementSection />
        <MiscSection />
      </main>
      <Footer/>
     </>
  );
}
