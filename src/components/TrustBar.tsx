import React from 'react';
import { ShieldCheck, Users, ShoppingBag } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-[#eceef0] py-8 px-4 sm:px-6 lg:px-8 border-b border-[#e0e3e5]/60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Card 1 */}
        <div className="flex items-center justify-center md:justify-start gap-4 p-5 bg-white rounded-xl shadow-xs border border-[#e0e3e5]/60 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 flex items-center justify-center text-[#16a34a] shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-base sm:text-lg text-[#191c1e]">100% Tally Compatible</div>
            <div className="text-xs sm:text-sm text-[#45464d]">Built for TallyPrime</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center justify-center md:justify-start gap-4 p-5 bg-white rounded-xl shadow-xs border border-[#e0e3e5]/60 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-[#515f74]/15 flex items-center justify-center text-[#515f74] shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-base sm:text-lg text-[#191c1e]">Trusted by 5,000+</div>
            <div className="text-xs sm:text-sm text-[#45464d]">Businesses &amp; CA Firms</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center justify-center md:justify-start gap-4 p-5 bg-white rounded-xl shadow-xs border border-[#e0e3e5]/60 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 flex items-center justify-center text-[#16a34a] shrink-0">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-base sm:text-lg text-[#191c1e]">Available at Tally Shop</div>
            <div className="text-xs sm:text-sm text-[#45464d]">Instant license activation</div>
          </div>
        </div>
      </div>
    </section>
  );
};
