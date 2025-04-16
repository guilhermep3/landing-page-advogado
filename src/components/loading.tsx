import Image from "next/image"

export const Loading = ({ visible }: { visible: boolean }) => {
   return (
      <div
         className={`
            flex justify-center items-center w-full h-screen bg-zinc-900 
            transition-opacity duration-500 
            ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none hidden'}
         `}
      >
         <div>
            <Image
               src={'/logo-lawyer-nobg.png'}
               alt="Logo advogado"
               width={160}
               height={160}
               quality={85}
               className="block animate-spin w-40"
            />
         </div>
      </div>
   );
};
