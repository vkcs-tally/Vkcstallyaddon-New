import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface VKCSEmailSignatureProps {
  className?: string;
}

export const VKCSEmailSignature: React.FC<VKCSEmailSignatureProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`w-full overflow-hidden rounded-3xl bg-white text-[#191c1e] shadow-2xl border border-slate-100 transition-all ${className}`}
    >
      <div className="relative overflow-hidden bg-white px-6 py-8 sm:px-10 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Circular Badge Emblem */}
        <div className="relative shrink-0 flex items-center justify-center my-auto">
          <img
            src="/vkcs-logo-new-big.svg"
            alt="VKCS - Developing Tally Solutions"
            className="w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover shadow-2xl hover:scale-105 transition-transform"
          />
        </div>

        {/* Right Content Column */}
        <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right gap-2.5">
          {/* Subheader: Certified Partner */}
          <div className="flex items-center justify-center md:justify-end gap-2 text-xs sm:text-sm font-semibold">
            <span className="text-[#0369a1] font-bold">
              Certified Tally Integrator &amp; Extender
            </span>
          </div>

          {/* Golden / Yellow Company Name */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#eab308] tracking-wider uppercase leading-none">
            V K COMPUTERISED SYSTEM
          </h2>

          {/* Developing Tally Solutions Pill */}
          <div className="inline-block bg-[#0c4a75] text-white text-xs sm:text-sm font-bold px-5 py-1.5 rounded-full shadow-sm">
            Developing Tally Solutions
          </div>

          {/* Contact Details List */}
          <div className="flex flex-col items-center md:items-end gap-2 text-xs sm:text-sm text-[#0f172a] font-medium pt-1">
            {/* Phone */}
            <a
              href="tel:9825042042"
              className="flex items-center gap-2.5 hover:text-[#0369a1] transition-colors group cursor-pointer"
            >
              <span className="font-semibold">98250 42042, 96647 88685</span>
              <span className="w-7 h-7 rounded-full bg-[#1e293b] text-white flex items-center justify-center text-xs shrink-0 group-hover:bg-[#0369a1] transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:tally.godhra@gmail.com"
              className="flex items-center gap-2.5 hover:text-[#0369a1] transition-colors group cursor-pointer"
            >
              <span className="font-semibold">tally.godhra@gmail.com</span>
              <span className="w-7 h-7 rounded-full bg-[#1e293b] text-white flex items-center justify-center text-xs shrink-0 group-hover:bg-[#0369a1] transition-colors">
                <Mail className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Address */}
            <div className="flex items-center gap-2.5 text-[#334155]">
              <span>Patelwada, Godhra - 389001 Gujarat India</span>
              <span className="w-7 h-7 rounded-full bg-[#1e293b] text-white flex items-center justify-center text-xs shrink-0">
                <MapPin className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* YouTube Channel Line as Hyperlink with embedded YouTube logo */}
          <a
            href="https://www.youtube.com/@vkcstallyaddon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 pt-2 px-3.5 py-1.5 rounded-full bg-red-50 hover:bg-red-100 text-[#d97706] hover:text-[#b45309] border border-red-200/70 transition-all duration-200 group cursor-pointer shadow-xs active:scale-95"
            title="Visit VKCS Tally Add-on on YouTube"
          >
            {/* Embedded YouTube Badge Logo */}
            <span className="flex items-center justify-center w-6 h-4.5 bg-[#FF0000] rounded-[6px] shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white" aria-hidden="true">
                <path d="M10 15l5.19-3L10 9v6z" />
              </svg>
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-tight text-[#c2410c] group-hover:underline">
              YouTube Channel : <span className="text-[#0f172a] font-semibold group-hover:text-red-700">VKCS Tally Add-on</span>
            </span>
            <svg
              className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600 transition-colors ml-0.5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
