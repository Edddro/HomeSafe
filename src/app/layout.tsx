import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles.css";

import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HomeSafe",
  description: "Get home safely with HomeSafe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`-apple-system antialiased m-auto sm:max-w-screen-md md:max-w-screen-md lg:max-w-screen-xl`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
