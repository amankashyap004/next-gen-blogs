import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { items } from "./data";
import { notFound } from "next/navigation";

interface CategoryProps {
  params: {
    category: any;
  };
}

type Category = "applications" | "illustrations" | "websites";

const getData = (cat: Category) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category: React.FC<CategoryProps> = ({ params }) => {
  const data = getData(params.category);

  return (
    <div>
      <h1 className="text-green-500">{params.category}</h1>
      {data.map((item) => (
        <section className="flex gap-10 mt-4 mb-8 flex-1 w-3/4" key={item.id}>
          <div className="flex justify-center flex-col flex-1 gap-4">
            <h1 className="text-lg">{item.title}</h1>
            <p className="text-base"> {item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className="flex flex-1 w-full h-80 relative">
            <Image
              src={item.image}
              fill={true}
              alt="image"
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Category;
