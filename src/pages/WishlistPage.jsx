import React from 'react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { Heart, ArrowRight } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist, products, navigateTo } = useApp();

  const savedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="border-b border-gray-200 pb-4 flex items-center justify-between">
        <div>
          <h1 className="font-serif-skff text-3xl md:text-4xl font-bold text-[#1F2421]">
            My Saved Wishlist
          </h1>
          <p className="text-xs text-[#555A6E] mt-1">Keep track of formulations for bench testing or future orders.</p>
        </div>

        <span className="text-xs font-bold text-[#D92550] bg-[#FCE7EC] px-3 py-1 rounded-full border border-[#F9D5E1]">
          {savedProducts.length} Items Saved
        </span>
      </div>

      {savedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {savedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-[#F0E1E4] rounded-3xl p-16 text-center space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 bg-[#FDF2F4] text-[#D92550] rounded-full flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Your Wishlist is Empty</h2>
          <p className="text-xs text-[#555A6E]">
            Click the heart icon on any product card to bookmark it here for quick reference.
          </p>
          <button
            onClick={() => navigateTo('products')}
            className="bg-[#D92550] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
          >
            Browse Products <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
