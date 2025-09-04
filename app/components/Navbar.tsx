'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glassmorphism border-b border-gray-800/50 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Enhanced Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center gap-2 group">
              {/* New improved logo */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                {/* Outer ring with gradient */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00FF94] to-[#00B4FF] p-0.5">
                  <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center">
                    {/* Wolf icon */}
                    <svg 
                      className="w-6 h-6 text-[#00FF94] group-hover:text-[#00B4FF] transition-colors duration-300" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17 12C17.5 12 18 12.4 18 13C18 14.5 16.5 16 14.5 16C16 16 17 17.5 17 19C17 20 16.5 21 14.5 21C12.5 21 12 20 12 19C12 17.5 13 16 14.5 16C12.5 16 11 14.5 11 13C11 12.4 11.5 12 12 12H17Z" fill="currentColor"/>
                      <path d="M9 12C8.5 12 8 12.4 8 13C8 14.5 9.5 16 11.5 16C10 16 9 17.5 9 19C9 20 9.5 21 11.5 21C13.5 21 14 20 14 19C14 17.5 13 16 11.5 16C13.5 16 15 14.5 15 13C15 12.4 14.5 12 14 12H9Z" fill="currentColor"/>
                      <path d="M7 8C7 8 5 9 5 11C5 12 5.5 12 6 12C6 12 6 11.5 6 11C6 10 7 9 8 9C9 9 10 10 10 11C10 11.5 10 12 10 12C10.5 12 11 12 11 11C11 9 9 8 9 8H7Z" fill="currentColor"/>
                      <path d="M17 8C17 8 19 9 19 11C19 12 18.5 12 18 12C18 12 18 11.5 18 11C18 10 17 9 16 9C15 9 14 10 14 11C14 11.5 14 12 14 12C13.5 12 13 12 13 11C13 9 15 8 15 8H17Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Text logo with improved styling */}
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00B4FF] tracking-tight">
                  WolfGuider
                </span>
                <span className="text-xs text-gray-400 -mt-1 tracking-widest">SECURITY</span>
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
                className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
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