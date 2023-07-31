import React from "react";
import Image from "next/image";

const BlogPage = () => {
   return (
      <div>
         <section className="flex flex-col py-4">
            <section className="flex gap-10">
               <div className="flex justify-between flex-col flex-1 gap-2">
                  <h1 className="text-xl">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, porro.
                  </h1>
                  <p className="text-sm text-gray-400 text-justify">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum aperiam quos
                     aut quis? Laborum, corrupti animi officiis ipsum, repellat, temporibus
                     distinctio perferendis eligendi commodi tempore reprehenderit eaque? Eum sed
                     pariatur amet totam vel excepturi tempora doloremque accusantium accusamus
                     minima. Obcaecati.
                  </p>
                  <div className="flex items-center gap-2 flex-1">
                     <div className="w-8 h-8 rounded-full relative">
                        <Image
                           src="/image1.jpg"
                           alt=""
                           fill={true}
                           className="rounded-full object-cover"
                        />
                     </div>
                     <span>username</span>
                  </div>
               </div>
               <div className="relative flex-1 w-full h-60 rounded">
                  <Image src="/image1.jpg" alt="" fill={true} className="rounded object-cover" />
               </div>
            </section>
            <div className="py-8">
               <p className="text-sm text-justify text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sint eligendi
                  nulla quod debitis totam. Nostrum repellat, consequuntur eius aliquid incidunt
                  deleniti voluptas? Ea corrupti dolorem aliquam sit, dignissimos hic quo nisi
                  similique numquam iure voluptate ab repellendus vel sint a et earum temporibus
                  doloribus quod dolorum necessitatibus explicabo tenetur omnis obcaecati! Odit
                  perspiciatis praesentium dolorum reiciendis voluptate, tenetur hic qui numquam
                  harum laudantium atque eaque magnam aut adipisci commodi ex accusamus obcaecati
                  quisquam quae porro voluptatem exercitationem quis.
                  <br />
                  <br />
                  Tempora dignissimos laborum fugiat magni dolorum tenetur velit, corrupti, cum
                  accusamus pariatur culpa earum minima eius nihil officiis corporis consequatur!
                  Iste fugit voluptatem libero voluptas atque? Eveniet reiciendis assumenda impedit,
                  aliquid, nisi mollitia autem voluptatem voluptate tempore temporibus labore
                  doloremque atque dolorum eum quam quo. Facere dolorem molestiae, earum totam
                  voluptatem, deleniti libero quaerat eos praesentium porro eligendi saepe magnam
                  hic necessitatibus, natus ipsam! Laudantium iusto earum sint. Perspiciatis ut
                  quasi ipsa vel quam iusto iste voluptates labore odit, dignissimos veniam ad
                  debitis facilis iure quidem libero excepturi atque culpa? Facere deleniti
                  consequuntur nostrum rem maiores aliquam libero earum, quam unde, sint, vel
                  accusantium facilis dolorum? Natus dolorum culpa dignissimos. Sequi delectus fuga
                  ipsum, a facilis incidunt veniam repellendus cumque inventore, at, sapiente minus.
                  <br />
                  <br />
                  Deserunt sint quaerat optio aliquam neque reprehenderit accusamus dignissimos
                  omnis culpa laboriosam fugiat, asperiores voluptatum ratione ullam libero dolores,
                  illum maiores et similique. Qui natus id minima? Consequuntur iste perferendis
                  quos deserunt reprehenderit nulla ea pariatur. Itaque maiores esse quam autem
                  quidem molestias tenetur expedita numquam quasi. Cum, iusto totam sit eveniet,
                  expedita facere veniam voluptatum distinctio maiores numquam quam earum
                  repellendus ut, dignissimos corporis necessitatibus at modi iure soluta illum?
                  Sapiente illum labore quas quo quam exercitationem voluptate ab quibusdam neque!
                  Nostrum, blanditiis autem cupiditate vitae in magnam debitis fuga porro corrupti
                  esse corporis, voluptates aperiam!
               </p>
            </div>
         </section>
      </div>
   );
};

export default BlogPage;
