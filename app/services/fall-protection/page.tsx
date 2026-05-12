'use client';

import ServicePageLayout from '@/components/ServicePageLayout';

export default function FallProtectionPage() {
  return (
    <ServicePageLayout
      title="Fall Protection"
      subtitle="OSHA-aligned fall hazard awareness training delivered on-site across the Pacific Northwest. Plan. Protect. Prevent."
      description="Fall protection training covering OSHA standards, fall hazard identification, harness and lanyard inspection, proper fitting and use, and anchor point awareness. Delivered in English and Spanish."
      whatYouGet={[
        'OSHA-aligned fall hazard awareness training',
        'Harness and lanyard inspection, fitting, and proper use',
        'Anchor point awareness and tie-off procedures',
      ]}
      comingSoon={true}
      bookingSlug="fall-protection"
      heroImage="/images/pages/fall-protection-new.png"
    />
  );
}
