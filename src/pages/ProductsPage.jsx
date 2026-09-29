import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { Search, Filter, SlidersHorizontal, ArrowUpDown, Sparkles, X, Layers } from 'lucide-react';

export default function ProductsPage() {
  const { 
    products, 
    searchQuery, 
    setSearchQuery, 
    categoryFilter, 
    setCategoryFilter,
    subCategoryFilter,
    setSubCategoryFilter,
    openRFQModal
  } = useApp();

  const [sortBy, setSortBy] = useState('popular');
  const [quoteFilter, setQuoteFilter] = useState('ALL'); // ALL, PRICED, QUOTE_ONLY
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const itemsPerPage = 8;

  const categories = [
    { label: 'All Products', value: 'ALL' },
    { label: 'Flavours', value: 'FLAVOURS' },
    { label: 'Fragrances', value: 'FRAGRANCES' }
  ];

  const subCategoriesFlavours = [
    'ALL',
    'Fruity Flavours',
    'Bakery & Dessert Flavours',
    'Dairy & Ice Cream Flavours',
    'Beverages & Refreshment Flavours',
    'Confectionery & Candy Flavours',
    'Culinary & Savoury Flavours',
    'Health & Nutrition Applications'
  ];

  const subCategoriesFragrances = [
    'ALL',
    "Men's Fragrances",
    "Women's Fragrances",
    'Unisex & Niche Fragrances',
    'Arabic & Oud Fragrances',
    'Fragrance Ingredients & Industrial Fragrances'
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Main Category Match
      if (categoryFilter !== 'ALL' && p.category !== categoryFilter) return false;

      // Subcategory Match
      if (subCategoryFilter !== 'ALL' && p.subcategory !== subCategoryFilter) return false;

      // Quote Filter Match
      if (quoteFilter === 'PRICED' && (p.quoteRequired || p.price === null)) return false;
      if (quoteFilter === 'QUOTE_ONLY' && !p.quoteRequired && p.price !== null) return false;

      // Search Match across name, SKU, category, subcategory, application, description
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(query);
        const matchSku = p.sku.toLowerCase().includes(query);
        const matchCat = p.category.toLowerCase().includes(query);
        const matchSub = p.subcategory.toLowerCase().includes(query);
        const matchDesc = p.shortDescription.toLowerCase().includes(query);
        const matchApp = p.applications ? p.applications.some(a => a.toLowerCase().includes(query)) : false;
        return matchName || matchSku || matchCat || matchSub || matchDesc || matchApp;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'price-low') return (a.price || 99999) - (b.price || 99999);
      if (sortBy === 'price-high') return (b.price || 0) - (a.price || 0);
      return b.rating - a.rating; // default popular
    });
  }, [products, categoryFilter, subCategoryFilter, quoteFilter, searchQuery, sortBy]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = filteredProducts.slice(
    (currentPageNum - 1) * itemsPerPage,
    currentPageNum * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#FDF2F4] via-[#FDFBF7] to-[#FCEBE1] p-8 md:p-12 rounded-3xl border border-[#F0E1E4] relative overflow-hidden">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D92550] bg-white px-3 py-1 rounded-full border border-[#F9D5E1]">
            Global Ingredient Marketplace
          </span>
          <h1 className="font-serif-skff text-3xl md:text-5xl font-bold text-[#1F2421] mt-3">
            Explore Our Products
          </h1>
          <p className="text-sm text-[#555A6E] mt-2 leading-relaxed">
            Browse our comprehensive directory of food-grade flavour concentrates, fine fragrances, and functional specialty ingredients. Order sample packs or request bulk custom quotes.
          </p>
        </div>
      </div>

      {/* Main Search & Control Toolbar */}
      <div className="bg-white p-5 rounded-2xl border border-[#F0E1E4] shadow-sm space-y-4">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPageNum(1);
            }}
            placeholder="Search flavours, fragrances, product codes (e.g. SKFF-FLV-VN01)..."
            className="w-full text-sm pl-12 pr-10 py-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550] focus:ring-1 focus:ring-[#D92550] text-[#2D3142]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-gray-100">
          
          {/* Main Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  setCategoryFilter(cat.value);
                  setSubCategoryFilter('ALL');
                  setCurrentPageNum(1);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                  categoryFilter === cat.value
                    ? 'bg-[#D92550] text-white shadow-xs'
                    : 'bg-[#FAF7F5] text-[#555A6E] hover:bg-[#FDF2F4] hover:text-[#D92550]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Pricing / Quote Type Filter & Sort Dropdown */}
          <div className="flex items-center gap-3">
            <select
              value={quoteFilter}
              onChange={(e) => {
                setQuoteFilter(e.target.value);
                setCurrentPageNum(1);
              }}
              className="text-xs bg-[#FAF7F5] border border-gray-200 rounded-xl px-3 py-2 text-[#2D3142] focus:outline-none focus:border-[#D92550]"
            >
              <option value="ALL">All Pricing Types</option>
              <option value="PRICED">Online Price Available</option>
              <option value="QUOTE_ONLY">Custom RFQ Required</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs bg-[#FAF7F5] border border-gray-200 rounded-xl px-3 py-2 text-[#2D3142] focus:outline-none focus:border-[#D92550]"
            >
              <option value="popular">Sort: Featured & Popular</option>
              <option value="name-asc">Sort: Name (A-Z)</option>
              <option value="name-desc">Sort: Name (Z-A)</option>
              <option value="price-low">Sort: Price (Low to High)</option>
              <option value="price-high">Sort: Price (High to Low)</option>
            </select>
          </div>

        </div>

        {/* Subcategories Scroll Pill Tabs if Category Selected */}
        {(categoryFilter === 'FLAVOURS' || categoryFilter === 'FRAGRANCES') && (
          <div className="pt-3 border-t border-gray-100 flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-[10px] font-bold text-[#8A90A3] uppercase shrink-0 mr-1 flex items-center gap-1">
              <Layers className="w-3 h-3 text-[#D92550]" /> Subcategories:
            </span>
            {(categoryFilter === 'FLAVOURS' ? subCategoriesFlavours : subCategoriesFragrances).map((sub) => (
              <button
                key={sub}
                onClick={() => {
                  setSubCategoryFilter(sub);
                  setCurrentPageNum(1);
                }}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  subCategoryFilter === sub
                    ? 'bg-[#FCE7EC] text-[#D92550] border border-[#F9D5E1]'
                    : 'bg-[#FAF7F5] text-[#555A6E] hover:bg-gray-100'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

      </div>

      {/* Results Info & RFQ Callout */}
      <div className="flex items-center justify-between text-xs text-[#555A6E]">
        <p>
          Showing <span className="font-bold text-[#2D3142]">{filteredProducts.length}</span> products matching your criteria
        </p>

        <button
          onClick={() => openRFQModal()}
          className="text-[#D92550] font-bold hover:underline flex items-center gap-1"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          Can't find a specific SKU? Request Custom Synthesis
        </button>
      </div>

      {/* PRODUCT GRID (Desktop 4-col, Tablet 2-col, Mobile 1-col) */}
      {paginatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-[#F0E1E4] rounded-3xl p-12 text-center space-y-4">
          <div className="w-16 h-16 bg-[#FDF2F4] text-[#D92550] rounded-full flex items-center justify-center mx-auto">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="font-serif-skff text-2xl font-bold text-[#1F2421]">No matching products found</h3>
          <p className="text-xs text-[#555A6E] max-w-md mx-auto">
            Try adjusting your search terms, resetting filters, or contact our application desk for custom flavor blending.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setCategoryFilter('ALL');
              setSubCategoryFilter('ALL');
              setQuoteFilter('ALL');
            }}
            className="bg-[#D92550] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2 pt-6">
          <button
            disabled={currentPageNum === 1}
            onClick={() => setCurrentPageNum((p) => Math.max(p - 1, 1))}
            className="px-4 py-2 border border-gray-200 rounded-xl text-xs font-bold disabled:opacity-40 hover:bg-gray-50"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPageNum(i + 1)}
              className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                currentPageNum === i + 1
                  ? 'bg-[#D92550] text-white shadow-xs'
                  : 'bg-white border border-gray-200 text-[#2D3142] hover:bg-gray-50'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPageNum === totalPages}
            onClick={() => setCurrentPageNum((p) => Math.min(p + 1, totalPages))}
            className="px-4 py-2 border border-gray-200 rounded-xl text-xs font-bold disabled:opacity-40 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      )}

    </div>
  );
}
