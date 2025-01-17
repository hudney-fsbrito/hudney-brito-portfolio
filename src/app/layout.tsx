import "./globals.scss";
import type { Metadata } from "next";

import { spaceGrotesk } from "@/fonts";
import Link from "next/link";

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
          <h1 className="logo">hudney.brito</h1>
          <Link href={"#"} className="link-menu">work</Link>
          <Link href={"#"} className="link-menu">about</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
