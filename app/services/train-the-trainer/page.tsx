'use client';

import ServicePageLayout from '@/components/ServicePageLayout';

export default function TrainTheTrainerPage() {
  return (
    <ServicePageLayout
      title="Train the Trainer"
      subtitle="OSHA-compliant equipment instructor training that helps qualified employees train their own team, reduce outside training costs, and maintain proper documentation."
      description="OSHA-compliant equipment instructor training that helps qualified employees to train their own team, reduce outside training costs, and maintain proper documentation."
      whatYouGet={[
        'Reduce outside training costs',
        'Improve workplace safety culture',
        'Build internal training leaders',
        'OSHA-compliant documentation and processes',
      ]}
      comingSoon={true}
      hideBadge={true}
      bookingSlug="train-the-trainer"
      heroImage="/images/pages/train-trainer.jpg"
    />
  );
}
