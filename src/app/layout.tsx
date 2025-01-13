import "./globals.scss";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['300', '400']
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hudney Brito",
  description: "Criando um portifólio com React, Next Js 15, Typescript e Framer Motion. Para demonstrar habilidades e competências no desenvolvimento web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable}`}>
        <h1 className={`${spaceGrotesk.className}`}>Texto exepmlo g</h1>
        {children}
      </body>
    </html>
  );
}
