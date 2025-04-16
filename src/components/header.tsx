"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./button";

const sections = ["hero", "about", "services", "testimonials", "local"];

export const Header = () => {
   const [activeSection, setActiveSection] = useState('');

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setActiveSection(entry.target.id)
               }
            })
         }, {
         threshold: 0.3
      }
      );

      sections.forEach((id) => {
         const section = document.getElementById(id);
         if (section) {
            observer.observe(section);
         }
      });

      return () => {
         sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
               observer.observe(section);
            }
         })
      };
   }, []);

   return (
      <header className="fixed z-10 w-full bg-gray-900/80 border-b-2 border-zinc-500">
         <div className="container mx-auto flex justify-between items-center p-3 sm:p-5">
            <div>
               <Image
                  src={'/logo-lawyer-nobg.png'}
                  alt="Logo advogado"
                  width={64}
                  height={64}
                  quality={85}
               />
            </div>
            <nav className="hidden sm:block">
               <ul className="flex gap-10 text-lg">
                  {sections.map((id) => (
                     <li key={id}>
                        <a href={`#${id}`}
                           className={` px-5 py-3 rounded-full transition
                        ${activeSection === id ? 'bg-[var(--primary-color-2)] text-black' : 'hover:bg-[var(--primary-color)]/50'}`}>
                           {id === "hero"
                              ? 'Início'
                              : id === 'about'
                              ? 'Sobre'
                              : id === 'services'
                              ? 'Serviços'
                              : id === 'testimonials'
                              ? 'Avaliações'
                              : id === 'local'
                              && 'Local'}
                        </a>
                     </li>
                  ))}
               </ul>
            </nav>
            <Button text="Contratar" />
         </div>
      </header>
   )
}