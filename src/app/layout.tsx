import Link from "next/link";
import type { Metadata } from "next";

import "./globals.scss";
import { spaceGrotesk } from "@/fonts";


export const metadata: Metadata = {
  title: "Hudney Brito",
  description:
    "Criando um portifólio com React, Next Js 15, Typescript e Framer Motion. Para demonstrar habilidades e competências no desenvolvimento web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className}`}>
        <header>
          <h1 className="logo"><Link href={"/"}>hudney.brito</Link></h1>
          <Link href={"/workPage"} className="link-menu">work</Link>
          <Link href={"/aboutPage"} className="link-menu">about</Link>
        </header>
        <main className="page-container">
          {children}
        </main>
      </body>
    </html>
  );
}
