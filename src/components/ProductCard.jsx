import React from 'react';
import { useApp } from '../context/AppContext';
import { formatCurrency } from '../utils/formatCurrency';
import { Heart, ShoppingBag, Eye, Sparkles, Check, FileText } from 'lucide-react';

export default function ProductCard({ product }) {
  const { navigateTo, addToCart, wishlist, toggleWishlist, openRFQModal } = useApp();

  const isWish = wishlist.includes(product.id);
  const isQuoteOnly = product.quoteRequired || product.price === null;

  return (
    <div className="bg-white border border-[#F0E1E4] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#F9D5E1] transition-all duration-300 flex flex-col group relative">
      
      {/* Product Image & Badges */}
      <div className="relative aspect-4/3 bg-[#FAF7F5] overflow-hidden cursor-pointer" onClick={() => navigateTo('product-detail', product.id)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
          <span className="bg-white/90 backdrop-blur-md text-[#D92550] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/80 shadow-2xs">
            {product.category}
          </span>
          {isQuoteOnly && (
            <span className="bg-amber-100/90 text-amber-800 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-amber-200">
              Custom Quote
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label="Wishlist"
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-md text-gray-500 hover:text-[#D92550] hover:bg-white shadow-sm transition-all"
        >
          <Heart className={`w-4 h-4 ${isWish ? 'fill-[#D92550] text-[#D92550]' : ''}`} />
        </button>

        {/* Quick View Button overlay on hover */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateTo('product-detail', product.id);
            }}
            className="bg-white/90 hover:bg-white text-[#2D3142] hover:text-[#D92550] text-xs font-bold px-4 py-1.5 rounded-full shadow-md backdrop-blur-md flex items-center gap-1.5 whitespace-nowrap"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-[#8A90A3] mb-1 font-semibold">
            <span>{product.subcategory}</span>
            <span className="font-mono bg-[#FAF7F5] px-1.5 py-0.5 rounded border border-[#F0E1E4]">
              {product.sku}
            </span>
          </div>

          <h3 
            onClick={() => navigateTo('product-detail', product.id)}
            className="font-serif-skff text-lg font-bold text-[#1F2421] group-hover:text-[#D92550] transition-colors line-clamp-1 cursor-pointer"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#555A6E] mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing / Quote Footer & Action Buttons */}
        <div className="mt-4 pt-4 border-t border-[#FAF2F4]">
          <div className="flex items-baseline justify-between mb-3">
            {isQuoteOnly ? (
              <div>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Price Upon RFQ
                </span>
                <span className="text-[10px] text-[#8A90A3] block mt-0.5">MOQ: {product.moq}</span>
              </div>
            ) : (
              <div>
                <span className="text-lg font-bold text-[#D92550] font-serif-skff">
                  {formatCurrency(product.price)}
                </span>
                <span className="text-[10px] text-[#8A90A3] ml-1">/ {product.packSizes ? product.packSizes[0] : 'kg'}</span>
              </div>
            )}

            <span className="text-[10px] text-[#4A4E69] font-medium flex items-center gap-1">
              <Check className="w-3 h-3 text-emerald-600" /> {product.availability}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => navigateTo('product-detail', product.id)}
              className="w-full bg-[#FAF7F5] hover:bg-[#FDF2F4] text-[#2D3142] hover:text-[#D92550] border border-[#F0E1E4] py-2 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1"
            >
              Details
            </button>

            {isQuoteOnly ? (
              <button
                onClick={() => openRFQModal(product)}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:opacity-95 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-200" /> Request Quote
              </button>
            ) : (
              <button
                onClick={() => addToCart(product, 1)}
                className="w-full bg-[#D92550] hover:bg-[#C11B43] text-white py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1"
              >
                <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
              </button>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
