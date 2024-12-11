import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

import NavBar from "../components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of Vially Dag",
  icons: [
    {
      rel: "icon",
      url: "/logo/viallyLogo1.jpeg",
    },
    {
      rel: "icon",
      type: "image/jpeg",
      sizes: "16x16",
      url: "/logo/viallyLogo1.jpeg",
    },
    {
      rel: "icon",
      type: "image/jpeg",
      sizes: "32x32",
      url: "/logo/viallyLogo1.jpeg",
    },
    {
      rel: "icon",
      type: "image/jpeg",
      sizes: "180x180",
      url: "/logo/viallyLogo1.jpeg",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
