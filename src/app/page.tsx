
import HiringBanner from "@/components/Banner/Banner";
import BlogSection from "@/components/BlogSection/BlogSection";
import { FloatingDock } from "@/components/FloatingDoc";
import Footer from "@/components/footer/Footer";
import ProjectSection from "@/components/ProjectSection";
import { Spotlight } from "@/components/Spotlight";
import { docData } from "@/lib/data";



export default function Home() {
  return (
    <>
      <Spotlight />
      <HiringBanner/>

      {/* Page wrapper */}
      <div className="relative flex flex-col min-h-screen">

        
        <div className="flex-grow flex flex-col items-center pb-24 w-full max-w-[1024px] mx-auto">
        <div style={{ height: '1500px' }}></div>
          <ProjectSection />
          <BlogSection/>
          

        </div>

        
        <div className="relative z-10">
          <Footer />
        </div>

      
        <div className="fixed bottom-25 left-0 right-0 flex justify-center items-center z-50 pointer-events-none">
          <div className="pointer-events-auto">
            <FloatingDock items={docData} />
          </div>
        </div>
      </div>
    </>
  );
}


