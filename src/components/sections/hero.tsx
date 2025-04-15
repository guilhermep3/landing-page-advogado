import Image from "next/image"
import { Button } from "../button"
import { FaWhatsapp } from "react-icons/fa";
import { Infos } from "./infos";

export const Hero = () => {

   return (
      <section id="hero" className="pt-28 relative">
         <div className="container mx-auto flex flex-col sm:flex-row items-center gap-5">
            <div className="flex-1 text-center sm:text-start">
               <h1 className="text-3xl sm:text-5xl font-bold sm:leading-16 border-b-4 pb-3 border-[var(--primary-color)]">Advogado <br/> Antonio Lopes</h1>
               <h1 className="text-xl sm:text-2xl font-semibold my-5 sm:my-10">Precisa resolver questões jurídicas com segurança e confiança?</h1>
               <Button text="Converse comigo" icon={<FaWhatsapp className="size-8"/>} className="w-64 font-bold text-lg mx-auto sm:mx-0 rounded-full"/>
            </div>
            <div className="flex-1">
               <Image src={'/advogado.png'} alt="Imagem do advogado"
                  width={480} height={480}
                  className="w-3/4 sm:w-[480px] mx-auto" />
            </div>
         </div>
         <Infos/>
      </section>
   )
}