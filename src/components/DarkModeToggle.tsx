"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const DarkModeToggle: React.FC = () => {
   const themeContext = useContext(ThemeContext) || { toggle: () => {}, mode: "dark" };

   const { toggle, mode } = themeContext;

   return (
      <div
         className="border border-opacity-50 border-green-500 rounded-full flex items-center justify-between p-1 relative cursor-pointer"
         onClick={toggle}
      >
         <div className="text-xs">🌙</div>
         <div className="text-xs">🔆</div>
         <div
            className={`w-4 h-4 bg-green-500 rounded-full absolute ${
               mode === "light" ? "left-1" : "right-1"
            }`}
         />
      </div>
   );
};

export default DarkModeToggle;
