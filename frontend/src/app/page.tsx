"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Truck, Star } from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Electronics", icon: "💻", color: "bg-blue-50" },
  { name: "Fashion", icon: "👗", color: "bg-pink-50" },
  { name: "Home", icon: "🏠", color: "bg-orange-50" },
  { name: "Beauty", icon: "💄", color: "bg-purple-50" },
  { name: "Groceries", icon: "🍎", color: "bg-green-50" },
  { name: "Sports", icon: "⚽", color: "bg-red-50" },
  { name: "Kids", icon: "🧸", color: "bg-yellow-50" },
  { name: "Phones", icon: "📱", color: "bg-indigo-50" },
];

export default function Home() {
  return (
    <>
        {/* Hero Section - App Style */}
        <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="z-10"
            >
              <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Star size={14} fill="currentColor" /> Premium Shopping Experience
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-on-surface leading-[0.9] mb-6">
                SHOP THE <span className="text-brand">FUTURE</span> <br />
                OF MARKETPLACE.
              </h1>
              <p className="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
                Ghana's most curated digital marketplace. Experience lightning-fast delivery and secure payments on every order.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="btn-primary group">
                  Explore Marketplace
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="btn-secondary">
                  Become a Seller
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square lg:aspect-auto h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-premium bg-surface-variant"
            >
               {/* Animated geometric background elements */}
               <div className="absolute top-10 right-10 w-64 h-64 bg-brand/20 rounded-full blur-3xl animate-pulse" />
               <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-700" />

               <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-center">
                     <p className="text-brand font-black text-[12rem] opacity-10 italic">W</p>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/40 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-premium">
                           <p className="text-2xl font-bold text-on-surface">Flash Sale Live</p>
                           <p className="text-brand text-4xl font-black">UP TO 70% OFF</p>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Category Grid - Modern Pills */}
        <section className="py-12 px-4 bg-surface-variant/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black tracking-tight">Shop by Category</h2>
              <Link href="/products" className="text-brand font-bold text-sm flex items-center gap-1 hover:underline">
                Browse All <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {categories.map((cat, idx) => (
                <motion.div
                  key={cat.name}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-[2rem] ${cat.color} border border-transparent hover:border-brand/20 transition-all cursor-pointer flex flex-col items-center gap-3 text-center group`}
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-tight text-on-surface">{cat.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why wireshop - Premium Trust Section */}
        <section className="py-24 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="bg-on-surface rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-white shadow-premium">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 skew-x-12 translate-x-20" />

              <div className="relative z-10 grid md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-brand rounded-2xl flex items-center justify-center mb-6">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Secure Checkout</h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    MTN MoMo, Vodafone Cash, and Cards all protected with bank-grade encryption.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <Truck size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Fast Delivery</h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    From Accra to Tamale, we ensure your products reach you within 24-48 hours.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                    <Star size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Buyer Protection</h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    Not what you ordered? Our 7-day hassle-free return policy has you covered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals - Feed style */}
        <section className="py-12 px-4 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
               <div className="w-2 h-8 bg-brand rounded-full" />
               <h2 className="text-3xl font-black tracking-tight uppercase">New Arrivals</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-surface-variant rounded-[2.5rem] relative overflow-hidden mb-4 shadow-sm group-hover:shadow-lg transition-all duration-500">
                    <div className="absolute top-6 left-6">
                       <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-on-surface border border-outline">
                          NEW
                       </span>
                    </div>
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-transparent to-brand/5">
                      <Zap size={48} className="text-on-surface-variant/20" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-on-surface mb-1 group-hover:text-brand transition-colors">Future Product {i}</h4>
                  <div className="flex items-center gap-3">
                     <span className="text-xl font-black">GHS 299.00</span>
                     <span className="text-on-surface-variant line-through text-sm">GHS 450.00</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}
