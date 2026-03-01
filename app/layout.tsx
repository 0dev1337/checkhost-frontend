import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SearchSurface from "@/components/search-surface";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CheckHost - Network Diagnostics Tool",
  description:
    "Ping, HTTP, TCP, BGP, IPv6, Traceroute, and Whois lookups from multiple global locations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen text-foreground flex flex-col">
          {/* SINGLE CONTAINER */}
          <div className="flex-1 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="py-2">
              <Navbar />
            </div>

            <SearchSurface />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
