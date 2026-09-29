import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { formatCurrency } from '../utils/formatCurrency';
import { 
  Briefcase, 
  PlusCircle, 
  ShoppingBag, 
  Package, 
  UserCheck, 
  Search, 
  Check, 
  Clock, 
  AlertCircle, 
  FileText, 
  LogOut, 
  PhoneCall, 
  Mail, 
  Building2, 
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

export default function WorkerDashboardPage() {
  const { 
    auth, 
    logoutUser, 
    orders, 
    products, 
    createWorkerOrder, 
    navigateTo 
  } = useApp();

  // Role Security Check Guard
  if (auth?.role !== 'WORKER') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="bg-white border border-[#F0E1E4] rounded-3xl p-8 shadow-2xl space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
            <Briefcase className="w-8 h-8" />
          </div>
          <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Worker Access Required</h2>
          <p className="text-xs text-[#555A6E] leading-relaxed">
            You must be logged in with a Worker or Sales Manager account to access client order creation, assigned order tracking, and product lookup tools.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigateTo('login')}
              className="bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase px-6 py-3 rounded-xl shadow-md w-full"
            >
              Go to Portal Login (Worker Access)
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentWorker = auth.currentUser;

  const [activeTab, setActiveTab] = useState('my-orders'); // 'my-orders' | 'create-order' | 'catalog-lookup'

  // Filter orders for this worker
  const workerOrders = orders.filter(
    (o) => o.createdByWorkerId === currentWorker.id || o.assignedWorkerId === currentWorker.id
  );

  // New Client Order Form State
  const [clientOrderForm, setClientOrderForm] = useState({
    customerName: '',
    companyName: '',
    email: '',
    phone: '',
    shippingAddress: '',
    paymentType: 'Purchase Order Credit 30 Days',
    clientNotes: ''
  });

  const [selectedItems, setSelectedItems] = useState([
    {
      productId: 'flv-001',
      name: 'Bourbon Vanilla Gold Extract',
      sku: 'SKFF-FLV-VN01',
      packSize: '1 kg Bottle',
      price: 145.00,
      quantity: 5
    }
  ]);

  const [catalogSearch, setCatalogSearch] = useState('');

  // Add Item to Client Order
  const handleAddItem = (product) => {
    setSelectedItems((prev) => [
      ...prev,
      {
        productId: product.id,
        name: product.name,
        sku: product.sku,
        packSize: product.packSizes ? product.packSizes[0] : '1 kg Bottle',
        price: product.price || 500,
        quantity: 1
      }
    ]);
  };

  const handleRemoveItem = (index) => {
    setSelectedItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdateItemQty = (index, qty) => {
    setSelectedItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, quantity: Math.max(1, parseInt(qty) || 1) } : item))
    );
  };

  const calculateTotal = () => {
    return selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleCreateOrderSubmit = (e) => {
    e.preventDefault();
    if (selectedItems.length === 0) {
      alert('Please select at least one product for the client order.');
      return;
    }

    createWorkerOrder({
      ...clientOrderForm,
      items: selectedItems,
      totalAmount: calculateTotal()
    });

    // Reset form
    setClientOrderForm({
      customerName: '',
      companyName: '',
      email: '',
      phone: '',
      shippingAddress: '',
      paymentType: 'Purchase Order Credit 30 Days',
      clientNotes: ''
    });
    setActiveTab('my-orders');
  };

  const filteredCatalog = products.filter(
    (p) =>
      p.name.toLowerCase().includes(catalogSearch.toLowerCase()) ||
      p.sku.toLowerCase().includes(catalogSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(catalogSearch.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Worker Header Banner */}
      <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center font-bold shrink-0">
            <Briefcase className="w-7 h-7 text-amber-200" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-amber-950 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                Worker / Manager Portal
              </span>
              <span className="text-amber-200 text-xs font-semibold">• {currentWorker.department}</span>
            </div>
            <h1 className="font-serif-skff text-2xl md:text-3xl font-bold mt-1">{currentWorker.name}</h1>
            <p className="text-xs text-amber-100 font-medium mt-0.5">{currentWorker.title} ({currentWorker.email})</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={logoutUser}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
          >
            <LogOut className="w-4 h-4" /> Log Out
          </button>
        </div>
      </div>

      {/* Main Grid Layout: Sidebar Navigation + Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 bg-white border border-[#F0E1E4] rounded-3xl p-4 shadow-sm space-y-2">
          
          <div className="p-3 bg-amber-50 border border-amber-100 rounded-2xl mb-2 text-xs text-amber-900 font-medium">
            <span className="font-bold block text-amber-950">Logged in as Worker</span>
            <span className="text-[10px] text-amber-800">You have access to log client requirements, generate sales orders, and track order fulfillment.</span>
          </div>

          {[
            { id: 'my-orders', label: `My Assigned Orders (${workerOrders.length})`, icon: ShoppingBag },
            { id: 'create-order', label: 'Create Client Order', icon: PlusCircle },
            { id: 'catalog-lookup', label: 'SKFF Catalog Lookup', icon: Package }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                  isActive
                    ? 'bg-amber-700 text-white shadow-xs'
                    : 'text-[#555A6E] hover:bg-[#FAF7F5] hover:text-[#2D3142]'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Workspace Panel */}
        <div className="lg:col-span-9 bg-white border border-[#F0E1E4] rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          
          {/* TAB 1: MY ASSIGNED & CREATED ORDERS */}
          {activeTab === 'my-orders' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">My Assigned Client Orders</h2>
                  <p className="text-xs text-[#555A6E] mt-0.5">Orders logged by you or assigned to your sales desk by Admin.</p>
                </div>
                <button
                  onClick={() => setActiveTab('create-order')}
                  className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <PlusCircle className="w-4 h-4" /> Create New Order
                </button>
              </div>

              {workerOrders.length === 0 ? (
                <div className="text-center py-12 bg-[#FAF7F5] rounded-3xl border border-dashed border-gray-300">
                  <ShoppingBag className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                  <h3 className="font-bold text-sm text-[#2D3142]">No Client Orders Found</h3>
                  <p className="text-xs text-gray-500 mt-1">Create a new order based on client requirements to submit to Admin.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {workerOrders.map((ord) => (
                    <div key={ord.id} className="border border-gray-200 rounded-2xl p-5 text-xs space-y-3 hover:border-amber-300 transition-colors">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[#2D3142] text-sm">{ord.id}</span>
                            <span className="text-[10px] text-gray-400 font-mono">Date: {ord.date}</span>
                          </div>
                          <span className="text-[#555A6E] block font-medium mt-0.5">
                            Client: <strong>{ord.customerName}</strong> ({ord.companyName})
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-bold text-gray-500">Order Workflow Status:</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                            ord.status === 'Submitted'
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : ord.status === 'Claimed'
                              ? 'bg-blue-100 text-blue-900 border border-blue-300'
                              : ord.status === 'Processing'
                              ? 'bg-purple-100 text-purple-900 border border-purple-300'
                              : ord.status === 'Confirmed'
                              ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                              : ord.status === 'Completed'
                              ? 'bg-emerald-600 text-white'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {ord.status}
                          </span>
                        </div>
                      </div>

                      {/* Items details */}
                      <div className="bg-[#FAF7F5] p-3 rounded-xl space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">Ordered Items & Quantities:</span>
                        {ord.items.map((it, idx) => (
                          <div key={idx} className="flex justify-between items-center text-xs text-[#2D3142]">
                            <span>• {it.name} ({it.packSize}) x {it.quantity}</span>
                            <span className="font-bold text-gray-700">{formatCurrency(it.price * it.quantity)}</span>
                          </div>
                        ))}
                      </div>

                      {/* Notes & Specs */}
                      {ord.clientNotes && (
                        <div className="text-gray-600 italic bg-amber-50/50 p-2.5 rounded-xl border border-amber-100 font-mono text-[11px]">
                          <strong>Client Requirements / Notes:</strong> "{ord.clientNotes}"
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-1 text-[11px] text-gray-500">
                        <span>Contact: {ord.email} | {ord.phone}</span>
                        <span className="font-bold text-[#D92550] text-sm">Total: {formatCurrency(ord.totalAmount)}</span>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CREATE NEW CLIENT ORDER */}
          {activeTab === 'create-order' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Create Client Order</h2>
                <p className="text-xs text-[#555A6E] mt-0.5">Log client specifications, required products, and submit directly to Admin for processing.</p>
              </div>

              <form onSubmit={handleCreateOrderSubmit} className="space-y-6 text-xs">
                
                {/* Section 1: Client Information */}
                <div className="bg-[#FAF7F5] p-5 rounded-2xl border border-gray-200 space-y-4">
                  <h3 className="font-bold text-sm text-[#2D3142] flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-700" /> Client & Company Contact Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold mb-1 text-[#2D3142]">Client Contact Name *</label>
                      <input
                        type="text"
                        required
                        value={clientOrderForm.customerName}
                        onChange={(e) => setClientOrderForm({ ...clientOrderForm, customerName: e.target.value })}
                        placeholder="e.g. Vikramaditya Reddy"
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block font-bold mb-1 text-[#2D3142]">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={clientOrderForm.companyName}
                        onChange={(e) => setClientOrderForm({ ...clientOrderForm, companyName: e.target.value })}
                        placeholder="e.g. Hyderabad Beverage Innovators"
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block font-bold mb-1 text-[#2D3142]">Client Email Address *</label>
                      <input
                        type="email"
                        required
                        value={clientOrderForm.email}
                        onChange={(e) => setClientOrderForm({ ...clientOrderForm, email: e.target.value })}
                        placeholder="e.g. vikram@hbi-labs.in"
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block font-bold mb-1 text-[#2D3142]">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={clientOrderForm.phone}
                        onChange={(e) => setClientOrderForm({ ...clientOrderForm, phone: e.target.value })}
                        placeholder="e.g. +91 98765 00112"
                        className="w-full p-2.5 bg-white border border-gray-300 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold mb-1 text-[#2D3142]">Delivery / Shipping Address</label>
                    <textarea
                      rows={2}
                      value={clientOrderForm.shippingAddress}
                      onChange={(e) => setClientOrderForm({ ...clientOrderForm, shippingAddress: e.target.value })}
                      placeholder="Enter plant or R&D facility address..."
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-xl"
                    />
                  </div>
                </div>

                {/* Section 2: Product Selection */}
                <div className="bg-[#FAF7F5] p-5 rounded-2xl border border-gray-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-[#2D3142] flex items-center gap-2">
                      <Package className="w-4 h-4 text-amber-700" /> Select Products & Specifications
                    </h3>
                  </div>

                  {/* Added Items List */}
                  <div className="space-y-2">
                    {selectedItems.map((item, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex-1 min-w-[200px]">
                          <span className="font-bold text-[#2D3142] block text-xs">{item.name}</span>
                          <span className="text-[10px] text-gray-500 font-mono">SKU: {item.sku} | {item.packSize}</span>
                        </div>

                        <div className="flex items-center gap-4">
                          <div>
                            <span className="text-[10px] text-gray-400 block font-bold">Qty</span>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleUpdateItemQty(idx, e.target.value)}
                              className="w-16 p-1 bg-[#FAF7F5] border rounded-lg text-xs font-bold text-center"
                            />
                          </div>

                          <div>
                            <span className="text-[10px] text-gray-400 block font-bold">Subtotal</span>
                            <span className="font-bold text-[#D92550] text-xs">{formatCurrency(item.price * item.quantity)}</span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleRemoveItem(idx)}
                            className="text-red-500 hover:text-red-700 text-xs font-bold underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add from Catalogue search dropdown */}
                  <div className="pt-2">
                    <label className="block font-bold mb-1 text-[#2D3142]">Add Product from SKFF Catalogue</label>
                    <select
                      onChange={(e) => {
                        const target = products.find((p) => p.id === e.target.value);
                        if (target) handleAddItem(target);
                      }}
                      defaultValue=""
                      className="w-full p-2.5 bg-white border border-gray-300 rounded-xl"
                    >
                      <option value="" disabled>-- Select a Flavour or Fragrance product --</option>
                      {products.slice(0, 50).map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} ({p.sku}) — {formatCurrency(p.price || 500)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Section 3: Client Requirements & Notes */}
                <div className="bg-[#FAF7F5] p-5 rounded-2xl border border-gray-200 space-y-3">
                  <h3 className="font-bold text-sm text-[#2D3142]">Client Requirements & Technical Notes</h3>
                  <textarea
                    rows={3}
                    value={clientOrderForm.clientNotes}
                    onChange={(e) => setClientOrderForm({ ...clientOrderForm, clientNotes: e.target.value })}
                    placeholder="Enter specific client requirements (e.g. target dosage, oil vs water solubility, temperature stability, certification needs...)"
                    className="w-full p-2.5 bg-white border border-gray-300 rounded-xl"
                  />
                </div>

                {/* Submit Order Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <span className="text-xs text-gray-500 block">Total Calculated Order Value:</span>
                    <span className="font-serif-skff font-bold text-2xl text-[#D92550]">{formatCurrency(calculateTotal())}</span>
                  </div>

                  <button
                    type="submit"
                    className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2"
                  >
                    Submit Order to Admin Team
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            </div>
          )}

          {/* TAB 3: CATALOG LOOKUP */}
          {activeTab === 'catalog-lookup' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">SKFF Product Catalogue Lookup</h2>
                  <p className="text-xs text-[#555A6E]">Browse products, SKUs, pack sizes and prices when advising clients.</p>
                </div>

                <div className="relative max-w-xs w-full">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={catalogSearch}
                    onChange={(e) => setCatalogSearch(e.target.value)}
                    placeholder="Search name or SKU..."
                    className="w-full pl-9 pr-4 py-2 bg-[#FAF7F5] border border-gray-300 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-1">
                {filteredCatalog.slice(0, 40).map((p) => (
                  <div key={p.id} className="border border-gray-200 rounded-2xl p-4 flex gap-3 hover:border-amber-300 transition-colors">
                    <img src={p.image} alt={p.name} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                    <div className="text-xs space-y-1">
                      <span className="bg-[#FCE7EC] text-[#D92550] text-[9px] font-bold px-2 py-0.5 rounded uppercase">{p.category}</span>
                      <h4 className="font-bold text-[#2D3142]">{p.name}</h4>
                      <p className="text-gray-500 text-[10px] font-mono">SKU: {p.sku}</p>
                      <p className="font-bold text-[#D92550]">{formatCurrency(p.price || 500)} / {p.packSizes ? p.packSizes[0] : 'kg'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
