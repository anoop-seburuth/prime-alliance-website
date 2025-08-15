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

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Prime Alliance";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://primealliance.mu";
const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Premium Import & Distribution Excellence";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Premium Import & Distribution Excellence`,
    template: `%s | ${siteName}`
  },
  description: "Prime Alliance specializes in importing and distributing premium international products, featuring Milaf Cola - the world's first date-based cola from Saudi Arabia.",
  keywords: [
    "import distribution",
    "premium products",
    "Milaf Cola",
    "international trading",
    "Mauritius distribution",
    "Saudi Arabia products",
    "date-based cola",
    "Prime Alliance",
    "global sourcing",
    "distribution network"
  ],
  authors: [{ name: "Prime Alliance" }],
  creator: "Prime Alliance",
  publisher: "Prime Alliance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} | Premium Import & Distribution Excellence`,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteName} - Premium Import & Distribution Excellence`,
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Premium Import & Distribution Excellence`,
    description: siteDescription,
    images: ["/twitter-image.png"],
    creator: "@primealliance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: siteUrl,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
