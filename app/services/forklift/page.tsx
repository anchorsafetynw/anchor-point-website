'use client';

import ServicePageLayout from '@/components/ServicePageLayout';

export default function ForkliftPage() {
  return (
    <ServicePageLayout
      title="PIT – Forklift Training"
      subtitle="OSHA-compliant training for powered industrial truck operators in the Pacific Northwest."
      description="Forklift Training: OSHA-compliant training for powered industrial truck operators covering safe operation, inspections, load handling, workplace hazards, and hands-on evaluation."
      whatYouGet={[
        'OSHA-Compliant Certification',
        'In-class training, followed by hands-on evaluation for forklift classes 1, 2, 3, 4, 5, 7.',
        'Compliance documentation delivered same-day',
      ]}
      reservationType="4-hour reservation window. Available on-site PNW or at our locations."
      bookingSlug="forklift"
      heroImage="/images/pages/forklift.jpg"
    />
  );
}
