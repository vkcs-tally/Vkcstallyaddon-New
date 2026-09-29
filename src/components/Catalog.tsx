import React, { useState, useMemo } from 'react';
import { AddonItem } from '../data/addons';
import { Eye, ArrowUpDown, LayoutGrid, List, Sparkles, AlertCircle, Search, X, ExternalLink } from 'lucide-react';

interface CatalogProps {
  addons: AddonItem[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onQuickView: (addon: AddonItem) => void;
  onTestDemo: (addon: AddonItem) => void;
}

export const Catalog: React.FC<CatalogProps> = ({
  addons,
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
  onQuickView,
  onTestDemo,
}) => {
  const [sortBy, setSortBy] = useState<'default' | 'name'>('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', label: 'All Add-ons' },
    { id: 'inventory', label: 'Inventory' },
    { id: 'reports', label: 'Advanced Reports' },
    { id: 'utilities', label: 'Utilities' },
    { id: 'ca', label: 'CA & Tax' },
  ];

  // Category item counts (unfiltered by search query for intuitive discovery)
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: addons.length };
    addons.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, [addons]);

  const filteredAndSorted = useMemo(() => {
    const filtered = addons.filter((addon) => {
      const matchesCategory =
        activeCategory === 'all' || addon.category === activeCategory;
      const matchesSearch =
        addon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        addon.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (addon.tallyShopSearchCode &&
          addon.tallyShopSearchCode.toLowerCase().includes(searchQuery.toLowerCase())) ||
        addon.features.some((f) =>
          f.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'name') {
      return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    // Default: keep the exact defined catalog order (do not rearrange)
    return filtered;
  }, [addons, activeCategory, searchQuery, sortBy]);

  return (
    <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#16a34a] uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Ready-to-Use Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191c1e] tracking-tight">
            Certified Tally Add-on Catalog
          </h2>
          <p className="text-[#515f74] mt-2 text-base max-w-2xl">
            Streamline your accounting and inventory with production-ready TDL modules.
            Search by keyword or TallyShop code.
          </p>
        </div>

        {/* Total Count Badge */}
        <div className="flex items-center gap-3">
          <div className="bg-[#eceef0] text-[#191c1e] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#c6c6cd]/50">
            Showing <strong className="text-[#191c1e]">{filteredAndSorted.length}</strong> of{' '}
            {addons.length} Add-ons
          </div>
        </div>
      </div>

      {/* Filter and Control Toolbar */}
      <div className="bg-[#f2f4f6] rounded-2xl p-4 sm:p-5 border border-[#c6c6cd]/30 mb-8 space-y-4 shadow-sm">
        {/* Top row: Categories + View mode */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-[#131b2e] text-[#22C55E] shadow-sm'
                    : 'bg-white hover:bg-[#e6e8ea] text-[#515f74]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    activeCategory === cat.id
                      ? 'bg-[#22C55E]/20 text-[#22C55E]'
                      : 'bg-[#eceef0] text-[#515f74]'
                  }`}
                >
                  {categoryCounts[cat.id] ?? 0}
                </span>
              </button>
            ))}
          </div>

          {/* Right Controls: Sort & Layout Toggle */}
          <div className="flex items-center gap-2.5 self-end lg:self-auto">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-[#c6c6cd]/40 text-xs text-[#191c1e]">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#515f74]" />
              <label htmlFor="sort-select" className="sr-only">Sort by</label>
              <select
                id="sort-select"
                aria-label="Sort add-ons"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'default' | 'name')}
                className="bg-transparent border-none text-xs font-semibold text-[#191c1e] focus:outline-none cursor-pointer"
              >
                <option value="default">Default Order</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-white p-1 rounded-xl border border-[#c6c6cd]/40">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#131b2e] text-[#22C55E]'
                    : 'text-[#515f74] hover:text-[#191c1e]'
                }`}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-[#131b2e] text-[#22C55E]'
                    : 'text-[#515f74] hover:text-[#191c1e]'
                }`}
                title="List View"
                aria-label="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row: Search input inside toolbar */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#515f74]" />
          <input
            type="text"
            placeholder="Search by add-on title, feature, or code (e.g. TS06I5, Watermark, Bank, Barcode, WhatsApp)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#c6c6cd]/40 rounded-xl text-sm text-[#191c1e] placeholder:text-[#727782] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/40 focus:border-[#22C55E] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#515f74] hover:text-[#191c1e] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Empty State */}
      {filteredAndSorted.length === 0 && (
        <div className="bg-white rounded-2xl border border-dashed border-[#c6c6cd] p-12 text-center max-w-lg mx-auto">
          <AlertCircle className="w-12 h-12 text-[#515f74] mx-auto mb-3 opacity-60" />
          <h3 className="text-lg font-bold text-[#191c1e]">No matching add-ons found</h3>
          <p className="text-sm text-[#515f74] mt-1 mb-6">
            We couldn't find any add-ons matching &quot;{searchQuery}&quot;. Try resetting your filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="bg-[#131b2e] text-[#22C55E] font-semibold px-4 py-2 rounded-lg text-xs hover:bg-[#1f2b45] transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Grid Mode */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredAndSorted.map((addon) => (
            <div
              key={addon.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#c6c6cd]/40 hover:border-[#22C55E]/60 transition-all duration-300 hover:shadow-xl flex flex-col group"
            >
              {/* Card Image */}
              <div
                className="relative h-48 sm:h-52 bg-[#131b2e] overflow-hidden cursor-pointer"
                onClick={() => onQuickView(addon)}
              >
                <img
                  src={addon.cardImage}
                  alt={addon.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-[#131b2e]/85 backdrop-blur-md text-[#22C55E] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {addon.categoryLabel}
                  </span>
                  {addon.popular && (
                    <span className="bg-[#22C55E] text-slate-950 text-[11px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      POPULAR
                    </span>
                  )}
                </div>

                {/* TallyShop Code Badge */}
                {addon.tallyShopSearchCode && (
                  <div className="absolute bottom-3 left-3 bg-[#131b2e]/90 text-white text-[11px] font-mono px-2.5 py-1 rounded-md border border-white/20">
                    Code: <span className="text-[#22C55E] font-bold">{addon.tallyShopSearchCode}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3
                    onClick={() => onQuickView(addon)}
                    className="font-extrabold text-lg text-[#191c1e] hover:text-[#16a34a] transition-colors cursor-pointer tracking-tight line-clamp-2"
                  >
                    {addon.title}
                  </h3>

                  <p className="text-sm text-[#45464d] line-clamp-2 leading-relaxed mt-2">
                    {addon.description}
                  </p>
                </div>

                {/* Card Footer: Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-[#e0e3e5]/60">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#16a34a]">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
                    <span>TallyShop Certified Add-on</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => onQuickView(addon)}
                      className="p-2.5 bg-[#eceef0] hover:bg-[#e6e8ea] hover:text-[#131b2e] rounded-lg text-[#191c1e] transition-colors cursor-pointer"
                      title="Quick View Details"
                      aria-label="Quick View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onTestDemo(addon)}
                      className="bg-[#22C55E] text-slate-900 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-[#16a34a] hover:text-white transition-all flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95"
                      title={addon.tallyShopSearchCode ? `Open in TallyShop with code ${addon.tallyShopSearchCode}` : 'Test Demo'}
                    >
                      <span>Test Demo</span>
                      {addon.tallyShopSearchCode && <ExternalLink className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List Mode */
        <div className="space-y-4">
          {filteredAndSorted.map((addon) => (
            <div
              key={addon.id}
              className="bg-white rounded-xl overflow-hidden border border-[#c6c6cd]/40 p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 flex-1">
                <img
                  src={addon.cardImage}
                  alt={addon.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg shrink-0 cursor-pointer border border-[#eceef0]"
                  onClick={() => onQuickView(addon)}
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#515f74] uppercase tracking-wider">
                      {addon.categoryLabel}
                    </span>
                    <span className="text-[10px] bg-[#22C55E]/15 text-[#16a34a] px-2 py-0.5 rounded font-semibold">
                      TallyShop Certified
                    </span>
                  </div>
                  <h3
                    onClick={() => onQuickView(addon)}
                    className="font-bold text-base sm:text-lg text-[#191c1e] hover:text-[#16a34a] transition-colors cursor-pointer"
                  >
                    {addon.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#45464d] mt-1 max-w-2xl line-clamp-1 sm:line-clamp-2">
                    {addon.fullDescription}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full md:w-auto md:flex-col md:items-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-[#eceef0]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onQuickView(addon)}
                    className="p-2.5 bg-[#eceef0] hover:bg-[#e6e8ea] rounded-lg text-[#191c1e] transition-colors cursor-pointer"
                    title="Quick View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onTestDemo(addon)}
                    className="bg-[#22C55E] text-slate-900 font-semibold px-4 py-2.5 rounded-lg text-sm hover:bg-[#16a34a] hover:text-white transition-all shadow-xs cursor-pointer active:scale-95 whitespace-nowrap flex items-center gap-1.5"
                    title={addon.tallyShopSearchCode ? `Open in TallyShop with code ${addon.tallyShopSearchCode}` : 'Test Demo'}
                  >
                    <span>Test Demo</span>
                    {addon.tallyShopSearchCode && <ExternalLink className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
