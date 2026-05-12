'use client';

import ServicePageLayout from '@/components/ServicePageLayout';
import { useLang } from '@/lib/LanguageContext';

export default function BucketTruckPage() {
  const { t } = useLang();
  const p = t.servicePages.bucketTruck;
  return (
    <ServicePageLayout
      title={p.title}
      subtitle={p.subtitle}
      description={p.description}
      whatYouGet={p.whatYouGet}
      bookingSlug="bucket-truck"
      heroImage="/images/pages/bucket-truck.jpg"
      imagePosition="object-top"
    />
  );
}
