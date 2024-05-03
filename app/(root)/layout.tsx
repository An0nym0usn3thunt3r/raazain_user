import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";


import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import { TNav } from "@/components/TNav";
import { Bnav } from "@/components/BNav";
import Footer from "@/components/Footer";
import Provider from "@/lib/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raazain Store",
  description: "Raazain Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
        <Provider>
          <ToasterProvider />
          <div className="flex flex-col top-0 fixed z-50 items-center w-full">
            <TNav />
            <Navbar />
            <Bnav />
            </div>
            <main className="border-b pt-[146px]">{children}</main>
            <Footer />
            </Provider>
        </ClerkProvider>
      </body>
    </html>
  );
}
