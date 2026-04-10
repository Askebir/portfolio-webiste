import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Askebir Tadesse  Portfolio",
  description:
    "Portfolio of Askebir Tadesse, a developer showcasing projects, skills, and experience in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.className} h-full  antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0d0d1f] ">
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
