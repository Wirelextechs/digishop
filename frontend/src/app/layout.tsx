import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'wireshop - Ghana\'s trusted online marketplace',
  description: 'Shop thousands of products with fast delivery to your doorstep.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          {/* Top Header */}
          <header className="border-b bg-white dark:bg-slate-900 sticky top-0 z-50">
            <div className="container flex items-center justify-between h-20">
              <Link href="/" className="text-2xl font-bold text-orange-500">
                wireshop
              </Link>

              <div className="search-bar hidden md:flex">
                <input type="text" placeholder="Search for products, brands and categories" className="search-input dark:bg-slate-800 dark:border-slate-700" />
                <button className="search-button">Search</button>
              </div>

              <div className="flex items-center gap-6">
                <Link href="/wishlist" className="nav-link flex flex-col items-center">
                  <span className="text-xl">❤️</span>
                  <span className="text-xs">Wishlist</span>
                </Link>
                <Link href="/cart" className="nav-link flex flex-col items-center">
                  <span className="text-xl">🛒</span>
                  <span className="text-xs">Cart</span>
                </Link>
                <Link href="/account/login" className="nav-link flex flex-col items-center">
                  <span className="text-xl">👤</span>
                  <span className="text-xs">Sign In</span>
                </Link>
              </div>
            </div>

            {/* Category Nav */}
            <div className="bg-orange-500 text-white hidden md:block">
              <div className="container flex items-center gap-8 h-10 text-sm font-medium">
                <button className="bg-orange-600 h-full px-4 flex items-center gap-2">
                  <span>☰</span> All Categories
                </button>
                <Link href="/products?sort=discount">Deals</Link>
                <Link href="/products?sort=newest">New Arrivals</Link>
                <Link href="/products?status=pre_order">Pre-orders</Link>
              </div>
            </div>
          </header>

          <main>
            {children}
          </main>

          <footer className="footer border-t">
            <div className="container">
              <div className="footer-grid">
                <div className="footer-section">
                  <h3 className="text-2xl font-bold text-orange-500 mb-4">wireshop</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Ghana's trusted online marketplace. Shop thousands of products with fast delivery to your doorstep.
                  </p>
                  <p className="text-sm text-gray-500">Accra, Ghana</p>
                  <p className="text-sm text-gray-500">+233 XX XXX XXXX</p>
                  <p className="text-sm text-gray-500">hello@wireshop.com</p>
                </div>

                <div className="footer-section">
                  <h4 className="font-bold mb-4">Shop</h4>
                  <ul>
                    <li><Link href="/products">All Products</Link></li>
                    <li><Link href="/products?category=electronics">Electronics</Link></li>
                    <li><Link href="/products?category=fashion">Fashion</Link></li>
                    <li><Link href="/products?category=phones-tablets">Phones & Tablets</Link></li>
                    <li><Link href="/products?category=home-living">Home & Living</Link></li>
                  </ul>
                </div>

                <div className="footer-section">
                  <h4 className="font-bold mb-4">Help</h4>
                  <ul>
                    <li><Link href="/track">Track Your Order</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/returns">Returns Policy</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                  </ul>
                </div>

                <div className="footer-section">
                  <h4 className="font-bold mb-4">Stay in the loop</h4>
                  <p className="text-sm text-gray-500 mb-4">Get exclusive deals first! 🎉</p>
                  <div className="flex gap-2">
                    <input type="email" placeholder="Your email" className="p-2 border rounded flex-1 dark:bg-slate-800 dark:border-slate-700" />
                    <button className="btn-primary py-2 px-4">Subscribe</button>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <p>© 2026 wireshop Technologies Ltd. Made with love in Ghana 🇬🇭</p>
                <div className="flex gap-4">
                  <Link href="/privacy">Privacy Policy</Link>
                  <Link href="/terms">Terms of Service</Link>
                  <Link href="/cookies">Cookies</Link>
                </div>
              </div>
            </div>
          </footer>

          {/* Mobile Bottom Nav */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 z-50">
             <Link href="/" className="flex flex-col items-center gap-1 text-orange-500">
               <span>🏠</span>
               <span className="text-[10px]">Home</span>
             </Link>
             <button className="flex flex-col items-center gap-1 text-gray-500">
               <span>☰</span>
               <span className="text-[10px]">Categories</span>
             </button>
             <Link href="/products?sort=discount" className="flex flex-col items-center gap-1 text-gray-500">
               <span>🏷️</span>
               <span className="text-[10px]">Deals</span>
             </Link>
             <Link href="/account/login" className="flex flex-col items-center gap-1 text-gray-500">
               <span>👤</span>
               <span className="text-[10px]">Account</span>
             </Link>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
