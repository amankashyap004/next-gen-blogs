import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Next Gen Blogs",
   description: "Next Gen Blogs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={inter.className} suppressHydrationWarning={true}>
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}