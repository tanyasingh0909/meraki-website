'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About Us' },
  { href: '/#events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/team', label: 'Our Team' }, 
  { href: '/#contact', label: 'Contact Us' },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-orange-900/40 shadow-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-orange-300">
            <Image
              src="/images/meraki_logo.png"
              alt="Meraki Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-xl font-bold text-transparent bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200 bg-clip-text tracking-tight">
            <span className="italic font-[Dancing_Script] text-orange-300">Meraki</span>, Culinary Arts Society
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-orange-100 hover:text-white transition uppercase tracking-wide"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle Menu"
          className="md:hidden text-orange-300 p-2 rounded-lg hover:bg-orange-900/40 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile nav drawer */}
      {navOpen && (
        <div className="md:hidden bg-black border-t border-orange-900/30 animate-fade-in px-6 pb-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setNavOpen(false)}
              className="block py-3 text-orange-100 hover:text-white hover:bg-orange-800/30 rounded-md transition"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
