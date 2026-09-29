import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { Droplet, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FragrancesPage() {
  const { products, openRFQModal } = useApp();
  const [selectedSubcat, setSelectedSubcat] = useState('ALL');

  const fragranceProducts = products.filter((p) => p.category === 'FRAGRANCES');

  const categories = [
    { name: 'ALL', label: 'All Fragrances' },
    { name: "Men's Fragrances", label: "Men's Fragrances" },
    { name: "Women's Fragrances", label: "Women's Fragrances" },
    { name: 'Unisex & Niche Fragrances', label: 'Unisex & Niche' },
    { name: 'Arabic & Oud Fragrances', label: 'Arabic & Oud' },
    { name: 'Fragrance Ingredients & Industrial Fragrances', label: 'B2B Ingredients & Accords' }
  ];

  const displayedProducts = fragranceProducts.filter((p) => {
    if (selectedSubcat === 'ALL') return true;
    return p.subcategory === selectedSubcat;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#FDF2F4] via-[#FDFBF7] to-[#FCEBE1] p-8 md:p-12 rounded-3xl border border-[#F0E1E4] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
        
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-[#F9D5E1]">
            <Droplet className="w-3.5 h-3.5 text-[#D92550]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D92550]">
              Olfactive Perfumery Division
            </span>
          </div>

          <h1 className="font-serif-skff text-4xl md:text-5xl font-bold text-[#1F2421]">
            Fragrances
          </h1>
          
          <p className="text-sm text-[#555A6E] leading-relaxed">
            Explore refined fragrance solutions created for diverse applications and consumer experiences. Engineered for long-lasting sillage, fabric substantivity, and dermatological safety.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#2D3142]">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-[#D92550]" /> IFRA 50th Amendment Compliant</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-[#D92550]" /> High Tenacity & Sillage</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-[#D92550]" /> Microencapsulation Options</span>
          </div>
        </div>

        <div className="w-full lg:w-80 h-48 rounded-2xl overflow-hidden shadow-lg border border-white">
          <img
            src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800"
            alt="Perfumery Fragrance Concentrates"
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

      {/* Fragrance Product Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">
            {selectedSubcat === 'ALL' ? 'All Fragrance Creations' : selectedSubcat}
          </h2>
          <span className="text-xs text-[#8A90A3] font-semibold">{displayedProducts.length} Products</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* Custom Fragrance Creation Banner */}
      <div className="bg-white border border-[#F0E1E4] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h3 className="font-serif-skff text-2xl font-bold text-[#1F2421]">
            Looking for a Signature Scent for Your Brand?
          </h3>
          <p className="text-xs text-[#555A6E] mt-1 max-w-xl">
            Our French and Indian perfumers collaborate directly with your product developers to formulate exclusive scent signatures.
          </p>
        </div>
        <button
          onClick={() => openRFQModal()}
          className="bg-[#D92550] text-white hover:bg-[#C11B43] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 shadow-md flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-200" /> Request Custom Fragrance Brief
        </button>
      </div>

    </div>
  );
}
