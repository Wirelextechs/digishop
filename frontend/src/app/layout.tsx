import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DigiShop - High-Conversion Marketplace',
  description: 'A world-class hybrid marketplace.',
  openGraph: {
    title: 'DigiShop',
    description: 'High-conversion hybrid marketplace.',
    images: [{ url: '/og-image.jpg' }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          <header className="glass-panel sticky top-0 z-50 p-4 m-4 flex justify-between items-center bg-[var(--glass-bg)] border-b border-[var(--glass-border)]">
             <h1 style={{fontSize: '1.25rem', fontWeight: 700}}>DigiShop</h1>
             <ThemeToggle />
          </header>
          <main style={{padding: '1rem'}}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
