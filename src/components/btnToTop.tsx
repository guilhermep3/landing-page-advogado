"use client"
import React, { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa";

export const BtnToTop = () => {
   const [isVisible, setIsVisible] = useState(false);
   const [scrollPercentage, setScrollPercentage] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
         const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
         const scrollPosition = window.scrollY;

         const percentage = scrollTotal > 0 ? scrollPosition / scrollTotal : 0;  // (0 a 1)
         setScrollPercentage(percentage);

         setIsVisible(scrollPosition > 300);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   };

   return (
      <button
         id="back-to-top"
         className={`back-to-top ${isVisible ? 'visible' : ''}`}
         onClick={scrollToTop}
         aria-label="Voltar ao topo"
      >
         <span className="arrow"><FaArrowUp/></span>
         <span
            className="progress"
            style={{ transform: `scaleY(${scrollPercentage})` }}
         />
      </button>
   );
};