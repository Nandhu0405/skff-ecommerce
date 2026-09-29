import React from 'react';
import { useApp } from '../context/AppContext';
import { formatCurrency } from '../utils/formatCurrency';
import { CheckCircle2, Sparkles, FileText, ArrowRight, Package, User } from 'lucide-react';

export default function OrderConfirmationPage() {
  const { latestTransaction, navigateTo } = useApp();

  const isQuote = latestTransaction?.type === 'QUOTE';
  const data = latestTransaction?.data;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      
      {/* Hero Header */}
      <div className="bg-white border border-[#F0E1E4] rounded-3xl p-8 md:p-12 text-center shadow-xl space-y-4">
        
        <div className="w-20 h-20 rounded-full bg-[#FCE7EC] text-[#D92550] flex items-center justify-center mx-auto shadow-inner">
          {isQuote ? <Sparkles className="w-10 h-10 text-[#D92550]" /> : <CheckCircle2 className="w-10 h-10 text-emerald-600" />}
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#D92550] bg-[#FDF2F4] px-3 py-1 rounded-full border border-[#F9D5E1]">
          {isQuote ? 'Quote Request Received' : 'Order Successfully Placed'}
        </span>

        <h1 className="font-serif-skff text-3xl md:text-5xl font-bold text-[#1F2421]">
          {isQuote ? 'Your Quote Request Has Been Submitted' : 'Thank You for Your Order'}
        </h1>

        <p className="text-xs sm:text-sm text-[#555A6E] max-w-xl mx-auto leading-relaxed">
          {isQuote
            ? 'Our technical sales team is evaluating your formulation parameters and will respond with formal pricing within 24 business hours.'
            : 'Your order has been recorded in our manufacturing queue. A confirmation email with dispatch tracking has been sent.'}
        </p>

        {data && (
          <div className="inline-block bg-[#FAF7F5] border border-gray-200 px-6 py-2.5 rounded-2xl font-mono text-sm font-bold text-[#2D3142]">
            Reference ID: <span className="text-[#D92550]">{data.id}</span>
          </div>
        )}

      </div>

      {/* Details Box */}
      {data && (
        <div className="bg-white border border-[#F0E1E4] rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
          <h3 className="font-serif-skff font-bold text-xl text-[#1F2421]">Transaction Summary</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#555A6E]">
            <div className="bg-[#FAF7F5] p-4 rounded-2xl">
              <span className="font-bold text-[#2D3142] block mb-1">Customer Profile</span>
              <p>{data.customerName}</p>
              <p>{data.companyName}</p>
              <p>{data.email}</p>
              <p>{data.phone}</p>
            </div>

            <div className="bg-[#FAF7F5] p-4 rounded-2xl">
              <span className="font-bold text-[#2D3142] block mb-1">Status & Terms</span>
              <p>Status: <strong className="text-[#D92550]">{data.status}</strong></p>
              <p>Date: {data.date}</p>
              <p>{isQuote ? `Destination: ${data.country}` : `Payment: ${data.paymentType}`}</p>
            </div>
          </div>

          {/* Itemized List if available */}
          {data.items && (
            <div className="border-t border-gray-100 pt-4 space-y-2">
              <span className="text-xs font-bold text-[#2D3142] block">Requested Formulations ({data.items.length})</span>
              <div className="divide-y divide-gray-100">
                {data.items.map((item, idx) => (
                  <div key={idx} className="py-2 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-[#2D3142]">{item.name}</span>
                      <span className="text-gray-500 block text-[11px]">{item.packSize} • Qty: {item.quantity}</span>
                    </div>
                    <span className="font-serif-skff font-bold text-[#D92550]">
                      {item.price ? formatCurrency(item.price * item.quantity) : 'RFQ Pending'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => navigateTo('account')}
          className="w-full sm:w-auto bg-[#D92550] hover:bg-[#C11B43] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
        >
          View Order History in My Account <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => navigateTo('products')}
          className="w-full sm:w-auto bg-white border border-gray-300 text-[#2D3142] hover:bg-gray-50 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider"
        >
          Continue Shopping
        </button>
      </div>

    </div>
  );
}
