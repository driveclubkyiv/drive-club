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
  metadataBase: new URL('https://drive-club-nine.vercel.app/'),
  title: 'Drive Club - Центр спеціальної підготовки водіїв',
  description:
    'Центр спеціальної підготовки водіїв з понад 18-річним досвідом роботи. Ми спеціалізуємося на професійному навчанні водіїв різного рівня підготовки.',
  icons: {
    // Favicons
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    title: 'Drive Club - Центр спеціальної підготовки водіїв',
    description:
      'Центр спеціальної підготовки водіїв з понад 18-річним досвідом роботи. Ми спеціалізуємося на професійному навчанні водіїв різного рівня підготовки.',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        alt: 'Drive-club',
        width: 1200,
        height: 630,
        type: 'image/jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drive Club - Центр спеціальної підготовки водіїв',
    description:
      'Центр спеціальної підготовки водіїв з понад 18-річним досвідом роботи. Ми спеціалізуємося на професійному навчанні водіїв різного рівня підготовки.',
    images: [
      {
        url: '/og-image.jpg',
        alt: 'Drive-club',
        width: 1200,
        height: 630,
        type: 'image/jpg',
      },
    ],
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk_UA">
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
