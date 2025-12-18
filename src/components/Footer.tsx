'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="CodeCraft logo"
                width={50}
                height={50}
                className="h-10 w-10 object-contain"
              />
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                  CodeCraft
                </span>
                <p className="text-[11px] font-semibold text-gray-400 leading-3">TECH SOLUTIONS</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Transforming ideas into production-ready code with technical excellence and innovation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Strategic Consulting
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Process Automation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Legacy Modernization
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  From Zero to Live
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://linkedin.com" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} CodeCraft. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
