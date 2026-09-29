import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { formatCurrency } from '../utils/formatCurrency';
import { User, Package, Sparkles, Heart, MapPin, Building2, Lock, LogOut, CheckCircle2, Clock, Eye } from 'lucide-react';

export default function AccountPage() {
  const { user, setUser, orders, quoteRequests, wishlist, products, navigateTo, setIsAdminMode } = useApp();
  const [activeTab, setActiveTab] = useState('overview');

  // Password Form State
  const [passwordForm, setPasswordForm] = useState({ current: '', new: '', confirm: '' });
  const [passwordMsg, setPasswordMsg] = useState(null);

  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordForm.new !== passwordForm.confirm) {
      setPasswordMsg('New passwords do not match!');
      return;
    }
    setPasswordMsg('Password changed successfully!');
    setPasswordForm({ current: '', new: '', confirm: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Account Header */}
      <div className="bg-white border border-[#F0E1E4] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#FCE7EC] text-[#D92550] flex items-center justify-center font-serif-skff font-bold text-2xl border border-[#F9D5E1]">
            {user.name.charAt(0)}
          </div>
          <div>
            <h1 className="font-serif-skff text-2xl md:text-3xl font-bold text-[#1F2421]">{user.name}</h1>
            <p className="text-xs text-[#555A6E]">{user.companyName} • {user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAdminMode(true)}
            className="bg-[#FAF7F5] border border-gray-200 hover:border-[#D92550] text-[#2D3142] hover:text-[#D92550] px-4 py-2 rounded-full text-xs font-semibold"
          >
            Switch to Admin Panel
          </button>
        </div>
      </div>

      {/* Account Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 bg-white border border-[#F0E1E4] rounded-3xl p-4 shadow-sm space-y-1">
          {[
            { id: 'overview', label: 'Dashboard Overview', icon: User },
            { id: 'orders', label: `My Orders (${orders.length})`, icon: Package },
            { id: 'quotes', label: `My Quote Requests (${quoteRequests.length})`, icon: Sparkles },
            { id: 'wishlist', label: `Saved Wishlist (${wishlist.length})`, icon: Heart },
            { id: 'addresses', label: 'Saved Addresses', icon: MapPin },
            { id: 'profile', label: 'Company Info & Profile', icon: Building2 },
            { id: 'password', label: 'Change Password', icon: Lock }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                  isActive
                    ? 'bg-[#FCE7EC] text-[#D92550]'
                    : 'text-[#555A6E] hover:bg-[#FAF7F5] hover:text-[#2D3142]'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-9 bg-white border border-[#F0E1E4] rounded-3xl p-6 md:p-8 shadow-sm">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Account Overview</h2>

              {/* Quick Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#FAF7F5] p-5 rounded-2xl border border-gray-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A90A3] block">Total Orders</span>
                  <span className="font-serif-skff font-bold text-3xl text-[#1F2421] mt-1 block">{orders.length}</span>
                </div>

                <div className="bg-[#FAF7F5] p-5 rounded-2xl border border-gray-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A90A3] block">Active RFQs</span>
                  <span className="font-serif-skff font-bold text-3xl text-[#D92550] mt-1 block">{quoteRequests.length}</span>
                </div>

                <div className="bg-[#FAF7F5] p-5 rounded-2xl border border-gray-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A90A3] block">Saved Products</span>
                  <span className="font-serif-skff font-bold text-3xl text-[#1F2421] mt-1 block">{wishlist.length}</span>
                </div>
              </div>

              {/* Recent Order Preview */}
              <div className="space-y-3">
                <h3 className="font-bold text-sm text-[#2D3142]">Recent Order Activity</h3>
                {orders.length > 0 ? (
                  <div className="border border-gray-200 rounded-2xl p-4 text-xs space-y-2">
                    <div className="flex justify-between items-center font-bold">
                      <span>Order #{orders[0].id}</span>
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[10px]">{orders[0].status}</span>
                    </div>
                    <p className="text-gray-500">Date: {orders[0].date} • Total: {formatCurrency(orders[0].totalAmount)}</p>
                  </div>
                ) : (
                  <p className="text-xs text-gray-500">No orders placed yet.</p>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: MY ORDERS */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">My Orders</h2>

              {orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.map((ord) => (
                    <div key={ord.id} className="border border-gray-200 rounded-2xl p-5 text-xs space-y-3">
                      <div className="flex items-center justify-between border-b pb-3">
                        <div>
                          <span className="font-bold text-[#2D3142] text-sm">Order #{ord.id}</span>
                          <span className="text-gray-500 block text-[11px]">Placed on {ord.date}</span>
                        </div>
                        <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-[11px]">
                          {ord.status}
                        </span>
                      </div>

                      <div className="space-y-1">
                        {ord.items && ord.items.map((it, i) => (
                          <div key={i} className="flex justify-between text-gray-600">
                            <span>{it.name} ({it.packSize}) x{it.quantity}</span>
                            <span>{it.price ? formatCurrency(it.price * it.quantity) : 'RFQ'}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t pt-2 flex justify-between font-bold text-[#2D3142]">
                        <span>Total Paid:</span>
                        <span className="text-[#D92550]">{formatCurrency(ord.totalAmount)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-500">No orders placed yet.</p>
              )}
            </div>
          )}

          {/* TAB 3: MY QUOTE REQUESTS */}
          {activeTab === 'quotes' && (
            <div className="space-y-6">
              <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">My Quote Requests (RFQs)</h2>

              {quoteRequests.length > 0 ? (
                <div className="space-y-4">
                  {quoteRequests.map((q) => (
                    <div key={q.id} className="border border-amber-200 bg-amber-50/50 rounded-2xl p-5 text-xs space-y-3">
                      <div className="flex items-center justify-between border-b border-amber-200 pb-3">
                        <div>
                          <span className="font-bold text-amber-900 text-sm">{q.id}</span>
                          <span className="text-amber-700 block text-[11px]">Submitted: {q.date}</span>
                        </div>
                        <span className="bg-amber-200 text-amber-900 font-bold px-3 py-1 rounded-full text-[11px]">
                          {q.status}
                        </span>
                      </div>

                      <div>
                        <span className="font-bold text-gray-800">{q.productName}</span>
                        <p className="text-gray-600">Req Qty: {q.requiredQuantity} • Application: {q.application}</p>
                        <p className="text-gray-500 italic mt-1">"{q.message}"</p>
                      </div>

                      {q.quotedPrice && (
                        <div className="bg-white p-3 rounded-xl border border-emerald-300 text-emerald-900 font-bold">
                          Official Admin Quote Price: {formatCurrency(q.quotedPrice)}
                          {q.adminNotes && <p className="text-xs text-gray-600 font-normal mt-1">Note: {q.adminNotes}</p>}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-500">No active quote requests.</p>
              )}
            </div>
          )}

          {/* TAB 4: WISHLIST */}
          {activeTab === 'wishlist' && (
            <div className="space-y-6">
              <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Saved Wishlist</h2>
              {wishlistedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {wishlistedProducts.map((p) => (
                    <div key={p.id} className="border p-4 rounded-2xl flex gap-3 items-center">
                      <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded-xl" />
                      <div>
                        <h4 className="font-bold text-xs">{p.name}</h4>
                        <button
                          onClick={() => navigateTo('product-detail', p.id)}
                          className="text-[#D92550] text-[11px] font-bold underline mt-1"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-500">No saved items in wishlist.</p>
              )}
            </div>
          )}

          {/* TAB 5: SAVED ADDRESSES */}
          {activeTab === 'addresses' && (
            <div className="space-y-6">
              <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Saved Addresses</h2>
              {user.savedAddresses.map((addr) => (
                <div key={addr.id} className="border p-4 rounded-2xl space-y-1 text-xs">
                  <span className="font-bold text-[#D92550]">{addr.title}</span>
                  <p>{addr.address}</p>
                  <p>{addr.city}, {addr.state} {addr.postalCode}, {addr.country}</p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 6: PROFILE */}
          {activeTab === 'profile' && (
            <div className="space-y-4 text-xs">
              <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Company Profile</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#FAF7F5] p-4 rounded-2xl">
                  <span className="font-bold text-gray-500 block">Contact Name</span>
                  <span className="font-bold text-gray-800">{user.name}</span>
                </div>
                <div className="bg-[#FAF7F5] p-4 rounded-2xl">
                  <span className="font-bold text-gray-500 block">Company Name</span>
                  <span className="font-bold text-gray-800">{user.companyName}</span>
                </div>
                <div className="bg-[#FAF7F5] p-4 rounded-2xl">
                  <span className="font-bold text-gray-500 block">GST / Tax ID</span>
                  <span className="font-bold text-gray-800">{user.gstTaxId}</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: CHANGE PASSWORD */}
          {activeTab === 'password' && (
            <form onSubmit={handlePasswordSubmit} className="space-y-4 max-w-md text-xs">
              <h2 className="font-serif-skff text-2xl font-bold text-[#1F2421]">Change Password</h2>
              {passwordMsg && <p className="text-emerald-600 font-bold">{passwordMsg}</p>}

              <div>
                <label className="block font-bold mb-1">Current Password</label>
                <input
                  type="password"
                  required
                  value={passwordForm.current}
                  onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })}
                  className="w-full p-2.5 bg-[#FAF7F5] border rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">New Password</label>
                <input
                  type="password"
                  required
                  value={passwordForm.new}
                  onChange={(e) => setPasswordForm({ ...passwordForm, new: e.target.value })}
                  className="w-full p-2.5 bg-[#FAF7F5] border rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold mb-1">Confirm New Password</label>
                <input
                  type="password"
                  required
                  value={passwordForm.confirm}
                  onChange={(e) => setPasswordForm({ ...passwordForm, confirm: e.target.value })}
                  className="w-full p-2.5 bg-[#FAF7F5] border rounded-xl"
                />
              </div>

              <button type="submit" className="bg-[#D92550] text-white px-6 py-2.5 rounded-full font-bold">
                Update Password
              </button>
            </form>
          )}

        </div>

      </div>

    </div>
  );
}
