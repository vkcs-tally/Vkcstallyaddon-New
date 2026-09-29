import React from 'react';
import { AddonItem } from '../data/addons';
import { X, CheckCircle2, ShieldCheck, Copy, Check, ExternalLink, FileText } from 'lucide-react';

interface QuickViewModalProps {
  addon: AddonItem | null;
  onClose: () => void;
  onRequestDemo: (addon: AddonItem) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  addon,
  onClose,
  onRequestDemo,
}) => {
  const [copiedSku, setCopiedSku] = React.useState(false);
  const [copiedCode, setCopiedCode] = React.useState(false);
  const [copiedTitle, setCopiedTitle] = React.useState(false);
  const [copiedAll, setCopiedAll] = React.useState(false);

  if (!addon) return null;

  const handleCopySku = () => {
    navigator.clipboard.writeText(addon.sku);
    setCopiedSku(true);
    setTimeout(() => setCopiedSku(false), 2000);
  };

  const handleCopyCode = () => {
    if (addon.tallyShopSearchCode) {
      navigator.clipboard.writeText(addon.tallyShopSearchCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleCopyTitle = () => {
    navigator.clipboard.writeText(addon.title);
    setCopiedTitle(true);
    setTimeout(() => setCopiedTitle(false), 2000);
  };

  const handleCopyAll = () => {
    const text = [
      `Add-on Name: ${addon.title}`,
      addon.tallyShopSearchCode ? `TallyShop Code: ${addon.tallyShopSearchCode}` : '',
      `SKU: ${addon.sku}`,
      `Category: ${addon.categoryLabel}`,
      `Compatibility: ${addon.tallyCompatibility}`,
      '',
      'Description:',
      addon.fullDescription || addon.description,
      '',
      'Key Capabilities & Highlights:',
      ...addon.features.map((f, i) => `${i + 1}. ${f}`),
      '',
      addon.tallyShopSearchCode
        ? 'TallyShop Marketplace URL: https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php'
        : ''
    ]
      .filter((line) => line !== '')
      .join('\n');

    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-[#c6c6cd]/50 flex flex-col my-auto relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Hero / Image Header */}
        <div className="relative h-60 sm:h-72 bg-[#131b2e] overflow-hidden">
          <img
            src={addon.modalImage}
            alt={addon.title}
            className="w-full h-full object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Badges */}
          <div className="absolute bottom-4 left-5 flex items-center gap-2 flex-wrap">
            <span className="bg-[#22C55E] text-slate-950 text-xs px-3 py-1 rounded-full font-bold shadow-md flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>Available at Tally Shop</span>
            </span>
            {addon.tallyShopSearchCode && (
              <span className="bg-[#131b2e] text-[#22C55E] text-xs px-2.5 py-1 rounded-full font-mono font-bold shadow-md border border-[#22C55E]/40">
                Code: {addon.tallyShopSearchCode}
              </span>
            )}
            <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full font-medium">
              {addon.categoryLabel}
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 flex flex-col gap-5 max-h-[65vh] overflow-y-auto">
          {/* Top Bar with SKU & Quick Copy Options */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#e0e3e5]">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-xs font-mono font-semibold text-[#515f74]">
                SKU: {addon.sku}
              </span>
              {addon.tallyShopSearchCode && (
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  TallyShop: {addon.tallyShopSearchCode}
                </span>
              )}
            </div>

            {/* Action Bar: Copy Code & Copy All */}
            <div className="flex items-center gap-2">
              {addon.tallyShopSearchCode && (
                <button
                  onClick={handleCopyCode}
                  className="text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 px-2.5 py-1 rounded flex items-center gap-1 cursor-pointer transition-all"
                  title="Copy TallyShop Code"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                      <span>Code Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-emerald-700" />
                      <span>Copy Code ({addon.tallyShopSearchCode})</span>
                    </>
                  )}
                </button>
              )}
              <button
                onClick={handleCopyAll}
                className="text-xs font-bold text-slate-900 bg-[#22C55E]/20 hover:bg-[#22C55E]/40 border border-[#22C55E]/60 px-2.5 py-1 rounded flex items-center gap-1.5 cursor-pointer transition-all shadow-xs"
                title="Copy complete add-on name, description, and highlights"
              >
                {copiedAll ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3]" />
                    <span className="text-emerald-800">All Details Copied!</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-3.5 h-3.5 text-emerald-800" />
                    <span>Copy All Details</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Add-on Title Section with Copy Name */}
          <div>
            <div className="flex items-center justify-between gap-3 mb-1">
              <span className="text-[11px] font-bold text-[#515f74] uppercase tracking-wider">
                Add-on Name
              </span>
              <button
                onClick={handleCopyTitle}
                className="text-xs text-[#16a34a] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                title="Copy Add-on Name"
              >
                {copiedTitle ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Copied Name!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Name</span>
                  </>
                )}
              </button>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#191c1e] tracking-tight">
              {addon.title}
            </h3>
          </div>

          {/* Description Section */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-[#515f74] uppercase tracking-wider">
              Description
            </span>
            <p className="text-sm text-[#45464d] leading-relaxed bg-[#f8fafc] p-3 rounded-lg border border-[#e2e8f0]">
              {addon.fullDescription}
            </p>
          </div>

          {/* Key Features List */}
          <div className="bg-[#eceef0]/60 p-4 rounded-xl border border-[#c6c6cd]/30 space-y-2.5">
            <div className="text-xs font-bold text-[#191c1e] uppercase tracking-wider">
              Key Capabilities &amp; Highlights
            </div>
            <div className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-[#191c1e]">
              {addon.features.map((feature, idx) => {
                const colonIdx = feature.indexOf(':');
                if (colonIdx > 0 && colonIdx < 40) {
                  const heading = feature.substring(0, colonIdx);
                  const body = feature.substring(colonIdx + 1);
                  return (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      <span className="leading-snug">
                        <strong className="font-bold text-[#0f172a]">{heading}:</strong>
                        {body}
                      </span>
                    </div>
                  );
                }
                return (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Compatibility Note */}
          <div className="flex items-center gap-2 text-xs text-[#515f74]">
            <ShieldCheck className="w-4 h-4 text-[#22C55E] shrink-0" />
            <span>Compatibility: <strong>{addon.tallyCompatibility}</strong></span>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-[#e0e3e5] mt-2">
            <div className="text-xs text-[#515f74] text-center sm:text-left">
              Instant activation via <strong>Gateway of Tally &gt; F1: Help &gt; TallyShop</strong>
            </div>

            {addon.tallyShopSearchCode ? (
              <button
                onClick={() => {
                  onRequestDemo(addon);
                  onClose();
                }}
                className="w-full sm:w-auto bg-[#22C55E] text-slate-900 font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#16a34a] hover:text-white transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 text-center"
              >
                <span>Test Demo in TallyShop ({addon.tallyShopSearchCode})</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  onRequestDemo(addon);
                  onClose();
                }}
                className="w-full sm:w-auto bg-[#22C55E] text-slate-900 font-bold px-6 py-3 rounded-lg text-sm hover:bg-[#16a34a] hover:text-white transition-all shadow-md cursor-pointer text-center"
              >
                Request Free Demo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
