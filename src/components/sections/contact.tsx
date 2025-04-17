import { FaWhatsapp } from "react-icons/fa"
import { Button } from "../button"
import { Secspan } from "../secspan"
import { Sectiontitle } from "../sectiontitle"

export const Contato = () => {

   return (
      <section id="contact" className="bg-zinc-100 text-black min-h-[75vh]">
         <div className="container mx-auto flex flex-col items-center mb-10 py-5" data-aos="fade-up">
            <Secspan text="Contato" className="text-black text-center mx-auto" />
            <Sectiontitle className="text-black"
               text={<>Estou aqui para te <span className="text-[var(--primary-color)]">ouvir</span> e oferecer a melhor <span className="text-[var(--primary-color)]">orientação</span></>} />
            <h2 className="text-xl font-semibold mb-10 mt-5 text-center">Agende sua consulta diretamente pelo WhatsApp</h2>
            <Button
               text="Fale comigo"
               icon={<FaWhatsapp className="size-8" />}
               className="font-bold text-lg mx-auto sm:mx-0 rounded-full"
            />
         </div>
         <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d868.1152883824809!2d-46.664706773016356!3d-23.524204164795677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5806c0744df7%3A0x894b34dcd5fc70c5!2sAdvocacia%20Borges%2F%20Advogado%20Trabalhista%20%2F%20Advogado%20Trabalhista%20em%20S%C3%A3o%20Paulo%20%2F%20Melhor%20escrit%C3%B3rio%20de%20Advocacia%20Trabalhista!5e1!3m2!1spt-BR!2sbr!4v1744814632844!5m2!1spt-BR!2sbr"
               width="600" height="450" className="border-0 w-full" allowFullScreen loading="lazy"
               referrerPolicy="no-referrer-when-downgrade">
            </iframe>
         </div>
      </section>
   )
}