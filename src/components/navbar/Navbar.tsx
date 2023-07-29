import Link from "next/link";
import React from "react";

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
      <div className="h-16 flex justify-between items-center px-8">
         <Link href="/" className="font-bold text-xl">
            Next Gen Blogs
         </Link>
         <div className="flex items-center gap-4">
            {links.map((links) => (
               <Link key={links.id} href={links.url} className="flex items-center gap-4">
                  {links.title}
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Navbar;
