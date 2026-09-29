import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { formatCurrency } from '../utils/formatCurrency';
import { Check, ShieldCheck, CreditCard, Sparkles, Building2, User, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, cartSubtotal, isCartContainsQuoteRequired, user, submitOrder, submitQuoteRequest } = useApp();

  const [step, setStep] = useState(1);

  // Form State
  const [customerInfo, setCustomerInfo] = useState({
    customerName: user.name || 'Thirunavukarasu S',
    companyName: user.companyName || 'Apex Ingredient Solutions Ltd.',
    email: user.email || 'thirunavukarasu@skff-client.com',
    phone: user.phone || '+91 98765 43210',
    gstTaxId: user.gstTaxId || '27AABCU9603R1ZM'
  });

  const [billingAddress, setBillingAddress] = useState({
    address: '14/B Tech Park, Marol Industrial Estate',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    postalCode: '400059'
  });

  const [shippingSameAsBilling, setShippingSameAsBilling] = useState(true);
  const [shippingAddress, setShippingAddress] = useState({
    address: '14/B Tech Park, Marol Industrial Estate',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    postalCode: '400059'
  });

  const [paymentMethod, setPaymentMethod] = useState('wire');

  const dispatchFee = isCartContainsQuoteRequired ? 0 : 250.00;
  const estimatedTax = isCartContainsQuoteRequired ? 0 : cartSubtotal * 0.18;
  const grandTotal = cartSubtotal + dispatchFee + estimatedTax;

  const handleNext = (e) => {
    e?.preventDefault();
    setStep((s) => Math.min(s + 1, 5));
  };

  const handleBack = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleFinalSubmit = () => {
    if (isCartContainsQuoteRequired) {
      submitQuoteRequest({
        customerName: customerInfo.customerName,
        companyName: customerInfo.companyName,
        email: customerInfo.email,
        phone: customerInfo.phone,
        country: billingAddress.country,
        productName: `Multi-item Cart Order (${cart.length} items)`,
        productSku: 'SKFF-CART-MULTI',
        requiredQuantity: 'Bulk Contract',
        application: 'Industrial Manufacturing',
        message: `B2B Quote submission for items: ${cart.map(i => `${i.name} (${i.quantity}x ${i.packSize})`).join(', ')}`,
        shippingAddress: `${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.postalCode}`
      });
    } else {
      submitOrder({
        customerName: customerInfo.customerName,
        companyName: customerInfo.companyName,
        email: customerInfo.email,
        phone: customerInfo.phone,
        billingAddress: `${billingAddress.address}, ${billingAddress.city}, ${billingAddress.state} ${billingAddress.postalCode}`,
        shippingAddress: shippingSameAsBilling 
          ? `${billingAddress.address}, ${billingAddress.city}, ${billingAddress.state} ${billingAddress.postalCode}`
          : `${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.postalCode}`,
        paymentMethod: paymentMethod === 'wire' ? 'Corporate Wire Transfer' : 'Credit Card (Online Authorized)'
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Page Title */}
      <div className="text-center space-y-2">
        <h1 className="font-serif-skff text-3xl md:text-4xl font-bold text-[#1F2421]">
          {isCartContainsQuoteRequired ? 'B2B Quote Request Submission' : 'Multi-Step Checkout'}
        </h1>
        <p className="text-xs text-[#555A6E]">Complete your details to confirm your order or quotation request.</p>
      </div>

      {/* Wizard Steps Navigation Bar */}
      <div className="flex items-center justify-between bg-white border border-[#F0E1E4] rounded-2xl p-4 overflow-x-auto">
        {[
          { num: 1, label: 'Customer Info' },
          { num: 2, label: 'Billing Address' },
          { num: 3, label: 'Shipping Address' },
          { num: 4, label: 'Order Summary' },
          { num: 5, label: isCartContainsQuoteRequired ? 'Submit Quote' : 'Payment' }
        ].map((s) => (
          <div key={s.num} className="flex items-center gap-2 shrink-0">
            <div
              className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                step === s.num
                  ? 'bg-[#D92550] text-white shadow-xs'
                  : step > s.num
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {step > s.num ? <Check className="w-4 h-4" /> : s.num}
            </div>
            <span className={`text-xs font-bold ${step === s.num ? 'text-[#D92550]' : 'text-gray-500'}`}>
              {s.label}
            </span>
            {s.num < 5 && <span className="hidden sm:inline text-gray-300 mx-2">›</span>}
          </div>
        ))}
      </div>

      {/* Wizard Step Card */}
      <div className="bg-white border border-[#F0E1E4] rounded-3xl p-6 sm:p-10 shadow-sm">
        
        {/* STEP 1: CUSTOMER INFO */}
        {step === 1 && (
          <form onSubmit={handleNext} className="space-y-6">
            <h3 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Step 1: Customer Information</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#2D3142] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={customerInfo.customerName}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, customerName: e.target.value })}
                  className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2D3142] mb-1">Company Name *</label>
                <input
                  type="text"
                  required
                  value={customerInfo.companyName}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, companyName: e.target.value })}
                  className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2D3142] mb-1">Work Email *</label>
                <input
                  type="email"
                  required
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                  className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2D3142] mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-[#2D3142] mb-1">GST / VAT / Tax ID (Optional for Invoice)</label>
                <input
                  type="text"
                  value={customerInfo.gstTaxId}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, gstTaxId: e.target.value })}
                  className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-[#D92550] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                Continue to Billing Address <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: BILLING ADDRESS */}
        {step === 2 && (
          <form onSubmit={handleNext} className="space-y-6">
            <h3 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Step 2: Billing Address</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-[#2D3142] mb-1">Street Address *</label>
                <input
                  type="text"
                  required
                  value={billingAddress.address}
                  onChange={(e) => setBillingAddress({ ...billingAddress, address: e.target.value })}
                  className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2D3142] mb-1">City *</label>
                <input
                  type="text"
                  required
                  value={billingAddress.city}
                  onChange={(e) => setBillingAddress({ ...billingAddress, city: e.target.value })}
                  className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2D3142] mb-1">State / Province *</label>
                <input
                  type="text"
                  required
                  value={billingAddress.state}
                  onChange={(e) => setBillingAddress({ ...billingAddress, state: e.target.value })}
                  className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2D3142] mb-1">Country *</label>
                <input
                  type="text"
                  required
                  value={billingAddress.country}
                  onChange={(e) => setBillingAddress({ ...billingAddress, country: e.target.value })}
                  className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2D3142] mb-1">Postal / ZIP Code *</label>
                <input
                  type="text"
                  required
                  value={billingAddress.postalCode}
                  onChange={(e) => setBillingAddress({ ...billingAddress, postalCode: e.target.value })}
                  className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                />
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-3 border border-gray-200 rounded-full text-xs font-bold text-gray-600"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-[#D92550] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                Continue to Shipping Address <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: SHIPPING ADDRESS */}
        {step === 3 && (
          <form onSubmit={handleNext} className="space-y-6">
            <h3 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Step 3: Shipping Address</h3>

            <div className="bg-[#FAF7F5] p-4 rounded-2xl border border-gray-200 flex items-center gap-3 cursor-pointer" onClick={() => setShippingSameAsBilling(!shippingSameAsBilling)}>
              <input
                type="checkbox"
                checked={shippingSameAsBilling}
                onChange={(e) => setShippingSameAsBilling(e.target.checked)}
                className="w-4 h-4 accent-[#D92550] cursor-pointer"
              />
              <span className="text-xs font-bold text-[#2D3142]">Same as billing address</span>
            </div>

            {!shippingSameAsBilling && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#2D3142] mb-1">Shipping Street Address *</label>
                  <input
                    type="text"
                    required
                    value={shippingAddress.address}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                    className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2D3142] mb-1">City *</label>
                  <input
                    type="text"
                    required
                    value={shippingAddress.city}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                    className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2D3142] mb-1">State / Province *</label>
                  <input
                    type="text"
                    required
                    value={shippingAddress.state}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                    className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-3 border border-gray-200 rounded-full text-xs font-bold text-gray-600"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-[#D92550] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                Review Order Summary <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: ORDER SUMMARY REVIEW */}
        {step === 4 && (
          <div className="space-y-6">
            <h3 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Step 4: Review Order Summary</h3>

            {/* Itemized List */}
            <div className="bg-[#FAF7F5] rounded-2xl p-4 border border-gray-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8A90A3]">Items in Order ({cart.length})</span>
              <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <div key={item.id} className="py-2.5 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-[#2D3142]">{item.name}</span>
                      <span className="text-gray-500 block text-[11px]">{item.packSize} • Qty: {item.quantity}</span>
                    </div>
                    <span className="font-bold font-serif-skff text-[#D92550]">
                      {item.price ? formatCurrency(item.price * item.quantity) : 'RFQ Needed'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Breakdown */}
            <div className="bg-white p-4 rounded-2xl border border-gray-200 space-y-2 text-xs">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold">{formatCurrency(cartSubtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Dispatch & Shipping:</span>
                <span className="font-bold">{isCartContainsQuoteRequired ? 'Calculated on Quote' : formatCurrency(dispatchFee)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t font-bold text-sm text-[#D92550]">
                <span>Total Amount:</span>
                <span>{isCartContainsQuoteRequired ? 'Subject to Quote' : formatCurrency(grandTotal)}</span>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={handleBack}
                className="px-6 py-3 border border-gray-200 rounded-full text-xs font-bold text-gray-600"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="bg-[#D92550] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                Proceed to Final Confirmation <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: PAYMENT / QUOTE SUBMISSION */}
        {step === 5 && (
          <div className="space-y-6">
            <h3 className="font-serif-skff text-2xl font-bold text-[#1F2421]">
              Step 5: {isCartContainsQuoteRequired ? 'Submit Quote Request' : 'Select Payment Method'}
            </h3>

            {isCartContainsQuoteRequired ? (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-xs text-amber-900 space-y-3">
                <Sparkles className="w-6 h-6 text-amber-700" />
                <h4 className="font-bold text-sm">No Payment Required Today</h4>
                <p>
                  Your order contains custom formulation items requiring formal price quotes. Clicking submit below will route your cart details directly to our B2B commercial desk. You will receive an official quotation within 24 business hours.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <div
                  onClick={() => setPaymentMethod('wire')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    paymentMethod === 'wire' ? 'bg-[#FDF2F4] border-[#D92550] ring-1 ring-[#D92550]' : 'bg-[#FAF7F5] border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-[#D92550]" />
                    <div>
                      <span className="font-bold text-xs text-[#2D3142] block">Corporate Wire Transfer / SWIFT</span>
                      <span className="text-[11px] text-[#555A6E]">Receive proforma invoice with bank details</span>
                    </div>
                  </div>
                  {paymentMethod === 'wire' && <Check className="w-5 h-5 text-[#D92550]" />}
                </div>

                <div
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    paymentMethod === 'card' ? 'bg-[#FDF2F4] border-[#D92550] ring-1 ring-[#D92550]' : 'bg-[#FAF7F5] border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-[#D92550]" />
                    <div>
                      <span className="font-bold text-xs text-[#2D3142] block">Credit / Debit Card (Online Authorized)</span>
                      <span className="text-[11px] text-[#555A6E]">Instant payment processing via secure gateway</span>
                    </div>
                  </div>
                  {paymentMethod === 'card' && <Check className="w-5 h-5 text-[#D92550]" />}
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4">
              <button
                onClick={handleBack}
                className="px-6 py-3 border border-gray-200 rounded-full text-xs font-bold text-gray-600"
              >
                Back
              </button>

              <button
                onClick={handleFinalSubmit}
                className="bg-[#D92550] hover:bg-[#C11B43] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                {isCartContainsQuoteRequired ? 'Submit Formal Quote Request' : 'Complete & Place Order'}
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
