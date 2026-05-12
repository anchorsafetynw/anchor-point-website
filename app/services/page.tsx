'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLang } from '@/lib/LanguageContext';
import CTASection from '@/components/CTASection';

const services = [
  {
    slug: 'forklift',
    name: 'PIT – Forklift',
    description: 'OSHA-compliant forklift certification for classes 1, 2, 3, 4, 5, and 7. On-site anywhere in the PNW.',
    time: '4 hours',
    booking: true,
  },
  {
    slug: 'mewp',
    name: 'MEWP – Boom Lift & Scissor Lift',
    description: 'OSHA & ANSI A92 compliant aerial work platform certification covering both boom and scissor lifts.',
    time: '4–6 hours',
    booking: true,
  },
  {
    slug: 'bucket-truck',
    name: 'Bucket Truck',
    description: 'OSHA & ANSI A92 compliant bucket truck certification with hands-on practical evaluation.',
    time: '4 hours',
    booking: true,
  },
  {
    slug: 'wheel-loader',
    name: 'Wheel Loader & Skid Steer',
    description: 'OSHA-compliant loader operator training and certification with hands-on evaluation.',
    time: '4 hours',
    booking: true,
  },
  {
    slug: 'first-aid-cpr',
    name: 'First Aid CPR & AED',
    description: 'Adult CPR, First Aid, and AED instruction with real-world emergency scenario practice.',
    time: 'TBD',
    booking: false,
    comingSoon: false,
  },
  {
    slug: 'fall-protection',
    name: 'Fall Protection',
    description: 'OSHA-aligned fall hazard awareness training including harness fitting, inspection, and tie-off procedures.',
    time: 'TBD',
    booking: false,
    comingSoon: true,
  },
  {
    slug: 'train-the-trainer',
    name: 'Train the Trainer',
    description: 'OSHA-compliant instructor training to help your qualified employees train and certify your own team.',
    time: 'Contact us',
    booking: false,
  },
];

export default function ServicesPage() {
  const { t } = useLang();

  return (
    <>
      <section className="relative bg-gray-950 py-20 border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/pages/services.jpg" alt="Construction workers on site" fill className="object-cover opacity-50" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#A05014] text-sm font-semibold uppercase tracking-widest mb-4">Our Training Programs</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.services.title}</h1>
          <p className="text-gray-400 text-xl max-w-2xl">{t.services.subtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-gray-900 border border-gray-800 hover:border-[#A05014]/50 rounded-xl p-8 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-xl font-bold text-white group-hover:text-[#A05014] transition-colors">
                    {service.name}
                  </h2>
                  {service.comingSoon && (
                    <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded ml-3 flex-shrink-0">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    {service.booking && <span className="text-[#A05014]">• Online booking available</span>}
                  </div>
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-[#A05014] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
