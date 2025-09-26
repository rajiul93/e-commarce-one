import type { Metadata } from "next";
import { Mona_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",  // Use a unique name to avoid conflict
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const monaSans = Mona_Sans({
  variable: "--font-mona",  // Use a unique name to avoid conflict
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "E-commerce Store",
  description: "Your premium e-commerce destination for quality products and amazing deals",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  other: {
    'preconnect': 'https://via.placeholder.com',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${monaSans.variable}`}
    >
      <body className="antialiased font-primary bg-primary/5">{children}</body>
    </html>
  );
}