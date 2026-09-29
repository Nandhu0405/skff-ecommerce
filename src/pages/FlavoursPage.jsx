import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { Utensils, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FlavoursPage() {
  const { products, navigateTo, openRFQModal } = useApp();
  const [selectedSubcat, setSelectedSubcat] = useState('ALL');

  const flavourProducts = products.filter((p) => p.category === 'FLAVOURS');

  const categories = [
    { name: 'ALL', label: 'All Flavours' },
    { name: 'Fruity Flavours', label: 'Fruity Flavours' },
    { name: 'Bakery & Dessert Flavours', label: 'Bakery & Desserts' },
    { name: 'Dairy & Ice Cream Flavours', label: 'Dairy & Ice Cream' },
    { name: 'Beverages & Refreshment Flavours', label: 'Beverages & Refreshment' },
    { name: 'Confectionery & Candy Flavours', label: 'Confectionery & Candy' },
    { name: 'Culinary & Savoury Flavours', label: 'Culinary & Savoury' },
    { name: 'Health & Nutrition Applications', label: 'Health & Nutrition' }
  ];

  const displayedProducts = flavourProducts.filter((p) => {
    if (selectedSubcat === 'ALL') return true;
    return p.subcategory === selectedSubcat;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#FDF2F4] via-[#FDFBF7] to-[#FCEBE1] p-8 md:p-12 rounded-3xl border border-[#F0E1E4] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
        
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-[#F9D5E1]">
            <Utensils className="w-3.5 h-3.5 text-[#D92550]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D92550]">
              Taste Creation Division
            </span>
          </div>

          <h1 className="font-serif-skff text-4xl md:text-5xl font-bold text-[#1F2421]">
            Flavours
          </h1>
          
          <p className="text-sm text-[#555A6E] leading-relaxed">
            Discover flavour solutions designed to create memorable taste experiences. From natural fruit top notes to high-stability bakery extracts and taste-masking technology.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#2D3142]">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-[#D92550]" /> Heat & Acid Stable</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-[#D92550]" /> Natural & Nature-Identical</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-[#D92550]" /> Custom Bench Matching</span>
          </div>
        </div>

        <div className="w-full lg:w-80 h-48 rounded-2xl overflow-hidden shadow-lg border border-white">
          <img
            src="https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800"
            alt="Flavour Extracts"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-200">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedSubcat(cat.name)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedSubcat === cat.name
                ? 'bg-[#D92550] text-white shadow-xs'
                : 'bg-white border border-gray-200 text-[#555A6E] hover:bg-[#FDF2F4] hover:text-[#D92550]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Flavour Product Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">
            {selectedSubcat === 'ALL' ? 'All Flavour Formulations' : selectedSubcat}
          </h2>
          <span className="text-xs text-[#8A90A3] font-semibold">{displayedProducts.length} Products</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* Custom Flavour Banner */}
      <div className="bg-white border border-[#F0E1E4] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h3 className="font-serif-skff text-2xl font-bold text-[#1F2421]">
            Need a Unique Custom Flavour Profile?
          </h3>
          <p className="text-xs text-[#555A6E] mt-1 max-w-xl">
            Our flavourists can replicate benchmark targets or synthesize brand-exclusive signatures tailored to your processing parameters.
          </p>
        </div>
        <button
          onClick={() => openRFQModal()}
          className="bg-[#D92550] text-white hover:bg-[#C11B43] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 shadow-md flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-200" /> Request Custom Flavour Blending
        </button>
      </div>

    </div>
  );
}
