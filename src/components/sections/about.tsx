import { Secspan } from "../secspan";
import Image from "next/image";
import { FaArrowRight, FaPhone } from "react-icons/fa";

export const About = () => {

   return (
      <section id="about" className="bg-zinc-200 text-black pt-[400px] sm:pt-32 pb-8 sm:pb-14">
         <div className="container mx-auto px-3 py-12 pt-7 flex flex-col sm:flex-row gap-5">
            <div className="flex-1" data-aos="fade-down">
               <Secspan text="Sobre" className="mx-auto sm:mx-0" />
               <h1 className="text-3xl sm:text-4xl font-bold mt-5 text-center sm:text-start">
                  Saiba mais sobre mim e <br /> minha <span className="text-[var(--primary-color)]">trajetória profissional</span>
               </h1>

               <p className="my-8 text-base sm:text-lg">
                  Advogado regularmente inscrito na OAB/SP sob o número [número], com especialização em Direito Civil e Direito de Família.
                  Atuo com foco em soluções seguras, humanas e eficazes para questões delicadas, como direito à propriedade, integridade física e emocional, divórcios, pensões alimentícias e guarda de filhos.
               </p>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <p className="flex gap-3 items-center text-base sm:text-lg">
                     <FaArrowRight className="fill-[var(--primary-color)] size-8" />
                     Atendimento personalizado com empatia e responsabilidade.
                  </p>
                  <p className="flex gap-3 items-center text-base sm:text-lg">
                     <FaArrowRight className="fill-[var(--primary-color)] size-8" />
                     Experiência sólida em mediação de conflitos familiares.
                  </p>
                  <p className="flex gap-3 items-center text-base sm:text-lg">
                     <FaArrowRight className="fill-[var(--primary-color)] size-8" />
                     Atuação estratégica em processos de divórcio e guarda.
                  </p>
                  <p className="flex gap-3 items-center text-base sm:text-lg">
                     <FaArrowRight className="fill-[var(--primary-color)] size-8" />
                     Comprometido com a proteção dos direitos dos meus clientes.
                  </p>
               </div>

               <div className="flex items-center gap-2 mt-7 text-base sm:text-lg font-semibold text-start">
                  <p>Me ligue para conversarmos:</p>
                  <p className="flex items-center gap-1 font-bold text-xl sm:text-2xl sm:ml-2">
                     <FaPhone /> (11)998877665
                  </p>
               </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center" data-aos="fade-up">
               <div>
                  <Image src={'/about.jpg'} alt="about-image"
                     width={520} height={520}
                     className="rounded-3xl max-w-full border-4 border-[var(--primary-color)]" />
               </div>
               <div className="flex flex-col sm:flex-row gap-5 mt-10 sm:mt-14 -mb-7">
                  <div className="text-center border-b sm:border-b-0 sm:border-r-2 border-[var(--primary-color-2)] pb-5 sm:pb-0 sm:pr-5">
                     <span className="text-[var(--primary-color-3)] font-extrabold text-3xl sm:text-4xl">+10</span>
                     <p className="text-lg">anos de experiência</p>
                  </div>
                  <div className="text-center border-b sm:border-b-0 sm:border-r-2 border-[var(--primary-color-2)] pb-5 sm:pb-0 sm:pr-5">
                     <span className="text-[var(--primary-color-3)] font-extrabold text-3xl sm:text-4xl">+200</span>
                     <p className="text-lg">clientes satisfeitos</p>
                  </div>
                  <div className="text-center border-b sm:border-b-0 sm:border-r-2 border-[var(--primary-color-2)] pb-5 sm:pb-0 sm:pr-5">
                     <span className="text-[var(--primary-color-3)] font-extrabold text-3xl sm:text-4xl">12</span>
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