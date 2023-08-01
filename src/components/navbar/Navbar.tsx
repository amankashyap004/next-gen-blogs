import Link from "next/link";
import React from "react";
import DarkModeToggle from "../DarkModeToggle";

const links = [
   {
      id: 1,
      title: "Home",
      url: "/",
   },
   {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
   },
   {
      id: 3,
      title: "Blog",
      url: "/blog",
   },
   {
      id: 4,
      title: "About",
      url: "/about",
   },
   {
      id: 5,
      title: "Contact",
      url: "/contact",
   },
   {
      id: 6,
      title: "Dashboard",
      url: "dashboard",
   },
];

const Navbar = () => {
   return (
      <div className="h-20 flex justify-between items-center">
         <Link href="/" className="font-bold text-xl">
            Next Gen Blogs
         </Link>
         <div className="flex items-center gap-4">
            <DarkModeToggle />
            {links.map((links) => (
               <Link
                  key={links.id}
                  href={links.url}
                  className="flex items-center gap-4 hover:text-green-500 text-base"
               >
                  {links.title}
               </Link>
            ))}
            <button className="px-3 py-2 cursor-pointer bg-green-500 text-white rounded w-max">
               Logout
            </button>
         </div>
      </div>
   );
};

export default Navbar;
