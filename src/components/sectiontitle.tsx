import { ReactNode } from "react"

type props = {
   text: ReactNode;
   className?: string;
}
export const Sectiontitle = ({text, className}: props) => {

   return (
      <h1 className={`text-3xl sm:text-4xl font-bold mt-5 text-center sm:text-start ${className}`}>{text}</h1>
   )
}