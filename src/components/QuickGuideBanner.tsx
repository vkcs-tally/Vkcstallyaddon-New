import React from 'react';
import { Lightbulb, Headphones, ArrowRight } from 'lucide-react';

interface QuickGuideBannerProps {
  onRequestAssistance: () => void;
  onOpenStepGuide: () => void;
}

export const QuickGuideBanner: React.FC<QuickGuideBannerProps> = ({
  onRequestAssistance,
  onOpenStepGuide,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="bg-gradient-to-r from-[#131b2e] to-[#1a2642] text-white p-6 md:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#bec6e0]/15">
        <div
          onClick={onOpenStepGuide}
          className="flex items-center gap-5 cursor-pointer group"
          title="Click to view detailed walkthrough"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
            <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <div>
            <div className="text-[#22C55E] text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span>Quick Guide</span>
              <span className="text-[10px] bg-[#22C55E]/20 px-1.5 py-0.5 rounded text-[#22C55E] font-medium hidden sm:inline-block">
                Step-by-step
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#22C55E] transition-colors">
              How to Test Demo in Tally Prime
            </h2>
            <p className="text-xs sm:text-sm text-[#bec6e0] mt-0.5 flex items-center gap-1.5 flex-wrap">
              <span>Open TallyPrime</span>
              <span className="text-[#22C55E] font-bold">&gt;</span>
              <span>F1: Help</span>
              <span className="text-[#22C55E] font-bold">&gt;</span>
              <span>Click</span>
              <span className="text-[#22C55E] font-bold">&gt;</span>
              <span>TallyShop</span>
              <span className="text-[#22C55E] font-bold">&gt;</span>
              <span>Select Add-on</span>
              <span className="text-[#22C55E] font-bold">&gt;</span>
              <span className="text-white font-semibold underline decoration-[#22C55E]">Try Free</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
          <button
            onClick={onOpenStepGuide}
            className="hidden lg:flex items-center gap-1.5 text-xs text-[#bec6e0] hover:text-white px-3 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-all cursor-pointer"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onRequestAssistance}
            className="w-full md:w-auto bg-[#22C55E] text-slate-900 font-semibold px-6 py-3.5 rounded-lg text-sm hover:bg-[#16a34a] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <Headphones className="w-4 h-4" />
            <span>Request Assistance</span>
          </button>
        </div>
      </div>
    </section>
  );
};
