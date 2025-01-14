import "./globals.scss";
import type { Metadata } from "next";

import { spaceGrotesk } from '@/fonts'

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
      <body className={`${spaceGrotesk.className}`}>
        <h1>Texto grande</h1>
        {children}
      </body>
    </html>
  );
}
