import { ReactNode } from "react";

type props = {
   text: string;
   icon?: ReactNode;
   handleOnClick?: (a?: any) => void;
   className?: string;
   link?: string;
}
export const Button = ({ text, icon, handleOnClick, className, link }: props) => {
   const message = 'Olá Antonio, quero marcar uma consulta com você, vamos conversar?';

   return (
      <a href={link ?? `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`} target="_blank"
         className={`font-semibold btn px-6 py-3 rounded-2xl text-black cursor-pointer flex items-center gap-3 w-fit ${className}`}
         onClick={handleOnClick}
      >
         {icon} {text}
      </a>
   )
}