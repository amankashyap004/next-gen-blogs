import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

async function getData() {
   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

   if (!res.ok) {
      throw new Error("Failed to fetch data");
   }

   return res.json();
}

const Blog = async () => {
   const data = await getData();

   return (
      <div className="flex items-start justify-start flex-col gap-4">
         {data.map(
            (item: { body: ReactNode; title: ReactNode; id: React.Key | null | undefined }) => (
               <Link href={`/blog/${item.id}`} key={item.id}>
                  <div className="flex items-start justify-start gap-8 w-full">
                     <div className="w-1/5">
                        <div className="relative w-80 h-40">
                           <Image
                              src="/image1.jpg"
                              alt="img"
                              className="object-contain"
                              fill={true}
                           />
                        </div>
                     </div>
                     <div className="flex justify-start items-start flex-col gap-4 w-4/5">
                        <h1 className="text-lg">{item.title}</h1>
                        <p className="text-base">{item.body}</p>
                     </div>
                  </div>
               </Link>
            )
         )}
      </div>
   );
};

export default Blog;
