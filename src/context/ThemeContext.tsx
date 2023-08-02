"use client";

import React, { createContext, useState, ReactNode } from "react";

interface ThemeContextType {
   toggle: () => void;
   mode: string;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
   children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
   const [mode, setMode] = useState<string>("dark");

   const toggle = () => {
      setMode((prev) => (prev === "dark" ? "light" : "dark"));
   };

   return (
      <ThemeContext.Provider value={{ toggle, mode }}>
         <div className={`transition-all duration-1000 ease ${mode}`}>{children}</div>
      </ThemeContext.Provider>
   );
};
