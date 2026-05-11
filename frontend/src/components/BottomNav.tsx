"use client";

import Link from "next/link";
import { Home, Search, ShoppingBag, User, Heart } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Search", href: "/products", icon: Search },
    { name: "Cart", href: "/cart", icon: ShoppingBag, badge: 0 },
    { name: "Saved", href: "#", icon: Heart },
    { name: "Account", href: "/account/login", icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4">
      <nav className="bg-on-surface/95 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-premium p-2 flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative flex flex-col items-center justify-center p-3 transition-all"
            >
              {isActive && (
                <motion.div
                  layoutId="nav-glow"
                  className="absolute inset-0 bg-brand/20 rounded-2xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="relative">
                 <Icon size={22} className={isActive ? "text-brand" : "text-white/60"} />
                 {item.badge !== undefined && item.badge > 0 && (
                   <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-on-surface">
                     {item.badge}
                   </span>
                 )}
              </div>
              <span className={`text-[10px] font-bold mt-1 tracking-tight ${isActive ? "text-white" : "text-white/40"}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
