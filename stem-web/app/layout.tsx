import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CursorFollower } from "@/components/CursorFollower";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stem.africa"),
  title: {
    default: "Stem | Decision Intelligence",
    template: "%s | Stem",
  },
  description:
    "Stem helps fintech and financial-services companies and teams in Nigeria detect meaningful market changes early and act with more confidence, less guesswork, and less manual research.",
  keywords: [
    "decision intelligence",
    "market intelligence",
    "fintech Nigeria",
    "financial services",
    "competitive intelligence",
    "market monitoring",
    "business intelligence Africa",
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/v4.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://stem.africa",
    siteName: "Stem",
    title: "Stem | Decision Intelligence",
    description:
      "Stem helps fintech and financial-services companies and teams in Nigeria detect meaningful market changes early and act with more confidence.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Stem – Decision Intelligence" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem | Decision Intelligence",
    description:
      "Detect meaningful market changes early and act with more confidence.",
    images: ["/og-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-primary-blue/10 selection:text-primary-blue">
        <CursorFollower />
        <Header />
        <main className="flex-1 page-enter">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
