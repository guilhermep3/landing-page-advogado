import { FaCalendarAlt } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

export const Infos = () => {

   return (
      <div id="infos" className="absolute left-1/2 -translate-x-1/2 sm:-translate-y-1/2 grid grid-cols-1 sm:grid-cols-3 container mx-auto max-w-[960px] px-5">
         <div className="flex justify-center items-center gap-6 bg-white px-6 sm:px-8 py-8 sm:py-10 shadow-lg
            hover:bg-zinc-800 text-black hover:text-white transition">
            <FaCalendarAlt className="size-10 sm:size-14 fill-[var(--primary-color)]" />
            <div>
               <p className="text-sm">Marque uma</p>
               <p className="text-2xl font-semibold">consulta</p>
            </div>
         </div>
         <div className="hover-svg flex justify-center items-center gap-6 bg-zinc-800 px-6 sm:px-8 py-8 sm:py-10 shadow-lg
            hover:bg-[var(--primary-color)] text-white hover:text-black transition">
            <HiAcademicCap fill="var(--primary-color)" className="size-10 sm:size-14" />
            <div>
               <p className="text-sm">Formado na</p>
               <p className="text-2xl font-semibold">USP</p>
            </div>
         </div>
         <div className="flex justify-center items-center gap-6 bg-white px-6 sm:px-8 py-8 sm:py-10 shadow-lg
            hover:bg-zinc-800 text-black hover:text-white transition">
            <FaCalendarAlt fill="var(--primary-color)" className="size-10 sm:size-14" />
            <div>
               <p className="text-sm">Marque uma</p>
               <p className="text-2xl font-semibold">consulta</p>
            </div>
         </div>
      </div>
   )
}