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

export default function Home() {
  return (
      <div className="space-y-16">
        <HeroSection />
        <StorySection/>
        <InfiniteLoop/>
        <AboutSection/>
        <ProjectsSection/>
        <WhySection/>
        <RoleSection/>
        <GallerySection/>
        <AcknowledgementSection/>
        <MiscSection/>
      </div>
  );
}
