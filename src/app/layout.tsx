import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","400","700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ujjwal Singh Basnet",
  description: "Designed by Ujjwal Singh Basnet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-theme="light" className={roboto.className} >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
