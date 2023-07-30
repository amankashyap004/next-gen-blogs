import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const Contact = () => {
   return (
      <div className="flex justify-start flex-col m-0">
         <h1 className="text-xl text-center mb-16">Let's Keep in Touch</h1>
         <section className="flex items-center gap-24">
            <div className="flex-1 w-full h-80 relative rounded overflow-hidden">
               <Image
                  src="/contact-image.jpg"
                  alt="contact image"
                  fill={true}
                  className="object-contain"
               />
            </div>
            <form className="flex flex-col flex-1 gap-5">
               <input
                  type="text"
                  placeholder="name"
                  className="bg-transparent text-lg font-[bold] p-3 border-[2px] bo border-solid  border-gray-300 outline-none rounded"
               />
               <input
                  type="text"
                  placeholder="email"
                  className="bg-transparent text-lg font-[bold] p-3 border-[2px] border-solid border-gray-300 outline-none rounded"
               />
               <textarea
                  placeholder="message"
                  className="bg-transparent text-lg font-[bold] p-3 border-[2px] border-solid border-gray-300 outline-none rounded h-40"
               ></textarea>
               <Button url="#" text="Send" />
            </form>
         </section>
      </div>
   );
};

export default Contact;
