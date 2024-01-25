import type { Metadata } from "next";
import { Inter } from "next/font/google";
//fuentes de google
// import { Montserrat } from "next/font/google";
import "./globals.css";
//creamos una instancia de nuestra fuente
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin homepage",
  description: "Generated with love vercel",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <body className={inter.className} >


      {children}
      </body>
    </html>
  );
}
