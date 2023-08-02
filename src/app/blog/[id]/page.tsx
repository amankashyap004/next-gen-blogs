"use client";

import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Post {
   id: number;
   title: string;
   body: string;
}

interface BlogPageProps {
   params: {
      id: number;
   };
}

async function getData(id: number): Promise<Post> {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      cache: "no-store",
   });

   if (!res.ok) {
      return notFound();
   }

   return res.json();
}

const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
   const { id } = params;

   const [data, setData] = React.useState<Post | null>(null);

   React.useEffect(() => {
      const fetchData = async () => {
         try {
            const postData = await getData(id);
            setData(postData);
         } catch (error) {
            console.error(error);
         }
      };

      fetchData();
   }, [id]);

   return (
      <div>
         {data && (
            <section className="flex flex-col py-4">
               <section className="flex gap-10">
                  <div className="flex justify-between flex-col flex-1 gap-2">
                     <h1 className="text-xl">{data.title}</h1>
                     <p className="text-sm text-gray-400 text-justify">{data.body}</p>
                     <div className="flex items-center gap-2 flex-1">
                        <div className="w-8 h-8 rounded-full relative">
                           <Image
                              src="/image1.jpg"
                              alt="user-image"
                              fill={true}
                              sizes="(max-width: 32px) 100vw, 32px"
                              className="rounded-full object-cover"
                              priority
                           />
                        </div>
                        <span>username</span>
                     </div>
                  </div>
                  <div className="relative flex-1 w-full h-60 rounded">
                     <Image
                        src="/image1.jpg"
                        alt="image"
                        sizes="(max-width: 100vw) 100vw, 100vw"
                        fill={true}
                        className="rounded object-cover"
                        priority
                     />
                  </div>
               </section>
               <div className="py-8">
                  <p className="text-sm text-justify text-gray-400">{data.body}</p>
               </div>
            </section>
         )}
      </div>
   );
};

export default BlogPage;
