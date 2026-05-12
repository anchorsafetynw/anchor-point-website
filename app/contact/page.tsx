'use client';

import { useState } from 'react';

const trainingOptions = [
  'PIT – Forklift',
  'MEWP – Boom Lift & Scissor Lift',
  'Bucket Truck',
  'Wheel Loader & Skid Steer',
  'First Aid CPR & AED',
  'Fall Protection',
  'Train the Trainer',
];

export default function ContactPage() {
  const [selectedTrainings, setSelectedTrainings] = useState<string[]>([]);
  const [locationChoice, setLocationChoice] = useState('');
  const [jobsite, setJobsite] = useState('');
  const [anchorLocation, setAnchorLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleTraining = (t: string) => {
    setSelectedTrainings(prev =>
      prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-gray-950 py-20 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#A05014] text-sm font-semibold uppercase tracking-widest mb-4">Contact</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-gray-400 text-xl">Fast response. Simple process. Real training.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <a
            href="tel:5036800359"
            className="group bg-gray-900 border border-gray-800 hover:border-[#A05014]/50 rounded-xl p-6 flex items-center gap-4 transition-all"
          >
            <div className="bg-[#A05014]/10 rounded-lg p-3">
              <svg className="w-6 h-6 text-[#A05014]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Call to Book</div>
              <div className="text-white font-bold text-lg group-hover:text-[#A05014] transition-colors">503-680-0359</div>
            </div>
          </a>
          <a
            href="mailto:jaime@anchorsafetynw.com"
            className="group bg-gray-900 border border-gray-800 hover:border-[#A05014]/50 rounded-xl p-6 flex items-center gap-4 transition-all"
          >
            <div className="bg-[#A05014]/10 rounded-lg p-3">
              <svg className="w-6 h-6 text-[#A05014]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Email</div>
              <div className="text-white font-bold group-hover:text-[#A05014] transition-colors">jaime@anchorsafetynw.com</div>
            </div>
          </a>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
            <div className="text-[#A05014] mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Message Sent</h2>
            <p className="text-gray-400">We will be in touch shortly. For immediate help, call <a href="tel:5036800359" className="text-[#A05014] hover:underline">503-680-0359</a>.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-xl p-8 space-y-6">
            <h2 className="text-xl font-bold text-white mb-2">Send Us a Message</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name *</label>
                <input
                  type="text"
                  required
                  className="w-full bg-gray-950 border border-gray-700 focus:border-[#A05014] rounded-lg px-4 py-3 text-white outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Company</label>
                <input
                  type="text"
                  className="w-full bg-gray-950 border border-gray-700 focus:border-[#A05014] rounded-lg px-4 py-3 text-white outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-3">Training Needed (select all that apply)</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {trainingOptions.map((opt) => (
                  <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedTrainings.includes(opt)}
                      onChange={() => toggleTraining(opt)}
                      className="w-4 h-4 accent-[#A05014]"
                    />
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Class Size</label>
              <input
                type="number"
                min="1"
                className="w-full bg-gray-950 border border-gray-700 focus:border-[#A05014] rounded-lg px-4 py-3 text-white outline-none transition-colors"
                placeholder="Number of participants"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-3">Training Location</label>
              <div className="flex gap-6 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="location"
                    value="jobsite"
                    checked={locationChoice === 'jobsite'}
                    onChange={() => setLocationChoice('jobsite')}
                    className="accent-[#A05014]"
                  />
                  <span className="text-gray-300">My jobsite</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="location"
                    value="anchor"
                    checked={locationChoice === 'anchor'}
                    onChange={() => setLocationChoice('anchor')}
                    className="accent-[#A05014]"
                  />
                  <span className="text-gray-300">Anchor Point training location</span>
                </label>
              </div>
              {locationChoice === 'jobsite' && (
                <input
                  type="text"
                  value={jobsite}
                  onChange={(e) => setJobsite(e.target.value)}
                  placeholder="Your jobsite address or city"
                  className="w-full bg-gray-950 border border-gray-700 focus:border-[#A05014] rounded-lg px-4 py-3 text-white outline-none transition-colors"
                />
              )}
              {locationChoice === 'anchor' && (
                <select
                  value={anchorLocation}
                  onChange={(e) => setAnchorLocation(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-700 focus:border-[#A05014] rounded-lg px-4 py-3 text-white outline-none transition-colors"
                >
                  <option value="">Select a location</option>
                  <option value="tualatin">Tualatin, OR</option>
                  <option value="vancouver">Vancouver, WA</option>
                  <option value="eugene">Eugene, OR</option>
                </select>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Preferred Date</label>
              <input
                type="date"
                className="w-full bg-gray-950 border border-gray-700 focus:border-[#A05014] rounded-lg px-4 py-3 text-white outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#A05014] hover:bg-[#7A3C0A] text-white font-bold py-4 rounded-lg transition-colors text-lg"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </>
  );
}
