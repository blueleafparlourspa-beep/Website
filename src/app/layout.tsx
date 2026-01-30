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
  title: "Blue Leaf Parlour And Spa | Premium Thai Spa in Bengaluru",
  description: "Experience authentic wellness at Blue Leaf Parlour And Spa. Premium Thai massage, Swedish massage, Deep Tissue therapy & more by certified female therapists in Mahadevapura, Bengaluru. Book now for 20% off!",
  keywords: ["spa in bengaluru", "thai massage", "swedish massage", "deep tissue massage", "parlour and spa", "mahadevapura spa", "female therapists", "wellness spa"],
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "Blue Leaf Parlour And Spa | Premium Thai Spa in Bengaluru",
    description: "Experience authentic wellness at Blue Leaf Parlour And Spa. Premium massages by certified female therapists in Mahadevapura, Bengaluru.",
    type: "website",
    locale: "en_IN",
    siteName: "Blue Leaf Parlour And Spa",
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
