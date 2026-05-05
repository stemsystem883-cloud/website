import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CursorFollower } from "@/components/CursorFollower";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thestemgrid.com"),
  title: {
    default: "Stem | Decision Intelligence & Business Intelligence Nigeria",
    template: "%s | Stem",
  },
  description:
    "Stem helps fintech and financial-services companies in Nigeria detect meaningful market changes early. The leading decision intelligence platform for Nigerian business growth and automated financial reporting.",
  keywords: [
    "Business intelligence platform Nigeria",
    "fintech data analytics",
    "decision intelligence software Africa",
    "Nigerian financial market trends",
    "real-time payment data Nigeria",
    "fintech infrastructure providers Lagos",
    "data-driven business growth",
    "automated financial reporting tools",
    "scaling fintech startups in Nigeria",
    "NDPR compliant data platforms",
    "secure fintech API Nigeria",
    "AI-powered business insights",
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
    url: "https://thestemgrid.com",
    siteName: "Stem",
    title: "Stem | Business Intelligence Nigeria & Decision Intelligence",
    description:
      "Detect meaningful market changes early and act with more confidence. The Stem-Cogent provides high-intent business intelligence for Nigerian fintechs.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Stem – Decision Intelligence Nigeria" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem | Decision Intelligence Nigeria",
    description:
      "Detect meaningful market changes early and act with more confidence with The Stem-Cogent.",
    images: ["/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://thestemgrid.com/#organization",
  "name": "Stem Cogent",
  "alternateName": "The Stem-Cogent",
  "url": "https://thestemgrid.com",
  "logo": "https://thestemgrid.com/favicon.svg",
  "description": "Stem Cogent is a dedicated Decision Intelligence and Business Intelligence platform for the Nigerian Fintech and financial-services sector. It is not affiliated with the healthcare consultancy known as The Stem.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lagos",
    "addressRegion": "Lagos State",
    "addressCountry": "NG"
  },
  "founder": [
    {
      "@type": "Person",
      "name": "Odion O. Alex"
    },
    {
      "@type": "Person",
      "name": "Gift Chinedu Nduka"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/in/alex-marco1820/",
    "https://www.linkedin.com/in/gift-nduka/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
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
