'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CodeCraft logo"
              width={50}
              height={50}
              className="h-11 w-11 object-contain"
              priority
            />
            <div className="hidden sm:block">
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                CodeCraft
              </span>
              <p className="text-[11px] font-semibold text-gray-500 leading-3">TECH SOLUTIONS</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="#portfolio"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow font-medium"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
