'use client';

import ServicePageLayout from '@/components/ServicePageLayout';

export default function WheelLoaderPage() {
  return (
    <ServicePageLayout
      title="Wheel Loader & Skid Steer Training"
      subtitle="OSHA-compliant loader operator training and certification — on-site across the Pacific Northwest."
      description="Wheel loader and skid steer certification training meeting OSHA requirements. Covers safe operation, pre-use inspections, load handling, stability, workplace hazards, and hands-on practical evaluation."
      whatYouGet={[
        'OSHA-Compliant Loader Operator Training and Certification',
        'Hands-on practical evaluation for loader',
        'Compliance documentation delivered same-day',
      ]}
      bookingSlug="wheel-loader"
      heroImage="/images/pages/wheel-loader.jpg"
    />
  );
}
