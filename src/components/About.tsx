import React from 'react';
import { Dumbbell, Target, Users, MapPin, ArrowRight } from 'lucide-react';
import { getDirectionsUrl } from '../utils/validation.ts';

interface AboutProps {
  onScrollToContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onScrollToContact }) => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 relative border-t border-neutral-900">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#FF1E27]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#FF1E27] font-semibold mb-2">
            About The Club
          </div>
          <h2 className="font-athletic text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
            YOUR LOCAL FITNESS DESTINATION IN MAINPURI
          </h2>
          <div className="w-16 h-1 bg-[#FF1E27] mx-auto mt-4 mb-6 shadow-[0_0_10px_#FF1E27]" />
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            RB Fitness Club is built to provide an encouraging, disciplined space for individuals in Mainpuri seeking to build strength, elevate energy, and embrace an active, healthier lifestyle.
          </p>
        </div>

        {/* 3 Core Pillars (Truthful, professional, no invented facilities or awards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center text-[#FF1E27] group-hover:bg-[#FF1E27] group-hover:text-white transition-colors mb-6 shadow-sm">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="font-athletic text-xl font-bold uppercase text-white mb-3 tracking-wide">
                Strength & Conditioning
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Whether your goal is lifting heavier, improving endurance, or building functional stamina, the club offers an environment centered on dedicated effort and progress.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs text-neutral-500 uppercase tracking-wider">
              Training Focus
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center text-[#FF1E27] group-hover:bg-[#FF1E27] group-hover:text-white transition-colors mb-6 shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-athletic text-xl font-bold uppercase text-white mb-3 tracking-wide">
                Discipline & Consistency
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Fitness is a journey powered by daily habits. RB Fitness Club provides a focused atmosphere designed to keep you motivated every time you step through the doors.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs text-neutral-500 uppercase tracking-wider">
              Lifestyle Commitment
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center text-[#FF1E27] group-hover:bg-[#FF1E27] group-hover:text-white transition-colors mb-6 shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-athletic text-xl font-bold uppercase text-white mb-3 tracking-wide">
                Welcoming Community
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Everyone starts somewhere. From newcomers learning workout basics to dedicated athletes, members find an encouraging environment to train and thrive.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs text-neutral-500 uppercase tracking-wider">
              Mainpuri Fitness
            </div>
          </div>
        </div>

        {/* Quick Visit Callout */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800 rounded-xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-athletic text-2xl font-bold uppercase text-white tracking-wide">
              READY TO VISIT IN PERSON?
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl">
              Locate RB Fitness Club easily in Mainpuri via Google Maps or drop us an introductory inquiry to learn about membership and timings.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
            <a
              href={getDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#FF1E27] text-white font-athletic text-sm uppercase font-bold tracking-wider rounded hover:bg-[#D6151E] active:scale-95 transition-all shadow-[0_0_15px_rgba(255,30,39,0.35)]"
            >
              <MapPin className="w-4 h-4" />
              <span>Open In Google Maps</span>
            </a>
            <button
              onClick={onScrollToContact}
              className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-athletic text-sm uppercase font-bold tracking-wider rounded active:scale-95 transition-all"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 text-[#FF1E27]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
