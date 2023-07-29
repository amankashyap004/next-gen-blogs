import Image from "next/image";

export default function Home() {
   return (
      <div className="flex items-center gap-24">
         <section className="flex flex-col flex-1 gap-12">
            <h1 className="text-4xl font-bold bg-gradient-to-b from-green-700 to-gray-300 bg-clip-text text-transparent">
               Your journey to inspiration begins here! Next Gen Blogs
            </h1>
            <p className="text-xl font-light">
               Next Gen Blogs is a digital oasis for all things intriguing, from thought-provoking
               articles to heartwarming tales. Explore our virtual realm and immerse yourself in a
               world of captivating content, tailored just for you.
            </p>
            <button className="px-6 py-3 bg-green-500 text-white rounded w-max">Explore Now</button>
         </section>
         <section className="w-full h-80 relative object-contain flex flex-col flex-1 gap-12">
            <Image src="/image1.jpg" alt="hero-image" layout="fill" objectFit="contain" />
         </section>
      </div>
   );
}
