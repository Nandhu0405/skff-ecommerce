import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  Heart, 
  User, 
  ShoppingBag, 
  Menu, 
  X, 
  ShieldCheck, 
  SlidersHorizontal,
  ChevronDown,
  Sparkles,
  Briefcase
} from 'lucide-react';

export default function Navbar() {
  const { 
    currentPage, 
    navigateTo, 
    cart, 
    wishlist, 
    searchQuery, 
    setSearchQuery,
    isAdminMode,
    setIsAdminMode,
    openRFQModal,
    auth
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const navLinks = [
    { name: 'HOME', page: 'home' },
    { name: 'ABOUT US', page: 'about' },
    { name: 'FLAVOURS', page: 'flavours' },
    { name: 'FRAGRANCES', page: 'fragrances' },
    { name: 'PRODUCTS', page: 'products' },
    { name: 'GLOBAL PRESENCE', page: 'global-presence' },
    { name: 'NEWS', page: 'news' },
    { name: 'CONTACT', page: 'contact' },
  ];

  const handleNavClick = (page) => {
    navigateTo(page);
    setIsMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigateTo('products');
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-[#D92550] via-[#C11B43] to-[#8C1030] text-white text-xs py-1.5 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] tracking-wider uppercase font-bold">B2B Portal</span>
          </div>

          <div className="flex-1 text-center font-bold tracking-wide text-white text-xs sm:text-xs truncate px-2">
            100 Years of Celebrating Flavours & Fragrances
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <button 
              onClick={() => openRFQModal()} 
              className="hover:underline flex items-center gap-1 font-semibold text-[11px] bg-white/10 hover:bg-white/20 px-2.5 py-0.5 rounded-full transition-colors"
            >
              <Sparkles className="w-3 h-3 text-amber-200" />
              <span>Request Quote</span>
            </button>
            
            {auth?.role === 'ADMIN' ? (
              <button 
                onClick={() => navigateTo('admin')} 
                className="bg-amber-300 text-[#8C1030] px-2.5 py-0.5 rounded-full font-extrabold text-[10px] tracking-wider uppercase transition-all shadow-xs flex items-center gap-1 hover:bg-amber-200"
              >
                <ShieldCheck className="w-3 h-3" />
                Admin Dashboard
              </button>
            ) : auth?.role === 'WORKER' ? (
              <button 
                onClick={() => navigateTo('worker-dashboard')} 
                className="bg-amber-400 text-amber-950 px-2.5 py-0.5 rounded-full font-extrabold text-[10px] tracking-wider uppercase transition-all shadow-xs flex items-center gap-1 hover:bg-amber-300"
              >
                <Briefcase className="w-3 h-3" />
                Worker Dashboard
              </button>
            ) : (
              <button 
                onClick={() => navigateTo('login')} 
                className="bg-white/20 hover:bg-white/30 text-white px-2.5 py-0.5 rounded-full font-bold text-[10px] tracking-wider uppercase transition-all flex items-center gap-1"
              >
                <ShieldCheck className="w-3 h-3 text-amber-200" />
                Portal Login (Admin / Worker)
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Responsive Header */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
            : 'bg-[#FAF7F5]/90 backdrop-blur-sm border-b border-[#F0E1E4] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: SKFF Logo */}
          <div onClick={() => handleNavClick('home')}>
            <Logo />
          </div>

          {/* Center Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.page)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#D92550] bg-[#FCE7EC] font-bold'
                      : 'text-[#4A4E69] hover:text-[#D92550] hover:bg-[#FDF2F4]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#D92550] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Controls (Search, Wishlist, Account, Cart) */}
          <div className="flex items-center space-x-2 sm:space-x-4">

            {/* Quick Search Toggle / Form */}
            <div className="relative">
              {isSearchInputOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search flavours, code..."
                    autoFocus
                    className="w-40 sm:w-56 text-xs bg-white border border-[#D92550] rounded-full px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#D92550]/30 text-[#2D3142]"
                  />
                  <button type="submit" className="p-1.5 text-[#D92550] -ml-7 hover:scale-110 transition-transform">
                    <Search className="w-4 h-4" />
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setIsSearchInputOpen(false)}
                    className="p-1 ml-1 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchInputOpen(true)}
                  aria-label="Search"
                  className="p-2 text-[#4A4E69] hover:text-[#D92550] hover:bg-[#FDF2F4] rounded-full transition-colors relative"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Wishlist Icon */}
            <button
              onClick={() => handleNavClick('wishlist')}
              aria-label="Wishlist"
              className="p-2 text-[#4A4E69] hover:text-[#D92550] hover:bg-[#FDF2F4] rounded-full transition-colors relative"
            >
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'text-[#D92550] fill-[#D92550]/20' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#D92550] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse-subtle">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* User Account Icon */}
            <button
              onClick={() => handleNavClick(isAdminMode ? 'admin' : 'account')}
              aria-label="User Account"
              className={`p-2 rounded-full transition-colors relative flex items-center gap-1.5 ${
                currentPage === 'account' || currentPage === 'admin'
                  ? 'text-[#D92550] bg-[#FCE7EC]'
                  : 'text-[#4A4E69] hover:text-[#D92550] hover:bg-[#FDF2F4]'
              }`}
            >
              <User className="w-5 h-5" />
              <span className="hidden md:inline text-xs font-semibold">
                {isAdminMode ? 'Admin' : 'Account'}
              </span>
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => handleNavClick('cart')}
              aria-label="Cart"
              className="p-2 bg-[#D92550] text-white hover:bg-[#C11B43] rounded-full transition-all shadow-md shadow-[#D92550]/20 flex items-center gap-1.5 px-3"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs font-bold">{totalCartCount}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open Mobile Menu"
              className="xl:hidden p-2 text-[#2D3142] hover:text-[#D92550] hover:bg-[#FDF2F4] rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-[#F0E1E4] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="space-y-1 mb-4">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.page)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors ${
                      isActive
                        ? 'bg-[#FCE7EC] text-[#D92550]'
                        : 'text-[#4A4E69] hover:bg-[#FAF7F5] hover:text-[#D92550]'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  openRFQModal();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-[#D92550] to-[#B3193D] text-white py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase shadow-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Request Custom Quote / Sample
              </button>

              <button
                onClick={() => {
                  setIsAdminMode(!isAdminMode);
                  setIsMobileMenuOpen(false);
                  navigateTo(isAdminMode ? 'home' : 'admin');
                }}
                className="w-full bg-[#FDF2F4] text-[#D92550] border border-[#F9D5E1] py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                {isAdminMode ? 'Switch to Customer View' : 'Open Admin Dashboard'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
