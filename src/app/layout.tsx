import type React from 'react';
import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Drive Club - Центр спеціальної підготовки водіїв',
  description:
    'Професійна підготовка водіїв у Києві. Базові навички, захисне водіння, спортивна підготовка. 18+ років досвіду.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
