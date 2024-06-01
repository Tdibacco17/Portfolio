import type { Metadata } from "next";
import "./globals.scss";
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: "Tomás Di Bacco",
  description: "Portfolio",
};

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
