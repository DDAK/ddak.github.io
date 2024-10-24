import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: { 
    default: "Create Next App",
    template: "%s - Idea Factory",
  },
  description: "My journey through the technology landscape and entrepreneurship.",
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
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-347Y6PYYHE" />
    </html>
  );
}
