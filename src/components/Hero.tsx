import React from 'react';
import { CheckCircle2, PlayCircle, LayoutGrid, HelpCircle, ExternalLink, Award } from 'lucide-react';
import { VKCSEmailSignature } from './VKCSEmailSignature';

interface HeroProps {
  onExploreClick: () => void;
  onTestDemoClick: () => void;
  onOpenGuideModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onTestDemoClick,
  onOpenGuideModal,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#131b2e] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* Subtle Grid / Radial Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-8">
        {/* Top VKCS Email Signature Image Banner */}
        <div className="w-full flex flex-col gap-3">
          <VKCSEmailSignature className="shadow-2xl" />

          {/* New Button Below Top Banner: Our Profile with Tally */}
          <div className="flex items-center justify-center sm:justify-end">
            <a
              href="https://tallysolutions.com/partners/v-k-computerised-system/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0c4a75] to-[#0284c7] hover:from-[#083353] hover:to-[#0369a1] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all border border-sky-400/30 group active:scale-95 cursor-pointer"
            >
              <Award className="w-4 h-4 text-[#22C55E]" />
              <span>Our Profile with Tally</span>
              <ExternalLink className="w-4 h-4 text-sky-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 bg-black/40 border border-[#bec6e0]/20 px-3.5 py-1.5 rounded-full w-fit backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              <span className="text-xs font-semibold text-[#bec6e0] tracking-wide uppercase">
                Developed by Vinay Chauhan - V K Computerised System
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Power Up TallyPrime with 21+ Advanced Add-ons
            </h1>

            <p className="text-base sm:text-lg text-[#bec6e0] max-w-2xl leading-relaxed">
              Automate billing, inventory, instant reports, and mobile messaging directly inside Tally Prime.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="bg-[#22C55E] text-[#131b2e] px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-[#16a34a] hover:text-white transition-all shadow-lg shadow-[#22C55E]/20 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <LayoutGrid className="w-4 h-4" />
                <span>Explore All Add-ons</span>
              </button>

              <button
                onClick={onTestDemoClick}
                className="bg-white/10 hover:bg-white/20 text-white border border-[#bec6e0]/30 px-6 py-3.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <PlayCircle className="w-4 h-4 text-[#22C55E]" />
                <span>Test Free Demo</span>
              </button>
            </div>
          </div>

          {/* Right Column: TallyShop Quick Status Card */}
          <div className="lg:col-span-5">
          <div className="bg-white/5 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-[#bec6e0]/20 shadow-2xl flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-[#bec6e0]/10 pb-4">
              <span className="text-sm font-medium text-[#bec6e0]">TallyShop Quick Status</span>
              <span className="bg-[#22C55E]/20 text-[#22C55E] text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
                <span>Live & Certified</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">21+</div>
                <div className="text-xs sm:text-sm text-[#bec6e0] mt-0.5">Advanced Modules</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">5,000+</div>
                <div className="text-xs sm:text-sm text-[#bec6e0] mt-0.5">Active Installations</div>
              </div>
            </div>

            <button
              onClick={onOpenGuideModal}
              className="p-3.5 bg-black/60 hover:bg-black/80 rounded-xl text-xs sm:text-sm text-[#bec6e0] hover:text-white flex items-center gap-3 transition-colors text-left border border-white/5 cursor-pointer w-full group"
            >
              <HelpCircle className="w-5 h-5 text-[#22C55E] shrink-0 group-hover:scale-110 transition-transform" />
              <div className="flex-1">
                <div className="font-semibold text-white">Gateway of Tally &gt; F1: Help &gt; TallyShop</div>
                <div className="text-[11px] text-[#bec6e0]/80">Click to view 4-step quick setup guide</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};
