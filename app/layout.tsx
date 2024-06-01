import type { Metadata, Viewport } from "next";
import "./globals.scss";
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: "Tomás Di Bacco",
  description: "Portfolio",
  manifest: "/public/manifest.json"
};

export const viewport: Viewport = {
  themeColor: '#111010',
  width: 'device-width',
  initialScale: 1,
  // maximumScale: 1,
  userScalable: true,
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
