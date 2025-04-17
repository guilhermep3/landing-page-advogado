"use client"
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { register } from "swiper/element-bundle";
import { TestimonialsData } from "@/data/testimonials";
import { Secspan } from "../secspan";
import { Sectiontitle } from "../sectiontitle";
import { FaStar } from "react-icons/fa";

export const Testimonials = () => {
   register();

   return (
      <section id="testimonials" className="bg-zinc-100">
         <div className="container mx-auto px-3 py-12">
            <div>
               <Secspan text="Avaliações" className="text-black" />
               <Sectiontitle className="text-black"
                  text={<><span className="text-[var(--primary-color)]">Avaliações</span> dos meus clientes<br /></>} />
            </div>
            <Swiper
               slidesPerView={1}
               modules={[Navigation, Pagination]}
               pagination={{ clickable: true }}
               navigation
               spaceBetween={10}
               breakpoints={{
                  768: {
                     slidesPerView: 2,
                     spaceBetween: 20
                  }
               }}
            >
               {TestimonialsData.map((t) => (
                  <SwiperSlide key={t.id} className="py-12">
                     <div className="text-black py-10 border-l-none sm:border-l-4 border-[var(--primary-color)] px-16">
                        <div className="mb-10">
                           <p className="text-lg font-semibold">{t.description}</p>
                        </div>
                        <div className="flex gap-7">
                           <img src={`/testimonials/${t.image}`} alt={`Avaliação de ${t.name}`}
                              className="size-20 object-cover max-s rounded-full" />
                           <div className="flex flex-col justify-center gap-2">
                              <p className="text-xl font-bold flex items-center gap-3">
                                 {t.name}
                                 <span className="text-lg flex items-center gap-1"><FaStar className="fill-yellow-500"/> 5.0</span>
                              </p>
                              <p className="opacity-75">{t.role}</p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   );
};