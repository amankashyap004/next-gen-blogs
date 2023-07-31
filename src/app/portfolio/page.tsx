import React from "react";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
   return (
      <div className="flex justify-start items-start flex-col">
         <h1 className="text-xl font-bold mb-4">Choose a gallery</h1>
         <div className="flex gap-4">
            <Link href="/portfolio/illustrations">
               <div className="w-64 h-96 relative border-2 border-gray-300 rounded">
                  <Image
                     src="/illustration.jpg"
                     alt="Illustration Gallery"
                     fill={true}
                     className="opacity-50 object-cover"
                  />
                  <span className="absolute bottom-2 left-2 font-semibold">Illustrations</span>
               </div>
            </Link>
            <Link href="/portfolio/websites">
               <div className="w-64 h-96 relative border-2 border-gray-300 rounded">
                  <Image
                     src="/website.jpg"
                     alt="Websites Gallery"
                     fill={true}
                     className="opacity-50 object-cover"
                  />
                  <span className="absolute bottom-2 left-2 font-semibold">Websites</span>
               </div>
            </Link>
            <Link href="/portfolio/application">
               <div className="w-64 h-96 relative border-2 border-gray-300 rounded">
                  <Image
                     src="/app.jpg"
                     alt="Application Gallery"
                     fill={true}
                     className="opacity-50 object-cover"
                  />
                  <span className="absolute bottom-2 left-2 font-semibold">Application</span>
               </div>
            </Link>
         </div>
      </div>
   );
};

export default Portfolio;
