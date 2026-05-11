"use client";

import Link from "next/link";
import { Send, Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-on-surface text-white pt-24 pb-12 rounded-t-[4rem] px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <span className="font-bold text-xl italic">w</span>
              </div>
              <span className="text-3xl font-black tracking-tighter">wireshop</span>
            </div>
            <p className="text-white/60 leading-relaxed text-sm max-w-xs">
              Ghana's premier digital marketplace. Join the revolution of smart shopping and secure transactions.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -5, color: '#FF6B00' }}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 col-span-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-brand">Explore</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><Link href="/products" className="hover:text-brand transition-colors flex items-center gap-1 group">All Products <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link href="#" className="hover:text-brand transition-colors">Best Sellers</Link></li>
                <li><Link href="#" className="hover:text-brand transition-colors">Flash Sales</Link></li>
                <li><Link href="#" className="hover:text-brand transition-colors">Affiliate Program</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-brand">Support</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><Link href="#" className="hover:text-brand transition-colors">Track Order</Link></li>
                <li><Link href="#" className="hover:text-brand transition-colors">Refund Policy</Link></li>
                <li><Link href="#" className="hover:text-brand transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-brand transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand">Newsletter</h4>
            <p className="text-sm text-white/60">Subscribe to get special offers and once-in-a-lifetime deals.</p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all pr-14"
              />
              <button className="absolute right-2 top-2 p-2.5 bg-brand text-white rounded-xl hover:bg-brand-dark transition-colors shadow-lg shadow-brand/20">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] text-white/30 uppercase tracking-widest font-black">
            © 2026 wireshop technologies ltd. Made with ❤️ in Ghana
          </p>
          <div className="flex gap-8 text-[11px] font-black text-white/30 uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
            <button onClick={scrollToTop} className="hover:text-white transition-colors">Back to top ↑</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
