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
  title: "Shekhar - Backend & Infrastructure Engineer",
  description: "Full Stack Developer with a strong focus on backend engineering, infrastructure, and DevOps. Explore my portfolio showcasing scalable APIs, cloud-native systems, distributed architectures, and automation pipelines.",
  keywords: [
    "Backend Developer",
    "DevOps Engineer",
    "Infrastructure",
    "Node.js",
    "Go",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Cloud Engineering",
    "API Development",
    "System Design",
    "Portfolio"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Shekhar - Backend & Infrastructure Portfolio",
    description: "Backend-focused Full Stack Developer experienced in building scalable systems, APIs, and DevOps workflows.",
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