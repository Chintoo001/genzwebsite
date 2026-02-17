import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "GenZwebsite.online | Website Developer",
    template: "%s | GenZwebsite.online",
  },
  description: "SEO Optimized Website Developer Portfolio",

  openGraph: {
    title: "GenZwebsite.online",
    description: "SEO optimized website developer portfolio",
    url: "https://genzwebsite.online",
    siteName: "GenZwebsite",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white relative overflow-x-hidden`}
      >
        <Navbar />

        <div className="fixed inset-0 -z-20 bg-linear-to-br from-blue-900/40 via-purple-900/30 to-black animate-gradient"></div>

        {/* Floating Light Blobs */}
        <div className="fixed top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse -z-10"></div>
        <div className="fixed bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse -z-10"></div>
        {children}
      </body>
    </html>
  );
}
