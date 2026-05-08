'use client';

import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/CTASection';

const locations = [
  {
    city: 'Tualatin',
    state: 'Oregon',
    label: 'Regional Training Center',
  },
  {
    city: 'Vancouver',
    state: 'Washington',
    label: 'Regional Training Center',
  },
  {
    city: 'Eugene',
    state: 'Oregon',
    label: 'Regional Training Center',
  },
];

const features = [
  'Classroom instruction',
  'Hands-on Practical Evaluation',
  'Full Certification same-day',
  'Bilingual (EN/ES)',
];

const serviceAreas = [
  'Pacific Northwest', 'Seattle Metro', 'Eugene Metro', 'Bend Metro',
  'Pendleton', 'Spokane', 'Kennewick', 'Medford', 'Roseburg', 'Boise',
];

export default function LocationsPage() {
  return (
    <>
      <section className="relative bg-gray-950 py-20 border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/pages/locations.jpg" alt="Pacific Northwest aerial view" fill className="object-cover opacity-20" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#C2410C] text-sm font-semibold uppercase tracking-widest mb-4">Training Locations</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Where We Train</h1>
          <p className="text-gray-400 text-xl max-w-2xl">
            Train at one of our regional training centers or we come to your jobsite — anywhere in the Pacific Northwest.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Anchor Point Training Centers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {locations.map((loc) => (
              <div key={loc.city} className="bg-gray-900 border border-gray-800 rounded-xl p-8">
                <div className="text-[#C2410C] text-xs font-semibold uppercase tracking-widest mb-2">{loc.label}</div>
                <h3 className="text-2xl font-bold text-white mb-1">{loc.city}</h3>
                <p className="text-gray-400 mb-6">{loc.state}</p>
                <ul className="space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-[#C2410C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* On-site training */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-16">
            <div className="text-[#C2410C] text-sm font-semibold uppercase tracking-widest mb-3">On-Site Training</div>
            <h2 className="text-2xl font-bold text-white mb-4">We Come to You</h2>
            <p className="text-gray-400 mb-6 max-w-2xl">
              Prefer training at your jobsite? We travel to you. If you are within 60 miles of zip code 97124, online booking is available. Outside that range? Call us for a quote.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
              {serviceAreas.map((area) => (
                <div key={area} className="bg-gray-950 border border-gray-800 rounded-lg px-3 py-2 text-center text-sm text-gray-300">
                  {area}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="bg-[#C2410C] hover:bg-[#a33509] text-white font-bold px-8 py-4 rounded-lg transition-colors text-center"
              >
                Schedule Training
              </Link>
              <a
                href="tel:5036800359"
                className="border-2 border-gray-700 hover:border-[#C2410C] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center"
              >
                Contact Us: 503-680-0359
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
