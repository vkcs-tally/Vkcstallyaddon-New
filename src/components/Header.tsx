import React, { useState } from 'react';
import { Search, X, Menu, Phone, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onBookDemoClick: () => void;
  onOpenHelpModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onBookDemoClick,
  onOpenHelpModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPartnerTooltip, setShowPartnerTooltip] = useState(false);

  const navLinks = [
    { id: 'all', label: 'All Add-ons' },
    { id: 'inventory', label: 'Inventory' },
    { id: 'reports', label: 'Reports' },
    { id: 'utilities', label: 'Utilities' },
    { id: 'ca', label: 'CA & Tax' },
    { id: 'support', label: 'Support' },
    { id: 'test-demo', label: 'Test Demo' },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'support' || id === 'test-demo') {
      onOpenHelpModal();
    } else {
      setActiveTab(id);
      const catalogEl = document.getElementById('products-section');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-40 bg-white border-b border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group text-decoration-none"
          >
            <img
              src="/vkcs-logo-new-big.svg"
              alt="VKCS - Developing Tally Solutions"
              className="w-12 h-12 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform"
            />
            <div>
              <span className="font-bold text-xl sm:text-2xl text-[#191c1e] tracking-tight block leading-tight">
                VKCS Tally
              </span>
              <span className="text-[10px] text-[#515f74] font-medium tracking-wider uppercase block">
                Certified Add-on Store
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#eceef0]/60 p-1.5 rounded-xl border border-[#c6c6cd]/30">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id && link.id !== 'support' && link.id !== 'test-demo';
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm px-3.5 py-1.5 rounded-lg transition-all font-medium cursor-pointer ${
                  isActive
                    ? 'bg-[#131b2e] text-white shadow-sm'
                    : 'text-[#45464d] hover:text-[#191c1e] hover:bg-white/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center gap-3">
          {/* Search Box */}
          <div className="hidden md:flex items-center bg-[#eceef0] px-3.5 py-2 rounded-xl border border-[#c6c6cd]/40 focus-within:border-[#22C55E] focus-within:bg-white transition-all w-56 lg:w-64">
            <Search className="w-4 h-4 text-[#76777d] mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search add-ons..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                const catalogEl = document.getElementById('products-section');
                if (catalogEl && window.scrollY < 200) {
                  catalogEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-transparent text-sm text-[#191c1e] focus:outline-none w-full placeholder:text-[#76777d]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#76777d] hover:text-[#191c1e] ml-1 p-0.5"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Book Free Demo Button */}
          <button
            onClick={onBookDemoClick}
            className="bg-[#22C55E] text-slate-900 font-semibold px-4 sm:px-5 py-2.5 rounded-lg text-sm hover:bg-[#16a34a] hover:text-white transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
          >
            <span>Book Free Demo</span>
          </button>

          {/* Partner Avatar / Verified badge */}
          <div className="relative">
            <button
              onClick={() => setShowPartnerTooltip(!showPartnerTooltip)}
              onMouseEnter={() => setShowPartnerTooltip(true)}
              onMouseLeave={() => setShowPartnerTooltip(false)}
              className="relative block rounded-full focus:outline-none focus:ring-2 focus:ring-[#22C55E] cursor-pointer"
              title="Certified Tally Developer - Vinay Chauhan (VKCS)"
            >
              <img
                src="/vkcs-logo-new-big.svg"
                alt="VKCS Developing Tally Solutions - Vinay Chauhan"
                className="w-10 h-10 rounded-full object-cover shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#22C55E] border-2 border-white rounded-full"></span>
            </button>

            {/* Hover Tooltip Popup */}
            {showPartnerTooltip && (
              <div className="absolute right-0 top-12 w-72 bg-white rounded-xl shadow-xl border border-[#e0e3e5] p-4 text-xs text-[#191c1e] z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center gap-3 mb-2.5 pb-2.5 border-b border-[#eceef0]">
                  <img
                    src="/vkcs-logo-new-big.svg"
                    alt="VKCS Logo"
                    className="w-10 h-10 rounded-full object-cover shadow-xs"
                  />
                  <div>
                    <div className="font-semibold text-sm">Vinay Chauhan</div>
                    <div className="text-[11px] text-[#515f74]">V K Computerised System</div>
                  </div>
                </div>
                <div className="space-y-1.5 text-[#45464d]">
                  <div className="flex items-center gap-1.5 text-[#22C55E] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Certified Tally Solutions Partner</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#515f74] shrink-0" />
                    <span>5,000+ Active TDL Deployments</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#515f74] shrink-0" />
                    <span>Direct Technical Support Available</span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-[#eceef0] flex justify-between items-center text-[11px]">
                  <span className="text-[#515f74]">TallyShop ID: VKCS-SYS</span>
                  <button
                    onClick={onOpenHelpModal}
                    className="text-[#22C55E] font-semibold hover:underline cursor-pointer"
                  >
                    View Help Guide
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#191c1e] hover:bg-[#eceef0] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#e0e3e5] px-4 py-4 space-y-3 shadow-lg">
          <div className="flex items-center bg-[#eceef0] px-3.5 py-2 rounded-xl border border-[#c6c6cd]/40">
            <Search className="w-4 h-4 text-[#76777d] mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search add-ons..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                const catalogEl = document.getElementById('products-section');
                if (catalogEl) {
                  catalogEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-transparent text-sm text-[#191c1e] focus:outline-none w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === link.id
                    ? 'bg-[#131b2e] text-white'
                    : 'bg-[#f7f9fb] text-[#45464d] hover:bg-[#eceef0]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
