import type { Metadata } from "next";
import { Zilla_Slab, Open_Sans } from "next/font/google";
import "./globals.css";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-zilla-slab",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lobuche Cafe — Modern Artisanal",
  description:
    "Lobuche Cafe is dedicated to providing a welcoming and hygienic environment where guests enjoy carefully crafted dishes and beverages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${zillaSlab.variable} ${openSans.variable} h-full antialiased`}>
      <body className="bg-background text-on-background flex min-h-full flex-col">{children}</body>
    </html>
  );
}
