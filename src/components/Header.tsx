import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { getDirectionsUrl } from '../utils/validation.ts';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-lg'
          : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1E27] rounded-sm transition-transform active:scale-95"
            aria-label="RB Fitness Club - Return to top"
          >
            <div className="flex flex-col">
              <span className="font-athletic text-2xl sm:text-3xl font-bold tracking-wider text-white group-hover:text-[#FF1E27] transition-colors leading-none">
                RB FITNESS CLUB
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#FF1E27] tracking-wider mt-1 uppercase">
                Mainpuri, Uttar Pradesh
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm uppercase tracking-wider font-medium transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1E27] rounded-sm ${
                  activeSection === item.id
                    ? 'text-[#FF1E27] font-semibold'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF1E27] shadow-[0_0_8px_#FF1E27]" />
                )}
              </button>
            ))}

            {/* Direct Directions Link Button */}
            <a
              href={getDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-bold bg-[#FF1E27] text-white hover:bg-[#D6151E] active:scale-95 transition-all rounded shadow-[0_0_15px_rgba(255,30,39,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-xs uppercase font-bold bg-[#FF1E27] text-white rounded hover:bg-[#D6151E] active:scale-95 transition-all shadow-[0_0_10px_rgba(255,30,39,0.3)]"
              aria-label="Get directions to gym on Google Maps"
            >
              <MapPin className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-neutral-300 hover:text-white hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1E27]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/98 border-b border-neutral-800 px-4 pt-4 pb-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-3 rounded text-base font-athletic tracking-wider uppercase transition-colors ${
                  activeSection === item.id
                    ? 'bg-neutral-900 text-[#FF1E27] border-l-2 border-[#FF1E27]'
                    : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-800">
            <a
              href={getDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#FF1E27] text-white font-athletic text-sm uppercase font-bold tracking-wider rounded shadow-[0_0_15px_rgba(255,30,39,0.4)] active:scale-95 transition-all hover:bg-[#D6151E]"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
