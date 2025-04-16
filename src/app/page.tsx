"use client"
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Loading } from "@/components/loading";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Local } from "@/components/sections/local";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { useEffect, useState } from "react";

export default function Home() {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
   }, []);

   return (
      <div className="relative">
         <Loading visible={isLoading} />
         
         <div className={`${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-500`}>
            <Header />
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <Local />
            <Footer />
         </div>
      </div>
   );
}
