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
  title: "Best Spa in HSR Layout | Luxury Massage & Wellness – Sunday The Spa",
  description: "Looking for the best spa in HSR Layout? Experience luxury massages, certified therapists, and complete relaxation at Sunday The Spa. Book now!",
  keywords: ["spa in HSR Layout", "best spa HSR Layout", "luxury massage", "wellness spa", "Sunday The Spa", "certified therapists", "relaxation spa"],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Best Spa in HSR Layout | Luxury Massage & Wellness – Sunday The Spa",
    description: "Looking for the best spa in HSR Layout? Experience luxury massages, certified therapists, and complete relaxation at Sunday The Spa. Book now!",
    type: "website",
    locale: "en_IN",
    siteName: "Sunday The Spa",
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
