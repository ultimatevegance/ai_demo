import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Call Center Analytics Dashboard",
  description: "Monitor agent performance and call center metrics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
