'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLang } from '@/lib/LanguageContext';
import CTASection from '@/components/CTASection';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#A05014] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const serviceImages: Record<string, string> = {
  forklift: '/images/pages/forklift.jpg',
  mewp: '/images/pages/mewp.webp',
  'bucket-truck': '/images/pages/bucket-truck.jpg',
  'wheel-loader': '/images/pages/wheel-loader.jpg',
  'first-aid-cpr': '/images/pages/first-aid.jpg',
  'fall-protection': '/images/pages/fall-protection.jpg',
  'train-the-trainer': '/images/pages/train-trainer.jpg',
};

const serviceIcons: Record<string, React.ReactNode> = {
  forklift: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h11M3 10V6l3-3h5l3 3v4M3 10v8h11v-8M17 10v8m0 0h2a2 2 0 002-2v-4l-3-4h-1M7 18a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
  ),
  mewp: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21H4a1 1 0 01-1-1v-2a1 1 0 011-1h4M8 21h8M8 21V9M16 21h4a1 1 0 001-1v-2a1 1 0 00-1-1h-4M16 21V9M8 9h8M8 9l-2-5h12l-2 5M12 3v2" />
    </svg>
  ),
  'bucket-truck': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17H5a2 2 0 01-2-2V9l3-3h11l3 3v6a2 2 0 01-2 2h-4M9 17v-5h6v5M9 17H7m2 0h6m0 0h2M7 9h10M5 12h2m10 0h2" />
    </svg>
  ),
  'wheel-loader': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 17v-2a4 4 0 014-4h8M4 17h16M4 17a2 2 0 100 4 2 2 0 000-4zm16 0a2 2 0 100 4 2 2 0 000-4zM16 11V7l-4-4H8L4 7" />
    </svg>
  ),
  'first-aid-cpr': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-3-3v6m-8 3h18a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  'fall-protection': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  'train-the-trainer': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  ),
  'osha-10': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export default function Home() {
  const { t } = useLang();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/pages/hero.jpg"
            alt="Forklift operator in warehouse"
            fill
            className="object-cover object-center opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 from-30% to-gray-950/20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-[#A05014]/15 border border-[#A05014]/40 text-[#A05014] text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A05014]" />
              {t.hero.badge}
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-none mb-2 uppercase tracking-tight">
              {t.hero.headline1}
            </h1>
            <h1 className="text-6xl md:text-8xl font-extrabold text-[#A05014] leading-none mb-8 uppercase tracking-tight">
              {t.hero.headline2}
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/book"
                className="bg-[#A05014] hover:bg-[#7A3C0A] text-white font-bold px-8 py-4 rounded-none shadow-lg shadow-black/30 hover:shadow-black/30 hover:-translate-y-0.5 transition-all text-lg text-center"
              >
                {t.hero.cta}
              </Link>
              <a
                href="tel:5036800359"
                className="border-2 border-white/20 hover:border-[#A05014] bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-none transition-all text-lg text-center backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {[t.hero.trust1, t.hero.trust2, t.hero.trust3, t.hero.trust4].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-900 bg-white/90 border border-white/60 px-4 py-2 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-[#A05014] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#A05014] py-8 border-y border-[#7A3C0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {t.stats.map(({ num, label }) => (
              <div key={label}>
                <div className="text-white text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none">{num}</div>
                <div className="text-black text-sm font-medium mt-1 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Statement ── */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 uppercase tracking-tight mb-4">{t.impact.line1}</h2>
          <p className="text-xl text-gray-500">{t.impact.line2}</p>
        </div>
      </section>

      {/* ── Value Props ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10l9-7 9 7M12 3v7" /></svg>, ...t.valueProps[0] },
              { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>, ...t.valueProps[1] },
              { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>, ...t.valueProps[2] },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-200 p-8 flex gap-5 items-start shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#A05014]/10 border border-[#A05014]/20 flex items-center justify-center text-[#A05014] flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="text-[#A05014] text-xs font-semibold uppercase tracking-widest mb-3">{t.services.label}</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-tight mb-4">{t.services.title}</h2>
            <p className="text-gray-500 text-lg max-w-2xl">{t.services.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {t.services.items.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group relative overflow-hidden aspect-square bg-white border border-gray-200 hover:border-[#A05014] transition-all duration-300"
              >
                {/* Hover image */}
                {serviceImages[item.slug] && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Image
                      src={serviceImages[item.slug]}
                      alt={item.name}
                      fill
                      className="object-cover scale-105 group-hover:scale-100 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gray-950/55" />
                  </div>
                )}
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-5">
                  <div className="text-[#A05014] group-hover:text-white transition-colors duration-300 mb-3">
                    {serviceIcons[item.slug]}
                  </div>
                  <div className="flex items-end justify-between gap-2">
                    <span className="text-gray-800 group-hover:text-white font-bold text-base leading-snug transition-colors duration-300">
                      {item.name}
                    </span>
                    {'comingSoon' in item && item.comingSoon ? (
                      <span className="text-xs bg-gray-100 group-hover:bg-white/20 group-hover:text-white text-gray-400 px-2 py-0.5 flex-shrink-0 transition-colors duration-300">
                        {t.services.comingSoon}
                      </span>
                    ) : (
                      <svg className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#A05014] hover:text-[#7A3C0A] font-semibold transition-colors group"
          >
            {t.services.cta}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Why Anchor Point ── */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#A05014] text-xs font-semibold uppercase tracking-widest mb-4">{t.whyUs.label}</div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-tight mb-10">{t.whyUs.title}</h2>
              <ul className="space-y-5 mb-10">
                {t.whyUs.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 items-start">
                    <CheckIcon />
                    <span className="text-gray-600">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#A05014]/8 border-l-4 border-[#A05014] rounded-r-xl px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#A05014] mb-2">{t.whyUs.mission.label}</p>
                <p className="text-gray-700 text-lg leading-relaxed italic">{t.whyUs.mission.quote}</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-10 space-y-8">
              {t.whyUs.stats.map(({ num, desc }) => (
                <div key={desc} className="flex items-center gap-5 border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                  <span className="text-[#A05014] font-extrabold text-4xl leading-none w-16 flex-shrink-0">{num}</span>
                  <span className="text-gray-600">{desc}</span>
                </div>
              ))}
              <Link
                href="/book"
                className="block bg-[#A05014] hover:bg-[#7A3C0A] text-white font-bold px-6 py-4 rounded-xl shadow-lg shadow-black/30 hover:-translate-y-0.5 transition-all text-center text-lg"
              >
                {t.cta.primary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="text-[#A05014] text-xs font-semibold uppercase tracking-widest mb-3">{t.testimonials.label}</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-tight">{t.testimonials.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.testimonials.items.map(({ quote, author, location }) => (
              <div key={author} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col gap-6">
                <svg className="w-8 h-8 text-[#A05014]/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 text-lg leading-relaxed flex-1">"{quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-900 font-semibold text-sm">{author}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#A05014] text-xs font-semibold uppercase tracking-widest mb-3">{t.faq.label}</div>
            <h2 className="text-4xl font-extrabold text-gray-900 uppercase tracking-tight">{t.faq.heading}</h2>
          </div>
          <div className="space-y-4">
            {t.faq.items.map(({ q, a }, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 pr-4">{q}</span>
                  <svg className="w-5 h-5 text-[#A05014] flex-shrink-0 group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#A05014] text-xs font-semibold uppercase tracking-widest mb-3">{t.coverage.label}</div>
            <h2 className="text-4xl font-extrabold text-gray-900 uppercase tracking-tight">{t.coverage.heading}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {t.coverage.areas.map((area) => (
              <div key={area} className="bg-gray-50 border border-gray-200 hover:border-[#A05014] rounded-xl px-4 py-3 text-center text-sm text-gray-500 hover:text-gray-800 transition-colors">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
