import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, Sparkles, Upload, CheckCircle2, FileText, Building2, User, Mail, Phone, Globe, Package } from 'lucide-react';

export default function RFQModal() {
  const { rfqModal, closeRFQModal, submitQuoteRequest, user } = useApp();

  const [formData, setFormData] = useState({
    customerName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'India',
    productName: '',
    productSku: '',
    requiredQuantity: '25 kg',
    application: 'Beverages',
    message: '',
    fileName: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (rfqModal.presetProduct) {
      setFormData((prev) => ({
        ...prev,
        customerName: user.name || '',
        companyName: user.companyName || '',
        email: user.email || '',
        phone: user.phone || '',
        productName: rfqModal.presetProduct.name,
        productSku: rfqModal.presetProduct.sku,
        application: rfqModal.presetProduct.applications ? rfqModal.presetProduct.applications[0] : 'General'
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        customerName: user.name || '',
        companyName: user.companyName || '',
        email: user.email || '',
        phone: user.phone || ''
      }));
    }
  }, [rfqModal, user]);

  if (!rfqModal.isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      submitQuoteRequest(formData);
      setIsSubmitting(false);
      closeRFQModal();
    }, 600);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, fileName: file.name }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-[#F0E1E4] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#D92550] via-[#C11B43] to-[#8C1030] text-white p-6 relative">
          <button
            onClick={closeRFQModal}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2">
            <span className="bg-white/20 text-amber-200 text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> B2B Sample & Price Inquiry
            </span>
          </div>

          <h2 className="font-serif-skff text-2xl md:text-3xl font-bold mt-2">
            Request a Price Quote / Sample
          </h2>
          <p className="text-xs text-white/80 mt-1">
            Submit your custom specification or bulk order requirements. Our tech desk responds within 24 business hours.
          </p>
        </div>

        {/* Modal Body Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          
          {/* Target Product Badge if preset */}
          {formData.productName && (
            <div className="bg-[#FDF2F4] border border-[#F9D5E1] p-3 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#D92550] tracking-wider">Target Product</span>
                <h4 className="font-bold text-sm text-[#1F2421]">{formData.productName}</h4>
                <p className="text-xs text-[#8A90A3]">SKU: {formData.productSku}</p>
              </div>
              <Package className="w-8 h-8 text-[#D92550]/40" />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-[#2D3142] mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  required
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  placeholder="e.g. Dr. Rajesh Sharma"
                  className="w-full text-xs pl-9 pr-3 py-2 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550] focus:ring-1 focus:ring-[#D92550]"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-xs font-bold text-[#2D3142] mb-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Horizon Beverages Pvt Ltd"
                  className="w-full text-xs pl-9 pr-3 py-2 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550] focus:ring-1 focus:ring-[#D92550]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-[#2D3142] mb-1">
                Work Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. r.sharma@horizonbev.com"
                  className="w-full text-xs pl-9 pr-3 py-2 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550] focus:ring-1 focus:ring-[#D92550]"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-[#2D3142] mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full text-xs pl-9 pr-3 py-2 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550] focus:ring-1 focus:ring-[#D92550]"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block text-xs font-bold text-[#2D3142] mb-1">
                Destination Country
              </label>
              <div className="relative">
                <Globe className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full text-xs pl-9 pr-3 py-2 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                >
                  <option value="India">India</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="United States">United States</option>
                  <option value="Singapore">Singapore</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Other">Other Country</option>
                </select>
              </div>
            </div>

            {/* Required Quantity */}
            <div>
              <label className="block text-xs font-bold text-[#2D3142] mb-1">
                Required Quantity / Pack
              </label>
              <select
                value={formData.requiredQuantity}
                onChange={(e) => setFormData({ ...formData, requiredQuantity: e.target.value })}
                className="w-full text-xs px-3 py-2 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
              >
                <option value="100g Evaluation Sample">100g Evaluation Sample</option>
                <option value="1 kg Bottle">1 kg Bottle</option>
                <option value="5 kg Canister">5 kg Canister</option>
                <option value="25 kg Drum">25 kg Drum</option>
                <option value="200 kg Barrel / Bulk">200 kg Barrel / Bulk</option>
                <option value="Custom Quantity">Custom Quantity</option>
              </select>
            </div>

          </div>

          {/* Target Application */}
          <div>
            <label className="block text-xs font-bold text-[#2D3142] mb-1">
              Target Application / Product Type
            </label>
            <input
              type="text"
              value={formData.application}
              onChange={(e) => setFormData({ ...formData, application: e.target.value })}
              placeholder="e.g. Carbonated Energy Drink, Fine Perfume Spray, Hard Candy..."
              className="w-full text-xs px-3 py-2 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
            />
          </div>

          {/* Detailed Requirements Message */}
          <div>
            <label className="block text-xs font-bold text-[#2D3142] mb-1">
              Specific Requirements / Formulation Notes
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Specify target pH, heat processing limits, desired top notes, sugar reduction goals, or solubility requirements..."
              className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
            />
          </div>

          {/* File Upload Simulator */}
          <div>
            <label className="block text-xs font-bold text-[#2D3142] mb-1">
              Attach Formulation Spec or Brief (PDF/DOCX/PNG)
            </label>
            <div className="border-2 border-dashed border-gray-200 hover:border-[#D92550] bg-[#FAF7F5] rounded-2xl p-4 text-center cursor-pointer transition-colors relative">
              <input
                type="file"
                onChange={handleFileUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <Upload className="w-6 h-6 text-[#D92550] mx-auto mb-1" />
              <p className="text-xs text-[#555A6E] font-medium">
                {formData.fileName ? (
                  <span className="text-[#D92550] font-bold flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Attached: {formData.fileName}
                  </span>
                ) : (
                  'Click or drag specification document here'
                )}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={closeRFQModal}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#D92550] text-white hover:bg-[#C11B43] px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-[#D92550]/20 flex items-center gap-2"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
