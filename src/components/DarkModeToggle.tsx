"use client";
import React, { useState } from "react";

const DarkModeToggle: React.FC = () => {
   const [toggle, setToggle] = useState(true);

   return (
      <div
         className="border border-opacity-50 border-green-500 rounded-full flex items-center justify-between p-1 relative cursor-pointer"
         onClick={() => setToggle(!toggle)}
      >
         <div className="text-xs">🌙</div>
         <div className="text-xs">🔆</div>
         <div
            className={`w-4 h-4 bg-green-500 rounded-full absolute ${
               toggle === false ? "left-1" : "right-1"
            }`}
         />
      </div>
   );
};

export default DarkModeToggle;
