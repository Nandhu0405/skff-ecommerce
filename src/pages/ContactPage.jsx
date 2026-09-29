import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Phone, Mail, Clock, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const { openRFQModal, showToast } = useApp();
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your message has been sent successfully!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FDF2F4] via-[#FDFBF7] to-[#FCEBE1] p-8 md:p-12 rounded-3xl border border-[#F0E1E4] text-center max-w-4xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#D92550] bg-white px-3 py-1 rounded-full border border-[#F9D5E1]">
          Global Touchpoints
        </span>
        <h1 className="font-serif-skff text-3xl md:text-5xl font-bold text-[#1F2421]">
          Contact SKFF
        </h1>
        <p className="text-xs md:text-sm text-[#555A6E] leading-relaxed max-w-2xl mx-auto">
          Get in touch with our technical sales managers, master flavorists, or customer care specialists.
        </p>

        <div className="pt-2">
          <button
            onClick={() => openRFQModal()}
            className="bg-[#D92550] text-white hover:bg-[#C11B43] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            Request a Product Consultation
          </button>
        </div>
      </div>

      {/* Main Grid: Info + Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Contact Info & Locations */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#F0E1E4] rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
            <h3 className="font-serif-skff font-bold text-2xl text-[#1F2421]">
              Corporate Offices
            </h3>

            <div className="space-y-4 text-xs text-[#555A6E]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D92550] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#2D3142] block">Mumbai Headquarters</span>
                  <span>SKFF House, Marol Industrial Area, Andheri East, Mumbai 400059, Maharashtra, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D92550] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#2D3142] block">Tarapur Mega Plant</span>
                  <span>MIDC Industrial Estate, Zone 4, Tarapur, Palghar 401506, India</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <Phone className="w-4 h-4 text-[#D92550] shrink-0" />
                <span>+91 22 6890 4000 / +91 22 6890 4001</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D92550] shrink-0" />
                <span>info@skff.com / sales@skff.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#D92550] shrink-0" />
                <span>Mon - Sat: 9:00 AM - 6:30 PM (IST)</span>
              </div>
            </div>
          </div>

          {/* Interactive Map Simulator */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 h-56 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
            <div className="text-center relative z-10 space-y-2">
              <MapPin className="w-8 h-8 text-[#D92550] mx-auto animate-bounce" />
              <h4 className="font-serif-skff text-xl font-bold">Mumbai Creative Center</h4>
              <p className="text-[11px] text-gray-300">Google Map View Active • Marol Industrial Zone</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7 bg-white border border-[#F0E1E4] rounded-3xl p-6 md:p-10 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Message Sent Successfully!</h3>
              <p className="text-xs text-[#555A6E] max-w-md mx-auto">
                Thank you for contacting SKFF. Our regional sales team will get back to you within 24 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-[#D92550] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif-skff text-2xl font-bold text-[#1F2421]">
                Send Us a Message
              </h3>
              <p className="text-xs text-[#555A6E] mb-4">
                Fill in the details below and our technical desk will connect with you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#2D3142] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2D3142] mb-1">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="e.g. Sunshine Foods Ltd"
                    className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2D3142] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="r.kumar@sunshinefoods.com"
                    className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2D3142] mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2D3142] mb-1">Inquiry Subject</label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                >
                  <option value="General Inquiry">General Corporate Inquiry</option>
                  <option value="Flavour Formulation">Flavour Creation & Application</option>
                  <option value="Fragrance Brief">Fragrance Development Brief</option>
                  <option value="Bulk Contract Supply">Bulk Contract & Export Supply</option>
                  <option value="Regulatory Documents">COA / MSDS / Regulatory Docs</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2D3142] mb-1">Message *</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can SKFF assist your product formulation today?"
                  className="w-full text-xs p-3 bg-[#FAF7F5] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D92550]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D92550] hover:bg-[#C11B43] text-white py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
