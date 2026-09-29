import React from 'react';
import Logo from './Logo';
import { useApp } from '../context/AppContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Globe, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

export default function Footer() {
  const { navigateTo, openRFQModal } = useApp();

  return (
    <footer className="bg-gradient-to-b from-[#FAF7F5] via-[#FDF2F4] to-[#FCEBE1] border-t border-[#F0E1E4] pt-16 pb-12 text-[#2D3142]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter / Quick Consultation Bar */}
        <div className="bg-white/80 backdrop-blur-md border border-[#F9D5E1] rounded-3xl p-6 md:p-8 shadow-xl shadow-[#D92550]/5 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D92550] bg-[#FCE7EC] px-3 py-1 rounded-full">
              B2B Flavor & Fragrance Partners
            </span>
            <h3 className="font-serif-skff text-2xl md:text-3xl font-bold text-[#1F2421] mt-2">
              Looking for Custom Flavor or Scent Formulations?
            </h3>
            <p className="text-sm text-[#555A6E] mt-1 max-w-2xl">
              Connect with our master flavorists and perfumers to request bespoke samples, pilot trials, or regulatory documentation.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
            <button
              onClick={() => openRFQModal()}
              className="bg-[#D92550] text-white hover:bg-[#C11B43] px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-[#D92550]/20 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              Request Custom Sample
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="bg-white border border-[#D92550] text-[#D92550] hover:bg-[#FDF2F4] px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-2"
            >
              Contact SKFF Team
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-xs text-[#555A6E] leading-relaxed max-w-sm mt-3">
              S. K. Flavours & Fragrances (SKFF) is an international leader in crafting innovative, high-purity flavour and fragrance solutions for beverages, food, confectionery, fine perfumery, personal care, and home care.
            </p>
            
            {/* Certifications Badge row */}
            <div className="pt-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#8A90A3] block mb-2">Quality & Compliance</span>
              <div className="flex flex-wrap gap-2 text-[10px] font-semibold text-[#4A4E69]">
                <span className="bg-white px-2.5 py-1 rounded-md border border-[#F0E1E4] shadow-2xs flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#D92550]" /> ISO 22000
                </span>
                <span className="bg-white px-2.5 py-1 rounded-md border border-[#F0E1E4] shadow-2xs flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#D92550]" /> FSSC 22000
                </span>
                <span className="bg-white px-2.5 py-1 rounded-md border border-[#F0E1E4] shadow-2xs flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#D92550]" /> HALAL
                </span>
                <span className="bg-white px-2.5 py-1 rounded-md border border-[#F0E1E4] shadow-2xs flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#D92550]" /> IFRA
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Product Categories */}
          <div>
            <h4 className="font-serif-skff font-bold text-lg text-[#1F2421] mb-4">Categories</h4>
            <ul className="space-y-2 text-xs text-[#555A6E]">
              <li>
                <button onClick={() => navigateTo('flavours')} className="hover:text-[#D92550] transition-colors">
                  Beverage Flavours
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('flavours')} className="hover:text-[#D92550] transition-colors">
                  Dairy & Bakery Flavours
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('flavours')} className="hover:text-[#D92550] transition-colors">
                  Confectionery & Savoury
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('fragrances')} className="hover:text-[#D92550] transition-colors">
                  Fine Fragrances
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('fragrances')} className="hover:text-[#D92550] transition-colors">
                  Personal & Home Care
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('fragrances')} className="hover:text-[#D92550] transition-colors">
                  Fabric Care Microcaps
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-serif-skff font-bold text-lg text-[#1F2421] mb-4">Company</h4>
            <ul className="space-y-2 text-xs text-[#555A6E]">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-[#D92550] transition-colors">
                  About SKFF
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('global-presence')} className="hover:text-[#D92550] transition-colors">
                  Global Presence
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('news')} className="hover:text-[#D92550] transition-colors">
                  News & Insights
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('products')} className="hover:text-[#D92550] transition-colors">
                  Product Marketplace
                </button>
              </li>
              <li>
                <button onClick={() => openRFQModal()} className="hover:text-[#D92550] transition-colors">
                  Submit RFQ
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('account')} className="hover:text-[#D92550] transition-colors">
                  Customer Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Contact */}
          <div>
            <h4 className="font-serif-skff font-bold text-lg text-[#1F2421] mb-4">Headquarters</h4>
            <div className="space-y-3 text-xs text-[#555A6E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D92550] shrink-0 mt-0.5" />
                <span>SKFF House, Marol Industrial Area, Andheri East, Mumbai 400059, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D92550] shrink-0" />
                <span>+91 22 6890 4000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D92550] shrink-0" />
                <span>info@skff.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#D92550] shrink-0" />
                <span>www.skff.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F0E1E4] pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8A90A3] gap-4">
          <p>© {new Date().getFullYear()} S. K. Flavours & Fragrances. All Rights Reserved.</p>
          <p className="italic font-serif-skff text-[#D92550]">"Passion to Perform..."</p>
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Regulatory Disclosures</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
