import Header from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { Footer } from "@/sections/Footer";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Form";
import { GithubHeatmap } from "@/sections/Heatmap";


export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection />
      <ProjectsSection />
      <GithubHeatmap />
      <TapeSection/>
      <AboutSection/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </div>
  );
}
