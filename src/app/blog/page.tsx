import React from "react";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
   return (
      <div className="flex items-start justify-start flex-col gap-4">
         <Link href={`/blog/testId`}>
            <section className="flex items-center justify-center gap-8">
               <div className="relative">
                  <Image
                     src="/image1.jpg"
                     alt=""
                     className="object-cover"
                     width={300}
                     height={150}
                  />
               </div>
               <div className="flex justify-center flex-col gap-4">
                  <h1 className="text-lg">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h1>
                  <p className="text-base">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem aut quasi
                     culpa omnis doloribus nobis sapiente veritatis sequi velit?
                  </p>
               </div>
            </section>
         </Link>
         <Link href={`/blog/testId`}>
            <section className="flex items-center justify-center gap-8">
               <div className="relative">
                  <Image
                     src="/image1.jpg"
                     alt=""
                     className="object-cover"
                     width={300}
                     height={150}
                  />
               </div>
               <div className="flex justify-center flex-col gap-4">
                  <h1 className="text-lg">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h1>
                  <p className="text-base">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem aut quasi
                     culpa omnis doloribus nobis sapiente veritatis sequi velit?
                  </p>
               </div>
            </section>
         </Link>
         <Link href={`/blog/testId`}>
            <section className="flex items-center justify-center gap-8">
               <div className="relative">
                  <Image
                     src="/image1.jpg"
                     alt=""
                     className="object-cover"
                     width={300}
                     height={150}
                  />
               </div>
               <div className="flex justify-center flex-col gap-4">
                  <h1 className="text-lg">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h1>
                  <p className="text-base">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem aut quasi
                     culpa omnis doloribus nobis sapiente veritatis sequi velit?
                  </p>
               </div>
            </section>
         </Link>
         <Link href={`/blog/testId`}>
            <section className="flex items-center justify-center gap-8">
               <div className="relative">
                  <Image
                     src="/image1.jpg"
                     alt=""
                     className="object-cover"
                     width={300}
                     height={150}
                  />
               </div>
               <div className="flex justify-center flex-col gap-4">
                  <h1 className="text-lg">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h1>
                  <p className="text-base">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem aut quasi
                     culpa omnis doloribus nobis sapiente veritatis sequi velit?
                  </p>
               </div>
            </section>
         </Link>
      </div>
   );
};

export default Blog;
