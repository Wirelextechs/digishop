import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Electronics', icon: '💻', slug: 'electronics' },
  { name: 'Fashion', icon: '👗', slug: 'fashion' },
  { name: 'Home & Living', icon: '🏠', slug: 'home-living' },
  { name: 'Health & Beauty', icon: '💄', slug: 'health-beauty' },
  { name: 'Food & Groceries', icon: '🛒', slug: 'food-groceries' },
  { name: 'Sports & Outdoors', icon: '⚽', slug: 'sports-outdoors' },
  { name: 'Baby & Kids', icon: '🧸', slug: 'baby-kids' },
  { name: 'Phones & Tablets', icon: '📱', slug: 'phones-tablets' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-orange-50 dark:bg-slate-800 py-12 md:py-20">
        <div className="container grid md:grid-columns-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Shop the Latest <br />
              <span className="text-orange-500">in Ghana</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg">
              Electronics, Fashion, Home & more. Fast delivery across all 16 regions.
            </p>
            <Link href="/products" className="btn-primary inline-block text-lg px-8 py-4">
              Shop Now
            </Link>
          </div>
          {/* Placeholder for Hero Image */}
          <div className="hidden md:block bg-orange-200 h-80 rounded-2xl relative overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center text-orange-400 text-8xl font-bold opacity-20">
               wireshop
             </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <Link href="/products" className="text-orange-500 font-medium hover:underline">View all</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/products?category=${cat.slug}`} className="group">
                <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-xl p-6 text-center transition hover:shadow-lg hover:border-orange-200">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition">{cat.icon}</div>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{cat.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="container">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold">New Arrivals</h2>
            <Link href="/products" className="text-orange-500 font-medium hover:underline">View all</Link>
          </div>

          <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <div className="text-5xl mb-4">🛍️</div>
            <h3 className="text-xl font-bold mb-2">No products yet</h3>
            <p className="text-slate-500">Check back soon!</p>
          </div>
        </div>
      </section>

      {/* Why wireshop */}
      <section className="py-16">
        <div className="container text-center mb-12">
           <p className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2">Why wireshop</p>
           <h2 className="text-3xl font-bold">Shopping made simple</h2>
           <p className="text-slate-500 mt-2">Trusted by thousands of Ghanaians for fast, safe, and affordable online shopping.</p>
        </div>
        <div className="container grid md:grid-cols-4 gap-8">
          {[
            { title: 'Fast Delivery', desc: 'Same-day delivery in Accra. Next-day across Ghana.', icon: '🚚' },
            { title: 'Secure Payments', desc: 'MTN MoMo, Vodafone Cash, Visa, and more.', icon: '🔒' },
            { title: 'Easy Returns', desc: '7-day hassle-free returns on all eligible items.', icon: '↩️' },
            { title: '24/7 Support', desc: 'Our team is always ready to help via WhatsApp.', icon: '💬' },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl hover:bg-orange-50 dark:hover:bg-slate-800 transition text-center md:text-left">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-16">
        <div className="container">
          <div className="bg-orange-500 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between text-white overflow-hidden relative">
            <div className="z-10 text-center md:text-left">
              <p className="font-bold uppercase tracking-widest text-sm mb-4">Limited Time Offer</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Free Delivery in Accra</h2>
              <p className="text-orange-100 mb-8 max-w-md">On all orders over GHS 200. Use the code below at checkout.</p>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="bg-orange-600 px-6 py-3 rounded-xl font-mono text-xl font-bold border-2 border-dashed border-white/50">
                  Use code 344EG
                </div>
                <Link href="/products" className="bg-white text-orange-500 px-8 py-3 rounded-xl font-bold hover:bg-orange-50 transition">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-orange-400/20 skew-x-12 transform translate-x-20 hidden md:block" />
          </div>
        </div>
      </section>
    </div>
  );
}
