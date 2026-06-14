import FeaturesSection from "@/app/components/FeaturesSection";
import TechStackSection from "@/app/components/TechStackSection";
import HeroSection from "@/app/components/HeroSection";
import ArchitectureSection from "@/app/components/ArchitectureSection";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturesSection />
      <TechStackSection />
      <ArchitectureSection />
    </main>
  );
}
