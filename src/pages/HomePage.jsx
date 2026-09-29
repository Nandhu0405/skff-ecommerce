import React from 'react';
import { useApp } from '../context/AppContext';
import { CATEGORIES, WHY_SKFF } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import { 
  ArrowRight, 
  Sparkles, 
  Award, 
  Microscope, 
  HeartHandshake, 
  Factory, 
  Globe2, 
  CheckCircle2, 
  Droplet, 
  Utensils,
  Quote 
} from 'lucide-react';

export default function HomePage() {
  const { navigateTo, products, openRFQModal, setCategoryFilter } = useApp();

  const featuredProducts = products.slice(0, 4);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return <Award className="w-7 h-7 text-[#D92550]" />;
      case 'Sparkles': return <Sparkles className="w-7 h-7 text-[#D92550]" />;
      case 'Microscope': return <Microscope className="w-7 h-7 text-[#D92550]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-7 h-7 text-[#D92550]" />;
      case 'Factory': return <Factory className="w-7 h-7 text-[#D92550]" />;
      case 'Globe2': return <Globe2 className="w-7 h-7 text-[#D92550]" />;
      default: return <Award className="w-7 h-7 text-[#D92550]" />;
    }
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-skff-hero py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#F0E1E4]">
        
        {/* Floating Pastel Decorative Shapes */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#F9D5E1]/40 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FCEBE1]/60 rounded-full blur-3xl animate-float-delayed pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#F9D5E1] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D92550] animate-ping" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D92550]">
                S. K. Flavours & Fragrances
              </span>
            </div>

            <h1 className="font-serif-skff text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F2421] leading-[1.1] tracking-tight">
              Discover Exceptional <br />
              <span className="text-[#D92550] italic">Flavours & Fragrances</span>
            </h1>

            <p className="text-base sm:text-lg text-[#555A6E] max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Explore premium flavour and fragrance solutions crafted with innovation, quality and passion. Serving international beverage, bakery, perfumery, and personal care leaders worldwide.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => navigateTo('products')}
                className="bg-[#D92550] hover:bg-[#C11B43] text-white px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-[#D92550]/25 flex items-center gap-2 hover:translate-y-[-2px]"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigateTo('flavours')}
                className="bg-white/80 hover:bg-white text-[#2D3142] hover:text-[#D92550] border border-[#F0E1E4] hover:border-[#F9D5E1] px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center gap-2"
              >
                <Utensils className="w-4 h-4 text-[#D92550]" />
                View Flavours
              </button>

              <button
                onClick={() => navigateTo('fragrances')}
                className="bg-white/80 hover:bg-white text-[#2D3142] hover:text-[#D92550] border border-[#F0E1E4] hover:border-[#F9D5E1] px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-sm flex items-center gap-2"
              >
                <Droplet className="w-4 h-4 text-[#D92550]" />
                View Fragrances
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 border-t border-[#F0E1E4]/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <span className="font-serif-skff font-bold text-2xl text-[#1F2421]">100</span>
                <span className="block text-[11px] text-[#8A90A3] uppercase font-semibold">Years Excellence</span>
              </div>
              <div>
                <span className="font-serif-skff font-bold text-2xl text-[#1F2421]">1,200+</span>
                <span className="block text-[11px] text-[#8A90A3] uppercase font-semibold">Active Formulations</span>
              </div>
              <div>
                <span className="font-serif-skff font-bold text-2xl text-[#1F2421]">35+</span>
                <span className="block text-[11px] text-[#8A90A3] uppercase font-semibold">Global Markets</span>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Floating Quote Popup Card */}
              <div className="absolute -top-10 -left-6 sm:-left-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#F9D5E1] shadow-2xl max-w-[260px] sm:max-w-[290px] z-20 animate-float hidden sm:flex items-start gap-3.5 transition-all">
                <div className="w-8 h-8 rounded-full bg-[#FCE7EC] flex items-center justify-center text-[#D92550] shrink-0 mt-0.5 shadow-xs">
                  <Quote className="w-4 h-4 transform -scale-x-100" />
                </div>
                <div>
                  <p className="text-[11px] italic font-serif-skff text-[#2D3142] leading-snug font-medium">
                    “Crafting exceptional sensory experiences with 100 years of passion & precision.”
                  </p>
                  <div className="flex items-center justify-between pt-1.5 text-[9px] font-bold text-[#8A90A3] uppercase tracking-wider">
                    <span>— SKFF Heritage R&D</span>
                    <span className="text-[#D92550]">Since 1926</span>
                  </div>
                </div>
              </div>

              {/* Main Visual Image Card - Realistic R&D Laboratory Photograph */}
              <div className="bg-white p-3 rounded-3xl shadow-2xl border border-[#F0E1E4] transform rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000"
                  alt="SKFF Advanced Flavour & Fragrance R&D Laboratory"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl"
                />
                <div className="p-4 bg-gradient-to-r from-[#FDFBF7] to-[#FDF2F4] rounded-xl mt-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#D92550] uppercase tracking-wider">R&D Excellence</span>
                    <h4 className="font-serif-skff font-bold text-base text-[#1F2421]">State-of-the-Art Formulation Lab</h4>
                  </div>
                  <button 
                    onClick={() => navigateTo('about')}
                    className="p-2 bg-[#D92550] text-white rounded-full hover:scale-110 transition-transform shadow-xs"
                    title="About SKFF Laboratory"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Floating Floating Pill Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#F9D5E1] shadow-xl flex items-center gap-3 animate-float hidden sm:flex z-20">
                <div className="w-10 h-10 rounded-full bg-[#FCE7EC] flex items-center justify-center text-[#D92550]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#1F2421] block">Bespoke R&D Synthesis</span>
                  <span className="text-[10px] text-[#555A6E]">Precision bench testing & GC-MS</span>
                </div>
              </div>

              {/* Floating Certification Badge */}
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md p-3 px-4 rounded-2xl border border-[#F9D5E1] shadow-xl flex items-center gap-2 animate-float-delayed hidden sm:flex z-20">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-bold text-[#2D3142]">IFRA & FSSC Certified</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D92550] bg-[#FCE7EC] px-3 py-1 rounded-full">
            Product Portfolio
          </span>
          <h2 className="font-serif-skff text-3xl sm:text-4xl font-bold text-[#1F2421] mt-3">
            Featured Categories
          </h2>
          <p className="text-sm text-[#555A6E] mt-2">
            Tailor-made solution spaces optimized for consumer appeal, processing stability, and sensory impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white border border-[#F0E1E4] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#F9D5E1] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-[#FAF7F5]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-white text-xs font-extrabold uppercase tracking-wider bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/30">
                    {cat.type}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-serif-skff text-xl font-bold text-[#1F2421] group-hover:text-[#D92550] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#555A6E] mt-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => {
                    setCategoryFilter(cat.name === 'Flavours' ? 'FLAVOURS' : cat.name === 'Fragrances' ? 'FRAGRANCES' : 'ALL');
                    navigateTo(cat.name === 'Flavours' ? 'flavours' : cat.name === 'Fragrances' ? 'fragrances' : 'products');
                  }}
                  className="w-full bg-[#FAF7F5] group-hover:bg-[#D92550] text-[#2D3142] group-hover:text-white border border-[#F0E1E4] group-hover:border-[#D92550] py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                >
                  Explore {cat.name}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D92550] bg-[#FCE7EC] px-3 py-1 rounded-full">
              Industry Favorites
            </span>
            <h2 className="font-serif-skff text-3xl sm:text-4xl font-bold text-[#1F2421] mt-3">
              Featured Formulations
            </h2>
            <p className="text-sm text-[#555A6E] mt-1">
              Popular flavour extracts and signature fragrance concentrates ready for sample evaluation or order.
            </p>
          </div>

          <button
            onClick={() => navigateTo('products')}
            className="self-start md:self-auto bg-white border border-[#D92550] text-[#D92550] hover:bg-[#FDF2F4] px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-2"
          >
            View All Catalog Products
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </section>

      {/* WHY SKFF */}
      <section className="bg-gradient-to-b from-[#FAF7F5] via-[#FDF2F4] to-[#FAF7F5] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#F0E1E4]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D92550] bg-white px-3 py-1 rounded-full border border-[#F9D5E1]">
              The SKFF Advantage
            </span>
            <h2 className="font-serif-skff text-3xl sm:text-4xl font-bold text-[#1F2421] mt-3">
              Why Global Brands Trust SKFF
            </h2>
            <p className="text-sm text-[#555A6E] mt-2">
              Over four decades of technical mastery, sensory innovation, and customer-first partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_SKFF.map((item) => (
              <div
                key={item.id}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#F0E1E4] hover:border-[#F9D5E1] hover:shadow-lg transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="p-3 bg-[#FDF2F4] rounded-xl group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <div>
                  <h3 className="font-serif-skff font-bold text-xl text-[#1F2421] group-hover:text-[#D92550] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555A6E] mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#D92550] via-[#C11B43] to-[#8C1030] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Subtle glow overlays */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-2xl space-y-3 relative z-10">
            <span className="bg-white/20 text-amber-200 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full inline-block">
              Co-Creation & Custom Synthesis
            </span>
            <h2 className="font-serif-skff text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Let's Create Something Exceptional Together
            </h2>
            <p className="text-sm text-white/90 leading-relaxed font-normal">
              Explore our flavour and fragrance solutions or connect with our team for customized requirements, bench testing, and pilot formulations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 relative z-10 w-full sm:w-auto">
            <button
              onClick={() => navigateTo('products')}
              className="w-full sm:w-auto bg-white text-[#D92550] hover:bg-gray-100 px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
            >
              Contact SKFF
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
