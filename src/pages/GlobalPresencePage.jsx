import React, { useState } from 'react';
import { GLOBAL_OFFICES } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { MapPin, Phone, Mail, Globe, Building2, ArrowRight } from 'lucide-react';

export default function GlobalPresencePage() {
  const { navigateTo } = useApp();
  const [selectedOffice, setSelectedOffice] = useState(GLOBAL_OFFICES[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FDF2F4] via-[#FDFBF7] to-[#FCEBE1] p-8 md:p-12 rounded-3xl border border-[#F0E1E4] text-center max-w-4xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#D92550] bg-white px-3 py-1 rounded-full border border-[#F9D5E1]">
          Global Footprint
        </span>
        <h1 className="font-serif-skff text-3xl md:text-5xl font-bold text-[#1F2421]">
          Global Facilities & Network
        </h1>
        <p className="text-xs md:text-sm text-[#555A6E] leading-relaxed max-w-2xl mx-auto">
          Exporting premium flavour extracts and fine fragrances to over 35+ countries with dedicated creative labs and technical centers across India, Middle East, Europe, and Asia-Pacific.
        </p>
      </div>

      {/* Main Interactive Map & Office Selector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Office List Selector */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="font-serif-skff font-bold text-2xl text-[#1F2421]">Regional Headquarters & Creative Hubs</h3>
          <p className="text-xs text-[#8A90A3]">Click any center to inspect address & direct contacts</p>

          <div className="space-y-3">
            {GLOBAL_OFFICES.map((office) => {
              const isSelected = selectedOffice.id === office.id;
              return (
                <div
                  key={office.id}
                  onClick={() => setSelectedOffice(office)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#D92550] shadow-md ring-2 ring-[#D92550]/20'
                      : 'bg-[#FAF7F5] border-gray-200 hover:border-[#F9D5E1] hover:bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D92550] bg-[#FCE7EC] px-2 py-0.5 rounded">
                        {office.type}
                      </span>
                      <h4 className="font-serif-skff font-bold text-lg text-[#1F2421] mt-1">
                        {office.city}, {office.country}
                      </h4>
                      <p className="text-xs text-[#555A6E] font-medium">{office.title}</p>
                    </div>

                    <MapPin className={`w-5 h-5 shrink-0 ${isSelected ? 'text-[#D92550]' : 'text-gray-400'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Interactive Map Simulator & Details */}
        <div className="lg:col-span-7 bg-white border border-[#F0E1E4] rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          
          {/* Simulated Map Graphic Container */}
          <div className="relative h-72 sm:h-80 bg-slate-900 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center p-4">
            {/* World Map Overlay Graphic */}
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
            
            {/* Map Pin Callouts */}
            <div className="relative z-10 text-center space-y-3 max-w-md">
              <div className="w-14 h-14 rounded-full bg-[#D92550]/20 text-[#D92550] flex items-center justify-center mx-auto border border-[#D92550] animate-pulse">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <span className="text-amber-300 font-mono text-[10px] uppercase font-bold tracking-widest block">
                  LAT: {selectedOffice.coordinates.lat} | LNG: {selectedOffice.coordinates.lng}
                </span>
                <h4 className="font-serif-skff text-2xl font-bold text-white mt-1">
                  {selectedOffice.title}
                </h4>
                <p className="text-xs text-gray-300">{selectedOffice.city}, {selectedOffice.country}</p>
              </div>
            </div>
          </div>

          {/* Selected Office Contact Card */}
          <div className="bg-[#FAF7F5] p-6 rounded-2xl border border-gray-200 space-y-4">
            <h4 className="font-bold text-sm text-[#2D3142] border-b border-gray-200 pb-2">
              Facility Address & Touchpoints
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#D92550] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-700 block">Address</span>
                  <span className="text-[#555A6E]">{selectedOffice.address}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#D92550] shrink-0" />
                  <div>
                    <span className="font-bold text-gray-700 block">Telephone</span>
                    <span className="text-[#555A6E]">{selectedOffice.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#D92550] shrink-0" />
                  <div>
                    <span className="font-bold text-gray-700 block">Email Desk</span>
                    <span className="text-[#555A6E]">{selectedOffice.email}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => navigateTo('contact')}
                className="bg-[#D92550] text-white hover:bg-[#C11B43] px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs"
              >
                Schedule Consultation at {selectedOffice.city} <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
