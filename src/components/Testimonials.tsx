import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/addons';

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#eceef0] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#e0e3e5]/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#515f74] text-xs uppercase tracking-wider font-bold">
            TESTIMONIALS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e] mt-1 tracking-tight">
            Trusted by CAs &amp; Business Leaders
          </h2>
          <p className="text-sm sm:text-base text-[#45464d] mt-2">
            See how VKCS Tally Add-ons streamline daily operations across thousands of firms.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={index}
              className="bg-white p-7 sm:p-8 rounded-xl shadow-xs border border-[#e0e3e5]/70 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col gap-4">
                {/* 5 Green Stars */}
                <div className="flex text-[#22C55E] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#22C55E]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#191c1e] italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-[#eceef0]">
                <div className="w-10 h-10 rounded-full bg-[#131b2e] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-sm text-[#191c1e]">{t.name}</div>
                  <div className="text-xs text-[#515f74]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
