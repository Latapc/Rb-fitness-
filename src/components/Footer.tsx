import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { getDirectionsUrl } from '../utils/validation.ts';

interface FooterProps {
  onScrollToTop: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop, onNavigate }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12 px-4 sm:px-6 lg:px-8 text-neutral-400">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-neutral-900">
          {/* Logo with English details */}
          <div className="text-center md:text-left">
            <div className="font-athletic text-2xl sm:text-3xl font-extrabold tracking-wider text-white">
              RB FITNESS CLUB
            </div>
            <div className="text-xs font-semibold text-[#FF1E27] tracking-wider uppercase mt-1">
              Strength & Fitness Center
            </div>
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-neutral-400 mt-2">
              <MapPin className="w-3.5 h-3.5 text-[#FF1E27]" />
              <span>Mainpuri, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider">
            <button
              onClick={() => onNavigate('hero')}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Contact & Location
            </button>
            <a
              href={getDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF1E27] hover:underline transition-all"
            >
              Google Maps
            </a>
            <button
              onClick={onScrollToTop}
              className="p-2 rounded bg-neutral-900 hover:bg-neutral-800 text-white transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1E27]"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#FF1E27]" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center sm:text-left">
          <p>© 2026 RB FITNESS CLUB. All rights reserved.</p>
          <p className="text-neutral-400">Mainpuri, Uttar Pradesh, India</p>
        </div>
      </div>
    </footer>
  );
};
