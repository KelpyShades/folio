import type { Metadata } from "next";
import { Poppins , Geist_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["500","600","700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Everything Appiah Kelvin",
  description: "Official Portfolio Of Appiah Kelvin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${poppins.variable} ${poppins.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
