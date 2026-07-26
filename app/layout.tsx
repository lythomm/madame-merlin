import type { Metadata } from "next";
import { Geist, Geist_Mono, Italianno } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const italianno = Italianno({
  weight: "400",
  variable: "--font-italianno",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madame Merlin | Makeup Artist",
  description: "Portfolio et services de Madame Merlin, Makeup Artist professionnelle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${italianno.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
