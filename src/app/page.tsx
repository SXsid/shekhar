import About from "@/components/AboutSection/About";
import HiringBanner from "@/components/Banner/Banner";
import BlogSection from "@/components/BlogSection/BlogSection";
import ExpSection from "@/components/ExpSection/ExpSection";
import { FloatingDock } from "@/components/FloatingDoc";
import Footer from "@/components/footer/Footer";
import Git from "@/components/GithhubSection/Git";
import Hero from "@/components/HeroSection/Hero";
import ProjectSection from "@/components/ProjectSection";
import Qoute from "@/components/Qoute";
import SkillSection from "@/components/Skill/SkillSection";
import Nav from "@/components/AboutSection/Nav";
import { docData } from "@/lib/data";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden px-8 md:px-0">
      {/* Page wrapper */}
      <div className="relative flex flex-col items-center w-full">
        <div className="flex flex-col md:gap-2 gap-2 items-center pb-24 w-full max-w-[1024px] ">
          <Hero />
          <About />
          <Nav />
          <Git />
          <SkillSection />
          <Qoute />
        </div>

        <div className="relative z-10 w-full">
          <Footer />
        </div>

        <div className="fixed bottom-15 md:bottom-25 left-0 right-0 flex justify-center items-center z-50 pointer-events-none">
          <div className="pointer-events-auto">
            <FloatingDock items={docData} />
          </div>
        </div>
      </div>
    </div>
  );
}
