import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
  title: "Salama Farm | Your Digital Farming Partner",
  description:
    "Salama Farm is an innovative, AI-powered pest control system designed to protect your crops and boost yields with smart, sustainable technology.",
  authors: [{ name: "Astra Softwares" }],
  themeColor: "#ffffff",
  appleWebApp: {
    title: "salama farm",
  },
  icons: {
    icon: [{ url: "/assets/img/brand/logo.png", type: "image/png" }],
    apple: [{ url: "/assets/img/brand/logo.png", type: "image/png" }],
    shortcut: ["/assets/img/brand/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
