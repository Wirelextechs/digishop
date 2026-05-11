import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Electronics', icon: '💻', slug: 'electronics' },
  { name: 'Fashion', icon: '👗', slug: 'fashion' },
  { name: 'Home & Living', icon: '🏠', slug: 'home-living' },
  { name: 'Health & Beauty', icon: '💄', slug: 'health-beauty' },
  { name: 'Food & Groceries', icon: '🛒', slug: 'food-groceries' },
  { name: 'Sports', icon: '⚽', slug: 'sports-outdoors' },
  { name: 'Baby & Kids', icon: '🧸', slug: 'baby-kids' },
  { name: 'Phones', icon: '📱', slug: 'phones-tablets' },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-24">
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              New Arrivals Just Landed
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8">
              Premium Shopping <br />
              <span className="text-orange-500 italic">Redefined.</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
              Experience Ghana's most curated marketplace. Quality products, secure payments, and lightning-fast delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary px-10 py-4 text-center">
                Explore Marketplace
              </Link>
              <Link href="/sell" className="px-10 py-4 text-center font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Become a Seller
              </Link>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Categories Grid */}
      <section className="container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-black tracking-tight mb-2">Shop by Category</h2>
            <p className="text-slate-500 text-sm">Find exactly what you're looking for</p>
          </div>
          <Link href="/products" className="text-sm font-bold text-orange-500 hover:gap-2 flex items-center gap-1 transition-all">
            Browse All <span>→</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/products?category=${cat.slug}`} className="group">
              <div className="h-full p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-transparent hover:border-orange-200 dark:hover:border-orange-500/20 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 text-center">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
                <div className="text-xs font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">{cat.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Promo */}
      <section className="container">
        <div className="bg-slate-900 dark:bg-orange-600 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:row items-center justify-between gap-12 text-white relative overflow-hidden">
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              Get Free Delivery <br />
              on your first order.
            </h2>
            <p className="text-slate-400 dark:text-orange-100 mb-10 max-w-sm">
              Use code <span className="text-white font-mono font-bold bg-white/10 px-2 py-1 rounded">WELCOME2026</span> at checkout.
            </p>
            <Link href="/products" className="inline-block bg-white text-slate-900 dark:text-orange-600 px-8 py-4 rounded-2xl font-black hover:scale-105 transition-transform">
              Claim Now
            </Link>
          </div>
          <div className="hidden md:block w-1/3 aspect-square bg-white/5 rounded-full border border-white/10 absolute -right-20 -bottom-20" />
          <div className="hidden md:block w-1/4 aspect-square bg-white/5 rounded-full border border-white/10 absolute -right-10 -top-10" />
        </div>
      </section>

      {/* Why wireshop */}
      <section className="container bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] py-20 px-8 md:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">The wireshop Experience</h2>
          <p className="text-slate-500 leading-relaxed">
            We've simplified online shopping for thousands of Ghanaians. Discover why we're the fastest-growing marketplace in the region.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: 'Secure Checkout', desc: 'MTN MoMo, Vodafone Cash, and Cards all protected with bank-grade security.', icon: '🛡️' },
            { title: 'Fast Regional Delivery', desc: 'From Accra to Tamale, we ensure your products reach you within 24-48 hours.', icon: '⚡' },
            { title: 'Buyer Protection', desc: "Not what you ordered? Our 7-day hassle-free return policy has you covered.", icon: '🤝' },
          ].map((item, idx) => (
            <div key={idx} className="text-center md:text-left space-y-4">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-2xl shadow-sm mx-auto md:mx-0">
                {item.icon}
              </div>
              <h4 className="text-lg font-black">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals Placeholder */}
      <section className="container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-black tracking-tight mb-2">New Arrivals</h2>
            <p className="text-slate-500 text-sm">Freshly added to the store</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-800 rounded-[2rem] mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse" />
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                  Coming Soon
                </div>
              </div>
              <div className="h-4 w-2/3 bg-slate-100 dark:bg-slate-800 rounded-full mb-2" />
              <div className="h-4 w-1/3 bg-slate-100 dark:bg-slate-800 rounded-full" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
