import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Outfit  } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DoStartup",
  description: "DoStartup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/x-icon" href="/Logo.png" />
      </head>
      <body
        className={`${montserrat.variable} ${outfit.variable}  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
