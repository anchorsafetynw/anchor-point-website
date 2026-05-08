'use client';

import Link from 'next/link';
import Image from 'next/image';
import CTASection from './CTASection';
import { useLang } from '@/lib/LanguageContext';

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  whatYouGet: string[];
  reservationType?: string;
  comingSoon?: boolean;
  bookingSlug?: string;
  heroImage?: string;
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  whatYouGet,
  reservationType,
  comingSoon,
  bookingSlug,
  heroImage,
}: ServicePageLayoutProps) {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-950 py-24 border-b border-gray-800 overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0">
            <Image src={heroImage} alt={title} fill className="object-cover opacity-50" priority />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#C2410C] text-sm font-semibold uppercase tracking-widest mb-3">
            OSHA-Compliant Training
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{title}</h1>
          <p className="text-gray-300 text-xl mb-4">{subtitle}</p>
          {comingSoon && (
            <div className="inline-block bg-gray-800 border border-gray-700 text-gray-300 text-sm px-4 py-2 rounded-full mt-2">
              Coming Soon — <a href="tel:5036800359" className="text-[#C2410C] hover:underline">Call 503-680-0359</a> to get on the list
            </div>
          )}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What It Is */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">What It Is</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
        </section>

        {/* What They Get */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">What You Get</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <ul className="space-y-4">
              {whatYouGet.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#C2410C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {reservationType && (
          <div className="bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 mb-8 flex items-center gap-3">
            <svg className="w-5 h-5 text-[#C2410C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-300 text-sm">{reservationType}</span>
          </div>
        )}

        {/* CTA */}
        {!comingSoon ? (
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={bookingSlug ? `/book?service=${bookingSlug}` : '/book'}
              className="bg-[#C2410C] hover:bg-[#a33509] text-white font-bold px-8 py-4 rounded-lg transition-colors text-center text-lg"
            >
              {t.cta.primary}
            </Link>
            <a
              href="tel:5036800359"
              className="border-2 border-gray-700 hover:border-[#C2410C] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center text-lg"
            >
              {t.cta.secondary}: 503-680-0359
            </a>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-[#C2410C] hover:bg-[#a33509] text-white font-bold px-8 py-4 rounded-lg transition-colors text-center text-lg"
            >
              {t.cta.contact}
            </Link>
            <a
              href="tel:5036800359"
              className="border-2 border-gray-700 hover:border-[#C2410C] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center text-lg"
            >
              Call 503-680-0359
            </a>
          </div>
        )}
      </div>

      <CTASection />
    </>
  );
}
