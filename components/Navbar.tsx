'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/LanguageContext';

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-[#C2410C] font-bold text-lg tracking-wide">ANCHOR POINT</span>
            <span className="text-gray-400 text-xs tracking-widest uppercase">Safety Training</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white text-sm transition-colors">{t.nav.home}</Link>
            <Link href="/services" className="text-gray-300 hover:text-white text-sm transition-colors">{t.nav.services}</Link>
            <Link href="/locations" className="text-gray-300 hover:text-white text-sm transition-colors">{t.nav.locations}</Link>
            <Link href="/about" className="text-gray-300 hover:text-white text-sm transition-colors">{t.nav.about}</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">{t.nav.contact}</Link>
            <a href="tel:5036800359" className="text-gray-300 hover:text-white text-sm transition-colors">
              {t.nav.callToBook}
            </a>
            <Link
              href="/book"
              className="bg-[#C2410C] hover:bg-[#a33509] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              {t.nav.book}
            </Link>
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="text-gray-400 hover:text-white text-xs border border-gray-700 hover:border-gray-500 px-2 py-1 rounded transition-colors"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="text-gray-400 text-xs border border-gray-700 px-2 py-1 rounded"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-4 py-4 flex flex-col gap-3">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-300 py-2">{t.nav.home}</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="text-gray-300 py-2">{t.nav.services}</Link>
          <Link href="/locations" onClick={() => setMenuOpen(false)} className="text-gray-300 py-2">{t.nav.locations}</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="text-gray-300 py-2">{t.nav.about}</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-gray-300 py-2">{t.nav.contact}</Link>
          <a href="tel:5036800359" className="text-gray-300 py-2">{t.nav.callToBook}</a>
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="bg-[#C2410C] text-white font-semibold px-4 py-3 rounded text-center mt-2"
          >
            {t.nav.book}
          </Link>
        </div>
      )}
    </nav>
  );
}
