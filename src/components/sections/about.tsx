import { Secspan } from "../secspan";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export const About = () => {

   return (
      <section id="about" className="bg-zinc-200 text-black pt-[400px] sm:pt-32 pb-8 sm:pb-14">
         <div className="container mx-auto px-3 py-12 pt-7 flex flex-col sm:flex-row gap-5">
            <div className="flex-1">
               <Secspan text="Sobre" />
               <h1 className="text-3xl sm:text-4xl font-bold mt-5">Veja mais sobre mim e <br /> minhas <span className="text-[var(--primary-color)]">experiências</span></h1>
               <p className="my-8">Advogado com registro na OAB/SP [número], especializado em Direito civil e familiar, com foco em
                  soluções humanas e seguras para situações delicadas como o direto a propriedade, integridade física e mental, divórcios, pensão e guarda de filhos.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <p className="flex gap-3 items-center"><FaArrowRight className="fill-[var(--primary-color)] size-5" />
                     Lorem, ipsum dolor sit amet consectetur.
                  </p>
                  <p className="flex gap-3 items-center"><FaArrowRight className="fill-[var(--primary-color)] size-5" />
                     Lorem, ipsum dolor sit amet consectetur.
                  </p>
                  <p className="flex gap-3 items-center"><FaArrowRight className="fill-[var(--primary-color)] size-5" />
                     Lorem, ipsum dolor sit amet consectetur.
                  </p>
                  <p className="flex gap-3 items-center"><FaArrowRight className="fill-[var(--primary-color)] size-5" />
                     Lorem, ipsum dolor sit amet consectetur.
                  </p>
               </div>
               <p className="mt-5 text-base sm:text-lg font-semibold text-center sm:text-start">
                  Me ligue para conversarmos
                  <span className="font-bold text-lg sm:text-xl sm:ml-2"> +55(11)999999999</span>
               </p>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
               <div>
                  <Image src={'/about-image.jpg'} alt="about-image"
                     width={480} height={480}
                     className="rounded-3xl max-w-full border-4 border-[var(--primary-color)]" />
               </div>
               <div className="flex flex-col sm:flex-row gap-5 mt-10">
                  <div className="text-center border-b sm:border-b-0 sm:border-r-2 border-[var(--primary-color-2)] pb-5 sm:pb-0 sm:pr-5">
                     <span className="text-[var(--primary-color-3)] font-extrabold text-3xl">+10</span>
                     <p className="text-lg">anos de experiência</p>
                  </div>
                  <div className="text-center border-b sm:border-b-0 sm:border-r-2 border-[var(--primary-color-2)] pb-5 sm:pb-0 sm:pr-5">
                     <span className="text-[var(--primary-color-3)] font-extrabold text-3xl">+200</span>
                     <p className="text-lg">clientes satisfeitos</p>
                  </div>
                  <div className="text-center border-b sm:border-b-0 sm:border-r-2 border-[var(--primary-color-2)] pb-5 sm:pb-0 sm:pr-5">
                     <span className="text-[var(--primary-color-3)] font-extrabold text-3xl">12</span>
                     <p className="text-lg">prêmios ganhos</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="container mx-auto px-3 py-12 flex flex-col sm:flex-row gap-5">
            <div className="relative flex flex-col sm:flex-row mx-auto gap-7">
               <div className="absolute w-full h-1 bg-zinc-500 top-12 opacity-20 -z-0 hidden sm:block"></div>
               <div className="flex-1 max-w-80 text-center flex flex-col gap-3">
                  <p className="text-lg font-bold">2016</p>
                  <div className="journey-div transition">
                     <span className="span-ball size-6 block rounded-full mx-auto mb-3"></span>
                     <p className="text-xl font-bold mb-2">Inicio da jornada</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores consectetur voluptate voluptas.</p>
                  </div>
               </div>
               <div className="flex-1 max-w-80 text-center flex flex-col gap-3">
                  <p className="text-lg font-bold">2018</p>
                  <div className="journey-div transition">
                     <span className="span-ball size-6 block rounded-full mx-auto mb-3"></span>
                     <p className="text-xl font-bold mb-2">Primeira premiação</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores consectetur voluptate voluptas.</p>
                  </div>
               </div>
               <div className="flex-1 max-w-80 text-center flex flex-col gap-3">
                  <p className="text-lg font-bold">2021</p>
                  <div className="journey-div transition">
                     <span className="span-ball size-6 block rounded-full mx-auto mb-3"></span>
                     <p className="text-xl font-bold mb-2">Inicio da jornada</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores consectetur voluptate voluptas.</p>
                  </div>
               </div>
               <div className="flex-1 max-w-80 text-center flex flex-col gap-3">
                  <p className="text-lg font-bold">2023</p>
                  <div className="journey-div transition">
                     <span className="span-ball size-6 block rounded-full mx-auto mb-3"></span>
                     <p className="text-xl font-bold mb-2">Inicio da jornada</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores consectetur voluptate voluptas.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}