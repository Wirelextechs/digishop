import React from 'react';

export default function ProductsPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-8">
          <div>
            <h3 className="font-bold mb-4">Availability</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Available Now
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Pre-order
              </label>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="text-orange-500 font-bold">🏷️ All Products</li>
              <li>💻 Electronics</li>
              <li>👗 Fashion</li>
              <li>🏠 Home & Living</li>
              <li>✨ Health & Beauty</li>
              <li>🛒 Food & Groceries</li>
              <li>⚽ Sports & Outdoors</li>
              <li>🧸 Baby & Kids</li>
              <li>📱 Phones & Tablets</li>
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">All Products</h1>
            <div className="flex gap-4">
               <select className="p-2 border rounded dark:bg-slate-800 dark:border-slate-700">
                 <option>Sort by: Newest</option>
                 <option>Price: Low to High</option>
                 <option>Price: High to Low</option>
                 <option>Discount</option>
               </select>
            </div>
          </div>

          <div className="text-center py-40 border border-dashed rounded-3xl">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold mb-2">No products found</h2>
            <p className="text-slate-500">Try adjusting your filters or search terms.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
