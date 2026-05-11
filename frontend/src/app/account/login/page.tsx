import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="container py-20 flex justify-center">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 p-8 rounded-2xl border shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-orange-500 mb-2">wireshop</h1>
          <p className="text-slate-500">Sign in to your account</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email address</label>
            <input type="email" placeholder="email@example.com" className="w-full p-3 border rounded-xl dark:bg-slate-900 dark:border-slate-700 outline-orange-500" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="block text-sm font-medium">Password</label>
              <button type="button" className="text-sm text-orange-500 hover:underline">Forgot password?</button>
            </div>
            <input type="password" placeholder="••••••••" className="w-full p-3 border rounded-xl dark:bg-slate-900 dark:border-slate-700 outline-orange-500" />
          </div>
          <button type="submit" className="w-full btn-primary py-3 text-lg">Sign In</button>
        </form>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-slate-500 mb-4">Don't have an account?</p>
          <button className="w-full border-2 border-orange-500 text-orange-500 py-3 rounded-xl font-bold hover:bg-orange-50 transition">
            Create one free
          </button>
        </div>

        <div className="mt-6 text-center">
          <Link href="/products" className="text-slate-400 hover:text-slate-600 underline text-sm">Continue as Guest</Link>
        </div>
      </div>
    </div>
  );
}
