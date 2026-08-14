import type React from 'react';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { MusicPlayer } from '@/components/music-player';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'SIG Surabaya Employee Gathering 2026 | Banyuwangi',
  description: 'One Journey, One Nature, One Team. Employee Gathering SIG Surabaya di Banyuwangi, 18–20 September 2026.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <MusicPlayer />
        <Footer />
      </body>
    </html>
  );
}
