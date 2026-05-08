'use client';

import Link from 'next/link';
import { useLang } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-[#C2410C] font-bold text-xl tracking-wide mb-1">ANCHOR POINT</div>
            <div className="text-gray-500 text-sm tracking-widest uppercase mb-3">Safety Training</div>
            <p className="text-gray-400 text-sm">{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">{t.nav.home}</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">{t.nav.services}</Link></li>
              <li><Link href="/locations" className="text-gray-400 hover:text-white text-sm transition-colors">{t.nav.locations}</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">{t.nav.about}</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:5036800359" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C2410C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t.footer.phone}
                </a>
              </li>
              <li>
                <a href="mailto:jaime@anchorsafetynw.com" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C2410C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t.footer.email}
                </a>
              </li>
              <li className="text-sm pt-1">{t.footer.locations}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
