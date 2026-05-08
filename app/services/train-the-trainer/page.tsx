'use client';

import Link from 'next/link';
import CTASection from '@/components/CTASection';

export default function TrainTheTrainerPage() {
  const faqs = [
    {
      q: 'Can I train my own employees after completion?',
      a: 'Yes, this program helps qualified attendees develop the knowledge and tools to conduct in-house training and evaluations.',
    },
    {
      q: 'Is this OSHA compliant?',
      a: 'Yes, our train-the-trainer programs are designed to align with applicable OSHA training requirements and help employers build in-house training programs.',
    },
    {
      q: 'Do attendees need prior experience?',
      a: 'Yes, prior field experience and subject knowledge are strongly recommended for trainer candidates.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-950 py-24 border-b border-gray-800">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#C2410C] text-sm font-semibold uppercase tracking-widest mb-3">
            OSHA-Compliant Training
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Train the Trainer</h1>
          <p className="text-gray-300 text-xl">
            OSHA-compliant equipment instructor training that helps qualified employees train their own team, reduce outside training costs, and maintain proper documentation.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What It Is */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">What It Is</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            OSHA-compliant equipment instructor training that helps qualified employees to train their own team, reduce outside training costs, and maintain proper documentation.
          </p>
        </section>

        {/* Program Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Program Benefits</h2>
          <p className="text-gray-400 mb-6">Training that includes everything you need to train and certify your own employees.</p>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <ul className="space-y-4">
              {[
                'Reduce outside training costs',
                'Improve workplace safety culture',
                'Build internal training leaders',
                'OSHA-compliant documentation and processes',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#C2410C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact?service=train-the-trainer"
            className="bg-[#C2410C] hover:bg-[#a33509] text-white font-bold px-8 py-4 rounded-lg transition-colors text-center text-lg"
          >
            Contact Us
          </Link>
          <a
            href="tel:5036800359"
            className="border-2 border-gray-700 hover:border-[#C2410C] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center text-lg"
          >
            Call 503-680-0359
          </a>
        </div>
      </div>

      <CTASection />
    </>
  );
}
