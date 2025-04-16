type props = {
   text: string;
   className?: string;
}
export const Secspan = ({text, className}: props) => {

   return (
      <span className={`${className} secspan text-sm tracking-widest w-fit block`}>{text}</span>
   )
}