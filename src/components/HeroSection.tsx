'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Transform Your Ideas Into
                </span>
                <span className="block text-gray-900">
                  Production-Ready Code
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert consulting, seamless automation, and end-to-end development solutions that take your business from concept to thriving digital product.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Explore Services
              </Link>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">80%</p>
                <p className="text-gray-600">Faster Time to Market</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">99%</p>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">5+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm text-green-400 overflow-hidden">
                <div className="space-y-2">
                  <p>
                    <span className="text-purple-400">{'>'}</span> npm create codecraft-app
                  </p>
                  <p className="text-gray-500">Creating your next masterpiece...</p>
                  <p>
                    <span className="text-green-400">✓</span> Project initialized
                  </p>
                  <p>
                    <span className="text-green-400">✓</span> Dependencies resolved
                  </p>
                  <p>
                    <span className="text-green-400">✓</span> Build optimized
                  </p>
                  <p>
                    <span className="text-green-400">✓</span> Ready to deploy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
