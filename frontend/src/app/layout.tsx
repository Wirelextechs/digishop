import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "wireshop | Premium Digital Marketplace",
  description: "Experience Ghana's most curated digital marketplace with lightning-fast delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} no-scrollbar min-h-screen bg-background`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
