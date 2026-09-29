/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ADDONS_DATA, AddonItem } from './data/addons';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { QuickGuideBanner } from './components/QuickGuideBanner';
import { Catalog } from './components/Catalog';
import { QuickViewModal } from './components/QuickViewModal';
import { Testimonials } from './components/Testimonials';
import { DemoBookingForm } from './components/DemoBookingForm';
import { SupportGuideModal } from './components/SupportGuideModal';
import { Footer } from './components/Footer';
import { TallyShopLauncherModal } from './components/TallyShopLauncherModal';
import { openTallyShopAddon } from './utils/tallyShop';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [quickViewAddon, setQuickViewAddon] = useState<AddonItem | null>(null);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState<boolean>(false);
  const [tallyShopModalAddon, setTallyShopModalAddon] = useState<AddonItem | null>(null);
  const [selectedDemoAddon, setSelectedDemoAddon] = useState<string>('Send Message from Tally to Mobile');

  const scrollToDemoSection = (addonTitle?: string) => {
    if (addonTitle) {
      setSelectedDemoAddon(addonTitle);
    }
    const demoElement = document.getElementById('demo-booking');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProductsSection = () => {
    const productsElement = document.getElementById('products-section');
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTestDemo = (addon: AddonItem) => {
    if (addon.tallyShopUrl) {
      // Copy code to clipboard immediately
      if (navigator?.clipboard?.writeText && addon.tallyShopSearchCode) {
        navigator.clipboard.writeText(addon.tallyShopSearchCode).catch(() => {});
      }
      // Open the "Opening TallyShop Marketplace" guide form
      setTallyShopModalAddon(addon);
      return;
    }
    setSelectedDemoAddon(addon.title);
    scrollToDemoSection(addon.title);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] font-sans text-[#191c1e] flex flex-col selection:bg-[#22C55E]/20 selection:text-[#131b2e]">
      {/* Header */}
      <Header
        activeTab={activeCategory}
        setActiveTab={(cat) => {
          setActiveCategory(cat);
          scrollToProductsSection();
        }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onBookDemoClick={() => scrollToDemoSection()}
        onOpenHelpModal={() => setIsGuideModalOpen(true)}
      />

      {/* Main Body */}
      <main className="w-full pt-20 flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreClick={scrollToProductsSection}
          onTestDemoClick={() => scrollToDemoSection()}
          onOpenGuideModal={() => setIsGuideModalOpen(true)}
        />

        {/* Trust & Compatibility Bar */}
        <TrustBar />

        {/* How to Test Demo Banner */}
        <QuickGuideBanner
          onRequestAssistance={() => scrollToDemoSection()}
          onOpenStepGuide={() => setIsGuideModalOpen(true)}
        />

        {/* Catalog of Add-ons */}
        <Catalog
          addons={ADDONS_DATA}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onQuickView={(addon) => setQuickViewAddon(addon)}
          onTestDemo={handleTestDemo}
        />

        {/* Testimonials */}
        <Testimonials />

        {/* Lead Capture / Demo Booking Form */}
        <DemoBookingForm
          addons={ADDONS_DATA}
          selectedAddonTitle={selectedDemoAddon}
          setSelectedAddonTitle={setSelectedDemoAddon}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenGuide={() => setIsGuideModalOpen(true)}
        onFilterCategory={(cat) => {
          setActiveCategory(cat);
          scrollToProductsSection();
        }}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        addon={quickViewAddon}
        onClose={() => setQuickViewAddon(null)}
        onRequestDemo={(addon) => handleTestDemo(addon)}
      />

      {/* Support & Step Guide Modal */}
      <SupportGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
        onBookDemo={() => scrollToDemoSection()}
      />

      {/* TallyShop Launcher & Search Code Helper Modal */}
      <TallyShopLauncherModal
        addon={tallyShopModalAddon}
        isOpen={!!tallyShopModalAddon}
        onClose={() => setTallyShopModalAddon(null)}
      />
    </div>
  );
}
