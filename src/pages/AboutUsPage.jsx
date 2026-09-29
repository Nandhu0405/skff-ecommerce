import React from 'react';
import { useApp } from '../context/AppContext';
import { Award, ShieldCheck, Microscope, Factory, Globe2, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';

export default function AboutUsPage() {
  const { navigateTo, openRFQModal } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#FDF2F4] via-[#FDFBF7] to-[#FCEBE1] p-8 md:p-14 rounded-3xl border border-[#F0E1E4] text-center max-w-4xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#D92550] bg-white px-3.5 py-1 rounded-full border border-[#F9D5E1]">
          Heritage & Innovation Since 1978
        </span>
        <h1 className="font-serif-skff text-4xl md:text-5xl font-bold text-[#1F2421]">
          S. K. Flavours & Fragrances
        </h1>
        <p className="text-base text-[#555A6E] leading-relaxed italic font-serif-skff text-lg">
          "Driven by a relentless passion to perform, we bridge nature's finest aromatics with cutting-edge sensory science."
        </p>
      </div>

      {/* Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[#555A6E] leading-relaxed">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D92550] block">Corporate Story</span>
          <h2 className="font-serif-skff text-3xl font-bold text-[#1F2421]">
            Pioneering Taste & Olfactive Architecture for Over 4 Decades
          </h2>
          <p>
            Founded in 1978, S. K. Flavours & Fragrances (SKFF) has grown from a specialized essential oil distillation house into a global powerhouse creating high-value flavor compounds and fragrance concentrates.
          </p>
          <p>
            Our state-of-the-art creative centers in Mumbai, Dubai, and Singapore bring together master flavorists, perfumers, analytical chemists, and food application specialists dedicated to solving complex formulation challenges for world-leading brands.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 font-bold text-[#2D3142]">
            <div className="bg-[#FAF7F5] border border-gray-200 p-3 rounded-2xl flex-1 text-center">
              <span className="font-serif-skff text-2xl text-[#D92550] block">100%</span>
              <span className="text-[10px] text-[#8A90A3] uppercase">Quality Traceability</span>
            </div>
            <div className="bg-[#FAF7F5] border border-gray-200 p-3 rounded-2xl flex-1 text-center">
              <span className="font-serif-skff text-2xl text-[#D92550] block">35+</span>
              <span className="text-[10px] text-[#8A90A3] uppercase">Export Destinations</span>
            </div>
            <div className="bg-[#FAF7F5] border border-gray-200 p-3 rounded-2xl flex-1 text-center">
              <span className="font-serif-skff text-2xl text-[#D92550] block">1,200+</span>
              <span className="text-[10px] text-[#8A90A3] uppercase">Custom Formulations</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="bg-white p-3 rounded-3xl shadow-xl border border-[#F0E1E4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000"
              alt="SKFF Analytical R&D Center"
              className="w-full h-80 sm:h-96 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Pillars Section */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-serif-skff text-3xl font-bold text-[#1F2421]">Our Core Strengths</h2>
          <p className="text-xs text-[#555A6E] mt-1">Built on precision engineering, international compliance, and creative artistry.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#F0E1E4] p-6 rounded-2xl space-y-3 shadow-xs hover:border-[#F9D5E1] transition-all">
            <Microscope className="w-8 h-8 text-[#D92550]" />
            <h3 className="font-serif-skff font-bold text-xl text-[#1F2421]">R&D & Sensory Labs</h3>
            <p className="text-xs text-[#555A6E] leading-relaxed">
              Equipped with GC-MS analytical instrumentation, pilot scale extruders, beverage carbonation rigs, and climate-controlled fragrance testing chambers.
            </p>
          </div>

          <div className="bg-white border border-[#F0E1E4] p-6 rounded-2xl space-y-3 shadow-xs hover:border-[#F9D5E1] transition-all">
            <Factory className="w-8 h-8 text-[#D92550]" />
            <h3 className="font-serif-skff font-bold text-xl text-[#1F2421]">Hygienic Manufacturing</h3>
            <p className="text-xs text-[#555A6E] leading-relaxed">
              Automated stainless steel compounding vats with HEPA-filtered cleanroom packaging, preventing cross-contamination across allergen lines.
            </p>
          </div>

          <div className="bg-white border border-[#F0E1E4] p-6 rounded-2xl space-y-3 shadow-xs hover:border-[#F9D5E1] transition-all">
            <ShieldCheck className="w-8 h-8 text-[#D92550]" />
            <h3 className="font-serif-skff font-bold text-xl text-[#1F2421]">Global Accreditations</h3>
            <p className="text-xs text-[#555A6E] leading-relaxed">
              Full certification under ISO 22000, FSSC 22000, HALAL, KOSHER, FSSAI, and strict compliance with IFRA 50th amendment guidelines.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-[#D92550] to-[#8C1030] text-white p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="font-serif-skff text-2xl md:text-3xl font-bold">Partner with SKFF Technical Team</h3>
          <p className="text-xs text-white/90 mt-1 max-w-lg">
            Whether you require a cost-effective flavor replacement or a high-sillage signature perfume, our team is ready to assist.
          </p>
        </div>
        <button
          onClick={() => openRFQModal()}
          className="bg-white text-[#D92550] hover:bg-gray-100 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 shadow-md flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-600" /> Start Consultation
        </button>
      </div>

    </div>
  );
}
