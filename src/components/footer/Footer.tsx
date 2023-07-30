import React from "react";
import Link from "next/link";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const socialMediaData = [
   {
      icon: <BsFacebook />,
      link: "https://www.facebook.com",
      size: "16px",
   },
   {
      icon: <AiFillInstagram />,
      link: "https://www.instagram.com",
      size: "18px",
   },
   {
      icon: <BiLogoLinkedin />,
      link: "https://www.linkedin.com",
      size: "18px",
   },
   {
      icon: <BsGithub />,
      link: "https://www.github.com",
      size: "16px",
   },
];

const Footer = () => {
   return (
      <div className="flex justify-between items-center py-6">
         <p>@ {new Date().getFullYear()} Next Gen Blogs. All rights reserved.</p>
         <div className="flex justify-center items-center gap-2">
            {socialMediaData.map((item, index) => (
               <Link
                  href={item.link}
                  key={index}
                  className={`cursor-pointer text-[${item.size}] hover:text-green-500`}
               >
                  {item.icon}
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Footer;
