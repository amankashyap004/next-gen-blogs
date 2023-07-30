import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const About = () => {
   return (
      <div className="flex justify-between flex-col">
         <section className="relative">
            <div className="w-full h-80 relative">
               <Image
                  src="/about-image.jpg"
                  alt="about image"
                  fill={true}
                  className="object-cover"
               />
            </div>
            <div className="absolute bottom-2 left-2 p-4 bg-green-500 text-white rounded">
               <h1 className="text-lg">Digital Storytellers</h1>
               <h2 className="text-lg">Handcrafting award winning digital experiences</h2>
            </div>
         </section>
         <section className="flex gap-24 mt-8">
            <div className="flex flex-1 flex-col gap-8">
               <h1 className="text-2xl font-bold">Who Are We?</h1>
               <p className="text-base text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio
                  voluptatibus magnam iure esse tempora beatae. A suscipit eos. Animi quibusdam cum
                  omnis officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
                  beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                  <br />
                  <br />
                  voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                  suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet?
               </p>
            </div>
            <div className="flex flex-1 flex-col gap-8">
               <h1 className="text-2xl font-bold">What We Do?</h1>
               <p className="text-base text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio
                  voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum
                  omnis officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. - Creative Illustrations
                  <br />
                  <br /> - Dynamic Websites
                  <br />
                  <br /> - Fast and Handy
                  <br />
                  <br /> - Mobile Apps
               </p>
               <Button url="/contact" text="Contact" />
            </div>
         </section>
      </div>
   );
};

export default About;
