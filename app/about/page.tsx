'use client';

import Link from 'next/link';
import CTASection from '@/components/CTASection';

export default function AboutPage() {
  return (
    <>
      <section className="bg-gray-950 py-20 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#C2410C] text-sm font-semibold uppercase tracking-widest mb-4">About Us</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Anchored in Experience
          </h1>
        </div>
      </section>

      <section className="py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story */}
          <div className="mb-16">
            <div className="text-[#C2410C] text-xl font-bold mb-2">20+ years real-world experience.</div>
            <p className="text-gray-400 text-lg mb-6">Serving Portland, the Pacific Northwest, and beyond.</p>
            <div className="prose prose-invert max-w-none space-y-5 text-gray-300 text-lg leading-relaxed">
              <p>
                Founded in Hillsboro, Oregon, Anchor Point Safety was born out of the clear need for practical, effective, and bilingual safety training built for the real working conditions of the Pacific Northwest.
              </p>
              <p>
                Too many training companies operate from a desk. We operate from your jobsite. From the high-volume logistics hubs in North Portland to the booming construction corridors of Vancouver, WA, from the manufacturing plants of Salem to the utility crews of Eugene, we show up where the work happens.
              </p>
              <p>
                Our commitment is clear: every worker in the Pacific Northwest deserves the knowledge to go home safe. We train in English and Spanish, schedule around your shifts, and deliver training that sticks.
              </p>
            </div>
          </div>

          {/* What we stand for */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="text-[#C2410C] text-xs font-semibold uppercase tracking-widest mb-3">OSHA COMPLIANT</div>
              <h3 className="text-white font-bold text-xl mb-3">Compliance You Can Count On</h3>
              <p className="text-gray-400">All training programs are designed to meet applicable OSHA requirements and give your team the documentation they need.</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="text-[#C2410C] text-xs font-semibold uppercase tracking-widest mb-3">BILINGUAL (EN/ES)</div>
              <h3 className="text-white font-bold text-xl mb-3">Courses in English and Spanish</h3>
              <p className="text-gray-400">Courses offered in English and Spanish so your entire crew, regardless of language, receives the same quality instruction.</p>
            </div>
          </div>

          {/* Instructor */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-16">
            <div className="text-[#C2410C] text-xs font-semibold uppercase tracking-widest mb-4">Your Instructor</div>
            <h2 className="text-2xl font-bold text-white mb-1">Jaime Orozco</h2>
            <p className="text-gray-400 text-sm mb-6">Lead Safety Instructor & Owner, Anchor Point Safety Training</p>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Jaime Orozco is the lead safety instructor and owner of Anchor Point Safety Training, bringing over 20 years of real-world, hands-on experience in safety and equipment operations. His background is built in the environments he now trains for, giving him a practical, no-nonsense approach that resonates with crews in the field.
              </p>
              <p>
                Jaime is bilingual in English and Spanish, allowing him to effectively train and connect with diverse teams across the Pacific Northwest. He is known for his professionalism, integrity, and commitment to delivering training that goes beyond compliance and actually prepares workers for real-world conditions.
              </p>
              <p>
                As a locally owned business leader, Jaime takes pride in being a consistent and reliable point of contact for clients, ensuring every training is delivered with clarity, accountability, and a focus on one goal: helping teams train safer, work smarter, and go home safe.
              </p>
            </div>
          </div>

          {/* Contact prompt */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="bg-[#C2410C] hover:bg-[#a33509] text-white font-bold px-8 py-4 rounded-lg transition-colors text-center text-lg"
            >
              Schedule Training
            </Link>
            <Link
              href="/contact"
              className="border-2 border-gray-700 hover:border-[#C2410C] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
