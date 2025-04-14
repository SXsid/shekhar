import { FloatingDock } from "@/components/FloatingDoc";
import { Spotlight } from "@/components/Spotlight";
import { docData } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return(
   <>
   <Spotlight/>
   <div className="fixed bottom-10 left-0 right-0 flex justify-center items-center z-999">
      <FloatingDock items={docData}/>
    </div>
   </>
  )
}
