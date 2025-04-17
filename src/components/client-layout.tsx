"use client"
import { ReactNode, useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ClientLayout = ({children}: {children: ReactNode}) => {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         easing: 'ease-in-out',
         once: true,
         delay: 100
      })
   }, [])

   return (
      <div>{children}</div>
   )
}