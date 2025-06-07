import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "./components/NavbarWrapper";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BLOCKCHAINED SNIPERS - Trading Education Platform",
  description: "Comprehensive trading education platform with resources for beginners, intermediate, and expert traders",
  keywords: "trading education, trading strategies, technical analysis, risk management, beginner trading, advanced trading",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-black text-white">
            <NavbarWrapper />
            <main>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
