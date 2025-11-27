import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "UNITECHCYBER - Modern IT Hardware & Cybersecurity Solutions",
  description: "Future-Ready IT Solutions for Businesses. Professional IT Hardware Services, Cybersecurity, Network Setup, and Web Development",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', type: 'image/png' },
      { url: '/favicon-32x32.png', type: 'image/png' },
    ],
    apple: '/cyberlogo.png',
    shortcut: '/cyberlogo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#0A0A12] text-white overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}


