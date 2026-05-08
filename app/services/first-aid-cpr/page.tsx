'use client';

import ServicePageLayout from '@/components/ServicePageLayout';

export default function FirstAidCPRPage() {
  return (
    <ServicePageLayout
      title="First Aid CPR & AED"
      subtitle="Adult CPR, First Aid, and AED instruction delivered across the Pacific Northwest."
      description="Hands-on first aid, CPR, and AED training for workplace teams. Covers adult CPR techniques, first aid response, AED operation, and real-world emergency scenarios. Delivered in English and Spanish."
      whatYouGet={[
        'Adult CPR, First Aid, and AED Instruction',
        'Hands-on practice with real-world emergency scenarios',
        'Compliance documentation delivered same-day',
      ]}
      comingSoon={true}
      bookingSlug="first-aid-cpr"
    />
  );
}
