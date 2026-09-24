import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dhanushka Sachintha — Software & Mobile Developer',
  description:
    'Developer portfolio of Dhanushka Sachintha, Computer Science undergraduate at University of Staffordshire (APIIT Sri Lanka) specializing in Flutter, Android, and full-stack software development.',
  keywords: [
    'Dhanushka Sachintha',
    'Mobile Developer',
    'Software Developer',
    'Flutter Developer',
    'Android Developer',
    'Kotlin',
    'Firebase',
    'Sri Lanka',
    'APIIT',
    'University of Staffordshire',
    'Fixigo App'
  ],
  authors: [{ name: 'Dhanushka Sachintha' }],
  openGraph: {
    title: 'Dhanushka Sachintha — Software & Mobile Developer',
    description:
      'Computer Science undergraduate focused on building practical software applications with Flutter, Android, and modern technologies.',
    url: 'https://dhanushka-sachintha.dev',
    siteName: 'Dhanushka Sachintha Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhanushka Sachintha — Software & Mobile Developer',
    description:
      'Computer Science undergraduate focused on building practical software applications with Flutter, Android, and modern technologies.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
