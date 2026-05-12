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
  hideBadge?: boolean;
  bookingSlug?: string;
  heroImage?: string;
  imagePosition?: string;
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  whatYouGet,
  reservationType,
  comingSoon,
  hideBadge,
  bookingSlug,
  heroImage,
  imagePosition = 'object-center',
}: ServicePageLayoutProps) {
  const { t } = useLang();

  return (
    <>
      {/* Hero — keep dark for drama */}
      <section className="relative bg-gray-950 py-28 border-b border-gray-800 overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0">
            <Image src={heroImage} alt={title} fill className={`object-cover opacity-50 ${imagePosition}`} priority />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 from-30% to-gray-950/20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#A05014] text-xs font-semibold uppercase tracking-widest mb-4">
            {t.serviceLayout.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tight mb-6">{title}</h1>
          <p className="text-gray-300 text-xl max-w-2xl">{subtitle}</p>
          {comingSoon && !hideBadge && (
            <div className="inline-block bg-gray-800 border border-gray-700 text-gray-300 text-sm px-4 py-2 rounded-full mt-6">
              {t.serviceLayout.comingSoonPrefix}<a href="tel:5036800359" className="text-[#A05014] hover:underline">{t.serviceLayout.callUs}</a>{t.serviceLayout.comingSoonSuffix}
            </div>
          )}
        </div>
      </section>

      {/* Two-column content — light */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left: text */}
            <div>
              <section className="mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 uppercase tracking-tight mb-5">{t.serviceLayout.whatItIs}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-extrabold text-gray-900 uppercase tracking-tight mb-6">{t.serviceLayout.whatYouGet}</h2>
                <ul className="space-y-4">
                  {whatYouGet.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#A05014]/15 border border-[#A05014]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-[#A05014]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {reservationType && (
                <div className="bg-white border border-gray-200 rounded-xl px-6 py-4 mb-10 flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#A05014] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 text-sm">{reservationType}</span>
                </div>
              )}

              {!comingSoon ? (
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={bookingSlug ? `/book?service=${bookingSlug}` : '/book'}
                    className="bg-[#A05014] hover:bg-[#7A3C0A] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-black/30 hover:-translate-y-0.5 transition-all text-center text-lg"
                  >
                    {t.cta.primary}
                  </Link>
                  <a
                    href="tel:5036800359"
                    className="border-2 border-gray-300 hover:border-[#A05014] text-gray-700 hover:text-[#A05014] font-semibold px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-all text-center text-lg flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {t.cta.secondary}
                  </a>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-[#A05014] hover:bg-[#7A3C0A] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-black/30 hover:-translate-y-0.5 transition-all text-center text-lg"
                  >
                    {t.cta.contact}
                  </Link>
                  <a
                    href="tel:5036800359"
                    className="border-2 border-gray-300 hover:border-[#A05014] text-gray-700 hover:text-[#A05014] font-semibold px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-all text-center text-lg flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {t.cta.secondary}
                  </a>
                </div>
              )}
            </div>

            {/* Right: photo */}
            {heroImage && (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-xl lg:sticky lg:top-28">
                <Image src={heroImage} alt={title} fill className={`object-cover ${imagePosition}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent" />
              </div>
            )}
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}
