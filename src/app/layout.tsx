import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import localFont from "@next/font/local";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G-Matrix Blockchain",
  description: "Build Library System with Blockchain Technology",
};

const neoteric = localFont({
  src: [
    {
      path: "../../public/fonts/Neoteric-32A8.ttf",
      weight: "normal",
    },
    {
      path: "../../public/fonts/NeotericBold-xq1q.ttf",
      weight: "bold",
    },
  ],
  variable: "--font-neoteric",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} ${neoteric.variable}`}>{children}</body>
    </html>
  );
}
