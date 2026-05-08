import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageGate from "@/components/LanguageGate";

const barlow = Barlow_Condensed({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anchor Point Safety Training | OSHA-Compliant Training in the Pacific Northwest",
  description: "OSHA-compliant safety training for forklift, MEWP, bucket truck, and more. Serving the Pacific Northwest from Tualatin, Vancouver, and Eugene. English and Spanish instruction.",
  keywords: "safety training, OSHA, forklift certification, MEWP training, Pacific Northwest, Tualatin, Vancouver, Eugene, bilingual safety training",
  openGraph: {
    title: "Anchor Point Safety Training | Pacific Northwest",
    description: "Train safer. Work smarter. Go home safe. OSHA-compliant safety training delivered on-site across the Pacific Northwest.",
    url: "https://www.anchorsafetynw.com",
    siteName: "Anchor Point Safety Training",
    images: [
      {
        url: "https://www.anchorsafetynw.com/images/logo.png",
        width: 600,
        height: 300,
        alt: "Anchor Point Safety Training – Pacific Northwest",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchor Point Safety Training | Pacific Northwest",
    description: "Train safer. Work smarter. Go home safe. OSHA-compliant safety training across the Pacific Northwest.",
    images: ["https://www.anchorsafetynw.com/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${barlow.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100">
        <LanguageProvider>
          <LanguageGate />
          <Navbar />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
