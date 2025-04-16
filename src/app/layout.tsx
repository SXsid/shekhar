import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';



// Google fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-jetbrains',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})


export const metadata: Metadata = {
  title: "Shekhar - Full Stack Developer",
  description: "Full Stack Developer specializing in React, TypeScript, and modern web technologies. Explore my portfolio showcasing web applications, software projects, and professional experience in building scalable solutions.",
  keywords: ["Full Stack Developer", "React", "TypeScript", "Web Development", "Software Engineer", "Portfolio"],
  robots: "index, follow",
  openGraph: {
    title: "Shekhar - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in React, TypeScript, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${GeistSans.variable} 
          ${GeistMono.variable} 
          ${inter.variable} 
          ${jetbrainsMono.variable} 
          ${poppins.variable}
          antialiased 
          text-neutral-200
        `}
      >
        {children}
      </body>
    </html>
  );
}