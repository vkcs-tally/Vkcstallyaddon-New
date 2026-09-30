import React, { useState } from 'react';
import { X, CheckCircle2, ChevronRight, HelpCircle, Phone, Mail, FileText, Download } from 'lucide-react';
import { TALLY_SHOP_GUIDE_STEPS } from '../data/addons';

interface SupportGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookDemo: () => void;
}

export const SupportGuideModal: React.FC<SupportGuideModalProps> = ({
  isOpen,
  onClose,
  onBookDemo,
}) => {
  const [activeStepTab, setActiveStepTab] = useState(0);

  if (!isOpen) return null;

  const faqs = [
    {
      q: 'Will these add-ons work with my TallyPrime release?',
      a: 'Yes, all VKCS add-ons are tested and certified for TallyPrime Release 1.0 onwards.'
    },
    {
      q: 'Do I need separate licenses for multi-user Tally Gold?',
      a: 'Our add-on licenses bind seamlessly to your Tally.NET Serial Number. A single license works across all concurrent users on your Tally Gold installation!'
    },
    {
      q: 'How does the 1-day free trial work?',
      a: 'Go to Gateway of Tally > F1: Help > TallyShop. Search for the module and click "Try in Lic. Mode". Tally will immediately download and activate the module for 1 full business day with zero limitations.'
    },
    {
      q: 'What if we require custom fields or customized invoice printouts?',
      a: 'Vinay Chauhan and the VKCS technical development team provide custom TDL code alterations tailored specifically to your company requirements.'
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl border border-[#c6c6cd]/50 flex flex-col my-auto relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#131b2e] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">TallyPrime Add-on Guide &amp; Support</h3>
              <p className="text-xs text-[#bec6e0]">By Vinay Chauhan - V K Computerised System</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto text-[#191c1e]">
          {/* Step Walkthrough */}
          <div>
            <div className="text-xs font-bold text-[#515f74] uppercase tracking-wider mb-3">
              How to Test Demo in Tally Prime (4-Step Guide)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {TALLY_SHOP_GUIDE_STEPS.map((s, idx) => (
                <div
                  key={s.step}
                  className="bg-[#f7f9fb] border border-[#e0e3e5] p-3.5 rounded-xl flex flex-col justify-between"
                >
                  <div className="w-6 h-6 rounded-full bg-[#131b2e] text-[#22C55E] text-xs font-bold flex items-center justify-center mb-2">
                    {s.step}
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-[#191c1e] mb-1">{s.title}</div>
                  <div className="text-[11px] text-[#515f74] leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Technical Tip */}
          <div className="bg-[#22C55E]/10 border border-[#22C55E]/30 p-4 rounded-xl text-xs sm:text-sm text-[#191c1e] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#16a34a] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-[#16a34a]">License Management (TDL's and Addons)</div>
              <p className="text-[#45464d] mt-0.5 text-xs">
                To refresh or activate newly purchased licenses, navigate to <strong>Gateway of Tally &gt; F1: Help &gt; TDL's and Addons</strong> or press <strong>Ctrl+Alt+T</strong> to verify active TDL status.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <div className="text-xs font-bold text-[#515f74] uppercase tracking-wider mb-3">
              Frequently Asked Questions
            </div>
            <div className="space-y-2.5">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-[#eceef0]/60 border border-[#c6c6cd]/30 rounded-xl p-3.5 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer font-semibold text-xs sm:text-sm text-[#191c1e]">
                    <span>{faq.q}</span>
                    <ChevronRight className="w-4 h-4 text-[#515f74] group-open:rotate-90 transition-transform shrink-0 ml-2" />
                  </summary>
                  <p className="mt-2 text-xs text-[#45464d] leading-relaxed pt-2 border-t border-[#c6c6cd]/30">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Contact Developer Card */}
          <div className="bg-[#131b2e] text-white p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-bold text-sm">Need immediate phone or remote AnyDesk support?</div>
              <div className="text-xs text-[#bec6e0] mt-0.5">
                Our support desk is open Monday to Saturday, 9:30 AM – 7:00 PM IST.
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookDemo();
              }}
              className="bg-[#22C55E] text-slate-900 font-bold px-5 py-2.5 rounded-lg text-xs hover:bg-[#16a34a] hover:text-white transition-all shrink-0 cursor-pointer"
            >
              Book Walkthrough
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
