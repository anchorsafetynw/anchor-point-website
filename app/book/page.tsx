'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const bookableServices = [
  { slug: 'forklift', name: 'PIT – Forklift', hours: 4 },
  { slug: 'mewp', name: 'MEWP – Boom Lift & Scissor Lift', hours: 4 },
  { slug: 'combo', name: 'COMBO – PIT Forklift + MEWP Boom & Scissor Lift', hours: 6 },
  { slug: 'bucket-truck', name: 'Bucket Truck', hours: 4 },
  { slug: 'wheel-loader', name: 'Wheel Loader & Skid Steer', hours: 4 },
];

const contactServices = [
  { slug: 'train-the-trainer', name: 'Train the Trainer' },
  { slug: 'first-aid-cpr', name: 'First Aid CPR & AED (Coming Soon)' },
  { slug: 'fall-protection', name: 'Fall Protection (Coming Soon)' },
];

const ZIP_97124_LAT = 45.5234;
const ZIP_97124_LON = -122.9854;
const MILES_RADIUS = 60;

function toRad(deg: number) { return deg * Math.PI / 180; }

function haversine(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 3958.8;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function BookContent() {
  const searchParams = useSearchParams();
  const preselect = searchParams.get('service') || '';

  const [step, setStep] = useState(1);
  const [service, setService] = useState(preselect);
  const [zip, setZip] = useState('');
  const [zipStatus, setZipStatus] = useState<'idle' | 'checking' | 'near' | 'far' | 'error'>('idle');
  const [submitted, setSubmitted] = useState(false);

  const selectedService = bookableServices.find(s => s.slug === service);

  const checkZip = async () => {
    if (!zip || zip.length !== 5) return;
    setZipStatus('checking');
    try {
      const res = await fetch(`https://api.zippopotam.us/us/${zip}`);
      if (!res.ok) { setZipStatus('error'); return; }
      const data = await res.json();
      const lat = parseFloat(data.places[0].latitude);
      const lon = parseFloat(data.places[0].longitude);
      const dist = haversine(ZIP_97124_LAT, ZIP_97124_LON, lat, lon);
      setZipStatus(dist <= MILES_RADIUS ? 'near' : 'far');
    } catch {
      setZipStatus('error');
    }
  };

  useEffect(() => {
    if (zip.length === 5) checkZip();
    else setZipStatus('idle');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zip]);

  const isContactOnly = contactServices.some(s => s.slug === service);

  if (submitted) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center max-w-2xl mx-auto">
        <div className="text-[#C2410C] mb-4">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">Request Received</h2>
        <p className="text-gray-400 mb-6">We will confirm your booking shortly at <strong className="text-white">jaime@anchorsafetynw.com</strong> or call <a href="tel:5036800359" className="text-[#C2410C] hover:underline">503-680-0359</a> for immediate assistance.</p>
        <Link href="/" className="text-[#C2410C] hover:underline">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Step 1: Select service */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
        <h2 className="text-xl font-bold text-white mb-6">1. Select Training</h2>
        <div className="space-y-2">
          {bookableServices.map((s) => (
            <label key={s.slug} className="flex items-center gap-3 cursor-pointer group p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <input
                type="radio"
                name="service"
                value={s.slug}
                checked={service === s.slug}
                onChange={() => setService(s.slug)}
                className="accent-[#C2410C]"
              />
              <span className="text-gray-300 group-hover:text-white transition-colors">{s.name}</span>
              <span className="ml-auto text-xs text-gray-500">{s.hours} hrs</span>
            </label>
          ))}
          <div className="border-t border-gray-800 mt-4 pt-4">
            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Contact us for these services:</p>
            {contactServices.map((s) => (
              <Link
                key={s.slug}
                href={`/contact?service=${s.slug}`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <span className="text-gray-400 text-sm">{s.name}</span>
                <svg className="w-4 h-4 text-gray-600 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Step 2: Zip code check */}
      {service && !isContactOnly && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-xl font-bold text-white mb-2">2. Training Location</h2>
          <p className="text-gray-400 text-sm mb-6">Enter your zip code to check availability and pricing for your area.</p>
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
              placeholder="Your zip code"
              className="flex-1 bg-gray-950 border border-gray-700 focus:border-[#C2410C] rounded-lg px-4 py-3 text-white outline-none transition-colors"
            />
          </div>

          {zipStatus === 'checking' && (
            <p className="text-gray-400 text-sm">Checking your location...</p>
          )}
          {zipStatus === 'near' && (
            <div className="bg-green-950 border border-green-800 rounded-lg px-4 py-3 text-green-300 text-sm">
              ✓ Online booking available for your area. Fill out the form below to schedule.
            </div>
          )}
          {zipStatus === 'far' && (
            <div className="bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 text-sm">
              Your location is outside our standard service area. Please{' '}
              <a href="tel:5036800359" className="text-[#C2410C] hover:underline font-semibold">call 503-680-0359</a>
              {' '}for a separate quote.
            </div>
          )}
          {zipStatus === 'error' && (
            <p className="text-red-400 text-sm">Could not verify zip code. Please call <a href="tel:5036800359" className="text-[#C2410C] hover:underline">503-680-0359</a>.</p>
          )}
        </div>
      )}

      {/* Booking form */}
      {zipStatus === 'near' && selectedService && (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-gray-900 border border-gray-800 rounded-xl p-8 space-y-6">
          <h2 className="text-xl font-bold text-white">3. Book Your Training</h2>
          <div className="bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-sm text-gray-300">
            <strong className="text-white">{selectedService.name}</strong> — {selectedService.hours}-hour reservation
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Name *</label>
              <input required type="text" className="w-full bg-gray-950 border border-gray-700 focus:border-[#C2410C] rounded-lg px-4 py-3 text-white outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Company</label>
              <input type="text" className="w-full bg-gray-950 border border-gray-700 focus:border-[#C2410C] rounded-lg px-4 py-3 text-white outline-none transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email *</label>
              <input required type="email" className="w-full bg-gray-950 border border-gray-700 focus:border-[#C2410C] rounded-lg px-4 py-3 text-white outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Phone</label>
              <input type="tel" className="w-full bg-gray-950 border border-gray-700 focus:border-[#C2410C] rounded-lg px-4 py-3 text-white outline-none transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Class Size</label>
              <input type="number" min="1" className="w-full bg-gray-950 border border-gray-700 focus:border-[#C2410C] rounded-lg px-4 py-3 text-white outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Preferred Date *</label>
              <input required type="date" className="w-full bg-gray-950 border border-gray-700 focus:border-[#C2410C] rounded-lg px-4 py-3 text-white outline-none transition-colors" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Training Address</label>
            <input type="text" defaultValue={zip} placeholder="Jobsite address" className="w-full bg-gray-950 border border-gray-700 focus:border-[#C2410C] rounded-lg px-4 py-3 text-white outline-none transition-colors" />
          </div>

          <button
            type="submit"
            className="w-full bg-[#C2410C] hover:bg-[#a33509] text-white font-bold py-4 rounded-lg transition-colors text-lg"
          >
            Submit Booking Request
          </button>
          <p className="text-xs text-gray-500 text-center">
            We will confirm availability and send details to your email within 1 business day.
          </p>
        </form>
      )}
    </div>
  );
}

export default function BookPage() {
  return (
    <>
      <section className="bg-gray-950 py-20 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#C2410C] text-sm font-semibold uppercase tracking-widest mb-4">Online Booking</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Schedule Training</h1>
          <p className="text-gray-400 text-lg">
            Select your training type and location. Need help? Call{' '}
            <a href="tel:5036800359" className="text-[#C2410C] hover:underline font-semibold">503-680-0359</a>.
          </p>
        </div>
      </section>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Suspense fallback={<div className="text-gray-400">Loading...</div>}>
          <BookContent />
        </Suspense>
      </div>
    </>
  );
}
