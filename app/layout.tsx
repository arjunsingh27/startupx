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
  title: "StartUpx",
  description: `StartUpX – Where Startups Take Flight 🚀
StartUpX is the ultimate platform for entrepreneurs, innovators, and dreamers to showcase their startups, share their journey, and connect with like-minded individuals. Whether you're launching a groundbreaking idea, looking for investors, or seeking community support, StartUpX is your go-to destination.
✅ Post Your Startup – Share your vision, mission, and progress.
✅ Connect with Founders – Engage with a dynamic community of entrepreneurs.
✅ Attract Investors – Gain visibility and potential funding opportunities.
✅ Inspire & Get Inspired – Discover new ideas and emerging trends in the startup ecosystem.

Join StartUpX today and turn your ideas into reality! 🚀`,
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
