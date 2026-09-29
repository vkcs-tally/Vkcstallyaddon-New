import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Info, X, FileText } from 'lucide-react';
import { AddonItem } from '../data/addons';

interface TallyShopLauncherModalProps {
  addon: AddonItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TallyShopLauncherModal: React.FC<TallyShopLauncherModalProps> = ({
  addon,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  if (!isOpen || !addon) return null;

  const searchCode = addon.tallyShopSearchCode || 'TS05IC';
  const targetUrl = addon.tallyShopUrl || 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php';

  const handleCopyCode = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(searchCode).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyAll = () => {
    const text = [
      `Add-on Name: ${addon.title}`,
      `TallyShop Search Code: ${searchCode}`,
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
      `TallyShop Marketplace URL: ${targetUrl}`
    ].join('\n');

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const handleOpenTallyShop = () => {
    // Ensure copied to clipboard
    handleCopyCode();
    // Open TallyShop
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl border border-[#c6c6cd]/50 flex flex-col my-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#131b2e] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center font-bold text-sm">
              TS
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Opening TallyShop Marketplace</h3>
              <p className="text-xs text-[#bec6e0]">{addon.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                  Add-on Search Code / Alias
                </div>
                <div className="text-2xl font-mono font-extrabold text-[#191c1e] mt-0.5 tracking-wider">
                  {searchCode}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-100 font-semibold px-3 py-2 rounded-lg text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                      <span className="text-emerald-700 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Copy Full Details (Name, Description, Highlights) */}
          <div className="flex items-center justify-between bg-[#f8fafc] border border-slate-200 rounded-xl p-3">
            <div className="text-xs text-[#45464d]">
              <span className="font-semibold text-slate-900">Add-on Details &amp; Highlights:</span>
              <p className="text-[11px] text-[#515f74]">Copy name, description, and key capabilities</p>
            </div>
            <button
              onClick={handleCopyAll}
              className="bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
            >
              {copiedAll ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                  <span className="text-emerald-700 font-bold">Copied All!</span>
                </>
              ) : (
                <>
                  <FileText className="w-3.5 h-3.5 text-slate-700" />
                  <span>Copy Details</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Steps Guide */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-[#515f74] uppercase tracking-wider flex items-center gap-1.5">
              <Info className="w-4 h-4 text-[#22C55E]" />
              <span>How to view &amp; test directly in TallyShop:</span>
            </div>

            <ol className="space-y-2.5 text-xs text-[#45464d]">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#131b2e] text-[#22C55E] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  1
                </span>
                <span>
                  Click the green button below to open <strong>TallyShop</strong>. The code <strong>{searchCode}</strong> has already been copied to your clipboard.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#131b2e] text-[#22C55E] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  2
                </span>
                <span>
                  Paste <strong>{searchCode}</strong> into the search box at the top right of the TallyShop page and press <strong>Enter</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#131b2e] text-[#22C55E] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  3
                </span>
                <span>
                  <strong>{addon.title}</strong> will immediately open where you can click <strong>&quot;Try in lic. mode&quot;</strong> or test the demo!
                </span>
              </li>
            </ol>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={handleOpenTallyShop}
              className="w-full bg-[#22C55E] hover:bg-[#16a34a] text-slate-900 hover:text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <span>Open TallyShop &amp; Search ({searchCode})</span>
              <ExternalLink className="w-4 h-4" />
            </button>
            <p className="text-center text-[11px] text-[#515f74] mt-2">
              Opens TallySolutions official marketplace in a new tab
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
