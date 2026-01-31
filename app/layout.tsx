import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Dream Team — AI Tools & Demos",
  description: "Showcase of AI tools and integrations built by the Dream Team",
  // Use NEXT_PUBLIC_SITE_URL at build/deploy time to resolve relative image paths (e.g. /og)
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ai-dream-team.vercel.app'),
  openGraph: {
    title: 'AI Dream Team — Tools & Demos',
    description: 'Showcase of production-ready AI demos and integrations built with Next.js 14',
    images: ["/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-black dark:text-white`}
      >
        <ThemeProvider>
          <a href="#main" className="sr-only focus:not-sr-only p-2 m-2 rounded bg-yellow-300 text-black">Skip to content</a>
          <Header />
          <main id="main" className="min-h-[70vh]">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
