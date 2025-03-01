import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import localFont from "@next/font/local";
import { AdminDisablePathName } from "@/lib/DisablePathName";
import AuthContextLayout from "@/lib/AuthContextLayout";
import { FormButton } from "./components/Button";
import { signIn, signOut } from "@junobuild/core-peer";
import SignInButton from "./components/SignInButton";
import SignOutButton from "./components/SignOutButton";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "G-Matrix Blockchain",
  description: "Build Library System with Blockchain Technology",
};

const openSauce = localFont({
  src: [
    {
      path: "../../public/fonts/OpenSauceSans-ExtraBold.ttf",
      weight: "900",
    },
    {
      path: "../../public/fonts/OpenSauceSans-Bold.ttf",
      weight: "800",
    },
    {
      path: "../../public/fonts/OpenSauceSans-SemiBold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/OpenSauceSans-Medium.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/OpenSauceSans-Regular.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/OpenSauceSans-Light.ttf",
      weight: "400",
    },
  ],
  variable: "--font-open_sauce",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
  return (
    <html lang="en">
      <body className={`${open_sans.className} ${openSauce.variable} bg-sky-100 flex gap-x-6`}>
      <AuthContextLayout signin={<SignInButton />}signout={<SignOutButton />} >
        <div>
        <AdminDisablePathName />
        <span className="w-full">{children}</span>
        </div>
        </AuthContextLayout>
      </body>
    </html>
  );
}
