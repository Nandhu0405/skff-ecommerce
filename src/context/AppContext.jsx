import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS as INITIAL_PRODUCTS, MOCK_INITIAL_ORDERS, MOCK_INITIAL_QUOTES, MOCK_WORKERS } from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Navigation & View Routing State
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState('flv-001');

  // Search & Filter Global State
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [subCategoryFilter, setSubCategoryFilter] = useState('ALL');

  const CATALOG_VERSION = 'v3_unique_base_images_2026_09_29';

  // Catalog State (Allows Admin CRUD)
  const [products, setProducts] = useState(() => {
    const savedVer = localStorage.getItem('skff_catalog_ver');
    if (savedVer !== CATALOG_VERSION) {
      localStorage.setItem('skff_catalog_ver', CATALOG_VERSION);
      localStorage.setItem('skff_products', JSON.stringify(INITIAL_PRODUCTS));
      return INITIAL_PRODUCTS;
    }
    const saved = localStorage.getItem('skff_products');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 180) {
          return parsed;
        }
      } catch (e) {
        console.error('Error parsing stored products:', e);
      }
    }
    localStorage.setItem('skff_products', JSON.stringify(INITIAL_PRODUCTS));
    return INITIAL_PRODUCTS;
  });

  // Workers State (Persisted)
  const [workers, setWorkers] = useState(() => {
    const saved = localStorage.getItem('skff_workers');
    return saved ? JSON.parse(saved) : MOCK_WORKERS;
  });

  // Dual-Role Authentication Session State
  const [auth, setAuth] = useState(() => {
    const saved = localStorage.getItem('skff_auth');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return { currentUser: null, role: null };
  });

  // Cart State (Persisted)
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('skff_cart');
    return saved ? JSON.parse(saved) : [
      {
        id: 'flv-001',
        sku: 'SKFF-FLV-VN01',
        name: 'Bourbon Vanilla Gold Extract',
        category: 'FLAVOURS',
        image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800',
        price: 145.00,
        quoteRequired: false,
        packSize: '1 kg Bottle',
        quantity: 2
      }
    ];
  });

  // Wishlist State (Persisted)
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('skff_wishlist');
    return saved ? JSON.parse(saved) : ['flv-001', 'frg-101'];
  });

  // Orders State (Persisted)
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('skff_orders');
    return saved ? JSON.parse(saved) : MOCK_INITIAL_ORDERS;
  });

  // Quote Requests State (Persisted)
  const [quoteRequests, setQuoteRequests] = useState(() => {
    const saved = localStorage.getItem('skff_quotes');
    return saved ? JSON.parse(saved) : MOCK_INITIAL_QUOTES;
  });

  // Active User Profile (Customer)
  const [user, setUser] = useState({
    name: 'Thirunavukarasu S',
    companyName: 'Apex Ingredient Solutions Ltd.',
    email: 'thirunavukarasu@skff-client.com',
    phone: '+91 98765 43210',
    gstTaxId: '27AABCU9603R1ZM',
    isLoggedIn: true,
    savedAddresses: [
      {
        id: 'addr-1',
        title: 'Primary R&D Facility',
        address: '14/B Tech Park, Marol Industrial Area',
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
        postalCode: '400059'
      }
    ]
  });

  // Legacy boolean mode for compatibility
  const [isAdminMode, setIsAdminMode] = useState(auth?.role === 'ADMIN');

  // RFQ Modal Controller
  const [rfqModal, setRfqModal] = useState({
    isOpen: false,
    presetProduct: null
  });

  // Recent Completed Order/Quote for Confirmation Screen
  const [latestTransaction, setLatestTransaction] = useState(null);

  // Notifications / Toast
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('skff_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('skff_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('skff_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('skff_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('skff_quotes', JSON.stringify(quoteRequests));
  }, [quoteRequests]);

  useEffect(() => {
    localStorage.setItem('skff_workers', JSON.stringify(workers));
  }, [workers]);

  useEffect(() => {
    localStorage.setItem('skff_auth', JSON.stringify(auth));
    setIsAdminMode(auth?.role === 'ADMIN');
  }, [auth]);

  // Routing Handler
  const navigateTo = (page, productId = null) => {
    setCurrentPage(page);
    if (productId) {
      setSelectedProductId(productId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dual-Role Login Handler
  const loginUser = (usernameInput, passwordInput, targetRole) => {
    if (!usernameInput || !usernameInput.trim()) {
      return { success: false, message: 'Please enter a valid username or email address.' };
    }
    if (!passwordInput || !passwordInput.trim()) {
      return { success: false, message: 'Please enter your password.' };
    }

    const usernameClean = usernameInput.trim().toLowerCase();
    const passwordClean = passwordInput.trim();

    if (targetRole === 'ADMIN') {
      const validAdminUsernames = ['admin@skff', 'admin@skff.com', 'admin'];
      const validAdminPasswords = ['Admin@123', 'admin123', 'Admin123'];

      if (!validAdminUsernames.includes(usernameClean)) {
        return { success: false, message: 'Invalid Admin username. Check username and try again.' };
      }
      if (!validAdminPasswords.includes(passwordClean)) {
        return { success: false, message: 'Invalid Admin password. Check password and try again.' };
      }

      const adminSession = {
        currentUser: {
          id: 'adm-001',
          username: 'admin@skff',
          name: 'System Administrator',
          email: 'admin@skff.com',
          role: 'ADMIN'
        },
        role: 'ADMIN'
      };
      setAuth(adminSession);
      setIsAdminMode(true);
      showToast('Authenticated successfully as Admin!');
      navigateTo('admin');
      return { success: true };
    } else if (targetRole === 'WORKER') {
      const foundWorker = workers.find(
        (w) => w.username.toLowerCase() === usernameClean || w.email.toLowerCase() === usernameClean
      );

      if (!foundWorker) {
        return { success: false, message: 'Invalid Worker username. Check username and try again.' };
      }

      const validWorkerPasswords = [foundWorker.password, 'Worker@123', 'worker123', 'Worker123'];
      if (!validWorkerPasswords.includes(passwordClean)) {
        return { success: false, message: 'Invalid Worker password. Check password and try again.' };
      }

      const workerSession = {
        currentUser: foundWorker,
        role: 'WORKER'
      };
      setAuth(workerSession);
      setIsAdminMode(false);
      showToast(`Welcome back, ${foundWorker.name}! Logged in as Worker / Manager.`);
      navigateTo('worker-dashboard');
      return { success: true };
    }
    return { success: false, message: 'Invalid role selection.' };
  };

  // Logout Handler
  const logoutUser = () => {
    setAuth({ currentUser: null, role: null });
    setIsAdminMode(false);
    showToast('Logged out of portal session.');
    navigateTo('home');
  };

  // Cart Operations
  const addToCart = (product, quantity = 1, packSize = null) => {
    const targetPackSize = packSize || (product.packSizes ? product.packSizes[0] : 'Standard');
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.packSize === targetPackSize
      );
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            sku: product.sku,
            name: product.name,
            category: product.category,
            image: product.image,
            price: product.price,
            quoteRequired: product.quoteRequired,
            packSize: targetPackSize,
            quantity: quantity
          }
        ];
      }
    });
    showToast(`Added "${product.name}" (${targetPackSize}) to Cart!`);
  };

  const removeFromCart = (id, packSize) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.packSize === packSize)));
    showToast('Item removed from cart.');
  };

  const updateCartQuantity = (id, packSize, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id && item.packSize === packSize) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => setCart([]);

  const isCartContainsQuoteRequired = cart.some((item) => item.quoteRequired || item.price === null);

  const cartSubtotal = cart.reduce((acc, item) => {
    if (item.price && !item.quoteRequired) {
      return acc + item.price * item.quantity;
    }
    return acc;
  }, 0);

  // Wishlist Operations
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from Wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Added to Wishlist!');
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId) => wishlist.includes(productId);

  // RFQ Modal Trigger
  const openRFQModal = (product = null) => {
    setRfqModal({ isOpen: true, presetProduct: product });
  };

  const closeRFQModal = () => {
    setRfqModal({ isOpen: false, presetProduct: null });
  };

  // Submit RFQ Form
  const submitQuoteRequest = (quoteData) => {
    const newQuote = {
      id: `RFQ-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
      customerName: quoteData.customerName || user.name,
      companyName: quoteData.companyName || user.companyName,
      email: quoteData.email || user.email,
      phone: quoteData.phone || user.phone,
      country: quoteData.country || 'India',
      productName: quoteData.productName || 'Custom Formulation / Multi-item Cart',
      productSku: quoteData.productSku || 'SKFF-RFQ-GEN',
      requiredQuantity: quoteData.requiredQuantity || '25 kg',
      application: quoteData.application || 'General Formulation',
      message: quoteData.message || 'RFQ submission from website.',
      fileName: quoteData.fileName || null,
      status: 'New',
      quotedPrice: null,
      adminNotes: 'Awaiting sales desk review.'
    };
    setQuoteRequests((prev) => [newQuote, ...prev]);
    setLatestTransaction({ type: 'QUOTE', data: newQuote });
    showToast('Quote Request submitted successfully!');
    navigateTo('order-confirmation');
  };

  // Customer Submit Order Form
  const submitOrder = (orderData) => {
    const newOrder = {
      id: `ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
      customerName: orderData.customerName || user.name,
      companyName: orderData.companyName || user.companyName,
      email: orderData.email || user.email,
      phone: orderData.phone || user.phone,
      status: 'Submitted',
      createdByWorkerId: null,
      createdByWorkerName: 'Direct Client Checkout',
      assignedWorkerId: null,
      assignedWorkerName: null,
      claimedByAdmin: false,
      items: [...cart],
      totalAmount: cartSubtotal + 25,
      shippingAddress: orderData.shippingAddress,
      billingAddress: orderData.billingAddress,
      paymentType: orderData.paymentMethod || 'Online Credit Card / Wire',
      clientNotes: orderData.notes || 'Order placed via E-commerce Web Portal'
    };
    setOrders((prev) => [newOrder, ...prev]);
    setLatestTransaction({ type: 'ORDER', data: newOrder });
    clearCart();
    showToast('Order placed successfully! Submitted to Admin team.');
    navigateTo('order-confirmation');
  };

  // Worker / Manager Create Order Based on Client Requirements
  const createWorkerOrder = (orderPayload) => {
    const currentWorker = auth?.currentUser || { id: 'wrk-001', name: 'Rajesh Kumar' };
    const newOrder = {
      id: `ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
      customerName: orderPayload.customerName,
      companyName: orderPayload.companyName,
      email: orderPayload.email,
      phone: orderPayload.phone,
      status: 'Submitted',
      createdByWorkerId: currentWorker.id,
      createdByWorkerName: currentWorker.name,
      assignedWorkerId: currentWorker.id,
      assignedWorkerName: currentWorker.name,
      claimedByAdmin: false,
      items: orderPayload.items || [],
      totalAmount: orderPayload.totalAmount || 0,
      shippingAddress: orderPayload.shippingAddress || 'Not specified',
      billingAddress: orderPayload.billingAddress || 'Not specified',
      paymentType: orderPayload.paymentType || 'Sales Order Quote',
      clientNotes: orderPayload.clientNotes || 'Created by Worker/Manager based on client requirement.'
    };

    setOrders((prev) => [newOrder, ...prev]);

    // Update worker's active order count
    setWorkers((prev) =>
      prev.map((w) =>
        w.id === currentWorker.id
          ? { ...w, activeOrdersCount: (w.activeOrdersCount || 0) + 1 }
          : w
      )
    );

    showToast(`Client Order #${newOrder.id} created & submitted to Admin!`);
    return newOrder;
  };

  // Admin Claim Order
  const claimOrder = (orderId) => {
    const adminName = auth?.currentUser?.name || 'System Administrator';
    setOrders((prev) =>
      prev.map((ord) =>
        ord.id === orderId
          ? {
              ...ord,
              claimedByAdmin: true,
              claimedByAdminName: adminName,
              status: ord.status === 'Submitted' || ord.status === 'New Order' ? 'Claimed' : ord.status
            }
          : ord
      )
    );
    showToast(`Order #${orderId} claimed by Admin (${adminName}).`);
  };

  // Admin Assign Order to Worker
  const assignOrderToWorker = (orderId, workerId) => {
    const targetWorker = workers.find((w) => w.id === workerId);
    if (!targetWorker) return;

    setOrders((prev) =>
      prev.map((ord) =>
        ord.id === orderId
          ? {
              ...ord,
              assignedWorkerId: targetWorker.id,
              assignedWorkerName: targetWorker.name,
              status: ord.status === 'Submitted' ? 'Claimed' : ord.status
            }
          : ord
      )
    );
    showToast(`Order #${orderId} assigned to Worker (${targetWorker.name}).`);
  };

  // Admin Product CRUD Actions
  const addProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
    showToast(`Product "${newProduct.name}" added to catalog.`);
  };

  const updateProduct = (id, updatedFields) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p))
    );
    showToast('Product updated successfully.');
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    showToast('Product deleted from catalog.');
  };

  // Admin / Worker Order Status Update
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((ord) => (ord.id === orderId ? { ...ord, status: newStatus } : ord))
    );
    showToast(`Order #${orderId} status updated to ${newStatus}.`);
  };

  const updateQuoteStatus = (quoteId, newStatus, quotedPrice = null, adminNotes = '') => {
    setQuoteRequests((prev) =>
      prev.map((q) =>
        q.id === quoteId
          ? {
              ...q,
              status: newStatus,
              quotedPrice: quotedPrice !== null ? quotedPrice : q.quotedPrice,
              adminNotes: adminNotes || q.adminNotes
            }
          : q
      )
    );
    showToast(`Quote #${quoteId} status updated to ${newStatus}.`);
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        navigateTo,
        selectedProductId,
        setSelectedProductId,
        products,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        isCartContainsQuoteRequired,
        cartSubtotal,
        wishlist,
        toggleWishlist,
        isWishlisted,
        orders,
        quoteRequests,
        user,
        setUser,
        workers,
        auth,
        loginUser,
        logoutUser,
        createWorkerOrder,
        claimOrder,
        assignOrderToWorker,
        isAdminMode,
        setIsAdminMode,
        rfqModal,
        openRFQModal,
        closeRFQModal,
        submitQuoteRequest,
        submitOrder,
        latestTransaction,
        searchQuery,
        setSearchQuery,
        categoryFilter,
        setCategoryFilter,
        subCategoryFilter,
        setSubCategoryFilter,
        addProduct,
        updateProduct,
        deleteProduct,
        updateOrderStatus,
        updateQuoteStatus,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
