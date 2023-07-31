import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

interface CategoryProps {
   params: {
      category: string;
   };
}

const Category: React.FC<CategoryProps> = ({ params }) => {
   return (
      <div>
         <h1 className="text-green-500">{params.category}</h1>
         <section className="flex gap-10 mt-4 mb-8 flex-1 w-3/4">
            <div className="flex justify-center flex-col flex-1 gap-4">
               <h1 className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
               <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem aut quasi
                  culpa omnis doloribus nobis sapiente veritatis sequi velit?
               </p>
               <Button text="See More" url="#" />
            </div>
            <div className="flex flex-1 h-80 relative">
               <Image src="/image1.jpg" fill={true} alt="image" className="object-cover" />
            </div>
         </section>
      </div>
   );
};

export default Category;
