import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shekhar - Full Stack Developer",
  description: "Full Stack Developer specializing in React, TypeScript, and modern web technologies. Explore my portfolio showcasing web applications, software projects, and professional experience in building scalable solutions.",
  keywords: ["Full Stack Developer", "React", "TypeScript", "Web Development", "Software Engineer", "Portfolio"],
  robots: "index, follow",
  openGraph: {
    title: "Shekhar - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in React, TypeScript, and modern web technologies.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
