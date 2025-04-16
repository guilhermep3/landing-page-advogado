import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Local } from "@/components/sections/local";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
   return (
      <div>
         <Header/>
         <Hero/>
         <About/>
         <Services/>
         <Testimonials/>
         <Local/>
         <Footer/>
      </div>
   );
}