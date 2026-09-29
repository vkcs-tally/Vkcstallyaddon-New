import React from 'react';
import { ShieldCheck, HelpCircle } from 'lucide-react';

interface FooterProps {
  onOpenGuide: () => void;
  onFilterCategory: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide, onFilterCategory }) => {
  return (
    <footer className="w-full bg-[#f2f4f6] py-10 sm:py-12 border-t border-[#e0e3e5]/60 mt-12 text-[#45464d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#e0e3e5]">
          <div className="flex items-center gap-2.5">
            <img
              src="/vkcs-logo-new-big.svg"
              alt="VKCS Logo"
              className="w-8 h-8 rounded-full object-cover shadow-xs"
            />
            <span className="font-bold text-sm text-[#191c1e]">VKCS Tally Add-ons Enterprise Storefront</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => onFilterCategory('inventory')}
              className="hover:text-[#191c1e] hover:underline cursor-pointer"
            >
              Inventory Add-ons
            </button>
            <button
              onClick={() => onFilterCategory('reports')}
              className="hover:text-[#191c1e] hover:underline cursor-pointer"
            >
              Advanced Reports
            </button>
            <button
              onClick={() => onFilterCategory('utilities')}
              className="hover:text-[#191c1e] hover:underline cursor-pointer"
            >
              Utilities &amp; WhatsApp
            </button>
            <button
              onClick={() => onFilterCategory('ca')}
              className="hover:text-[#191c1e] hover:underline cursor-pointer"
            >
              CA &amp; Tax Solutions
            </button>
            <button
              onClick={onOpenGuide}
              className="text-[#16a34a] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>How to Install Add-ons</span>
            </button>
          </div>
        </div>

        {/* Legal & Notice */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#515f74]">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span>© {new Date().getFullYear()} VKCS. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <a
              href="https://www.youtube.com/@vkcstallyaddon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 font-medium hover:underline transition-colors"
            >
              <span className="w-4 h-3 bg-[#FF0000] rounded-[3px] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-2 h-2 fill-white">
                  <path d="M10 15l5.19-3L10 9v6z" />
                </svg>
              </span>
              <span>YouTube: @vkcstallyaddon</span>
            </a>
          </div>
          <div className="text-center md:text-right">
            Need help installing add-ons in Tally Prime? Go to <strong>Gateway of Tally &gt; F1: Help &gt; TDL's and Addons</strong> to manage your licenses.
          </div>
        </div>
      </div>
    </footer>
  );
};
