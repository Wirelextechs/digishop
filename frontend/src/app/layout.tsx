import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'wireshop - Ghana\'s Trusted Online Marketplace',
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
          {/* Main Header */}
          <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container flex items-center justify-between h-20 gap-8">
              <Link href="/" className="text-2xl font-black tracking-tight text-orange-500 shrink-0">
                wireshop
              </Link>

              <div className="flex-1 max-w-2xl hidden md:flex items-center relative">
                <span className="absolute left-4 text-slate-400">🔍</span>
                <input
                  type="text"
                  placeholder="Search products, brands and categories..."
                  className="w-full py-2.5 pl-11 pr-4 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-orange-500/20"
                />
              </div>

              <div className="flex items-center gap-2 md:gap-4">
                <Link href="/wishlist" className="p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors group relative" title="Wishlist">
                  <span className="text-xl group-hover:scale-110 block transition-transform">❤️</span>
                </Link>
                <Link href="/cart" className="p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors group relative" title="Cart">
                  <span className="text-xl group-hover:scale-110 block transition-transform">🛒</span>
                  <span className="absolute top-1 right-1 w-4 h-4 bg-orange-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold">0</span>
                </Link>
                <Link href="/account/login" className="ml-2 px-5 py-2.5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
                  Sign In
                </Link>
              </div>
            </div>

            {/* Category Subnav */}
            <nav className="border-t border-slate-100 dark:border-slate-800 hidden md:block">
              <div className="container flex items-center gap-8 h-12 text-sm font-medium">
                <button className="flex items-center gap-2 text-slate-900 dark:text-white hover:text-orange-500 transition-colors">
                  <span className="text-lg">☰</span> All Categories
                </button>
                <div className="h-4 w-px bg-slate-200 dark:bg-slate-700" />
                <div className="flex items-center gap-6">
                  <Link href="/products?sort=discount" className="text-slate-500 hover:text-orange-500 transition-colors">Deals</Link>
                  <Link href="/products?sort=newest" className="text-slate-500 hover:text-orange-500 transition-colors">New Arrivals</Link>
                  <Link href="/products?status=pre_order" className="text-slate-500 hover:text-orange-500 transition-colors">Pre-orders</Link>
                  <Link href="/sell" className="text-slate-500 hover:text-orange-500 transition-colors">Sell on wireshop</Link>
                </div>
              </div>
            </nav>
          </header>

          <main className="min-height-[calc(100vh-128px)]">
            {children}
          </main>

          <footer className="bg-slate-50 dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-1">
                  <h3 className="text-2xl font-black text-orange-500 mb-6">wireshop</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    Ghana's most trusted online marketplace. Delivering quality products to all 16 regions with speed and care.
                  </p>
                  <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <p className="flex items-center gap-3">📍 Accra, Ghana</p>
                    <p className="flex items-center gap-3">📞 +233 XX XXX XXXX</p>
                    <p className="flex items-center gap-3">📧 hello@wireshop.com</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-6">Shop</h4>
                  <ul className="space-y-4 text-sm">
                    <li><Link href="/products" className="text-slate-500 hover:text-orange-500 transition-colors">All Products</Link></li>
                    <li><Link href="/products?category=electronics" className="text-slate-500 hover:text-orange-500 transition-colors">Electronics</Link></li>
                    <li><Link href="/products?category=fashion" className="text-slate-500 hover:text-orange-500 transition-colors">Fashion</Link></li>
                    <li><Link href="/products?category=phones-tablets" className="text-slate-500 hover:text-orange-500 transition-colors">Phones & Tablets</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-6">Support</h4>
                  <ul className="space-y-4 text-sm">
                    <li><Link href="/track" className="text-slate-500 hover:text-orange-500 transition-colors">Track Order</Link></li>
                    <li><Link href="/contact" className="text-slate-500 hover:text-orange-500 transition-colors">Contact Us</Link></li>
                    <li><Link href="/returns" className="text-slate-500 hover:text-orange-500 transition-colors">Returns Policy</Link></li>
                    <li><Link href="/faq" className="text-slate-500 hover:text-orange-500 transition-colors">FAQs</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-6">Newsletter</h4>
                  <p className="text-sm text-slate-500 mb-6">Get weekly updates on new arrivals and exclusive flash sales.</p>
                  <form className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="flex-1 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 outline-none"
                    />
                    <button className="bg-orange-500 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-600 transition-colors">
                      Join
                    </button>
                  </form>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:row justify-between items-center gap-6 text-[13px] text-slate-500">
                <p>© 2026 wireshop Technologies Ltd. Made with ❤️ in Ghana</p>
                <div className="flex gap-8">
                  <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy</Link>
                  <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms</Link>
                  <Link href="/cookies" className="hover:text-slate-900 dark:hover:text-white transition-colors">Cookies</Link>
                </div>
              </div>
            </div>
          </footer>

          {/* Mobile Nav */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-around py-3 px-2 z-50">
             <Link href="/" className="flex flex-col items-center gap-1 text-orange-500">
               <span className="text-xl">🏠</span>
               <span className="text-[10px] font-bold">Home</span>
             </Link>
             <button className="flex flex-col items-center gap-1 text-slate-400">
               <span className="text-xl">☰</span>
               <span className="text-[10px]">Categories</span>
             </button>
             <Link href="/products?sort=discount" className="flex flex-col items-center gap-1 text-slate-400">
               <span className="text-xl">🏷️</span>
               <span className="text-[10px]">Deals</span>
             </Link>
             <Link href="/account/login" className="flex flex-col items-center gap-1 text-slate-400">
               <span className="text-xl">👤</span>
               <span className="text-[10px]">Account</span>
             </Link>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
