import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Next Gen Blogs",
   description: "Next Gen Blogs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={`${inter.className}`} suppressHydrationWarning={true}>
            <ThemeProvider>
               <main className="flex flex-col justify-between min-h-[100vh] px-12">
                  <Navbar />
                  {children}
                  <Footer />
               </main>
            </ThemeProvider>
         </body>
      </html>
   );
}
