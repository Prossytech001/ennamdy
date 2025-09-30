import Image from "next/image";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TrustedBy from "@/components/TrustedBy";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import CourseVideo from "@/components/CourseVideo";
export default function Home() {
  return (
    <div >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero/>
        <Stats/>
        <TrustedBy/>
        <About/>
        <CourseVideo/>
        <Skills/>
        <Testimonials/>
        <Newsletter/>
        
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
