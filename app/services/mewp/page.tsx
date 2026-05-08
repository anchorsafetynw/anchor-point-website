'use client';

import ServicePageLayout from '@/components/ServicePageLayout';

export default function MEWPPage() {
  return (
    <ServicePageLayout
      title="MEWP – Boom Lift & Scissor Lift"
      subtitle="OSHA & ANSI A92 compliant MEWP certification covering both boom and scissor lifts — delivered on your jobsite anywhere in the PNW."
      description="MEWP Training: OSHA-compliant training for MEWP operators covering safe operation, inspections, fall protection, workplace hazards, and hands-on evaluation."
      whatYouGet={[
        'OSHA & ANSI A92 Compliant Certification',
        'In-class training followed by hands-on practical evaluation',
        'Compliance documentation delivered same-day',
      ]}
      reservationType="4-hour reservation (one lift type) or 6-hour reservation (combo). Available on-site across the PNW."
      bookingSlug="mewp"
      heroImage="/images/pages/mewp.webp"
    />
  );
}
