import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { ContactLocation } from './components/ContactLocation.tsx';
import { Footer } from './components/Footer.tsx';
import { NotificationToast } from './components/NotificationToast.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 4000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-[#FF1E27] selection:text-white">
      {/* Header */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onScrollToSection={scrollToSection}
        />

        {/* About Section */}
        <About
          onScrollToContact={() => scrollToSection('contact')}
        />

        {/* Contact and Location Section */}
        <ContactLocation
          onShowToast={handleShowToast}
        />
      </main>

      {/* Footer */}
      <Footer
        onScrollToTop={() => scrollToSection('hero')}
        onNavigate={scrollToSection}
      />

      {/* Interactive Toast */}
      <NotificationToast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
