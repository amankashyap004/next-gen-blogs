import React, { ReactNode } from "react";

interface LayoutProps {
   children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
   return (
      <div>
         <h1 className="text-3xl font-bold py-4 text-white">Our Works</h1>
         {children}
      </div>
   );
};

export default Layout;
