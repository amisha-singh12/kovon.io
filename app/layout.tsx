import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import AppThemeProvider from "@/theme/ThemeProvider";



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kovon - Your Passport to Global Work',
  description:
    'Kovon opens doors for millions of skilled workers to pursue meaningful careers across the world. Find global job opportunities and start your international career journey.',
  keywords:
    'global jobs, international careers, work abroad, visa assistance, global talent mobility',
  openGraph: {
    title: 'Kovon - Your Passport to Global Work',
    description:
      'Access thousands of global job opportunities and pursue meaningful careers worldwide.',
    type: 'website',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kovon - Your Passport to Global Work',
    description:
      'Access thousands of global job opportunities and pursue meaningful careers worldwide.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <AppThemeProvider>
          <Header />
          {children}
          <Footer />
        </AppThemeProvider>
      </body>
    </html>
  );
}
