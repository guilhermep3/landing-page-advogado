import Image from "next/image"
import { Sectiontitle } from "../sectiontitle"
import { Secspan } from "../secspan"
import { Servicedata } from "@/data/services-data"

export const Services = () => {

   return (
      <section id="services" className="bg-zinc-950">
         <div className="container mx-auto px-3 py-12 flex">
            <div className="flex-1 text-white">
               <Secspan text="Serviços" />
               <Sectiontitle className="text-white"
                  text={<>Compaixão, Cuidado e <br /><span className="text-[var(--primary-color)]">Compromisso</span></>} />
               <p className="my-10 text-lg">Foram esses valores que despertaram minha paixão pela advocacia e me motivaram a me especializar nas áreas abaixo.</p>
               <div className="flex flex-col gap-20">
                  {Servicedata.map((service) => (
                     <div key={service.id}
                        data-aos="fade-down"
                        className="flex flex-col sm:flex-row gap-3 md:gap-8 lg:gap-10 items-center px-3 sm:px-5 py-5 rounded-2xl shadow-lg shadow-zinc-900 text-white">
                        <div className="flex items-center gap-5 md:gap-7">
                           <p className="text-2xl font-bold"># <span className="text-3xl">{service.id}</span></p>
                           <Image src={service.image} alt={service.title}
                              width={120} height={120}
                              className="bg-zinc-900 rounded-full p-2 w-16 sm:28 lg:w-32 border-2 border-transparent hover:border-[var(--primary-color)]/50"
                           />
                        </div>
                        <div className="max-w-[440px] text-center sm:text-start">
                           <h1 className="text-xl font-bold mb-2">{service.title}</h1>
                           <p>{service.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div>
               <Image src={'/law.png'} alt="law"
                  width={520} height={520}
                  className="sticky top-0 w-full md:max-w-[320px] lg:max-w-[520px] hidden md:block" />
            </div>
         </div>
      </section>
   )
}