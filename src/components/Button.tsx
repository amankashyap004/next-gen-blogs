import React from "react";
import Link from "next/link";

interface ButtonProps {
   text: string;
   url: string;
}

const Button: React.FC<ButtonProps> = ({ text, url }) => {
   return (
      <Link href={url}>
         <button className="px-6 py-3 cursor-pointer bg-green-500 text-white rounded w-max">
            {text}
         </button>
      </Link>
   );
};

export default Button;
