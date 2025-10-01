'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHref = (href: string) => {
    return href.startsWith('#') && pathname !== '/' ? `/${href}` : href;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glassmorphism border-b border-gray-800/50 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Only */}
          <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="flex items-center"
>
  <Link href="/" className="flex items-center">
    <div className="relative w-20 h-20 flex items-center justify-center"> 
      {/* 👆 parent div ab 80px x 80px */}
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={80}   // 👈 logo size increase
        height={80}
        className="object-contain"
      />
    </div>
  </Link>
</motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Tools', href: '#tools' },
                { name: 'About', href: '#about' },
                { name: 'Blog', href: '/blog' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={getHref(item.href)}
                  className="text-gray-300 hover:text-[#00FF94] transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF94] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-[#00FF94] focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  isOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glassmorphism border-t border-gray-800/50 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Tools', href: '#tools' },
                { name: 'About', href: '#about' },
                { name: 'Blog', href: '/blog' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={getHref(item.href)}
                  className="block px-4 py-3 text-gray-300 hover:text-[#00FF94] hover:bg-gray-800/30 rounded-md transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
