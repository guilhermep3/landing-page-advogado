import { FaInstagram, FaLinkedin, FaPhone, FaTiktok, FaTwitter } from "react-icons/fa"
import { Button } from "./button"

export const Footer = () => {

   return (
      <footer className="w-full bg-gray-900 px-3 py-10">
         <div className="container mx-auto flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full text-white">
               <div className="flex flex-col gap-5 justify-start items-start">
                  <p className="text-xl font-bold">Advogado <br /> Antonio Lopes</p>
                  <p>marque uma consulta comigo pelo whatsapp.</p>
                  <Button text="Contratar" className="font-semibold" />
                  <ul className="flex flex-col gap-5">
                     <li className="flex gap-3 items-center">
                        <FaPhone className="fill-[var(--primary-color)] size-5" /> (11) 999999999
                     </li>
                  </ul>
               </div>
               <div className="grid grid-cols-2 gap-5 sm:col-span-2 sm:grid-cols-2">
                  <div>
                     <p className="text-xl font-bold mb-5">Links</p>
                     <ul className="flex flex-col gap-3">
                        <li><a href="#hero" className="hover:underline">Início</a></li>
                        <li><a href="#about" className="hover:underline">Sobre</a></li>
                        <li><a href="#services" className="hover:underline">Serviços</a></li>
                        <li><a href="#testimonials" className="hover:underline">Avaliações</a></li>
                        <li><a href="#local" className="hover:underline">Local</a></li>
                     </ul>
                  </div>
                  <div>
                     <p className="text-xl font-bold mb-5">Links</p>
                     <ul className="flex flex-col gap-3">
                        <li><a href="#" className="hover:underline flex items-center gap-2"><FaInstagram className="size-5 fill-[var(--primary-color)]" /> Instagram</a></li>
                        <li><a href="#" className="hover:underline flex items-center gap-2"><FaLinkedin className="size-5 fill-[var(--primary-color)]" /> Linkedin</a></li>
                        <li><a href="#" className="hover:underline flex items-center gap-2"><FaTwitter className="size-5 fill-[var(--primary-color)]" /> Twitter</a></li>
                        <li><a href="#" className="hover:underline flex items-center gap-2"><FaTiktok className="size-5 fill-[var(--primary-color)]" /> Tiktok</a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="mt-10 text-white">
               <p>copyright - todos os direitos reservados</p>
               <p className="text-sm">Desenvolvido por <a href="" className="hover:underline">Guilherme Pereira</a></p>
            </div>
         </div>
      </footer>
   )
}