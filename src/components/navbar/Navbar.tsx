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
      <div className="flex justify-between items-center py-6 px-8 bg-slate-800">
         <Link href="/">Next Gen Blogs</Link>
         <div>
            {links.map((links) => (
               <Link key={links.id} href={links.url} className="px-3">
                  {links.title}
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Navbar;
