import type { Metadata } from "next";
import { Host_Grotesk, Unbounded } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GokulCodes Blogs",
  description:
    "A collection of blogs by Gokul mostly focused web development, Algorithms, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hostGrotesk.variable} ${unbounded.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
