import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesGrid } from './components/ServicesGrid';
import { PortfolioSection } from './components/PortfolioSection';
import { TeamSection } from './components/TeamSection';
import { ProcessSection } from './components/ProcessSection';
import { ValuesSection } from './components/ValuesSection';
import { PackagesSection } from './components/PackagesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  const [selectedInterest, setSelectedInterest] = useState<string>('General Free Consultation');
  const [focusTrigger, setFocusTrigger] = useState<number>(0);

  const navigateToConsultation = (interestLabel?: string) => {
    if (interestLabel) {
      setSelectedInterest(interestLabel);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
    setFocusTrigger((prev) => prev + 1);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#111C18]">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <PortfolioSection onDiscussProject={(label) => navigateToConsultation(label)} />
          <PackagesSection />
          <AboutSection />
          <ServicesGrid onSelectService={(serviceTitle) => navigateToConsultation(serviceTitle)} />
          <TeamSection />
          <ProcessSection />
          <ValuesSection />
          <TestimonialsSection
            onBookConsultation={() => navigateToConsultation('General Free Consultation')}
          />
          <ContactSection
            selectedInterest={selectedInterest}
            onInterestChange={setSelectedInterest}
            focusTrigger={focusTrigger}
          />
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </MotionConfig>
  );
}
