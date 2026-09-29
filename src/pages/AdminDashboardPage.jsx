import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { formatCurrency } from '../utils/formatCurrency';
import { 
  ShieldCheck, 
  Package, 
  ShoppingBag, 
  Sparkles, 
  Users, 
  DollarSign, 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  X, 
  Check, 
  Search, 
  SlidersHorizontal,
  Layers,
  FileText,
  UserCheck,
  CheckCircle2,
  Briefcase,
  AlertCircle,
  LogOut
} from 'lucide-react';

export default function AdminDashboardPage() {
  const { 
    products, 
    addProduct, 
    updateProduct, 
    deleteProduct, 
    orders, 
    updateOrderStatus, 
    quoteRequests, 
    updateQuoteStatus,
    workers,
    auth,
    claimOrder,
    assignOrderToWorker,
    logoutUser,
    navigateTo
  } = useApp();

  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingProduct, setEditingProduct] = useState(null); // null = off, 'new' or product object
  const [productForm, setProductForm] = useState({
    id: '',
    sku: '',
    name: '',
    category: 'FLAVOURS',
    subcategory: 'Beverage Flavours',
    shortDescription: '',
    detailedDescription: '',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800',
    price: 150.00,
    quoteRequired: false,
    availability: 'In Stock',
    moq: '1 kg',
    packSizes: '1 kg Bottle, 5 kg Canister, 25 kg Drum',
    applications: 'Beverages, Bakery'
  });

  const [respondingQuoteId, setRespondingQuoteId] = useState(null);
  const [quoteResponseForm, setQuoteResponseForm] = useState({ price: '', notes: '' });

  // Role Security Check Guard
  if (auth?.role !== 'ADMIN') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="bg-white border border-[#F0E1E4] rounded-3xl p-8 shadow-2xl space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-red-100 text-[#D92550] flex items-center justify-center mx-auto">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Admin Access Required</h2>
          <p className="text-xs text-[#555A6E] leading-relaxed">
            You must be logged in with an Administrator account to access product management, order claiming, worker assignment, and platform metrics.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigateTo('login')}
              className="bg-[#D92550] hover:bg-[#C11B43] text-white font-bold text-xs uppercase px-6 py-3 rounded-xl shadow-md w-full"
            >
              Go to Portal Login (Admin Access)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Stats
  const totalProducts = products.length;
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === 'Submitted' || o.status === 'Processing' || o.status === 'Claimed').length;
  const pendingQuotes = quoteRequests.filter(q => q.status === 'New' || q.status === 'Under Review').length;
  const totalRevenue = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);

  // Form Handlers
  const handleOpenAddModal = () => {
    setProductForm({
      id: `flv-${Date.now()}`,
      sku: `SKFF-${Math.floor(100 + Math.random() * 900)}`,
      name: '',
      category: 'FLAVOURS',
      subcategory: 'Beverage Flavours',
      shortDescription: '',
      detailedDescription: '',
      image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800',
      price: 150.00,
      quoteRequired: false,
      availability: 'In Stock',
      moq: '1 kg',
      packSizes: '1 kg Bottle, 5 kg Canister, 25 kg Drum',
      applications: 'Beverages, Bakery'
    });
    setEditingProduct('new');
  };

  const handleOpenEditModal = (p) => {
    setProductForm({
      ...p,
      price: p.price || 0,
      packSizes: p.packSizes ? p.packSizes.join(', ') : '',
      applications: p.applications ? p.applications.join(', ') : ''
    });
    setEditingProduct(p.id);
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    const formatted = {
      ...productForm,
      price: productForm.quoteRequired ? null : parseFloat(productForm.price),
      packSizes: productForm.packSizes.split(',').map(s => s.trim()).filter(Boolean),
      applications: productForm.applications.split(',').map(s => s.trim()).filter(Boolean),
      specifications: productForm.specifications || { form: 'Liquid', solubility: 'Water Soluble', shelfLife: '24 Months' }
    };

    if (editingProduct === 'new') {
      addProduct(formatted);
    } else {
      updateProduct(editingProduct, formatted);
    }
    setEditingProduct(null);
  };

  const handleQuoteResponseSubmit = (e) => {
    e.preventDefault();
    updateQuoteStatus(
      respondingQuoteId,
      'Quoted',
      parseFloat(quoteResponseForm.price),
      quoteResponseForm.notes
    );
    setRespondingQuoteId(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Admin Banner */}
      <div className="bg-gradient-to-r from-[#1F2421] via-[#2D3142] to-[#3B3E48] text-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-amber-400 text-[#1F2421] flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">
              System Administrator Portal
            </span>
            <h1 className="font-serif-skff text-2xl md:text-3xl font-bold">SKFF Management Suite</h1>
            <span className="text-xs text-gray-300 block font-mono">Session: {auth?.currentUser?.name || 'System Administrator'}</span>
          </div>
        </div>

        <button
          onClick={logoutUser}
          className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
        >
          <LogOut className="w-4 h-4" /> Log Out Admin Session
        </button>
      </div>

      {/* Main Grid: Sidebar + Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Admin Navigation Sidebar */}
        <div className="lg:col-span-3 bg-white border border-[#F0E1E4] rounded-3xl p-4 shadow-sm space-y-1">
          {[
            { id: 'dashboard', label: 'Overview Metrics', icon: ShieldCheck },
            { id: 'products', label: `Products Catalog (${products.length})`, icon: Package },
            { id: 'orders', label: `Order Management (${orders.length})`, icon: ShoppingBag },
            { id: 'quotes', label: `Quote Requests (${quoteRequests.length})`, icon: Sparkles },
            { id: 'workers', label: `Workers & Staff (${workers.length})`, icon: Users }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                  isActive
                    ? 'bg-[#D92550] text-white shadow-xs'
                    : 'text-[#555A6E] hover:bg-[#FAF7F5] hover:text-[#2D3142]'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Admin Workspace Panel */}
        <div className="lg:col-span-9 bg-white border border-[#F0E1E4] rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          
          {/* TAB 1: METRICS DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Platform Metrics & Overview</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#FAF7F5] p-5 rounded-2xl border border-gray-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A90A3] block">Total Catalog Products</span>
                  <span className="font-serif-skff font-bold text-3xl text-[#1F2421] mt-1 block">{totalProducts}</span>
                </div>

                <div className="bg-[#FAF7F5] p-5 rounded-2xl border border-gray-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A90A3] block">Total Orders</span>
                  <span className="font-serif-skff font-bold text-3xl text-[#1F2421] mt-1 block">{totalOrders}</span>
                </div>

                <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">Pending Action</span>
                  <span className="font-serif-skff font-bold text-3xl text-amber-700 mt-1 block">{pendingOrders}</span>
                </div>

                <div className="bg-[#FDF2F4] p-5 rounded-2xl border border-[#F9D5E1]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D92550] block">Total B2B Revenue</span>
                  <span className="font-serif-skff font-bold text-3xl text-[#D92550] mt-1 block">{formatCurrency(totalRevenue)}</span>
                </div>
              </div>

              <div className="bg-[#FAF7F5] p-5 rounded-2xl border border-gray-200 space-y-3 text-xs">
                <h3 className="font-bold text-sm text-[#2D3142]">Quick Administrative Actions</h3>
                <div className="flex flex-wrap gap-3">
                  <button onClick={handleOpenAddModal} className="bg-[#D92550] text-white px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 shadow-xs">
                    <Plus className="w-4 h-4" /> Add New Catalog Product
                  </button>
                  <button onClick={() => setActiveTab('orders')} className="bg-[#2D3142] text-white px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 shadow-xs">
                    <ShoppingBag className="w-4 h-4" /> View & Assign Client Orders
                  </button>
                  <button onClick={() => setActiveTab('workers')} className="bg-amber-700 text-white px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 shadow-xs">
                    <Users className="w-4 h-4" /> View Staff & Workers ({workers.length})
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRODUCTS CRUD */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Product Catalog Management</h2>
                <button
                  onClick={handleOpenAddModal}
                  className="bg-[#D92550] hover:bg-[#C11B43] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs"
                >
                  <Plus className="w-4 h-4" /> Add Product
                </button>
              </div>

              {/* Products Table */}
              <div className="overflow-x-auto border border-gray-200 rounded-2xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF7F5] text-gray-700 font-bold border-b border-gray-200 uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-3">Product</th>
                      <th className="p-3">SKU / Code</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Pricing / RFQ</th>
                      <th className="p-3">Availability</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {products.slice(0, 50).map((p) => (
                      <tr key={p.id} className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-[#2D3142] flex items-center gap-2">
                          <img src={p.image} alt={p.name} className="w-8 h-8 rounded object-cover" />
                          <span className="line-clamp-1">{p.name}</span>
                        </td>
                        <td className="p-3 font-mono text-gray-500">{p.sku}</td>
                        <td className="p-3">
                          <span className="bg-[#FCE7EC] text-[#D92550] px-2 py-0.5 rounded font-bold text-[10px]">
                            {p.category}
                          </span>
                        </td>
                        <td className="p-3">
                          {p.quoteRequired || p.price === null ? (
                            <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded text-[10px]">Quote Required</span>
                          ) : (
                            <span className="font-bold text-[#D92550]">{formatCurrency(p.price)}</span>
                          )}
                        </td>
                        <td className="p-3 text-gray-600">{p.availability}</td>
                        <td className="p-3 text-right space-x-2">
                          <button onClick={() => handleOpenEditModal(p)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded">
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button onClick={() => deleteProduct(p.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: ORDERS MANAGEMENT & WORKFLOW */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Order Claiming & Workflow Control</h2>
                <p className="text-xs text-[#555A6E] mt-0.5">Claim submitted orders, assign them to worker sales desks, and update order statuses.</p>
              </div>

              <div className="space-y-4">
                {orders.map((ord) => (
                  <div key={ord.id} className="border border-gray-200 rounded-2xl p-5 text-xs space-y-4 hover:border-gray-300 transition-colors">
                    
                    {/* Top Row: Order ID, Client Name, Claim status */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#2D3142] text-sm">Order #{ord.id}</span>
                          <span className="text-[10px] text-gray-400 font-mono">Date: {ord.date}</span>
                        </div>
                        <span className="text-gray-600 block font-medium mt-0.5">
                          Customer: <strong>{ord.customerName}</strong> ({ord.companyName || 'Individual'})
                        </span>
                      </div>

                      {/* Claim / Ownership Badge & Buttons */}
                      <div className="flex items-center gap-3">
                        {ord.claimedByAdmin ? (
                          <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 px-3 py-1 rounded-full font-bold text-[10px] flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Claimed by Admin
                          </span>
                        ) : (
                          <button
                            onClick={() => claimOrder(ord.id)}
                            className="bg-[#D92550] hover:bg-[#C11B43] text-white px-3.5 py-1.5 rounded-full font-bold text-xs shadow-xs uppercase tracking-wider flex items-center gap-1"
                          >
                            <UserCheck className="w-3.5 h-3.5" /> Claim Order
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Middle Row: Assign Worker & Update Workflow Status */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF7F5] p-3.5 rounded-xl border border-gray-200">
                      
                      {/* Assign Worker */}
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-700 shrink-0">Assigned Worker:</span>
                        <select
                          value={ord.assignedWorkerId || ''}
                          onChange={(e) => assignOrderToWorker(ord.id, e.target.value)}
                          className="w-full bg-white border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-gray-800"
                        >
                          <option value="" disabled>-- Assign Worker / Manager --</option>
                          {workers.map((w) => (
                            <option key={w.id} value={w.id}>
                              {w.name} ({w.title})
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Workflow Status Dropdown */}
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-700 shrink-0">Workflow Status:</span>
                        <select
                          value={ord.status}
                          onChange={(e) => updateOrderStatus(ord.id, e.target.value)}
                          className="w-full bg-white border border-[#D92550] rounded-lg px-2.5 py-1.5 text-xs font-bold text-[#D92550]"
                        >
                          <option value="New Order">New Order</option>
                          <option value="Submitted">Submitted</option>
                          <option value="Claimed">Claimed</option>
                          <option value="Processing">Processing</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Completed">Completed</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </div>

                    </div>

                    {/* Items & Requirements details */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">Ordered Items:</span>
                      <div className="space-y-1">
                        {ord.items.map((it, idx) => (
                          <div key={idx} className="flex justify-between items-center text-xs text-[#2D3142] bg-white p-2 rounded-lg border border-gray-100">
                            <span>• {it.name} ({it.packSize}) x {it.quantity}</span>
                            <span className="font-bold text-[#D92550]">{formatCurrency(it.price * it.quantity)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {ord.clientNotes && (
                      <div className="text-gray-700 bg-amber-50/60 p-2.5 rounded-xl border border-amber-200 font-mono text-[11px]">
                        <strong>Client Requirements / Notes:</strong> "{ord.clientNotes}"
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between pt-2 border-t text-[11px] text-gray-500">
                      <span>Created By: <strong>{ord.createdByWorkerName || 'Direct Checkout'}</strong></span>
                      <span className="font-bold text-[#D92550] text-sm">Total Order Value: {formatCurrency(ord.totalAmount)}</span>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: QUOTE MANAGEMENT */}
          {activeTab === 'quotes' && (
            <div className="space-y-6">
              <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">RFQs & Custom Quote Management</h2>

              <div className="space-y-4">
                {quoteRequests.map((q) => (
                  <div key={q.id} className="border border-amber-200 bg-amber-50/40 rounded-2xl p-5 text-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-amber-200 pb-3">
                      <div>
                        <span className="font-bold text-amber-900 text-sm">{q.id}</span>
                        <span className="text-amber-700 block text-[11px]">From: {q.customerName} ({q.companyName}) • {q.email}</span>
                      </div>

                      <select
                        value={q.status}
                        onChange={(e) => updateQuoteStatus(q.id, e.target.value)}
                        className="bg-white border border-amber-300 rounded-lg px-2.5 py-1 font-bold text-xs text-amber-900"
                      >
                        <option value="New">New</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Quoted">Quoted</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>

                    <div className="text-gray-700">
                      <p><strong>Target Item:</strong> {q.productName} ({q.productSku})</p>
                      <p><strong>Required Qty:</strong> {q.requiredQuantity} | <strong>Application:</strong> {q.application}</p>
                      <p className="text-gray-600 italic mt-1 font-mono bg-white/80 p-2 rounded border border-amber-100">"{q.message}"</p>
                    </div>

                    {q.quotedPrice ? (
                      <div className="bg-emerald-50 text-emerald-900 p-3 rounded-xl border border-emerald-200 font-bold">
                        Quoted Price: {formatCurrency(q.quotedPrice)}
                        {q.adminNotes && <span className="block text-xs font-normal text-gray-600 mt-0.5">Admin Note: {q.adminNotes}</span>}
                      </div>
                    ) : (
                      <button
                        onClick={() => setRespondingQuoteId(q.id)}
                        className="bg-amber-700 text-white px-4 py-1.5 rounded-xl font-bold text-xs"
                      >
                        Provide Price Quote Response
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: WORKERS / STAFF MANAGEMENT */}
          {activeTab === 'workers' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Workers & Sales Staff Directory</h2>
                <p className="text-xs text-[#555A6E] mt-0.5">Monitor worker profiles, credentials, assigned client portfolios, and active order counts.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {workers.map((w) => (
                  <div key={w.id} className="bg-[#FAF7F5] border border-gray-200 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center justify-between border-b pb-3">
                      <div>
                        <span className="font-bold text-[#2D3142] text-base block">{w.name}</span>
                        <span className="text-xs text-amber-800 font-semibold">{w.title}</span>
                      </div>
                      <span className="bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase">
                        Worker / Manager
                      </span>
                    </div>

                    <div className="text-xs text-gray-600 space-y-1 font-mono">
                      <p><strong>Username:</strong> {w.username}</p>
                      <p><strong>Email:</strong> {w.email}</p>
                      <p><strong>Phone:</strong> {w.phone}</p>
                      <p><strong>Department:</strong> {w.department}</p>
                    </div>

                    <div className="pt-2 border-t flex items-center justify-between text-xs">
                      <span className="text-gray-500 font-semibold">Active Orders Managed:</span>
                      <span className="bg-[#D92550] text-white px-3 py-0.5 rounded-full font-bold">{w.activeOrdersCount || 0} Orders</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* EDIT / ADD PRODUCT MODAL */}
      {editingProduct !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white border border-gray-200 w-full max-w-2xl rounded-3xl shadow-2xl p-6 overflow-y-auto max-h-[90vh] space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-serif-skff font-bold text-2xl text-[#1F2421]">
                {editingProduct === 'new' ? 'Add New Product' : 'Edit Product'}
              </h3>
              <button onClick={() => setEditingProduct(null)} className="p-1 text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1">Product Name *</label>
                  <input
                    type="text"
                    required
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    className="w-full p-2.5 bg-[#FAF7F5] border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">SKU / Code *</label>
                  <input
                    type="text"
                    required
                    value={productForm.sku}
                    onChange={(e) => setProductForm({ ...productForm, sku: e.target.value })}
                    className="w-full p-2.5 bg-[#FAF7F5] border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">Main Category</label>
                  <select
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                    className="w-full p-2.5 bg-[#FAF7F5] border rounded-xl"
                  >
                    <option value="FLAVOURS">FLAVOURS</option>
                    <option value="FRAGRANCES">FRAGRANCES</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold mb-1">Subcategory</label>
                  <input
                    type="text"
                    value={productForm.subcategory}
                    onChange={(e) => setProductForm({ ...productForm, subcategory: e.target.value })}
                    className="w-full p-2.5 bg-[#FAF7F5] border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">Quote Required Only?</label>
                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      checked={productForm.quoteRequired}
                      onChange={(e) => setProductForm({ ...productForm, quoteRequired: e.target.checked })}
                      className="w-4 h-4 accent-[#D92550]"
                    />
                    <span className="font-bold">Requires Custom RFQ (No Public Price)</span>
                  </div>
                </div>

                {!productForm.quoteRequired && (
                  <div>
                    <label className="block font-bold mb-1">Unit Price (₹ INR)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={productForm.price}
                      onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                      className="w-full p-2.5 bg-[#FAF7F5] border rounded-xl"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block font-bold mb-1">Short Description</label>
                <textarea
                  rows={2}
                  value={productForm.shortDescription}
                  onChange={(e) => setProductForm({ ...productForm, shortDescription: e.target.value })}
                  className="w-full p-2.5 bg-[#FAF7F5] border rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Pack Sizes (Comma separated)</label>
                <input
                  type="text"
                  value={productForm.packSizes}
                  onChange={(e) => setProductForm({ ...productForm, packSizes: e.target.value })}
                  className="w-full p-2.5 bg-[#FAF7F5] border rounded-xl"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setEditingProduct(null)} className="px-4 py-2 border rounded-full font-bold">
                  Cancel
                </button>
                <button type="submit" className="bg-[#D92550] text-white px-6 py-2 rounded-full font-bold">
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* QUOTE RESPONSE MODAL */}
      {respondingQuoteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white border border-gray-200 w-full max-w-md rounded-3xl p-6 space-y-4">
            <h3 className="font-serif-skff font-bold text-xl text-[#1F2421]">Respond to RFQ #{respondingQuoteId}</h3>
            <form onSubmit={handleQuoteResponseSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold mb-1">Quoted Price (₹ INR)</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={quoteResponseForm.price}
                  onChange={(e) => setQuoteResponseForm({ ...quoteResponseForm, price: e.target.value })}
                  placeholder="e.g. 1250.00"
                  className="w-full p-2.5 bg-[#FAF7F5] border rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Commercial Notes / Terms</label>
                <textarea
                  rows={3}
                  value={quoteResponseForm.notes}
                  onChange={(e) => setQuoteResponseForm({ ...quoteResponseForm, notes: e.target.value })}
                  placeholder="Include lead times, freight terms, or sample dispatch date..."
                  className="w-full p-2.5 bg-[#FAF7F5] border rounded-xl"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setRespondingQuoteId(null)} className="px-4 py-2 border rounded-full font-bold">
                  Cancel
                </button>
                <button type="submit" className="bg-amber-600 text-white px-6 py-2 rounded-full font-bold">
                  Submit Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
