"use client";

import Link from "next/link";
import { Search, ShoppingCart, User, Heart, Menu, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-outline">
      {/* Top utility bar - Native Look */}
      <div className="bg-surface-variant/50 text-[11px] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-on-surface-variant font-medium">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={12} className="text-brand" /> Deliver to Accra, Ghana</span>
            <span>24/7 Premium Support</span>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-brand transition-colors">Sell on wireshop</Link>
            <Link href="#" className="hover:text-brand transition-colors">Help Center</Link>
            <Link href="#" className="hover:text-brand transition-colors">Track Order</Link>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center gap-4 md:gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white"
          >
            <span className="font-bold text-xl italic">w</span>
          </motion.div>
          <span className="text-2xl font-black tracking-tighter text-brand">wireshop</span>
        </Link>

        {/* Categories trigger - Native app style */}
        <button className="hidden lg:flex items-center gap-2 px-4 py-2 bg-surface-variant rounded-full text-sm font-semibold hover:bg-outline transition-all active:scale-95">
          <Menu size={18} />
          Categories
        </button>

        {/* Search Bar - Modern rounded-3xl */}
        <div className="flex-1 max-w-2xl relative group hidden sm:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-brand transition-colors" size={18} />
          <input
            type="text"
            placeholder="Find amazing products..."
            className="w-full pl-12 pr-4 py-2.5 bg-surface-variant border-transparent focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 rounded-full text-sm transition-all outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <motion.button whileTap={{ scale: 0.9 }} className="p-2.5 rounded-full hover:bg-surface-variant text-on-surface transition-colors relative">
            <Heart size={22} />
          </motion.button>

          <motion.button whileTap={{ scale: 0.9 }} className="p-2.5 rounded-full hover:bg-surface-variant text-on-surface transition-colors relative">
            <ShoppingCart size={22} />
            <span className="absolute top-1 right-1 w-5 h-5 bg-brand text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
              0
            </span>
          </motion.button>

          <Link href="/account/login">
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-on-surface text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-premium"
            >
              <User size={18} />
              <span className="hidden md:inline">Sign In</span>
            </motion.button>
          </Link>
        </div>
      </nav>

      {/* Mobile Search Bar - Only visible on small screens */}
      <div className="px-4 pb-3 sm:hidden">
         <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={16} />
          <input
            type="text"
            placeholder="Search wireshop"
            className="w-full pl-10 pr-4 py-2 bg-surface-variant rounded-xl text-sm transition-all outline-none"
          />
        </div>
      </div>
    </header>
  );
}
