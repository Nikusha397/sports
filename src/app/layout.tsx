import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RITM Fitness Club — Rustavi",
  description:
    "RITM Fitness Club in Rustavi. Premium training, expert coaches, and flexible memberships. Find your rhythm and train with purpose.",
  keywords: [
    "RITM Fitness Club",
    "Rustavi gym",
    "fitness club",
    "personal training",
    "gym memberships",
  ],
  openGraph: {
    title: "RITM Fitness Club — Rustavi",
    description:
      "Premium training, expert coaches, and flexible memberships in Rustavi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
