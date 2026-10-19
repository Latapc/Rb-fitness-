import React from 'react';
import { MapPin, MessageSquare, ChevronDown, ArrowUpRight } from 'lucide-react';
import { getDirectionsUrl } from '../utils/validation.ts';
import heroBg from '../assets/images/hero-gym.jpg';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSection }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      {/* Background Hero Image with dark gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="RB Fitness Club interior gym weights and equipment"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15]"
          loading="eager"
        />
        {/* Layered gradients for cinematic depth and pristine text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/85" />
        {/* Subtle athletic red ambient glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF1E27]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Location & Badge Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/85 border border-neutral-800 text-xs tracking-wider uppercase text-neutral-300 backdrop-blur-sm mb-6">
          <MapPin className="w-3.5 h-3.5 text-[#FF1E27]" />
          <span>Mainpuri, Uttar Pradesh</span>
          <span className="text-neutral-500">·</span>
          <span className="text-[#FF1E27] font-semibold tracking-wider font-athletic">Strength & Fitness</span>
        </div>

        {/* Bold Athletic Headline */}
        <h1 className="font-athletic text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase leading-[1.05] drop-shadow-md">
          BUILD YOUR STRENGTH. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D54] via-[#FF1E27] to-red-600">
            OWN YOUR JOURNEY.
          </span>
        </h1>

        {/* Short Introduction */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed">
          Welcome to RB Fitness Club — your next step towards strength, fitness, and a healthier lifestyle in Mainpuri.
        </p>

        {/* The Two Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* GET DIRECTIONS Button */}
          <a
            href={getDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF1E27] text-white font-athletic text-base sm:text-lg font-bold tracking-wider uppercase rounded transition-all duration-200 hover:bg-[#D6151E] hover:scale-[1.02] active:scale-95 shadow-[0_0_25px_rgba(255,30,39,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MapPin className="w-5 h-5" />
            <span>GET DIRECTIONS</span>
            <ArrowUpRight className="w-4 h-4 ml-0.5" />
          </a>

          {/* CONTACT US Button */}
          <button
            onClick={() => onScrollToSection('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900/90 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-[#FF1E27]/70 font-athletic text-base sm:text-lg font-bold tracking-wider uppercase rounded transition-all duration-200 hover:scale-[1.02] active:scale-95 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1E27]"
          >
            <MessageSquare className="w-5 h-5 text-[#FF1E27]" />
            <span>CONTACT US</span>
          </button>
        </div>

        {/* Aesthetic Stock Photo Disclaimer */}
        <div className="mt-8 text-neutral-500 text-xs tracking-wide">
          <span>Introductory visual showcase · Visit club in Mainpuri for live atmosphere</span>
        </div>

        {/* Down Indicator */}
        <button
          onClick={() => onScrollToSection('about')}
          className="mt-10 p-2 text-neutral-400 hover:text-[#FF1E27] transition-colors animate-bounce focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1E27] rounded-full"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};
