import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { formatCurrency } from '../utils/formatCurrency';
import ProductCard from '../components/ProductCard';
import { 
  Heart, 
  ShoppingBag, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowLeft, 
  Package, 
  FileText, 
  FlaskConical, 
  Share2, 
  Minus, 
  Plus, 
  Info 
} from 'lucide-react';

export default function ProductDetailPage() {
  const { 
    products, 
    selectedProductId, 
    navigateTo, 
    addToCart, 
    wishlist, 
    toggleWishlist, 
    openRFQModal 
  } = useApp();

  const product = products.find((p) => p.id === selectedProductId) || products[0];

  const [selectedPackSize, setSelectedPackSize] = useState(
    product.packSizes ? product.packSizes[0] : 'Standard'
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');
  const [selectedImage, setSelectedImage] = useState(product.image);

  const isWish = wishlist.includes(product.id);
  const isQuoteOnly = product.quoteRequired || product.price === null;

  // Find related products in same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Back Button Breadcrumb */}
      <div>
        <button
          onClick={() => navigateTo('products')}
          className="text-xs font-bold text-[#555A6E] hover:text-[#D92550] flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Product Catalog
        </button>
      </div>

      {/* Main Product Hero Grid */}
      <div className="bg-white border border-[#F0E1E4] rounded-3xl p-6 md:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-4/3 bg-[#FAF7F5] rounded-2xl overflow-hidden border border-[#F0E1E4]">
            <img
              src={selectedImage || product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            <button
              onClick={() => toggleWishlist(product.id)}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/90 backdrop-blur-md shadow-md text-gray-500 hover:text-[#D92550] transition-all"
            >
              <Heart className={`w-5 h-5 ${isWish ? 'fill-[#D92550] text-[#D92550]' : ''}`} />
            </button>
          </div>

          {/* Thumbnails */}
          {product.additionalImages && product.additionalImages.length > 0 && (
            <div className="flex gap-3 overflow-x-auto pb-1">
              {[product.image, ...product.additionalImages].map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImage === img ? 'border-[#D92550] scale-105' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info & Purchase Controls */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="bg-[#FCE7EC] text-[#D92550] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-[#F9D5E1]">
                {product.category}
              </span>
              <span className="text-xs text-[#8A90A3] font-semibold">
                {product.subcategory}
              </span>
              <span className="text-xs font-mono bg-[#FAF7F5] text-gray-600 px-2 py-0.5 rounded border border-gray-200 ml-auto">
                SKU: {product.sku}
              </span>
            </div>

            <h1 className="font-serif-skff text-3xl md:text-4xl font-bold text-[#1F2421]">
              {product.name}
            </h1>

            <p className="text-sm text-[#555A6E] leading-relaxed">
              {product.shortDescription}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> {product.availability}
              </span>
              <span className="text-[#8A90A3]">MOQ: <strong className="text-[#2D3142]">{product.moq}</strong></span>
            </div>
          </div>

          {/* Pricing & Custom Quote Box */}
          <div className="bg-[#FAF7F5] p-5 rounded-2xl border border-[#F0E1E4] space-y-4">
            
            <div className="flex items-baseline justify-between">
              {isQuoteOnly ? (
                <div>
                  <span className="text-sm font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-md border border-amber-200">
                    Custom Quote Required
                  </span>
                  <span className="text-xs text-[#8A90A3] block mt-1">
                    B2B Contract Pricing Based on Order Volume
                  </span>
                </div>
              ) : (
                <div>
                  <span className="text-xs text-[#8A90A3] block">Unit Price ({selectedPackSize})</span>
                  <span className="text-3xl font-serif-skff font-bold text-[#D92550]">
                    {formatCurrency(product.price * quantity)}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">({formatCurrency(product.price)} / unit)</span>
                </div>
              )}
            </div>

            {/* Pack Size Selector */}
            {product.packSizes && product.packSizes.length > 0 && (
              <div>
                <label className="block text-xs font-bold text-[#2D3142] mb-1.5">
                  Select Pack Size:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.packSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedPackSize(size)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        selectedPackSize === size
                          ? 'bg-[#D92550] text-white shadow-xs'
                          : 'bg-white border border-gray-200 text-[#555A6E] hover:bg-gray-100'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            {!isQuoteOnly && (
              <div className="flex items-center gap-3 pt-1">
                <label className="text-xs font-bold text-[#2D3142]">Quantity:</label>
                <div className="flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
                    className="p-2 hover:bg-gray-100 text-gray-600"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-bold text-[#2D3142]">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 hover:bg-gray-100 text-gray-600"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {isQuoteOnly ? (
                <button
                  onClick={() => openRFQModal(product)}
                  className="w-full sm:col-span-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:opacity-95 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" /> Request Custom Quote
                </button>
              ) : (
                <>
                  <button
                    onClick={() => addToCart(product, quantity, selectedPackSize)}
                    className="w-full bg-[#D92550] hover:bg-[#C11B43] text-white py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add to Cart
                  </button>

                  <button
                    onClick={() => openRFQModal(product)}
                    className="w-full bg-white hover:bg-gray-50 border border-[#D92550] text-[#D92550] py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <FlaskConical className="w-4 h-4" /> Request Sample
                  </button>
                </>
              )}
            </div>

          </div>

          {/* Compliance Assurance */}
          <div className="flex items-center gap-4 text-xs text-[#555A6E] pt-2 border-t border-gray-100">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-[#D92550]" /> ISO 22000 Certified</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-[#D92550]" /> HALAL & KOSHER</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-[#D92550]" /> IFRA Compliant</span>
          </div>

        </div>

      </div>

      {/* Tabs Section: Specifications, Applications, Packaging */}
      <div className="bg-white border border-[#F0E1E4] rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        
        {/* Tab Headers */}
        <div className="flex border-b border-gray-100 gap-6 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('specs')}
            className={`text-xs font-bold tracking-wider uppercase pb-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'specs'
                ? 'border-[#D92550] text-[#D92550]'
                : 'border-transparent text-[#8A90A3] hover:text-[#2D3142]'
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab('desc')}
            className={`text-xs font-bold tracking-wider uppercase pb-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'desc'
                ? 'border-[#D92550] text-[#D92550]'
                : 'border-transparent text-[#8A90A3] hover:text-[#2D3142]'
            }`}
          >
            Detailed Description & Profile
          </button>
          <button
            onClick={() => setActiveTab('apps')}
            className={`text-xs font-bold tracking-wider uppercase pb-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'apps'
                ? 'border-[#D92550] text-[#D92550]'
                : 'border-transparent text-[#8A90A3] hover:text-[#2D3142]'
            }`}
          >
            Target Applications
          </button>
          <button
            onClick={() => setActiveTab('storage')}
            className={`text-xs font-bold tracking-wider uppercase pb-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'storage'
                ? 'border-[#D92550] text-[#D92550]'
                : 'border-transparent text-[#8A90A3] hover:text-[#2D3142]'
            }`}
          >
            Packaging & Storage
          </button>
        </div>

        {/* Tab Content */}
        <div className="pt-2">
          {activeTab === 'specs' && product.specifications && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(product.specifications).map(([key, val]) => (
                <div key={key} className="bg-[#FAF7F5] p-4 rounded-2xl border border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A90A3] block">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="text-xs font-bold text-[#2D3142] mt-0.5 block">{val}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'desc' && (
            <div className="space-y-4 max-w-3xl text-xs text-[#555A6E] leading-relaxed">
              <p>{product.detailedDescription}</p>
              <p>
                Created in accordance with strict international quality norms, this formulation undergoes rigorous gas chromatography and sensory panel evaluations to guarantee consistent batch-to-batch organoleptic reproducibility.
              </p>
            </div>
          )}

          {activeTab === 'apps' && product.applications && (
            <div className="flex flex-wrap gap-3">
              {product.applications.map((app) => (
                <div key={app} className="bg-[#FDF2F4] border border-[#F9D5E1] text-[#D92550] px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> {app}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'storage' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#FAF7F5] p-5 rounded-2xl border border-gray-100">
                <span className="font-bold text-[#2D3142] block mb-1">Standard Packaging</span>
                <p className="text-[#555A6E]">{product.packaging}</p>
              </div>
              <div className="bg-[#FAF7F5] p-5 rounded-2xl border border-gray-100">
                <span className="font-bold text-[#2D3142] block mb-1">Recommended Storage</span>
                <p className="text-[#555A6E]">{product.storage}</p>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6">
          <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">
            Related Formulations in {product.category}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
