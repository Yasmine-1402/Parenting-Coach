"use client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { About } from "@/components/sections/About";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CTA";
import { LanguageProvider } from "@/components/providers/LanguageContext";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LanguageProvider>
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Benefits />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <CallToAction />
        </main>
        <Footer />
      </LanguageProvider>
    </div>
  );
}
