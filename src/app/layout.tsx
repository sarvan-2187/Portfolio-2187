import type { Metadata } from "next";
import { Lexend ,Jura}  from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";

const lexend = Lexend({ subsets: ['latin'], variable: '--font-sans'})
const jura = Jura({ subsets: ['latin'],variable: '--font-serif'})

export const metadata: Metadata = {
  title: "Sarvan Kumar",
  description: "Created with the help of NextJS & Typescript",
  icons: {
    icon: '/memoji-smile.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(lexend.variable,jura.variable,"bg-gray-950 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
