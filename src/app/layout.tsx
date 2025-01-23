import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_JP } from "next/font/google";
import { BASE_TITLE } from "@/config/constants";
import "./globals.css";
import clsx from "clsx";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
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
      <body className={clsx(`${notoSans.variable} ${notoSansJp.variable}`)}>
        <div className={clsx('g-layout g-wrap')}>{children}</div>
      </body>
    </html>
  );
}
