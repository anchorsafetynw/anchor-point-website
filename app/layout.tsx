import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageGate from "@/components/LanguageGate";

export const metadata: Metadata = {
  title: "Anchor Point Safety Training | OSHA-Compliant Training in the Pacific Northwest",
  description: "OSHA-compliant safety training for forklift, MEWP, bucket truck, and more. Serving the Pacific Northwest from Tualatin, Vancouver, and Eugene. English and Spanish instruction.",
  keywords: "safety training, OSHA, forklift certification, MEWP training, Pacific Northwest, Tualatin, Vancouver, Eugene, bilingual safety training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100">
        <LanguageProvider>
          <LanguageGate />
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
