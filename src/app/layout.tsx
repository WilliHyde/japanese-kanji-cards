import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import { BASE_TITLE } from "@/config/constants";
import localFont from 'next/font/local'
import "./globals.css";
import clsx from "clsx";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

// Font files can be colocated inside of `pages`
const kanjiStrokeOrders: NextFontWithVariable = localFont({ 
  src: './fonts/KanjiStrokeOrders.woff2',
  variable: "--font-kanji-stroke-orders"
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: BASE_TITLE,
  description: "Japanese 2 Kanji Flashcard Learning App",
};
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(`
        ${notoSans.variable}
        ${notoSansJp.variable} 
        ${shipporiMincho.variable}
        ${kanjiStrokeOrders.variable}
      `)}>
        <div className={clsx('g-layout g-wrap')}>{children}</div>
      </body>
    </html>
  );
}
