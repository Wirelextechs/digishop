import React from 'react';
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="bg-white dark:bg-slate-800 border rounded-3xl p-12 text-center">
        <div className="text-6xl mb-6">🛒</div>
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          Looks like you haven't added anything to your cart yet. Explore our products and find something you love!
        </p>
        <Link href="/products" className="btn-primary inline-block text-lg px-8 py-4">
          Start Shopping
        </Link>
      </div>
    </div>
  );
}
