"use client";

import Link from "next/link";

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center px-6 transition-colors duration-300">
      <div className="text-center max-w-md mx-auto">

        {/* Icon */}
        <div className="w-20 h-20 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/30 flex items-center justify-center mx-auto mb-6">
          <svg className="w-9 h-9 text-red-400 dark:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V7a4.5 4.5 0 00-9 0v3.5M5 10.5h14a1 1 0 011 1V20a1 1 0 01-1 1H5a1 1 0 01-1-1v-8.5a1 1 0 011-1z" />
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
          Access Restricted
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          You need to be signed in to view the Dashboard. Please sign in to your account to continue.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/form/signin"
            className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-200"
          >
            Sign In
          </Link>
          <Link
            href="/homepage"
            className="px-6 py-2.5 rounded-lg text-sm font-semibold text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
          >
            Go Home
          </Link>
        </div>

      </div>
    </div>
  );
}