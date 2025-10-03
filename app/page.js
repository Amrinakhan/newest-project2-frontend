'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
              Welcome! 🔐
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Project 2: Passwordless Authentication
            </p>
            <p className="text-sm text-gray-500">
              OTP Login + Social Login (Google, Facebook, Apple)
            </p>
          </div>

          {isLoggedIn ? (
            <div className="space-y-4">
              <div className="text-center text-green-600 font-medium mb-4">
                ✅ You're already logged in!
              </div>
              <button
                onClick={() => router.push('/dashboard')}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('user');
                  setIsLoggedIn(false);
                }}
                className="group relative w-full flex justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <Link
                href="/login"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Login with OTP or Social
              </Link>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-center space-y-3">
              <p className="text-xs text-gray-500 font-semibold">Features:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">📧 Email OTP</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">🔴 Google</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">📘 Facebook</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">🍎 Apple</span>
              </div>
              <p className="text-xs text-gray-400 mt-4">Passwordless & Secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
