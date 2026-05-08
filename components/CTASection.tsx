'use client';

import Link from 'next/link';
import { useLang } from '@/lib/LanguageContext';

export default function CTASection() {
  const { t } = useLang();
  return (
    <section className="bg-[#C2410C] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to get your team trained?</h2>
        <p className="text-orange-100 mb-8 text-lg">Fast scheduling. Real-world training. Certification same-day.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="bg-white text-[#C2410C] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            {t.cta.primary}
          </Link>
          <a
            href="tel:5036800359"
            className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
          >
            {t.cta.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
