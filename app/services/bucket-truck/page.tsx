'use client';

import ServicePageLayout from '@/components/ServicePageLayout';

export default function BucketTruckPage() {
  return (
    <ServicePageLayout
      title="Bucket Truck Training"
      subtitle="OSHA & ANSI A92 compliant bucket truck certification delivered on your jobsite across the Pacific Northwest."
      description="Bucket truck certification training meeting OSHA and ANSI A92 requirements, covering safe operation, pre-use inspections, aerial work platform hazards, and hands-on evaluation."
      whatYouGet={[
        'OSHA & ANSI A92 Compliant Bucket Truck Certification',
        'Hands-on practical evaluation for bucket truck',
        'Compliance documentation delivered same-day',
      ]}
      reservationType="4-hour reservation window. Available on-site across the PNW."
      bookingSlug="bucket-truck"
      heroImage="/images/pages/bucket-truck.jpg"
    />
  );
}
