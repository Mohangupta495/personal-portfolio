import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mohan Gupta | React Native & Frontend Developer",
  description: "Portfolio of Mohan Gupta, SDE-2 Frontend Engineer. Specializing in high-performance React Native mobile apps, offline-first SQLite architectures, and real-time WebRTC/WebSocket communication systems.",
  keywords: [
    "Mohan Gupta", 
    "React Native Specialist", 
    "Frontend Engineer", 
    "Mobile App Developer", 
    "WebRTC Developer", 
    "SQLite Caching", 
    "Next.js Portfolio", 
    "SDE", 
    "Gurugram Developer"
  ],
  authors: [{ name: "Mohan Gupta" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} style={{ scrollBehavior: "smooth" }}>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
