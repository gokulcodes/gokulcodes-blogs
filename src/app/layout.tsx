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
      <meta property="og:title" content="Gokulcodes Blogs" />
      <meta
        name="description"
        content="A collection of blogs by Gokul mostly focused web development, Algorithms, and AI."
      />
      <meta
        property="og:description"
        content="A collection of blogs by Gokul mostly focused web development, Algorithms, and AI."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://blogs.gokulcodes.dev/" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/gokulcodes/gokulcodes-blogs/refs/heads/main/public/poster.png"
      />
      <meta property="og:site_name" content="Gokulcodes Blogs" />
      <meta
        property="keywords"
        content="Gokul Varadan, gokulvaradan, blogs, web developments, AI, Algorithms, projects, gamuts, ideal editor, circles"
      />

      <meta property="og:locale" content="en_US" />
      <meta property="og:updated_time" content="2025-06-13T06:42:11.155Z" />
      <body
        className={`${hostGrotesk.variable} ${unbounded.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
