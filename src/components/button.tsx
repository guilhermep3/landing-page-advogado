import { ReactNode } from "react";

type props = {
   text: string;
   icon?: ReactNode;
   handleOnClick?: (a?: any) => void;
   className?: string;
}
export const Button = ({ text, icon, handleOnClick, className }: props) => {

   return (
      <button className={`${className} btn px-5 py-3 rounded-2xl text-black cursor-pointer flex items-center gap-3`}
         onClick={handleOnClick}>
         {icon} {text}
      </button>
   )
}