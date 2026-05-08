'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLang } from '@/lib/LanguageContext';
import CTASection from '@/components/CTASection';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#C2410C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

export default function Home() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-950 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/pages/hero.jpg"
            alt="Forklift operator in warehouse"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#C2410C]/20 border border-[#C2410C]/30 text-[#C2410C] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              Pacific Northwest Safety Training
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-2">
              {t.hero.headline1}
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold text-[#C2410C] leading-tight mb-8">
              {t.hero.headline2}
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/book"
                className="bg-[#C2410C] hover:bg-[#a33509] text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg text-center"
              >
                {t.hero.cta}
              </Link>
              <a
                href="tel:5036800359"
                className="border-2 border-gray-600 hover:border-[#C2410C] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg text-center"
              >
                {t.hero.ctaSecondary}: 503-680-0359
              </a>
            </div>
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[t.hero.trust1, t.hero.trust2, t.hero.trust3, t.hero.trust4].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="bg-gray-900 border-y border-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.impact.line1}</h2>
          <p className="text-xl text-gray-400">{t.impact.line2}</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-950" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.services.title}</h2>
            <p className="text-gray-400 text-lg max-w-2xl">{t.services.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {t.services.items.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group bg-gray-900 border border-gray-800 hover:border-[#C2410C]/50 rounded-lg p-6 transition-all hover:bg-gray-900/80"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-lg group-hover:text-[#C2410C] transition-colors">
                    {item.name}
                  </span>
                  {'comingSoon' in item && item.comingSoon ? (
                    <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  ) : (
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-[#C2410C] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#C2410C] hover:text-[#a33509] font-semibold transition-colors"
          >
            {t.services.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Why Anchor Point */}
      <section className="py-20 bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#C2410C] text-sm font-semibold uppercase tracking-widest mb-4">Why Anchor Point</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{t.whyUs.title}</h2>
              <ul className="space-y-4">
                {t.whyUs.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <CheckIcon />
                    <span className="text-gray-300">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-950 rounded-xl border border-gray-800 p-8">
              <div className="text-6xl font-bold text-[#C2410C] mb-2">20+</div>
              <div className="text-white text-xl font-semibold mb-6">Years of Real-World Experience</div>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-3">
                  <span className="text-[#C2410C] font-bold text-lg">3</span>
                  <span>Training Locations: Tualatin, Vancouver, Eugene</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#C2410C] font-bold text-lg">2</span>
                  <span>Languages: English & Español</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#C2410C] font-bold text-lg">7</span>
                  <span>OSHA-Compliant Training Programs</span>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/book"
                  className="block bg-[#C2410C] hover:bg-[#a33509] text-white font-bold px-6 py-4 rounded-lg transition-colors text-center"
                >
                  {t.cta.primary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-[#C2410C] text-sm font-semibold uppercase tracking-widest mb-3">Service Areas</div>
            <h2 className="text-3xl font-bold text-white">We come to you — across the Pacific Northwest</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              'Pacific Northwest', 'Seattle Metro', 'Eugene Metro', 'Bend Metro',
              'Pendleton', 'Spokane', 'Kennewick', 'Medford', 'Roseburg', 'Boise'
            ].map((area) => (
              <div key={area} className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-center text-sm text-gray-300">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
