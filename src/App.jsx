import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RFQModal from './components/RFQModal';

// Pages
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import FlavoursPage from './pages/FlavoursPage';
import FragrancesPage from './pages/FragrancesPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import GlobalPresencePage from './pages/GlobalPresencePage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import AccountPage from './pages/AccountPage';
import WishlistPage from './pages/WishlistPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import LoginPage from './pages/LoginPage';
import WorkerDashboardPage from './pages/WorkerDashboardPage';

function MainContent() {
  const { currentPage, toastMessage } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutUsPage />;
      case 'flavours':
        return <FlavoursPage />;
      case 'fragrances':
        return <FragrancesPage />;
      case 'products':
        return <ProductsPage />;
      case 'product-detail':
        return <ProductDetailPage />;
      case 'global-presence':
        return <GlobalPresencePage />;
      case 'news':
        return <NewsPage />;
      case 'contact':
        return <ContactPage />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'order-confirmation':
        return <OrderConfirmationPage />;
      case 'account':
        return <AccountPage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'admin':
        return <AdminDashboardPage />;
      case 'login':
        return <LoginPage />;
      case 'worker-dashboard':
        return <WorkerDashboardPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF7F5] selection:bg-[#F9D5E1] selection:text-[#911432]">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1F2421] text-white px-5 py-3 rounded-2xl shadow-2xl text-xs font-bold flex items-center gap-2 border border-white/20 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#D92550]" />
          {toastMessage}
        </div>
      )}

      <div>
        <Navbar />
        <main className="animate-fadeIn">
          {renderPage()}
        </main>
      </div>

      <RFQModal />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
