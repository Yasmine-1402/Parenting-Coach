import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Unlock Your Potential | 1-on-1 Coaching with Heba Hassan",
  description: "Book your exclusive 1-on-1 parenting coaching session with Heba Hassan. Expert guidance for a happier family life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-sans antialiased text-gray-900 bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
