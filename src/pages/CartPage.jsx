import React from 'react';
import { useApp } from '../context/AppContext';
import { formatCurrency } from '../utils/formatCurrency';
import { Trash2, Heart, Plus, Minus, ArrowRight, Sparkles, AlertTriangle, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function CartPage() {
  const { 
    cart, 
    removeFromCart, 
    updateCartQuantity, 
    clearCart, 
    cartSubtotal, 
    isCartContainsQuoteRequired, 
    navigateTo, 
    toggleWishlist, 
    isWishlisted,
    openRFQModal
  } = useApp();

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 bg-[#FDF2F4] text-[#D92550] rounded-full flex items-center justify-center mx-auto shadow-inner">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="font-serif-skff text-3xl font-bold text-[#1F2421]">Your Cart is Currently Empty</h2>
        <p className="text-xs text-[#555A6E] max-w-md mx-auto">
          Explore our product catalog to discover premium flavour extracts, essential oils, and fine fragrance concentrates.
        </p>
        <button
          onClick={() => navigateTo('products')}
          className="bg-[#D92550] text-white hover:bg-[#C11B43] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md inline-flex items-center gap-2"
        >
          Explore Product Marketplace <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  const dispatchFee = isCartContainsQuoteRequired ? 0 : 250.00;
  const estimatedTax = isCartContainsQuoteRequired ? 0 : cartSubtotal * 0.18; // 18% GST/VAT
  const estimatedTotal = cartSubtotal + dispatchFee + estimatedTax;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <div>
          <h1 className="font-serif-skff text-3xl md:text-4xl font-bold text-[#1F2421]">
            Shopping Cart
          </h1>
          <p className="text-xs text-[#555A6E] mt-1">Review items, pack sizes, and select checkout or RFQ submission.</p>
        </div>

        <button
          onClick={clearCart}
          className="text-xs text-red-600 hover:underline font-semibold flex items-center gap-1"
        >
          <Trash2 className="w-3.5 h-3.5" /> Clear Cart
        </button>
      </div>

      {/* Quote Items Notice Banner if applicable */}
      {isCartContainsQuoteRequired && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900">
            <span className="font-bold block">Custom RFQ Items Detected in Cart</span>
            Your cart contains formulations requiring custom price quotations. You can submit your entire cart directly as a formal B2B Quote Request.
          </div>
        </div>
      )}

      {/* Main Grid: Cart Items + Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Cart Items Table */}
        <div className="lg:col-span-8 bg-white border border-[#F0E1E4] rounded-3xl p-6 shadow-sm space-y-6">
          <div className="space-y-4 divide-y divide-gray-100">
            {cart.map((item) => {
              const isQuoteItem = item.quoteRequired || item.price === null;
              const isWish = isWishlisted(item.id);

              return (
                <div key={`${item.id}-${item.packSize}`} className="pt-4 first:pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  
                  {/* Product Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-2xl border border-gray-200 shrink-0 bg-[#FAF7F5]"
                    />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D92550] bg-[#FCE7EC] px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                      <h3 className="font-serif-skff font-bold text-lg text-[#1F2421] mt-1">{item.name}</h3>
                      <div className="flex items-center gap-2 text-xs text-[#8A90A3] mt-0.5">
                        <span className="font-mono">SKU: {item.sku}</span>
                        <span>•</span>
                        <span className="font-semibold text-[#2D3142]">Pack: {item.packSize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quantity & Pricing */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-0 border-gray-100">
                    
                    {/* Qty controller */}
                    <div className="flex items-center bg-[#FAF7F5] border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => updateCartQuantity(item.id, item.packSize, -1)}
                        className="p-1.5 hover:bg-gray-200 text-gray-600"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-bold text-[#2D3142]">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.packSize, 1)}
                        className="p-1.5 hover:bg-gray-200 text-gray-600"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Price display */}
                    <div className="text-right min-w-24">
                      {isQuoteItem ? (
                        <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          RFQ Needed
                        </span>
                      ) : (
                        <span className="text-base font-serif-skff font-bold text-[#D92550]">
                          {formatCurrency(item.price * item.quantity)}
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleWishlist(item.id)}
                        className={`p-2 rounded-full hover:bg-gray-100 ${isWish ? 'text-[#D92550]' : 'text-gray-400'}`}
                      >
                        <Heart className={`w-4 h-4 ${isWish ? 'fill-[#D92550]' : ''}`} />
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id, item.packSize)}
                        className="p-2 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-between">
            <button
              onClick={() => navigateTo('products')}
              className="text-xs font-bold text-[#555A6E] hover:text-[#D92550] flex items-center gap-1.5"
            >
              ← Continue Shopping
            </button>
          </div>
        </div>

        {/* Right: Order / Quote Summary Card */}
        <div className="lg:col-span-4 bg-white border border-[#F0E1E4] rounded-3xl p-6 shadow-sm space-y-6">
          <h3 className="font-serif-skff font-bold text-xl text-[#1F2421]">Order Summary</h3>

          <div className="space-y-3 text-xs border-b border-gray-100 pb-4">
            <div className="flex justify-between text-[#555A6E]">
              <span>Subtotal (Priced Items):</span>
              <span className="font-bold text-[#2D3142]">{formatCurrency(cartSubtotal)}</span>
            </div>

            <div className="flex justify-between text-[#555A6E]">
              <span>Dispatch & Freight:</span>
              <span className="font-bold text-[#2D3142]">
                {isCartContainsQuoteRequired ? 'Calculated on RFQ' : formatCurrency(dispatchFee)}
              </span>
            </div>

            <div className="flex justify-between text-[#555A6E]">
              <span>Est. GST / Taxes (18%):</span>
              <span className="font-bold text-[#2D3142]">
                {isCartContainsQuoteRequired ? 'TBD' : formatCurrency(estimatedTax)}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-baseline">
            <span className="text-xs font-bold text-[#2D3142]">Estimated Total:</span>
            <span className="text-2xl font-serif-skff font-bold text-[#D92550]">
              {isCartContainsQuoteRequired ? 'Subject to Quote' : formatCurrency(estimatedTotal)}
            </span>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-2">
            {isCartContainsQuoteRequired ? (
              <button
                onClick={() => openRFQModal({ name: 'Cart RFQ Submission', sku: 'SKFF-CART-MULTI' })}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:opacity-95 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-200" /> Submit Complete Cart as RFQ
              </button>
            ) : (
              <button
                onClick={() => navigateTo('checkout')}
                className="w-full bg-[#D92550] hover:bg-[#C11B43] text-white py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => openRFQModal({ name: 'Special Sample Request', sku: 'SKFF-SAMPLE-GEN' })}
              className="w-full bg-[#FAF7F5] hover:bg-gray-100 text-[#2D3142] border border-gray-200 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Request Custom Quote / Sample
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[10px] text-[#8A90A3]">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Encrypted 256-bit Secure Transaction</span>
          </div>

        </div>

      </div>

    </div>
  );
}
