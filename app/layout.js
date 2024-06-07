import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Planter",
  description: "commision work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col lg:h-screen md:h-auto sm:h-auto h-screen  bg-gray-300 bg-gradient-to-tl from-[#71a32f] via-green-200 to-transparent relative">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
